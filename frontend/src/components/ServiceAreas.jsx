import React from 'react';
import { MapPin, Building, Users, Scale } from 'lucide-react';

const ServiceAreas = ({ data }) => {
  const primaryAreas = [
    {
      name: "Loudoun County",
      description: "Serving one of Virginia's fastest-growing counties with comprehensive legal services",
      icon: <Building className="h-6 w-6 text-blue-900" />
    },
    {
      name: "Fairfax County", 
      description: "Comprehensive legal services throughout Fairfax County",
      icon: <Scale className="h-6 w-6 text-blue-900" />
    },
    {
      name: "Arlington County",
      description: "Expert legal representation for Arlington residents and businesses",
      icon: <Users className="h-6 w-6 text-blue-900" />
    },
    {
      name: "Washington DC",
      description: "Expert legal representation for Washington DC residents and businesses",
      icon: <MapPin className="h-6 w-6 text-blue-900" />
    }
  ];

  const serviceLocations = [
    "McLean", "Vienna", "Falls Church", "Alexandria", "Herndon", "Reston", 
    "Great Falls", "Oakton", "Burke", "Springfield", "Annandale", "Centreville",
    "Manassas", "Woodbridge", "Dale City", "Dumfries"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Serving Northern Virginia
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Briglia Hundley® proudly serves clients throughout Northern Virginia, providing expert legal services 
            to individuals, families, and businesses across the region.
          </p>
        </div>

        {/* Primary Service Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {primaryAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-50 rounded-full">
                  {area.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {area.name}
              </h3>
              <p className="text-sm text-gray-600">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Service Locations */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Additional Service Areas
            </h3>
            <p className="text-gray-600">
              We also provide legal services to clients in these Northern Virginia communities:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {serviceLocations.map((location, index) => (
              <div 
                key={index}
                className="text-center py-2 px-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-sm font-medium text-gray-700">
                  {location}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Legal Services in Northern Virginia?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you're in Tysons Corner, Fairfax, Arlington, or anywhere in Northern Virginia, 
              our experienced attorneys are ready to help with your legal needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-200">
                Call {data.business.phone}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;