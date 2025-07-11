import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Award, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const VideoHero = ({ data, editableContent }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      showContent: true
    },
    {
      id: 2, 
      showContent: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/657950052?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1"
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
              width: '100vw',
              height: '100vh',
              minWidth: '100%',
              minHeight: '100%',
              transform: 'scale(1.1)',
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Briglia Hundley Background Video"
          />
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-900/80"></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 space-x-2">
                <Award className="h-5 w-5 text-gray-300" />
                <span className="text-sm font-semibold">Tier 1 Ranked Law Firm</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                {editableContent.hero.title}
              </h1>

              {/* Subtitle */}
              <p className="text-lg lg:text-xl text-gray-100 leading-relaxed">
                {editableContent.hero.subtitle}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 py-6">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-300">30+</div>
                  <div className="text-gray-100">Years of Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-300">7</div>
                  <div className="text-gray-100">Best Lawyers® 2025</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-2 text-gray-100">
                <MapPin className="h-5 w-5" />
                <span>{data.business.location}</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  {editableContent.hero.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={() => window.location.href = `tel:${data.business.phone}`}
                >
                  {editableContent.hero.buttonPhone}
                </Button>
              </div>
            </div>

            {/* Right Content - Trust Indicators */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-8 w-8 text-gray-300" />
                      <div>
                        <h3 className="text-xl font-semibold text-white">Trusted Legal Experts</h3>
                        <p className="text-gray-300">AV Rated Attorneys</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Award className="h-8 w-8 text-gray-300" />
                      <div>
                        <h3 className="text-xl font-semibold text-white">Award Winning</h3>
                        <p className="text-gray-300">Best Lawyers & Super Lawyers</p>
                      </div>
                    </div>

                    <div className="border-t border-white/20 pt-6">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-white">14+</div>
                          <div className="text-sm text-gray-300">Attorneys</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">1993</div>
                          <div className="text-sm text-gray-300">Established</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white w-8'
                    : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;