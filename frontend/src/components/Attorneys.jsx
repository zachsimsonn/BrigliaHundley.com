import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, MapPin } from 'lucide-react';

const Attorneys = ({ data, onNavigate }) => {
  // State to track which attorney descriptions are expanded
  const [expandedAttorneys, setExpandedAttorneys] = useState({});
  
  // Function to toggle attorney description expansion
  const toggleExpansion = (index, e) => {
    e.preventDefault(); // Prevent the link from being followed
    e.stopPropagation(); // Prevent event bubbling
    setExpandedAttorneys(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  // Function to check if text should be truncated (3 lines max)
  const shouldTruncate = (text) => {
    // Estimate 3 lines at approximately 90 characters (30 chars per line average)
    return text.length > 180;
  };
  
  // Function to truncate text to approximately 3 lines
  const truncateText = (text) => {
    if (text.length <= 180) return text;
    const truncated = text.substring(0, 180);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 150 ? truncated.substring(0, lastSpace) : truncated;
  };
  return (
    <>
      {/* Header */}
      <div className="gdlr-page-title-wrapper" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1636652966850-5ac4d02370e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxZnxjb3VydGhvdXNlfGVufDB8fHx8MTc1MjU5OTYyNXww&ixlib=rb-4.1.0&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="gdlr-page-title-overlay"></div>
        <div className="gdlr-page-title-container container">
          <h1 className="gdlr-page-title">Our Attorneys</h1>
        </div>
      </div>

      <section id="attorneys" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Legal Team
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our practice features prominent, highly experienced attorneys who have been named to Super Lawyers, listed in U.S. News and World Report's Best Lawyers, and achieved Martindale-Hubbell's highest "AV" rating.
          </p>
        </div>

        {/* Attorneys Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.attorneys.map((attorney, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Attorney Image */}
              <div className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-700 flex items-end justify-center overflow-hidden">
                {attorney.image && (attorney.image.startsWith('data:') || attorney.image.startsWith('http')) ? (
                  <img 
                    src={attorney.image} 
                    alt={`${attorney.name} - ${attorney.position} at Briglia Hundley®`} 
                    className="w-full h-full object-cover" 
                    style={{objectPosition: '50% 30%'}} 
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">
                      {attorney.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>

              {/* Attorney Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {attorney.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="h-4 w-4 text-blue-900" />
                  <span className="text-blue-900 font-semibold text-sm">
                    {attorney.position}
                  </span>
                </div>

                <div className="text-gray-600 text-sm leading-relaxed mb-4">
                  {expandedAttorneys[index] ? attorney.experience : truncateText(attorney.experience)}
                  {shouldTruncate(attorney.experience) && (
                    <button
                      onClick={(e) => toggleExpansion(index, e)}
                      className="text-gray-700 hover:text-gray-900 ml-2 font-bold"
                    >
                      {expandedAttorneys[index] ? 'Show less' : 'more...'}
                    </button>
                  )}
                </div>

                {/* Contact Button */}
                <Link 
                  to={`/attorney-profile/${attorney.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium text-center"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Attorneys;