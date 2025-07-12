import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Building, Heart, Car, FileText, Home } from 'lucide-react';
import { Button } from './ui/button';

const PracticeAreas = ({ data, onNavigate }) => {
  const iconMap = {
    'Family Law': <Heart className="h-8 w-8" />,
    'Commercial Litigation': <Scale className="h-8 w-8" />,
    'Corporate Law': <Building className="h-8 w-8" />,
    'Personal Injury': <Car className="h-8 w-8" />,
    'Estate Planning': <FileText className="h-8 w-8" />,
    'Real Estate Development': <Home className="h-8 w-8" />
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Practice Areas
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal services across multiple practice areas, delivering superior client service and innovative legal strategies since 1993.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {data.practiceAreas.map((area, index) => (
            <Link 
              key={index} 
              to={`/practice-area/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 block"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gray-50 rounded-full text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                  {iconMap[area.title] || <Scale className="h-6 w-6" />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-900 transition-colors duration-300">
                  {area.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {area.description}
              </p>
              
              <div className="group text-gray-900 hover:text-gray-700 flex items-center text-sm font-medium">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/practice-areas"
            className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View All Practice Areas
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Contact our experienced legal team today for a free consultation. We're here to help you navigate your legal challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                state={{ consultation: true, message: "I would like to schedule a free consultation to discuss my legal needs." }}
              >
                <Button 
                  size="lg" 
                  className="bg-gray-600 hover:bg-gray-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Free Consultation
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold"
                onClick={() => window.location.href = `tel:${data.business.phone}`}
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;