#!/usr/bin/env python3
"""
Comprehensive Backend Testing Suite for Briglia Hundley Law Firm Website
Tests all API endpoints, database connectivity, error handling, and service health
"""

import requests
import json
import time
import sys
from datetime import datetime
from typing import Dict, Any, List

# Backend URL from frontend environment
BACKEND_URL = "https://298b1659-a8ce-4658-9447-d1fe1859f7d0.preview.emergentagent.com/api"

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
        
    def test_basic_connectivity(self):
        """Test 1: Basic API Health - GET /api/"""
        try:
            start_time = time.time()
            response = requests.get(f"{BACKEND_URL}/", timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_test("Basic API Health Check", True, 
                                f"Root endpoint responding correctly with 'Hello World'", response_time)
                else:
                    self.log_test("Basic API Health Check", False, 
                                f"Unexpected response: {data}", response_time)
            else:
                self.log_test("Basic API Health Check", False, 
                            f"HTTP {response.status_code}: {response.text}", response_time)
                
        except Exception as e:
            self.log_test("Basic API Health Check", False, f"Connection error: {str(e)}")
            
    def test_status_creation(self):
        """Test 2: Status Check Creation - POST /api/status"""
        try:
            test_data = {
                "client_name": "Briglia Hundley Test Client"
            }
            
            start_time = time.time()
            response = requests.post(f"{BACKEND_URL}/status", 
                                   json=test_data, 
                                   headers={"Content-Type": "application/json"},
                                   timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["id", "client_name", "timestamp"]
                
                if all(field in data for field in required_fields):
                    if data["client_name"] == test_data["client_name"]:
                        self.log_test("Status Check Creation", True, 
                                    f"Status created with ID: {data['id'][:8]}...", response_time)
                        return data["id"]  # Return ID for cleanup
                    else:
                        self.log_test("Status Check Creation", False, 
                                    f"Client name mismatch: {data['client_name']}", response_time)
                else:
                    missing = [f for f in required_fields if f not in data]
                    self.log_test("Status Check Creation", False, 
                                f"Missing fields: {missing}", response_time)
            else:
                self.log_test("Status Check Creation", False, 
                            f"HTTP {response.status_code}: {response.text}", response_time)
                
        except Exception as e:
            self.log_test("Status Check Creation", False, f"Request error: {str(e)}")
        
        return None
        
    def test_status_retrieval(self):
        """Test 3: Status Check Retrieval - GET /api/status"""
        try:
            start_time = time.time()
            response = requests.get(f"{BACKEND_URL}/status", timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    if len(data) > 0:
                        # Check structure of first item
                        first_item = data[0]
                        required_fields = ["id", "client_name", "timestamp"]
                        
                        if all(field in first_item for field in required_fields):
                            self.log_test("Status Check Retrieval", True, 
                                        f"Retrieved {len(data)} status checks with proper structure", response_time)
                        else:
                            missing = [f for f in required_fields if f not in first_item]
                            self.log_test("Status Check Retrieval", False, 
                                        f"Invalid structure - missing: {missing}", response_time)
                    else:
                        self.log_test("Status Check Retrieval", True, 
                                    "Retrieved empty list (no status checks yet)", response_time)
                else:
                    self.log_test("Status Check Retrieval", False, 
                                f"Expected list, got: {type(data)}", response_time)
            else:
                self.log_test("Status Check Retrieval", False, 
                            f"HTTP {response.status_code}: {response.text}", response_time)
                
        except Exception as e:
            self.log_test("Status Check Retrieval", False, f"Request error: {str(e)}")
            
    def test_database_connectivity(self):
        """Test 4: Database Connectivity - Create and retrieve data"""
        try:
            # Create a test record
            test_data = {
                "client_name": f"DB Test Client {datetime.now().strftime('%H%M%S')}"
            }
            
            start_time = time.time()
            create_response = requests.post(f"{BACKEND_URL}/status", 
                                          json=test_data, 
                                          headers={"Content-Type": "application/json"},
                                          timeout=10)
            
            if create_response.status_code == 200:
                created_data = create_response.json()
                created_id = created_data["id"]
                
                # Retrieve all records to verify our record exists
                retrieve_response = requests.get(f"{BACKEND_URL}/status", timeout=10)
                response_time = time.time() - start_time
                
                if retrieve_response.status_code == 200:
                    all_records = retrieve_response.json()
                    
                    # Check if our record exists
                    found_record = None
                    for record in all_records:
                        if record["id"] == created_id:
                            found_record = record
                            break
                    
                    if found_record:
                        self.log_test("Database Connectivity", True, 
                                    f"Successfully created and retrieved record with ID: {created_id[:8]}...", response_time)
                    else:
                        self.log_test("Database Connectivity", False, 
                                    f"Created record not found in database", response_time)
                else:
                    self.log_test("Database Connectivity", False, 
                                f"Failed to retrieve records: HTTP {retrieve_response.status_code}", response_time)
            else:
                self.log_test("Database Connectivity", False, 
                            f"Failed to create record: HTTP {create_response.status_code}", response_time)
                
        except Exception as e:
            self.log_test("Database Connectivity", False, f"Database test error: {str(e)}")
            
    def test_error_handling(self):
        """Test 5: Error Handling - Invalid requests"""
        try:
            # Test 5a: Invalid POST data
            start_time = time.time()
            invalid_response = requests.post(f"{BACKEND_URL}/status", 
                                           json={"invalid_field": "test"}, 
                                           headers={"Content-Type": "application/json"},
                                           timeout=10)
            response_time = time.time() - start_time
            
            if invalid_response.status_code == 422:  # Validation error
                self.log_test("Error Handling - Invalid Data", True, 
                            f"Properly returned HTTP 422 for invalid data", response_time)
            else:
                self.log_test("Error Handling - Invalid Data", False, 
                            f"Expected HTTP 422, got {invalid_response.status_code}", response_time)
                
            # Test 5b: Non-existent endpoint
            start_time = time.time()
            nonexistent_response = requests.get(f"{BACKEND_URL}/nonexistent", timeout=10)
            response_time = time.time() - start_time
            
            if nonexistent_response.status_code == 404:
                self.log_test("Error Handling - Non-existent Endpoint", True, 
                            f"Properly returned HTTP 404 for non-existent endpoint", response_time)
            else:
                self.log_test("Error Handling - Non-existent Endpoint", False, 
                            f"Expected HTTP 404, got {nonexistent_response.status_code}", response_time)
                
        except Exception as e:
            self.log_test("Error Handling", False, f"Error handling test failed: {str(e)}")
            
    def test_service_health(self):
        """Test 6: Service Health - Response times and availability"""
        try:
            response_times = []
            successful_requests = 0
            total_requests = 3
            
            for i in range(total_requests):
                try:
                    start_time = time.time()
                    response = requests.get(f"{BACKEND_URL}/", timeout=10)
                    response_time = time.time() - start_time
                    response_times.append(response_time)
                    
                    if response.status_code == 200:
                        successful_requests += 1
                        
                except Exception:
                    pass
                    
            if successful_requests == total_requests:
                avg_response_time = sum(response_times) / len(response_times)
                self.log_test("Service Health Check", True, 
                            f"All {total_requests} requests successful, avg response: {avg_response_time:.3f}s", 
                            avg_response_time)
            else:
                self.log_test("Service Health Check", False, 
                            f"Only {successful_requests}/{total_requests} requests successful")
                
        except Exception as e:
            self.log_test("Service Health Check", False, f"Health check failed: {str(e)}")
            
    def test_data_structure_validation(self):
        """Test 7: Data Structure Validation"""
        try:
            # Create a test record and validate its structure
            test_data = {
                "client_name": "Structure Validation Test"
            }
            
            start_time = time.time()
            response = requests.post(f"{BACKEND_URL}/status", 
                                   json=test_data, 
                                   headers={"Content-Type": "application/json"},
                                   timeout=10)
            response_time = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                
                # Validate UUID format
                import re
                uuid_pattern = r'^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
                
                if re.match(uuid_pattern, data["id"]):
                    # Validate timestamp format
                    try:
                        datetime.fromisoformat(data["timestamp"].replace('Z', '+00:00'))
                        self.log_test("Data Structure Validation", True, 
                                    f"UUID and timestamp formats are valid", response_time)
                    except ValueError:
                        self.log_test("Data Structure Validation", False, 
                                    f"Invalid timestamp format: {data['timestamp']}", response_time)
                else:
                    self.log_test("Data Structure Validation", False, 
                                f"Invalid UUID format: {data['id']}", response_time)
            else:
                self.log_test("Data Structure Validation", False, 
                            f"Failed to create test record: HTTP {response.status_code}", response_time)
                
        except Exception as e:
            self.log_test("Data Structure Validation", False, f"Validation test error: {str(e)}")
            
    def test_cors_configuration(self):
        """Test 8: CORS Configuration"""
        try:
            start_time = time.time()
            response = requests.options(f"{BACKEND_URL}/", timeout=10)
            response_time = time.time() - start_time
            
            # Check for CORS headers
            cors_headers = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': '*'
            }
            
            cors_working = True
            missing_headers = []
            
            for header, expected_value in cors_headers.items():
                if header not in response.headers:
                    cors_working = False
                    missing_headers.append(header)
                elif expected_value != '*' and response.headers[header] != expected_value:
                    cors_working = False
                    missing_headers.append(f"{header} (wrong value)")
            
            if cors_working:
                self.log_test("CORS Configuration", True, 
                            f"CORS headers properly configured", response_time)
            else:
                self.log_test("CORS Configuration", False, 
                            f"Missing/incorrect CORS headers: {missing_headers}", response_time)
                
        except Exception as e:
            self.log_test("CORS Configuration", False, f"CORS test error: {str(e)}")
            
    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 STARTING COMPREHENSIVE BACKEND TESTING FOR BRIGLIA HUNDLEY LAW FIRM")
        print("=" * 80)
        print(f"Backend URL: {BACKEND_URL}")
        print(f"Test Start Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("=" * 80)
        
        # Run all tests
        self.test_basic_connectivity()
        self.test_status_creation()
        self.test_status_retrieval()
        self.test_database_connectivity()
        self.test_error_handling()
        self.test_service_health()
        self.test_data_structure_validation()
        self.test_cors_configuration()
        
        # Print summary
        print("\n" + "=" * 80)
        print("🎯 BACKEND TESTING SUMMARY")
        print("=" * 80)
        
        success_rate = (self.passed_tests / self.total_tests) * 100 if self.total_tests > 0 else 0
        
        print(f"Total Tests: {self.total_tests}")
        print(f"Passed: {self.passed_tests}")
        print(f"Failed: {self.total_tests - self.passed_tests}")
        print(f"Success Rate: {success_rate:.1f}%")
        
        if success_rate >= 87.5:  # 7/8 tests or better
            print("🎉 BACKEND STATUS: EXCELLENT - Production Ready!")
        elif success_rate >= 75:  # 6/8 tests
            print("✅ BACKEND STATUS: GOOD - Minor issues to address")
        elif success_rate >= 62.5:  # 5/8 tests
            print("⚠️ BACKEND STATUS: FAIR - Several issues need attention")
        else:
            print("❌ BACKEND STATUS: POOR - Major issues require immediate attention")
            
        print("\n📋 DETAILED TEST RESULTS:")
        for result in self.test_results:
            print(f"  {result['status']} {result['test']} ({result['response_time']})")
            if result['details']:
                print(f"      {result['details']}")
                
        print(f"\nTest Completed: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        
        return success_rate >= 87.5  # Return True if tests are successful

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)