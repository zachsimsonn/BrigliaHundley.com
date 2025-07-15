import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Shield, Award, MapPin } from 'lucide-react';

const Hero = ({ data, editableContent }) => {
  return (
    <section className="relative text-white overflow-hidden min-h-screen w-full" style={{ margin: 0, padding: 0 }}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/657950052?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&quality=480p&speed=1&controls=0&autopause=0&dnt=1"
          className="absolute"
          style={{
            width: '100vw',
            height: '100vh',
            minWidth: '100vw',
            minHeight: '100vh',
            border: 'none',
            objectFit: 'cover',
            margin: 0,
            padding: 0,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%) scale(1.2)',
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
          <div className="grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8" style={{ paddingTop: '120px', maxWidth: '1280px', margin: '0 auto' }}>
            <div className="space-y-8">
              <div className="inline-flex items-center bg-transparent backdrop-blur-sm rounded-full px-4 py-2 space-x-2 border border-white/30">
                <Award className="h-5 w-5 text-white" />
                <span className="text-base font-semibold text-white drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.8) 1px 1px 2px' }}>Tier 1 Ranked Law Firm</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-none text-white drop-shadow-lg" style={{ textShadow: 'rgba(0, 0, 0, 0.8) 2px 2px 4px', lineHeight: '1.1' }}>
                Briglia Hundley is an award-winning law firm located in Tysons Corner, Fairfax County, Virginia.
              </h1>
              <p className="text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 3px' }}>
                Our seasoned attorneys are committed to providing superior service on every matter entrusted to our care.
              </p>
              <div className="grid grid-cols-2 gap-8 py-6">
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-white drop-shadow-lg" style={{ textShadow: 'rgba(0, 0, 0, 0.8) 2px 2px 4px' }}>30+</div>
                  <div className="text-base text-white drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 3px' }}>Years of Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-white drop-shadow-lg" style={{ textShadow: 'rgba(0, 0, 0, 0.8) 2px 2px 4px' }}>7</div>
                  <div className="text-base text-white drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 3px' }}>Best Lawyers® 2025</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-base text-white drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 3px' }}>
                <MapPin className="h-5 w-5" />
                <a 
                  href="https://maps.app.goo.gl/Dqo1syhK2exWUfBM6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Tysons Corner, Fairfax County, Virginia
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Call Now
                </button>
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
                    <div className="border-l-4 border-white pl-6">
                      <blockquote className="text-xl italic text-white drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 3px' }}>
                        "Delivering superior client service and innovative legal strategies since 1993"
                      </blockquote>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: 'rgba(0, 0, 0, 0.8) 2px 2px 4px' }}>12</div>
                        <div className="text-base text-white drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 2px' }}>Practice Areas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: 'rgba(0, 0, 0, 0.8) 2px 2px 4px' }}>14</div>
                        <div className="text-base text-white drop-shadow-md" style={{ textShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 2px' }}>Attorneys</div>
                      </div>
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