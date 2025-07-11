import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = ({ data }) => {
  // Take first 3 testimonials for the new design
  const featuredTestimonials = data.testimonials.slice(0, 3);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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

        {/* Three Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-900 to-blue-700"></div>
              
              <div className="p-8">
                {/* Quote icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-full p-3">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-gray-700 text-center leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author info */}
                <div className="text-center border-t border-gray-200 pt-6">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonial.author}
                  </div>
                  {testimonial.title && (
                    <div className="text-gray-600 text-sm mt-1">
                      {testimonial.title}
                    </div>
                  )}
                  {testimonial.location && (
                    <div className="text-gray-500 text-sm mt-1">
                      {testimonial.location}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to experience the Briglia Hundley® difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:703-883-0200" 
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Call (703) 883-0200
            </a>
            <a 
              href="#contact" 
              className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
                </div>
                <div className="text-gray-100">
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
                className="border-white text-white hover:bg-white hover:text-gray-900 rounded-full w-12 h-12 p-0"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-white text-white hover:bg-white hover:text-gray-900 rounded-full w-12 h-12 p-0"
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
                      ? 'bg-gray-300 w-8'
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