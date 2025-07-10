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
                <div className="bg-blue-50 rounded-lg p-6 min-h-[140px] flex items-center">
                  <div className="w-full">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-900 rounded-full mt-2.5 flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-gray-900 mb-2 leading-tight">
                          {data.announcements[currentAnnouncement].title}
                        </h4>
                        {data.announcements[currentAnnouncement].content && (
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            {data.announcements[currentAnnouncement].content}
                          </p>
                        )}
                        {data.announcements[currentAnnouncement].link && (
                          <a 
                            href={data.announcements[currentAnnouncement].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-900 hover:text-blue-700 underline"
                          >
                            Learn More
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center space-x-4 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevAnnouncement}
                    className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white rounded-full w-10 h-10 p-0"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextAnnouncement}
                    className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white rounded-full w-10 h-10 p-0"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-3">
                  {data.announcements.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAnnouncement(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentAnnouncement
                          ? 'bg-blue-900 w-6'
                          : 'bg-gray-300 hover:bg-gray-400'
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