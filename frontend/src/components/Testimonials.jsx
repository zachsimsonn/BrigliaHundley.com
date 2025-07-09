import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const Testimonials = ({ data }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % data.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + data.testimonials.length) % data.testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what our clients say about their experience with Briglia Hundley®. Our commitment to excellence speaks through their success stories.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-white">
            <div className="flex items-center justify-center mb-8">
              <Quote className="h-12 w-12 text-yellow-400" />
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                "{data.testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-lg font-semibold text-yellow-400">
                  {data.testimonials[currentTestimonial].author}
                </div>
                <div className="text-blue-100">
                  {data.testimonials[currentTestimonial].case}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-white text-white hover:bg-white hover:text-blue-900 rounded-full w-12 h-12 p-0"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-white text-white hover:bg-white hover:text-blue-900 rounded-full w-12 h-12 p-0"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {data.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-yellow-400 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">5-Star Reviews</h3>
            <p className="text-gray-600">Consistently high ratings from satisfied clients</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Quote className="h-8 w-8 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Focused</h3>
            <p className="text-gray-600">Dedicated to achieving the best outcomes</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
            <p className="text-gray-600">Track record of successful outcomes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;