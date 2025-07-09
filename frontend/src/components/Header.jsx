import React, { useState } from 'react';
import { Button } from './ui/button';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const Header = ({ data, onEdit, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="h-16 w-48 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg flex items-center justify-center cursor-pointer"
                 onClick={() => handleNavigate('home')}>
              <span className="text-white text-xl font-bold">{data.business.name}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-8">
              <button 
                onClick={() => handleNavigate('home')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigate('about')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                About
              </button>
              
              {/* Practice Areas Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => handleDropdownToggle('services')}
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      {data.practiceAreas.map((area, index) => (
                        <button
                          key={index}
                          onClick={() => handleNavigate('practice-area', { area: area.title.toLowerCase().replace(/\s+/g, '-') })}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                          {area.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Attorneys Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => handleDropdownToggle('attorneys')}
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Attorneys <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'attorneys' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                    <div className="py-2">
                      <button
                        onClick={() => handleNavigate('attorneys')}
                        className="block w-full text-left px-4 py-2 text-gray-900 font-medium hover:bg-gray-50 border-b border-gray-100"
                      >
                        All Attorneys
                      </button>
                      {data.attorneys.map((attorney, index) => (
                        <button
                          key={index}
                          onClick={() => handleNavigate('attorney-profile', { name: attorney.name.toLowerCase().replace(/\s+/g, '-') })}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="font-medium">{attorney.name}</div>
                          <div className="text-sm text-gray-500">{attorney.position}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleNavigate('testimonials')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavigate('blog')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Blog
              </button>
              <button 
                onClick={() => handleNavigate('contact')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                onClick={() => handleNavigate('contact')}
              >
                Schedule a Free Consultation
              </Button>
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = `tel:${data.business.phone}`}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
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
              
              {/* Mobile Services */}
              <div>
                <div className="font-medium text-gray-900 mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  {data.practiceAreas.map((area, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigate('practice-area', { area: area.title.toLowerCase().replace(/\s+/g, '-') })}
                      className="block text-left text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                      {area.title}
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
                className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                onClick={() => window.location.href = `tel:${data.business.phone}`}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;