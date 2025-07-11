import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const Header = ({ data, onEdit, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Function to determine if a page is active and return appropriate classes
  const getNavItemClass = (path) => {
    const baseClass = "transition-colors duration-200";
    const isActive = location.pathname === path;
    
    if (isActive) {
      return `${baseClass} text-gray-900`; // Darker when active
    }
    return `${baseClass} text-gray-700 hover:text-gray-900`;
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleNavigate = (page, params = {}) => {
    onNavigate(page, params);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 min-h-[72px]">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="text-gray-900 font-serif cursor-pointer" onClick={() => handleNavigate('home')}>
              {data.business.logo ? (
                <img 
                  src={data.business.logo} 
                  alt="Briglia Hundley® Law Firm Logo" 
                  className="h-16 w-16 object-contain"
                  style={{ filter: 'none' }}
                />
              ) : (
                <div>
                  <div className="text-2xl font-bold leading-tight">BRIGLIA</div>
                  <div className="text-2xl font-bold leading-tight">HUNDLEY</div>
                  <div className="text-lg font-normal">PC</div>
                </div>
              )}
            </div>
          </div>

          {/* Centered Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 px-4">
            <nav className="flex space-x-4">
              <Link 
                to="/"
                className={getNavItemClass('/')}
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '700', letterSpacing: '0.5px', fontSize: '14px' }}
              >
                HOME
              </Link>
              <Link 
                to="/about"
                className={getNavItemClass('/about')}
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '700', letterSpacing: '0.5px', fontSize: '14px' }}
              >
                THE FIRM
              </Link>
              
              {/* Practice Areas Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => handleDropdownToggle('services')}
                  className={`flex items-center transition-colors duration-200 ${
                    currentPage === 'practice-area' ? 'text-gray-900 font-black' : 'text-gray-700 hover:text-gray-900'
                  }`}
                  style={{ fontFamily: 'Arial, sans-serif', fontWeight: '700', letterSpacing: '0.5px', fontSize: '14px' }}
                >
                  PRACTICE AREAS <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      <Link
                        to="/practice-areas"
                        className="w-full text-left px-3 py-2 text-gray-900 font-medium hover:bg-gray-50 border-b border-gray-100 mb-2 rounded block"
                      >
                        All Practice Areas
                      </Link>
                      <div className="grid grid-cols-3 gap-2">
                        {data.practiceAreas.map((area, index) => (
                          <Link
                            key={index}
                            to={`/practice-area/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded transition-colors duration-200"
                          >
                            {area.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Attorneys Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => handleDropdownToggle('attorneys')}
                  className={`flex items-center transition-colors duration-200 ${
                    (currentPage === 'attorneys' || currentPage === 'attorney-profile') ? 'text-gray-900 font-black' : 'text-gray-700 hover:text-gray-900'
                  }`}
                  style={{ fontFamily: 'Arial, sans-serif', fontWeight: '700', letterSpacing: '0.5px', fontSize: '14px' }}
                >
                  OUR ATTORNEYS <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'attorneys' && (
                  <div className="absolute top-full left-0 mt-2 w-[40rem] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      <Link
                        to="/attorneys"
                        className="w-full text-left px-3 py-2 text-gray-900 font-medium hover:bg-gray-50 border-b border-gray-100 mb-2 rounded block"
                      >
                        All Attorneys
                      </Link>
                      <div className="grid grid-cols-3 gap-2">
                        {data.attorneys.map((attorney, index) => (
                          <Link
                            key={index}
                            to={`/attorney-profile/${attorney.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded transition-colors duration-200"
                          >
                            {attorney.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleNavigate('blog')}
                className={getNavItemClass('blog')}
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '700', letterSpacing: '0.5px', fontSize: '14px' }}
              >
                RESOURCES
              </button>
              <button 
                onClick={() => handleNavigate('contact')}
                className={getNavItemClass('contact')}
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '700', letterSpacing: '0.5px', fontSize: '14px' }}
              >
                CONTACT US
              </button>
            </nav>
          </div>
            
          {/* Right Side Buttons - Compact spacing */}
          <div className="hidden md:flex items-center space-x-2 flex-shrink-0 ml-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-xs px-3 py-2"
              onClick={() => handleNavigate('contact')}
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500' }}
            >
              Schedule a Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-xs px-3 py-2"
              onClick={() => window.location.href = `tel:${data.business.phone}`}
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500' }}
            >
              <Phone className="mr-1 h-3 w-3" />
              <span className="font-medium">Call Now</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigate('home')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigate('about')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                About
              </button>
              
              {/* Mobile Practice Areas */}
              <div>
                <div className="font-medium text-gray-900 mb-2">Practice Areas</div>
                <div className="pl-4 space-y-2">
                  {data.practiceAreas.map((area, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigate('practice-area', { area: area.title.toLowerCase().replace(/\s+/g, '-') })}
                      className="block text-left text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                      <div className="font-medium text-sm">{area.title}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Attorneys */}
              <div>
                <div className="font-medium text-gray-900 mb-2">Attorneys</div>
                <div className="pl-4 space-y-2 max-h-40 overflow-y-auto">
                  <button
                    onClick={() => handleNavigate('attorneys')}
                    className="block text-left text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium"
                  >
                    All Attorneys
                  </button>
                  {data.attorneys.map((attorney, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigate('attorney-profile', { name: attorney.name.toLowerCase().replace(/\s+/g, '-') })}
                      className="block text-left text-gray-600 hover:text-gray-800 transition-colors duration-200 text-sm"
                    >
                      {attorney.name}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => handleNavigate('testimonials')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavigate('blog')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Blog
              </button>
              <button 
                onClick={() => handleNavigate('contact')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
            <div className="mt-4 space-y-2">
              <Button 
                variant="outline" 
                className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                onClick={() => handleNavigate('contact')}
              >
                Schedule a Free Consultation
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                onClick={() => window.location.href = `tel:${data.business.phone}`}
              >
                <Phone className="mr-2 h-4 w-4" />
                <span className="font-medium">Call Now</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;