import React from 'react';
import { Award, Users, MapPin, Calendar } from 'lucide-react';

const About = ({ data, editableContent }) => {
  const highlights = [
    {
      icon: <Award className="h-8 w-8 text-blue-900" />,
      title: "Tier 1 Ranked",
      description: "Recognized by Best Lawyers® Best Law Firms"
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-900" />,
      title: "Since 1993",
      description: "Over 30 years of legal excellence"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-900" />,
      title: "14 Attorneys",
      description: "Experienced legal professionals"
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-900" />,
      title: "Northern Virginia",
      description: "Serving Loudoun County, Fairfax, Arlington, Prince William County"
    }
  ];

  // Split content into paragraphs
  const paragraphs = editableContent.about.content.split('\n\n');

  return (
    <section id="about" className="py-20 bg-gray-50 relative">
      {/* Background Image with 90% opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://brigliahundley.com/wp-content/uploads/courthouse-header-500h.jpg')",
          opacity: 0.9
        }}
      ></div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  {editableContent.about.title}
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-300 to-blue-100 rounded-full"></div>
              </div>

              <div className="space-y-8">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-white leading-relaxed text-left">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right Content - Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;