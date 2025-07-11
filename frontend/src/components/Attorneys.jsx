import React from 'react';
import { Star, Award, MapPin } from 'lucide-react';

const Attorneys = ({ data, onNavigate }) => {
  return (
    <section id="attorneys" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Legal Team
          </h2>
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
              <div className="relative h-80 bg-gradient-to-br from-gray-900 to-gray-700 flex items-end justify-center overflow-hidden">
                {attorney.image && (attorney.image.startsWith('data:') || attorney.image.startsWith('http')) ? (
                  <img src={attorney.image} alt={`${attorney.name} - ${attorney.position} at Briglia Hundley®`} className="w-full h-full object-cover" style={{objectPosition: '50% 30%'}} />
                ) : (
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">
                      {attorney.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-gray-300 text-black px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-semibold">5.0</span>
                </div>
              </div>

              {/* Attorney Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {attorney.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="h-4 w-4 text-blue-900" />
                  <span className="text-blue-900 font-semibold text-sm">
                    {attorney.position}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {attorney.experience}
                </p>

                {/* Contact Button */}
                <button 
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium mt-auto"
                  onClick={() => onNavigate('attorney-profile', { name: attorney.name.toLowerCase().replace(/\s+/g, '-') })}
                >
                  Read Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">7</div>
              <div className="text-gray-600">Best Lawyers® 2025</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">Multiple</div>
              <div className="text-gray-600">Super Lawyers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">30+</div>
              <div className="text-gray-600">Years Combined</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">14</div>
              <div className="text-gray-600">Attorneys</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attorneys;