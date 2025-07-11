#!/usr/bin/env python3
"""
Backend API Testing Suite for Briglia Hundley Law Firm Website
Tests all backend endpoints for functionality, database connectivity, and error handling
"""

import requests
import json
import time
from datetime import datetime
from typing import Dict, Any
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from frontend environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL', 'http://localhost:8001')
API_BASE_URL = f"{BACKEND_URL}/api"

class BackendTester:
    def __init__(self):
        self.results = {
            'total_tests': 0,
            'passed_tests': 0,
            'failed_tests': 0,
            'test_details': []
        }
        
    def log_test(self, test_name: str, passed: bool, details: str = "", response_data: Any = None):
        """Log test results"""
        self.results['total_tests'] += 1
        if passed:
            self.results['passed_tests'] += 1
            status = "✅ PASS"
        else:
            self.results['failed_tests'] += 1
            status = "❌ FAIL"
            
        test_result = {
            'test': test_name,
            'status': status,
            'details': details,
            'response_data': response_data,
            'timestamp': datetime.now().isoformat()
        }
        
        self.results['test_details'].append(test_result)
        print(f"{status}: {test_name}")
        if details:
            print(f"   Details: {details}")
        if response_data and not passed:
            print(f"   Response: {response_data}")
        print()

    def test_root_endpoint(self):
        """Test GET /api/ endpoint"""
        try:
            response = requests.get(f"{API_BASE_URL}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('message') == 'Hello World':
                    self.log_test(
                        "Root Endpoint (GET /api/)",
                        True,
                        f"Status: {response.status_code}, Message: {data.get('message')}"
                    )
                else:
                    self.log_test(
                        "Root Endpoint (GET /api/)",
                        False,
                        f"Unexpected response message: {data}",
                        data
                    )
            else:
                self.log_test(
                    "Root Endpoint (GET /api/)",
                    False,
                    f"HTTP {response.status_code}: {response.text}",
                    response.text
                )
                
        except requests.exceptions.RequestException as e:
            self.log_test(
                "Root Endpoint (GET /api/)",
                False,
                f"Request failed: {str(e)}"
            )

    def test_create_status_check(self):
        """Test POST /api/status endpoint"""
        try:
            test_data = {
                "client_name": "Briglia Hundley Test Client"
            }
            
            response = requests.post(
                f"{API_BASE_URL}/status",
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ['id', 'client_name', 'timestamp']
                
                if all(field in data for field in required_fields):
                    if data['client_name'] == test_data['client_name']:
                        self.log_test(
                            "Create Status Check (POST /api/status)",
                            True,
                            f"Status check created successfully with ID: {data.get('id')}"
                        )
                        return data  # Return for use in other tests
                    else:
                        self.log_test(
                            "Create Status Check (POST /api/status)",
                            False,
                            f"Client name mismatch. Expected: {test_data['client_name']}, Got: {data.get('client_name')}",
                            data
                        )
                else:
                    missing_fields = [field for field in required_fields if field not in data]
                    self.log_test(
                        "Create Status Check (POST /api/status)",
                        False,
                        f"Missing required fields: {missing_fields}",
                        data
                    )
            else:
                self.log_test(
                    "Create Status Check (POST /api/status)",
                    False,
                    f"HTTP {response.status_code}: {response.text}",
                    response.text
                )
                
        except requests.exceptions.RequestException as e:
            self.log_test(
                "Create Status Check (POST /api/status)",
                False,
                f"Request failed: {str(e)}"
            )
        
        return None

    def test_get_status_checks(self):
        """Test GET /api/status endpoint"""
        try:
            response = requests.get(f"{API_BASE_URL}/status", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list):
                    self.log_test(
                        "Get Status Checks (GET /api/status)",
                        True,
                        f"Retrieved {len(data)} status checks successfully"
                    )
                    
                    # Validate structure of returned items if any exist
                    if data:
                        first_item = data[0]
                        required_fields = ['id', 'client_name', 'timestamp']
                        if all(field in first_item for field in required_fields):
                            self.log_test(
                                "Status Check Data Structure Validation",
                                True,
                                "All required fields present in status check records"
                            )
                        else:
                            missing_fields = [field for field in required_fields if field not in first_item]
                            self.log_test(
                                "Status Check Data Structure Validation",
                                False,
                                f"Missing fields in status check records: {missing_fields}",
                                first_item
                            )
                else:
                    self.log_test(
                        "Get Status Checks (GET /api/status)",
                        False,
                        f"Expected list response, got: {type(data)}",
                        data
                    )
            else:
                self.log_test(
                    "Get Status Checks (GET /api/status)",
                    False,
                    f"HTTP {response.status_code}: {response.text}",
                    response.text
                )
                
        except requests.exceptions.RequestException as e:
            self.log_test(
                "Get Status Checks (GET /api/status)",
                False,
                f"Request failed: {str(e)}"
            )

    def test_database_connectivity(self):
        """Test database connectivity by creating and retrieving data"""
        try:
            # Create a test record
            test_client_name = f"DB Test Client {int(time.time())}"
            create_response = requests.post(
                f"{API_BASE_URL}/status",
                json={"client_name": test_client_name},
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if create_response.status_code != 200:
                self.log_test(
                    "Database Connectivity Test",
                    False,
                    f"Failed to create test record: HTTP {create_response.status_code}",
                    create_response.text
                )
                return
            
            created_record = create_response.json()
            created_id = created_record.get('id')
            
            # Wait a moment for database consistency
            time.sleep(1)
            
            # Retrieve all records and check if our test record exists
            get_response = requests.get(f"{API_BASE_URL}/status", timeout=10)
            
            if get_response.status_code == 200:
                all_records = get_response.json()
                
                # Look for our test record
                found_record = None
                for record in all_records:
                    if record.get('id') == created_id and record.get('client_name') == test_client_name:
                        found_record = record
                        break
                
                if found_record:
                    self.log_test(
                        "Database Connectivity Test",
                        True,
                        f"Successfully created and retrieved record with ID: {created_id}"
                    )
                else:
                    self.log_test(
                        "Database Connectivity Test",
                        False,
                        f"Created record not found in database. Created ID: {created_id}, Total records: {len(all_records)}"
                    )
            else:
                self.log_test(
                    "Database Connectivity Test",
                    False,
                    f"Failed to retrieve records: HTTP {get_response.status_code}",
                    get_response.text
                )
                
        except requests.exceptions.RequestException as e:
            self.log_test(
                "Database Connectivity Test",
                False,
                f"Request failed: {str(e)}"
            )

    def test_error_handling(self):
        """Test error handling with invalid requests"""
        
        # Test invalid JSON for POST request
        try:
            response = requests.post(
                f"{API_BASE_URL}/status",
                json={},  # Missing required client_name field
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if response.status_code in [400, 422]:  # FastAPI returns 422 for validation errors
                self.log_test(
                    "Error Handling - Invalid POST Data",
                    True,
                    f"Correctly returned HTTP {response.status_code} for invalid data"
                )
            else:
                self.log_test(
                    "Error Handling - Invalid POST Data",
                    False,
                    f"Expected HTTP 400/422, got HTTP {response.status_code}",
                    response.text
                )
                
        except requests.exceptions.RequestException as e:
            self.log_test(
                "Error Handling - Invalid POST Data",
                False,
                f"Request failed: {str(e)}"
            )
        
        # Test non-existent endpoint
        try:
            response = requests.get(f"{API_BASE_URL}/nonexistent", timeout=10)
            
            if response.status_code == 404:
                self.log_test(
                    "Error Handling - Non-existent Endpoint",
                    True,
                    "Correctly returned HTTP 404 for non-existent endpoint"
                )
            else:
                self.log_test(
                    "Error Handling - Non-existent Endpoint",
                    False,
                    f"Expected HTTP 404, got HTTP {response.status_code}",
                    response.text
                )
                
        except requests.exceptions.RequestException as e:
            self.log_test(
                "Error Handling - Non-existent Endpoint",
                False,
                f"Request failed: {str(e)}"
            )

    def test_backend_service_health(self):
        """Test overall backend service health"""
        try:
            # Test if backend is responding at all
            response = requests.get(f"{API_BASE_URL}/", timeout=5)
            
            if response.status_code == 200:
                # Check response time
                response_time = response.elapsed.total_seconds()
                
                if response_time < 5.0:  # Less than 5 seconds is acceptable
                    self.log_test(
                        "Backend Service Health Check",
                        True,
                        f"Backend responding in {response_time:.2f} seconds"
                    )
                else:
                    self.log_test(
                        "Backend Service Health Check",
                        False,
                        f"Backend responding slowly: {response_time:.2f} seconds"
                    )
            else:
                self.log_test(
                    "Backend Service Health Check",
                    False,
                    f"Backend not healthy: HTTP {response.status_code}",
                    response.text
                )
                
        except requests.exceptions.Timeout:
            self.log_test(
                "Backend Service Health Check",
                False,
                "Backend service timeout - not responding within 5 seconds"
            )
        except requests.exceptions.RequestException as e:
            self.log_test(
                "Backend Service Health Check",
                False,
                f"Backend service unreachable: {str(e)}"
            )

    def run_all_tests(self):
        """Run all backend tests"""
        print("=" * 80)
        print("BRIGLIA HUNDLEY LAW FIRM - BACKEND API TESTING SUITE")
        print("=" * 80)
        print(f"Testing backend at: {API_BASE_URL}")
        print(f"Test started at: {datetime.now().isoformat()}")
        print()
        
        # Run all tests
        self.test_backend_service_health()
        self.test_root_endpoint()
        self.test_create_status_check()
        self.test_get_status_checks()
        self.test_database_connectivity()
        self.test_error_handling()
        
        # Print summary
        print("=" * 80)
        print("TEST SUMMARY")
        print("=" * 80)
        print(f"Total Tests: {self.results['total_tests']}")
        print(f"Passed: {self.results['passed_tests']}")
        print(f"Failed: {self.results['failed_tests']}")
        print(f"Success Rate: {(self.results['passed_tests']/self.results['total_tests']*100):.1f}%")
        print()
        
        if self.results['failed_tests'] > 0:
            print("FAILED TESTS:")
            for test in self.results['test_details']:
                if "❌ FAIL" in test['status']:
                    print(f"- {test['test']}: {test['details']}")
            print()
        
        return self.results

if __name__ == "__main__":
    tester = BackendTester()
    results = tester.run_all_tests()
    
    # Exit with appropriate code
    exit_code = 0 if results['failed_tests'] == 0 else 1
    exit(exit_code)