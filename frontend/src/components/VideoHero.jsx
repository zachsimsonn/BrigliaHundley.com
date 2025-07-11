import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Award, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const VideoHero = ({ data, editableContent }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, showContent: true },
    { id: 2, showContent: true }
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
    <section className="relative text-white overflow-hidden">
      {/* Video Background - Full Coverage */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/657950052?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            minWidth: '100%',
            minHeight: '100%',
            border: 'none',
            objectFit: 'cover',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Briglia Hundley Background Video"
        />
        
        {/* Lighter overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/15 backdrop-blur-md rounded-full px-6 py-3 space-x-3 shadow-xl">
              <Award className="h-6 w-6 text-yellow-300" />
              <span className="text-base font-bold text-white">Tier 1 Ranked Law Firm</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-black leading-tight text-white drop-shadow-lg">
              {editableContent.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed font-light drop-shadow-md">
              {editableContent.hero.subtitle}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 py-8">
              <div className="text-center lg:text-left">
                <div className="text-4xl lg:text-5xl font-black text-yellow-300 drop-shadow-lg">30+</div>
                <div className="text-lg text-gray-100 font-medium">Years of Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl lg:text-5xl font-black text-yellow-300 drop-shadow-lg">7</div>
                <div className="text-lg text-gray-100 font-medium">Best Lawyers® 2025</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3 text-gray-100 text-lg">
              <MapPin className="h-6 w-6" />
              <span className="font-medium">{data.business.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-white to-gray-100 text-gray-900 hover:from-gray-100 hover:to-white font-bold px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                {editableContent.hero.buttonText}
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-white to-gray-100 text-gray-900 hover:from-gray-100 hover:to-white font-bold px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
                onClick={() => window.location.href = `tel:${data.business.phone}`}
              >
                {editableContent.hero.buttonPhone}
              </Button>
            </div>
          </div>

          {/* Right Content - Trust Indicators */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <Shield className="h-10 w-10 text-yellow-300" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">Trusted Legal Experts</h3>
                      <p className="text-gray-200 text-lg">AV Rated Attorneys</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Award className="h-10 w-10 text-yellow-300" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">Award Winning</h3>
                      <p className="text-gray-200 text-lg">Best Lawyers & Super Lawyers</p>
                    </div>
                  </div>

                  <div className="border-t border-white/30 pt-8">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-black text-yellow-300">14+</div>
                        <div className="text-base text-gray-200 font-medium">Attorneys</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-yellow-300">1993</div>
                        <div className="text-base text-gray-200 font-medium">Established</div>
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