import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = ({ data }) => {
  // Take first 3 testimonials for the new design
  const featuredTestimonials = data.testimonials.slice(0, 3);
  
  // State to track which testimonials are expanded
  const [expandedTestimonials, setExpandedTestimonials] = useState({});
  
  // Function to toggle testimonial expansion
  const toggleExpansion = (index, e) => {
    e.preventDefault(); // Prevent the link from being followed
    e.stopPropagation(); // Prevent event bubbling
    setExpandedTestimonials(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  // Function to truncate text
  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what our clients say about their experience with Briglia Hundley®. Our commitment to excellence speaks through their success stories.
          </p>
        </div>

        {/* Three Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial, index) => (
            <a 
              key={index}
              href="https://www.google.com/maps/place/BrigliaHundley,+P.C./@38.9129701,-77.227353,15z/data=!4m6!3m5!1s0x89b64ae4976e9493:0xf1c2bed3d991e301!8m2!3d38.9129464!4d-77.2273128!16s%2Fg%2F1tfwl7cj?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group cursor-pointer"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-700"></div>
              
              <div className="p-8">
                {/* Quote icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gray-700 rounded-full p-3">
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
                  {testimonial.case && (
                    <div className="text-gray-600 text-sm mt-1">
                      {testimonial.case}
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to experience the Briglia Hundley® difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${data.business.phone}`} 
              className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              Call (703) 883-0200
            </a>
            <a 
              href="#contact" 
              className="border-2 border-gray-700 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300"
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