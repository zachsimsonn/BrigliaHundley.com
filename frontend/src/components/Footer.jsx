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
                  <a 
                    href="https://maps.app.goo.gl/Dqo1syhK2exWUfBM6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm leading-relaxed"
                  >
                    {data.business.address}
                  </a>
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
                  <button 
                    onClick={() => window.location.href = `/practice-area/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 text-left"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>{area.title}</span>
                  </button>
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
                <button 
                  onClick={() => window.location.href = '/about'}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = '/attorneys'}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Our Attorneys
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = '/testimonials'}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = '/blog'}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = '/practice-areas'}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  All Practice Areas
                </button>
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
                <div className="text-white font-bold mb-2">Best Lawyers® 2025</div>
                <div className="text-gray-300 text-sm">7 attorneys recognized</div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-white font-bold mb-2">Super Lawyers 2025</div>
                <div className="text-gray-300 text-sm">Multiple attorneys recognized</div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-white font-bold mb-2">Tier 1 Ranked</div>
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
                href="#legal-disclaimer" 
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('legal-disclaimer')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Disclaimer
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div id="legal-disclaimer" className="border-t border-gray-800 mt-8 pt-6">
          <div className="text-gray-400 text-sm leading-relaxed">
            <p className="mb-3">
              <strong>Briglia Hundley®</strong> represents individuals, corporations, and community associations throughout the Mid-Atlantic region, including Alexandria, Annandale, Arlington County, Ashburn, Burke, Centreville, Chantilly, Clifton, District of Columbia, Dulles, Fairfax County, Falls Church, Great Falls, Herndon, Leesburg, Loudoun County, Manassas, Manassas Park, McLean, Middleburg, Montgomery County, Oakton, Prince George's County, Prince William County, Reston, South Riding, Springfield, Sterling, Tysons Corner, Vienna, Winchester and Woodbridge.
            </p>
            <p>
              This website is intended to impart general information and does not offer specific legal advice. Use of this website does not create an attorney-client relationship. If you require legal advice, consult an attorney.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;