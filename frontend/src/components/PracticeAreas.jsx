import React from 'react';
import { ArrowRight, Scale, Building, Heart, Car, FileText, Home } from 'lucide-react';
import { Button } from './ui/button';

const PracticeAreas = ({ data }) => {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.practiceAreas.map((area, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-full text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                  {iconMap[area.title] || <Scale className="h-8 w-8" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                  {area.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>
              
              <Button 
                variant="ghost" 
                className="group-hover:bg-blue-900 group-hover:text-white transition-all duration-300 p-0"
                onClick={() => {
                  // Mock navigation - in real app would navigate to specific page
                  console.log(`Navigate to ${area.title}`);
                }}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our experienced legal team today for a free consultation. We're here to help you navigate your legal challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full transition-all duration-300"
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