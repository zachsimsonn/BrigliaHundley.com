import React from 'react';
import { Button } from './ui/button';

const ServiceAreas = ({ data }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            serving the Mid-Atlantic region
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Briglia Hundley® proudly serves clients throughout Northern Virginia, providing expert legal services 
            to individuals, families, and businesses across the region.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building h-6 w-6 text-blue-900" aria-hidden="true">
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                  <path d="M9 22v-4h6v4"></path>
                  <path d="M8 6h.01"></path>
                  <path d="M16 6h.01"></path>
                  <path d="M12 6h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 10h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M8 14h.01"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Loudoun County</h3>
            <p className="text-sm text-gray-600">Serving one of Virginia's fastest-growing counties with comprehensive legal services</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale h-6 w-6 text-blue-900" aria-hidden="true">
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                  <path d="M7 21h10"></path>
                  <path d="M12 3v18"></path>
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fairfax County</h3>
            <p className="text-sm text-gray-600">Comprehensive legal services throughout Fairfax County</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-6 w-6 text-blue-900" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Arlington County</h3>
            <p className="text-sm text-gray-600">Expert legal representation for Arlington residents and businesses</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-6 w-6 text-blue-900" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Washington DC</h3>
            <p className="text-sm text-gray-600">Expert legal representation for Washington DC residents and businesses</p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Additional Service Areas</h3>
            <p className="text-gray-600">We also provide legal services to clients in these Northern Virginia communities:</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">McLean</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Vienna</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Falls Church</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Alexandria</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Herndon</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Reston</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Great Falls</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Oakton</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Burke</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Springfield</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Annandale</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Centreville</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Manassas</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Woodbridge</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Dale City</span>
            </div>
            <div className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-medium text-gray-700">Dumfries</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Legal Services in Northern Virginia?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Whether you're in Loudoun County, Fairfax, Arlington, or anywhere in Northern Virginia, our experienced attorneys are ready to help with your legal needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Schedule Consultation
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-200" variant="outline">
                Call (703) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
