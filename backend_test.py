#!/usr/bin/env python3
"""
Comprehensive Backend Testing Suite for Briglia Hundley Law Firm Website
Tests FastAPI backend endpoints, MongoDB connectivity, and overall health
"""

import requests
import json
import time
import sys
from datetime import datetime
from typing import Dict, Any, List

# Backend URL from frontend environment
BACKEND_URL = "https://f60a052e-db1b-4cbf-be38-3edf081ce9a0.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

class BackendTester:
    def __init__(self):
        self.test_results = []
        self.total_tests = 0
        self.passed_tests = 0
        
    def log_test(self, test_name: str, passed: bool, details: str = "", response_time: float = 0):
        """Log test results"""
        self.total_tests += 1
        if passed:
            self.passed_tests += 1
            status = "✅ PASS"
        else:
            status = "❌ FAIL"
            
        result = {
            "test": test_name,
            "status": status,
            "passed": passed,
            "details": details,
            "response_time": f"{response_time:.3f}s" if response_time > 0 else "N/A"
        }
        self.test_results.append(result)
        print(f"{status} - {test_name} ({result['response_time']}) - {details}")
        
    def test_root_endpoint(self):
        """Test GET /api/ endpoint"""
        try:
            start_time = time.time()
            response = requests.get(f"{API_BASE}/", timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_test("Root Endpoint", True, "Returns correct 'Hello World' message", response_time)
                else:
                    self.log_test("Root Endpoint", False, f"Unexpected response: {data}", response_time)
            else:
                self.log_test("Root Endpoint", False, f"HTTP {response.status_code}: {response.text}", response_time)
                
        except Exception as e:
            self.log_test("Root Endpoint", False, f"Connection error: {str(e)}")
            
    def test_status_creation(self):
        """Test POST /api/status endpoint"""
        try:
            test_data = {
                "client_name": "Briglia Hundley Test Client"
            }
            
            start_time = time.time()
            response = requests.post(f"{API_BASE}/status", json=test_data, timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["id", "client_name", "timestamp"]
                
                if all(field in data for field in required_fields):
                    if data["client_name"] == test_data["client_name"]:
                        self.log_test("Status Creation", True, f"Created status with ID: {data['id'][:8]}...", response_time)
                        return data["id"]  # Return ID for cleanup
                    else:
                        self.log_test("Status Creation", False, "Client name mismatch", response_time)
                else:
                    missing = [f for f in required_fields if f not in data]
                    self.log_test("Status Creation", False, f"Missing fields: {missing}", response_time)
            else:
                self.log_test("Status Creation", False, f"HTTP {response.status_code}: {response.text}", response_time)
                
        except Exception as e:
            self.log_test("Status Creation", False, f"Connection error: {str(e)}")
        return None
        
    def test_status_retrieval(self):
        """Test GET /api/status endpoint"""
        try:
            start_time = time.time()
            response = requests.get(f"{API_BASE}/status", timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Status Retrieval", True, f"Retrieved {len(data)} status records", response_time)
                    return data
                else:
                    self.log_test("Status Retrieval", False, "Response is not a list", response_time)
            else:
                self.log_test("Status Retrieval", False, f"HTTP {response.status_code}: {response.text}", response_time)
                
        except Exception as e:
            self.log_test("Status Retrieval", False, f"Connection error: {str(e)}")
        return []
        
    def test_data_structure_validation(self, status_records: List[Dict]):
        """Validate data structure of status records"""
        if not status_records:
            self.log_test("Data Structure Validation", False, "No records to validate")
            return
            
        try:
            required_fields = ["id", "client_name", "timestamp"]
            valid_records = 0
            
            for record in status_records:
                if all(field in record for field in required_fields):
                    valid_records += 1
                    
            if valid_records == len(status_records):
                self.log_test("Data Structure Validation", True, f"All {len(status_records)} records have required fields")
            else:
                self.log_test("Data Structure Validation", False, f"Only {valid_records}/{len(status_records)} records valid")
                
        except Exception as e:
            self.log_test("Data Structure Validation", False, f"Validation error: {str(e)}")
            
    def test_error_handling(self):
        """Test error handling with invalid data"""
        try:
            # Test with missing required field
            invalid_data = {"invalid_field": "test"}
            
            start_time = time.time()
            response = requests.post(f"{API_BASE}/status", json=invalid_data, timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 422:  # Validation error
                self.log_test("Error Handling", True, "Returns HTTP 422 for invalid data", response_time)
            else:
                self.log_test("Error Handling", False, f"Expected 422, got {response.status_code}", response_time)
                
        except Exception as e:
            self.log_test("Error Handling", False, f"Connection error: {str(e)}")
            
    def test_nonexistent_endpoint(self):
        """Test non-existent endpoint"""
        try:
            start_time = time.time()
            response = requests.get(f"{API_BASE}/nonexistent", timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 404:
                self.log_test("Non-existent Endpoint", True, "Returns HTTP 404 for invalid endpoint", response_time)
            else:
                self.log_test("Non-existent Endpoint", False, f"Expected 404, got {response.status_code}", response_time)
                
        except Exception as e:
            self.log_test("Non-existent Endpoint", False, f"Connection error: {str(e)}")
            
    def test_backend_health(self):
        """Test overall backend health"""
        try:
            start_time = time.time()
            response = requests.get(f"{API_BASE}/", timeout=15)
            response_time = time.time() - start_time
            
            if response.status_code == 200 and response_time < 5.0:
                self.log_test("Backend Health", True, f"Backend responding in {response_time:.2f}s", response_time)
            elif response.status_code == 200:
                self.log_test("Backend Health", False, f"Slow response: {response_time:.2f}s", response_time)
            else:
                self.log_test("Backend Health", False, f"HTTP {response.status_code}", response_time)
                
        except Exception as e:
            self.log_test("Backend Health", False, f"Health check failed: {str(e)}")
            
    def test_mongodb_connectivity(self):
        """Test MongoDB connectivity through API"""
        try:
            # Create a test record
            test_data = {"client_name": "MongoDB Connectivity Test"}
            
            start_time = time.time()
            create_response = requests.post(f"{API_BASE}/status", json=test_data, timeout=10)
            
            if create_response.status_code == 200:
                # Try to retrieve records
                get_response = requests.get(f"{API_BASE}/status", timeout=10)
                response_time = time.time() - start_time
                
                if get_response.status_code == 200:
                    records = get_response.json()
                    test_record_found = any(r.get("client_name") == test_data["client_name"] for r in records)
                    
                    if test_record_found:
                        self.log_test("MongoDB Connectivity", True, "Database read/write operations successful", response_time)
                    else:
                        self.log_test("MongoDB Connectivity", False, "Test record not found in database", response_time)
                else:
                    self.log_test("MongoDB Connectivity", False, "Failed to retrieve records", response_time)
            else:
                self.log_test("MongoDB Connectivity", False, "Failed to create test record")
                
        except Exception as e:
            self.log_test("MongoDB Connectivity", False, f"Database connectivity error: {str(e)}")
            
    def run_all_tests(self):
        """Run comprehensive backend test suite"""
        print("🚀 STARTING COMPREHENSIVE BACKEND TESTING FOR BRIGLIA HUNDLEY LAW FIRM")
        print(f"Backend URL: {BACKEND_URL}")
        print(f"API Base: {API_BASE}")
        print("=" * 80)
        
        # Run all tests
        self.test_backend_health()
        self.test_root_endpoint()
        self.test_status_creation()
        status_records = self.test_status_retrieval()
        self.test_data_structure_validation(status_records)
        self.test_mongodb_connectivity()
        self.test_error_handling()
        self.test_nonexistent_endpoint()
        
        # Print summary
        print("\n" + "=" * 80)
        print("🎯 BACKEND TESTING SUMMARY")
        print("=" * 80)
        
        success_rate = (self.passed_tests / self.total_tests) * 100 if self.total_tests > 0 else 0
        
        print(f"Total Tests: {self.total_tests}")
        print(f"Passed: {self.passed_tests}")
        print(f"Failed: {self.total_tests - self.passed_tests}")
        print(f"Success Rate: {success_rate:.1f}%")
        
        if success_rate >= 85:
            print("🎉 BACKEND STATUS: EXCELLENT - Ready for production!")
        elif success_rate >= 70:
            print("⚠️  BACKEND STATUS: GOOD - Minor issues detected")
        else:
            print("❌ BACKEND STATUS: NEEDS ATTENTION - Critical issues found")
            
        print("\n📋 DETAILED TEST RESULTS:")
        for result in self.test_results:
            print(f"  {result['status']} {result['test']} - {result['details']} ({result['response_time']})")
            
        return success_rate >= 85

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)