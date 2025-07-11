import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const VideoHero = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Excellence in Legal Representation",
      subtitle: "Serving the Washington D.C. Metropolitan Area Since 1993",
      description: "Tier 1 ranked law firm delivering superior client service and innovative legal strategies throughout Northern Virginia, Washington D.C., and Maryland.",
      cta: "Schedule a Free Consultation",
      ctaSecondary: "Call (703) 883-0200"
    },
    {
      id: 2,
      title: "Founded on Excellence",
      subtitle: "James W. Hundley & Steven D. Briglia",
      description: "Our founding partners bring over 60 years of combined legal experience, with recognition from Best Lawyers, Super Lawyers, and Martindale-Hubbell's highest AV rating.",
      cta: "Meet Our Team",
      ctaSecondary: "Learn About Our Founders"
    },
    {
      id: 3,
      title: "Award-Winning Legal Team",
      subtitle: "14+ Experienced Attorneys",
      description: "Our attorneys are recognized leaders in their fields, with former prosecutors, federal court clerks, and attorneys from top regional firms.",
      cta: "View All Attorneys",
      ctaSecondary: "Our Practice Areas"
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
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlideData = slides[currentSlide];

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
              transform: 'scale(1.1)', // Slight zoom to ensure no black bars
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Briglia Hundley Background Video"
          />
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  {currentSlideData.title}
                </h1>
                <h2 className="text-xl lg:text-2xl text-gray-200 font-medium">
                  {currentSlideData.subtitle}
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  {currentSlideData.description}
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-800 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  {currentSlideData.cta}
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl">
                  {currentSlideData.ctaSecondary}
                </button>
              </div>
            </div>

            {/* Right Column - Founder Images or Stats */}
            {currentSlide === 1 && (
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                    <div className="text-3xl font-bold text-blue-300 mb-2">30+</div>
                    <div className="text-sm">Years of Experience</div>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                    <div className="text-3xl font-bold text-blue-300 mb-2">14+</div>
                    <div className="text-sm">Expert Attorneys</div>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                    <div className="text-3xl font-bold text-blue-300 mb-2">1993</div>
                    <div className="text-sm">Established</div>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                    <div className="text-3xl font-bold text-blue-300 mb-2">Tier 1</div>
                    <div className="text-sm">Ranked Firm</div>
                  </div>
                </div>
              </div>
            )}
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

      {/* Video Controls */}
      <div className="absolute top-8 right-8 z-20">
        <button
          onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
        >
          {isVideoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="text-white text-sm opacity-70">
          <div className="flex flex-col items-center space-y-2">
            <span>Scroll</span>
            <div className="w-px h-8 bg-white opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;