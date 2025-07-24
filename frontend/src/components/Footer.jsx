import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = ({ data }) => {
  const practiceAreas = data.practiceAreas.slice(0, 6);
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Practice Areas</h3>
            <div className="space-y-2">
              {data.practiceAreas.slice(0, 6).map((area, index) => (
                <Link
                  key={index}
                  to={`/practice-area/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {area.title}
                </Link>
              ))}
              <Link
                to="/practice-areas"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                View All Practice Areas →
              </Link>
            </div>
          </div>

          {/* Our Attorneys */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Attorneys</h3>
            <div className="space-y-2">
              {data.attorneys.slice(0, 5).map((attorney, index) => (
                <Link
                  key={index}
                  to={`/attorney-profile/${attorney.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {attorney.name}
                </Link>
              ))}
              <Link
                to="/attorneys"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Meet All Attorneys →
              </Link>
            </div>
          </div>

          {/* Areas We Serve */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Areas We Serve</h3>
            <div className="space-y-2">
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">Tysons Corner, VA</a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">Fairfax County, VA</a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">Arlington County, VA</a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">Prince William County, VA</a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">Loudoun County, VA</a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">McLean, VA</a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">Vienna, VA</a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">Falls Church, VA</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <div className="text-white font-medium text-sm mb-1">Address</div>
                <div className="text-gray-300 text-sm leading-relaxed">
                  <a 
                    href="https://maps.app.goo.gl/Dqo1syhK2exWUfBM6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {data.business.address}
                  </a>
                </div>
              </div>
              
              <div>
                <div className="text-white font-medium text-sm mb-1">Phone</div>
                <a 
                  href={`tel:${data.business.phone}`} 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {data.business.phone}
                </a>
              </div>
              
              <div>
                <div className="text-white font-medium text-sm mb-1">Email</div>
                <a 
                  href={`mailto:${data.business.email}`} 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {data.business.email}
                </a>
              </div>

              <div>
                <div className="text-white font-medium text-sm mb-1">Hours</div>
                <div className="text-gray-300 text-sm">Mon-Fri: 9AM-5PM</div>
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
              <Link 
                to="/sitemap" 
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Sitemap
              </Link>
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