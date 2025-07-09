import React from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, Phone, Mail, Calendar, Award, Users, Scale } from 'lucide-react';

const PracticeAreaPage = ({ areaName, data, onNavigate }) => {
  const practiceArea = data.practiceAreas.find(area => 
    area.title.toLowerCase().replace(/\s+/g, '-') === areaName
  );

  if (!practiceArea) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Practice Area Not Found</h1>
          <Button onClick={() => onNavigate('home')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const relatedAttorneys = data.attorneys.filter(attorney => {
    const areaLower = practiceArea.title.toLowerCase();
    const experienceLower = attorney.experience.toLowerCase();
    
    if (areaLower.includes('family')) return experienceLower.includes('family');
    if (areaLower.includes('commercial') || areaLower.includes('litigation')) return experienceLower.includes('litigation') || experienceLower.includes('commercial');
    if (areaLower.includes('corporate')) return experienceLower.includes('corporate') || experienceLower.includes('business');
    if (areaLower.includes('personal injury')) return experienceLower.includes('personal injury') || experienceLower.includes('civil');
    if (areaLower.includes('estate')) return experienceLower.includes('estate');
    if (areaLower.includes('real estate')) return experienceLower.includes('real estate');
    
    return false;
  }).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            onClick={() => onNavigate('home')}
            variant="ghost"
            className="text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="flex items-center mb-6">
            <Scale className="h-12 w-12 text-gray-300 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">{practiceArea.title}</h1>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl">
            {practiceArea.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive {practiceArea.title} Services
              </h2>
              
              <p className="text-gray-600 mb-8">
                At Briglia Hundley®, our experienced {practiceArea.title.toLowerCase()} attorneys provide comprehensive legal services 
                tailored to meet your specific needs. With decades of combined experience, we understand the complexities involved 
                in {practiceArea.title.toLowerCase()} matters and are committed to achieving the best possible outcomes for our clients.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-gray-600 mb-8">
                We believe in providing personalized attention to each client, ensuring that you understand your options and 
                feel confident in the legal strategy we develop together. Our team combines innovative legal strategies with 
                time-tested approaches to deliver superior results.
              </p>

              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Briglia Hundley®?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Tier 1 ranked law firm with proven track record</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Experienced attorneys with specialized expertise</span>
                  </li>
                  <li className="flex items-start">
                    <Scale className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Comprehensive legal strategies and personalized service</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our {practiceArea.title.toLowerCase()} team today to schedule your free consultation and discuss your legal needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => onNavigate('contact')}
                    className="bg-gray-600 hover:bg-gray-500 text-white"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Consultation
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900"
                    onClick={() => window.location.href = `tel:${data.business.phone}`}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>{data.business.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>{data.business.email}</span>
                </div>
                <div className="flex items-start text-gray-600">
                  <svg className="h-5 w-5 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{data.business.address}</span>
                </div>
              </div>
            </div>

            {relatedAttorneys.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our {practiceArea.title} Attorneys</h3>
                <div className="space-y-4">
                  {relatedAttorneys.map((attorney, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <button
                        onClick={() => onNavigate('attorney-profile', { name: attorney.name.toLowerCase().replace(/\s+/g, '-') })}
                        className="text-left w-full hover:bg-gray-50 p-2 rounded transition-colors duration-200"
                      >
                        <div className="font-medium text-gray-900">{attorney.name}</div>
                        <div className="text-sm text-gray-600">{attorney.position}</div>
                      </button>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => onNavigate('attorneys')}
                  variant="outline"
                  className="w-full mt-4"
                >
                  View All Attorneys
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaPage;