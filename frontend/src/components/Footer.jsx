import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const Footer = ({ data }) => {
  const practiceAreas = data.practiceAreas.slice(0, 6);
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {data.business.name}
              </h3>
              <p className="text-gray-300 text-sm">
                Tier 1 ranked law firm serving the Mid-Atlantic region since 1993
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {data.business.address}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a 
                  href={`tel:${data.business.phone}`} 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {data.business.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a 
                  href={`mailto:${data.business.email}`} 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {data.business.email}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">Mon-Fri: 9AM-5PM</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {practiceAreas.map((area, index) => (
                <li key={index}>
                  <a 
                    href={area.url}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>{area.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#attorneys" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Our Attorneys
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Client Reviews
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Recognition */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">
              Recognition
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-yellow-400 font-semibold mb-2">Best Lawyers® 2025</div>
                <div className="text-gray-300 text-sm">7 attorneys recognized</div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-yellow-400 font-semibold mb-2">Super Lawyers 2025</div>
                <div className="text-gray-300 text-sm">Multiple attorneys recognized</div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-yellow-400 font-semibold mb-2">Tier 1 Ranked</div>
                <div className="text-gray-300 text-sm">Best Law Firms</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 {data.business.name}. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;