import React, { useState } from 'react';
import { Button } from './ui/button';
import { Phone, Menu, X } from 'lucide-react';

const Header = ({ data, onEdit }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="h-16 w-48 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">{data.business.name}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">Services</a>
              <a href="#attorneys" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">Attorneys</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Free Consultation
              </Button>
              <Button 
                className="bg-blue-900 hover:bg-blue-800 text-white transition-all duration-300 transform hover:scale-105"
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
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">Services</a>
              <a href="#attorneys" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">Attorneys</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors duration-200">Contact</a>
            </nav>
            <div className="mt-4 space-y-2">
              <Button 
                variant="outline" 
                className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Free Consultation
              </Button>
              <Button 
                className="w-full bg-blue-900 hover:bg-blue-800 text-white"
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