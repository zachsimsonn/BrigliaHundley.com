import React, { useState } from 'react';
import { Award, Users, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const About = ({ data, editableContent }) => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  const nextAnnouncement = () => {
    setCurrentAnnouncement((prev) => (prev + 1) % data.announcements.length);
  };

  const prevAnnouncement = () => {
    setCurrentAnnouncement((prev) => (prev - 1 + data.announcements.length) % data.announcements.length);
  };

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
      title: "14+ Attorneys",
      description: "Experienced legal professionals"
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-900" />,
      title: "Northern Virginia",
      description: "Serving Loudoun County, Fairfax, Arlington, Prince William County"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                {editableContent.about.title}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {editableContent.about.content}
            </p>

            {/* Announcements with Arrow Navigation */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Announcements</h3>
              <div className="relative">
                <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-8 text-white h-[240px] flex items-center">
                  <div className="w-full text-center">
                    <h4 className="text-xl lg:text-2xl font-bold mb-3 leading-tight">
                      {data.announcements[currentAnnouncement].title}
                    </h4>
                    {data.announcements[currentAnnouncement].content && (
                      <p className="text-base text-gray-100 mb-4 max-w-2xl mx-auto leading-relaxed">
                        {data.announcements[currentAnnouncement].content}
                      </p>
                    )}
                    {data.announcements[currentAnnouncement].link && (
                      <a 
                        href={data.announcements[currentAnnouncement].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-300 hover:text-white underline transition-colors duration-300"
                      >
                        Learn More
                      </a>
                    )}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center space-x-4 mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevAnnouncement}
                    className="border-white text-white hover:bg-white hover:text-gray-900 rounded-full w-12 h-12 p-0 bg-gray-700/50 backdrop-blur-sm"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextAnnouncement}
                    className="border-white text-white hover:bg-white hover:text-gray-900 rounded-full w-12 h-12 p-0 bg-gray-700/50 backdrop-blur-sm"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-4">
                  {data.announcements.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAnnouncement(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentAnnouncement
                          ? 'bg-white w-8'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
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

        {/* Bottom Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">1993</div>
              <div className="text-gray-600">Established</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">13</div>
              <div className="text-gray-600">Practice Areas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Attorneys</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">30+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;