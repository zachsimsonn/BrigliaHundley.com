import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Shield, Award, MapPin } from 'lucide-react';

const Hero = ({ data, editableContent }) => {
  return (
    <section className="relative bg-white text-white overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
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
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-800/50 to-gray-900/60"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
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
                      <h3 className="text-xl font-semibold">Trusted Legal Experts</h3>
                      <p className="text-gray-100">14 attorneys</p>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-gray-300 pl-6">
                    <blockquote className="text-lg italic text-gray-100">
                      "Delivering superior client service and innovative legal strategies since 1993"
                    </blockquote>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-300">Multiple</div>
                      <div className="text-sm text-gray-100">Practice Areas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-300">15+</div>
                      <div className="text-sm text-gray-100">Expert Attorneys</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;