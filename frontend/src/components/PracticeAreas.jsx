import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Building, Heart, Car, FileText, Home } from 'lucide-react';
import { Button } from './ui/button';

const PracticeAreas = ({ data, onNavigate }) => {
  // Use practice areas from data, already sorted alphabetically
  const allPracticeAreas = data.practiceAreas;
  const iconMap = {
    'Family Law': <Heart className="h-8 w-8" />,
    'Commercial Litigation': <Scale className="h-8 w-8" />,
    'Corporate Law': <Building className="h-8 w-8" />,
    'Personal Injury': <Car className="h-8 w-8" />,
    'Estate Planning': <FileText className="h-8 w-8" />,
    'Real Estate Development': <Home className="h-8 w-8" />
  };

  // Function to get the correct image for each practice area
  const getImageForPracticeArea = (title) => {
    switch(title) {
      case 'Accountants Liability and Securities Litigation':
        return 'https://brigliahundley.com/wp-content/uploads/bh-securities-litigation-hero-25-750x380.jpg';
      case 'Family Law':
        return 'https://brigliahundley.com/wp-content/uploads/bh-family-law-hero-0725-rp-750x380.jpg';
      case 'Criminal Defense':
        return 'https://brigliahundley.com/wp-content/uploads/BH-Criminal-law-hero-24.jpg-750x380';
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
          {allPracticeAreas.map((area, index) => (
            <Link 
              key={index} 
              to={`/practice-area/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 block overflow-hidden"
            >
              {/* Image Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={getImageForPracticeArea(area.title)} 
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="gdlr-practice-thumbnail-overlay absolute inset-0 bg-black opacity-40"></div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                    {area.title}
                  </h3>
                </div>
              </div>
              
              {/* Content */}
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
      </div>
    </section>
  );
};

export default PracticeAreas;
