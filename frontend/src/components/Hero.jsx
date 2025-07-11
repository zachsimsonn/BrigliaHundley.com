import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Shield, Award, MapPin } from 'lucide-react';

const Hero = ({ data, editableContent }) => {
  return (
    <section className="relative bg-white text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0" style={{ top: '-80px', height: 'calc(100% + 80px)' }}>
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
        
        {/* Very light overlay for minimal darkening */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10" style={{ paddingTop: '80px' }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 space-x-2 border border-white/30">
              <Award className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Tier 1 Ranked Law Firm</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              {editableContent.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-white leading-relaxed drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
              {editableContent.hero.subtitle}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 py-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>30+</div>
                <div className="text-white drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>Years of Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>7</div>
                <div className="text-white drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>Best Lawyers® 2025</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 text-white drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
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
                    <Shield className="h-8 w-8 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>Trusted Legal Experts</h3>
                      <p className="text-white drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>14 attorneys</p>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-white pl-6">
                    <blockquote className="text-lg italic text-white drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                      "Delivering superior client service and innovative legal strategies since 1993"
                    </blockquote>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Multiple</div>
                      <div className="text-sm text-white drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>Practice Areas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>15+</div>
                      <div className="text-sm text-white drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>Multiple attorneys recognized</div>
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