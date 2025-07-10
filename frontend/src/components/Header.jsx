import React, { useState } from 'react';
import { Button } from './ui/button';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const Header = ({ data, onEdit, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Function to determine if a page is active and return appropriate classes
  const getNavItemClass = (page) => {
    const baseClass = "transition-colors duration-200 font-bold";
    const isActive = currentPage === page;
    
    if (isActive) {
      return `${baseClass} text-gray-900 font-black`; // Darker and bolder when active
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
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-gray-900 font-serif cursor-pointer" onClick={() => handleNavigate('home')}>
              {data.business.logo ? (
                <img src={data.business.logo} alt="Briglia Hundley® Law Firm Logo" className="h-12 w-auto object-contain" />
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
          <div className="hidden md:flex items-center justify-center flex-1">
            <nav className="flex space-x-8">
              <button 
                onClick={() => handleNavigate('home')}
                className={getNavItemClass('home')}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigate('about')}
                className={getNavItemClass('about')}
              >
                About
              </button>
              
              {/* Practice Areas Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => handleDropdownToggle('services')}
                  className={`flex items-center transition-colors duration-200 font-bold ${
                    currentPage === 'practice-area' ? 'text-gray-900 font-black' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Practice Areas <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      <div className="grid grid-cols-4 gap-2">
                        {data.practiceAreas.map((area, index) => (
                          <button
                            key={index}
                            onClick={() => handleNavigate('practice-area', { area: area.title.toLowerCase().replace(/\s+/g, '-') })}
                            className="text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded transition-colors duration-200"
                          >
                            <div className="font-medium text-sm">{area.title}</div>
                          </button>
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
                  className={`flex items-center transition-colors duration-200 font-bold ${
                    (currentPage === 'attorneys' || currentPage === 'attorney-profile') ? 'text-gray-900 font-black' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Attorneys <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'attorneys' && (
                  <div className="absolute top-full left-0 mt-2 w-[32rem] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      <button
                        onClick={() => handleNavigate('attorneys')}
                        className="w-full text-left px-3 py-2 text-gray-900 font-medium hover:bg-gray-50 border-b border-gray-100 mb-2 rounded"
                      >
                        All Attorneys
                      </button>
                      <div className="grid grid-cols-3 gap-2">
                        {data.attorneys.map((attorney, index) => (
                          <button
                            key={index}
                            onClick={() => handleNavigate('attorney-profile', { name: attorney.name.toLowerCase().replace(/\s+/g, '-') })}
                            className="text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded transition-colors duration-200"
                          >
                            <div className="font-medium text-sm">{attorney.name}</div>
                            <div className="text-xs text-gray-500">{attorney.position}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleNavigate('testimonials')}
                className={getNavItemClass('testimonials')}
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavigate('blog')}
                className={getNavItemClass('blog')}
              >
                Blog
              </button>
              <button 
                onClick={() => handleNavigate('contact')}
                className={getNavItemClass('contact')}
              >
                Contact
              </button>
            </nav>
          </div>
            
          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              onClick={() => handleNavigate('contact')}
            >
              Schedule a Free Consultation
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              onClick={() => window.location.href = `tel:${data.business.phone}`}
            >
              <Phone className="mr-2 h-4 w-4" />
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