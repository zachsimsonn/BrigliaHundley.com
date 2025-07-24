import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, Shield, Award, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = ({ data, editableContent }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="relative text-white overflow-hidden min-h-screen w-full" style={{ margin: 0, padding: 0 }}>
      
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-50">
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 transform hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
      </div>
      
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-50">
        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 transform hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Slide 1: Video with Content (Original) */}
      <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${currentSlide === 0 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/657950052?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&quality=480p&speed=1&controls=0&autopause=0&dnt=1"
            className="absolute w-full h-full"
            style={{
              width: '100%',
              height: '100%',
              minWidth: '100%',
              minHeight: '100%',
              border: 'none',
              objectFit: 'cover',
              margin: 0,
              padding: 0,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%) scale(1.1)',
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="Briglia Hundley Background Video"
            preload="none"
          />
          
          {/* Very light overlay for minimal darkening */}
          <div className="absolute inset-0 bg-black/10" style={{ margin: 0, padding: 0 }}></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-5">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center min-h-screen w-full" style={{ margin: 0, padding: 0 }}>
          <div className="w-full" style={{ margin: 0, padding: 0 }}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8" style={{ paddingTop: '120px', maxWidth: '1280px', margin: '0 auto' }}>
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center bg-transparent backdrop-blur-sm rounded-full px-4 py-2 space-x-2 border border-white/30">
                  <Award className="h-5 w-5 text-white" />
                  <span className="text-sm lg:text-base font-semibold text-white drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.8) 1px 1px 2px' }}>Tier 1 Ranked Law Firm</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight lg:leading-none text-white drop-shadow-lg" style={{ textShadow: 'rgba(0, 0, 0, 0.8) 2px 2px 4px', lineHeight: '1.1' }}>
                  Briglia Hundley is an award-winning law firm located in Tysons Corner, Fairfax County, Virginia.
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 3px' }}>
                  Our seasoned attorneys are committed to providing superior service on every matter entrusted to our care.
                </p>
                <div className="grid grid-cols-2 gap-4 lg:gap-8 py-4 lg:py-6 justify-items-center lg:justify-items-start">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg" style={{ textShadow: 'rgba(0, 0, 0, 0.8) 2px 2px 4px' }}>30+</div>
                    <div className="text-sm lg:text-base text-white drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 3px' }}>Years of Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg" style={{ textShadow: 'rgba(0, 0, 0, 0.8) 2px 2px 4px' }}>7</div>
                    <div className="text-sm lg:text-base text-white drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 3px' }}>Best Lawyers® 2025</div>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm lg:text-base text-white drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 3px' }}>
                  <MapPin className="h-4 w-4 lg:h-5 lg:w-5" />
                  <a 
                    href="https://maps.app.goo.gl/Dqo1syhK2exWUfBM6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-200 transition-colors duration-200"
                  >
                    Tysons Corner, Virginia
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4 items-center">
                  <Link 
                    to="/contact"
                    state={{ consultation: true, message: "I would like to schedule a free consultation to discuss my legal needs." }}
                    className="w-full sm:w-auto inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Schedule a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                  </Link>
                  <a 
                    href={`tel:${data.business.phone}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Call Now
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-8 w-8 text-white" />
                        <div>
                          <h3 className="text-2xl font-semibold text-white drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.8) 1px 1px 3px' }}>Trusted Legal Experts</h3>
                        </div>
                      </div>
                      <blockquote className="text-lg italic text-white drop-shadow-md leading-relaxed" style={{ textShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 3px' }}>
                        "Delivering superior client service and innovative legal strategies since 1993"
                      </blockquote>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white drop-shadow-lg" style={{ textShadow: 'rgba(0, 0, 0, 0.8) 2px 2px 4px' }}>12</div>
                          <div className="text-sm text-white drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 3px' }}>Practice Areas</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white drop-shadow-lg" style={{ textShadow: 'rgba(0, 0, 0, 0.8) 2px 2px 4px' }}>14</div>
                          <div className="text-sm text-white drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 3px' }}>Attorneys</div>
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

      {/* Slide 2: Clean Image Only */}
      <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${currentSlide === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
        {/* Image Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img
            src="./attorneys-hero-image.jpg"
            alt="Briglia Hundley Attorneys"
            className="absolute w-full h-full object-cover"
            style={{
              width: '100%',
              height: '100%',
              minWidth: '100%',
              minHeight: '100%',
              margin: 0,
              padding: 0,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          
          {/* Subtle overlay for consistency */}
          <div className="absolute inset-0 bg-black/10" style={{ margin: 0, padding: 0 }}></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;