import React from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, Scale, ArrowRight } from 'lucide-react';

const PracticeAreasPage = ({ data, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Practice Areas</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive legal services across 12 practice areas serving Northern Virginia, Washington D.C., and Maryland
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
            Experienced Legal Representation Across Multiple Practice Areas
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-left max-w-4xl">
            At Briglia Hundley, P.C.®, our experienced attorneys provide comprehensive legal services 
            across 12 specialized practice areas. We are committed to delivering exceptional results 
            for our clients throughout Northern Virginia, Washington D.C., and Maryland.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {data.practiceAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Scale className="h-6 w-6 text-gray-900 mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-900 text-left">{area.title}</h3>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
              
              <p className="text-gray-600 text-base leading-relaxed mb-6 text-left">
                {area.description}
              </p>

              {/* Attorneys for this practice area */}
              {area.attorneys && area.attorneys.length > 0 && (
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2 text-left">Our {area.title} Attorneys:</div>
                  <div className="flex flex-wrap gap-2">
                    {area.attorneys.slice(0, 3).map((attorneyName, attorneyIndex) => (
                      <span key={attorneyIndex} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {attorneyName}
                      </span>
                    ))}
                    {area.attorneys.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        +{area.attorneys.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              <Button 
                onClick={() => onNavigate('practice-area', { area: area.title.toLowerCase().replace(/\s+/g, '-') })}
                variant="outline"
                className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200 text-left"
              >
                Learn More About {area.title}
              </Button>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Legal Assistance?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact our experienced attorneys today to discuss your legal needs and learn how we can help you achieve the best possible outcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Schedule a Consultation
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => window.location.href = `tel:${data.business.phone}`}
            >
              Call {data.business.phone}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreasPage;