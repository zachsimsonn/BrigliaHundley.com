import React from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, Scale, ArrowRight } from 'lucide-react';

const PracticeAreasPage = ({ data, onNavigate }) => {
  // Function to get the correct image for each practice area
  const getImageForPracticeArea = (title) => {
    switch(title) {
      case 'Family Law':
        return 'https://brigliahundley.com/wp-content/uploads/bh-family-law-hero-0725-rp-750x380.jpg';
      case 'Criminal Defense':
        return 'https://brigliahundley.com/wp-content/uploads/BH-Criminal-law-hero-24-750x380.jpg';
      case 'Business Litigation':
        return 'https://brigliahundley.com/wp-content/uploads/bh-business-litigation-hero-25-750x380.jpg';
      case 'Corporate Law':
        return 'https://brigliahundley.com/wp-content/uploads/bh-corporate-law-hero-25-750x380.jpg';
      case 'Personal Injury':
        return 'https://brigliahundley.com/wp-content/uploads/bh-personal-injury-hero-a.jpg';
      case 'Estate Planning':
        return 'https://brigliahundley.com/wp-content/uploads/bh-trusts-estates-hero-24RR-750x380.jpg';
      case 'Real Estate Law':
        return 'https://brigliahundley.com/wp-content/uploads/briglia-hundley-real-estate.jpg';
      case 'Employment Law':
        return 'https://brigliahundley.com/wp-content/uploads/bh-employment-law-hero-25-750x380.jpg';
      case 'Municipal Law':
        return 'https://brigliahundley.com/wp-content/uploads/bh-fairfax-municipal-hero-24-750x380.jpg';
      case 'Appellate Litigation':
        return 'https://brigliahundley.com/wp-content/uploads/FA1-Appellate-Litigation-drawing-730x380.jpg';
      case 'Community Associations':
        return 'https://brigliahundley.com/wp-content/uploads/briglia-hundley-community-assoc-hero-750x380.jpg';
      default:
        return 'https://brigliahundley.com/wp-content/uploads/bh-family-law-hero-0725-rp-750x380.jpg';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="gdlr-page-title-wrapper" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1636652966850-5ac4d02370e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlfGVufDB8fHx8MTc1MjU5OTYyNXww&ixlib=rb-4.1.0&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="gdlr-page-title-overlay"></div>
        <div className="gdlr-page-title-container container">
          <h1 className="gdlr-page-title">Our Practice Areas</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive legal services across 12 practice areas serving Northern Virginia, Washington D.C., and Maryland
          </p>
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
            <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={getImageForPracticeArea(area.title)} 
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="gdlr-practice-thumbnail-overlay"></div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      <Scale className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                      <h3 className="text-xl font-semibold text-white drop-shadow-lg">{area.title}</h3>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/80" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
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