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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                {editableContent.about.title}
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full"></div>
            </div>

            <div className="space-y-8">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600 leading-relaxed text-left">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Content - Badge and Highlights Grid */}
          <div className="space-y-8">
            {/* Best Law Firms Badge */}
            <div className="flex justify-center">
              <img 
                title="Best Law Firms - 2024" 
                src="https://brigliahundley.com/wp-content/uploads/briglia-hundley-best-lawyers-badge-2025-400.png" 
                alt="Best Law Firms - 2024 Badge" 
                width="200" 
                height="200" 
                style={{opacity: 1}}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Highlights Grid */}
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