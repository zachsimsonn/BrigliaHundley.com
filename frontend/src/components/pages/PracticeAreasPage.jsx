import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Scale, ArrowRight, Users, Award } from 'lucide-react';

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
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Experienced Legal Representation Across Multiple Practice Areas
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            At Briglia Hundley, P.C.®, our experienced attorneys provide comprehensive legal services 
            across 12 specialized practice areas. We are committed to delivering exceptional results 
            for our clients throughout Northern Virginia, Washington D.C., and Maryland.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {data.practiceAreas.map((area, index) => (
            <Link
              key={index}
              to={`/practice-area/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 block overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={getImageForPracticeArea(area.title)} 
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="gdlr-practice-thumbnail-overlay absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                    {area.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {area.description}
                </p>
                <div className="group text-gray-900 hover:text-gray-700 flex items-center text-sm font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreasPage;