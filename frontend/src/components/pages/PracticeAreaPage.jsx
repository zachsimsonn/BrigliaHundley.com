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

  // Get attorneys for this practice area
  const relatedAttorneys = data.attorneys.filter(attorney => {
    if (practiceArea.attorneys) {
      return practiceArea.attorneys.includes(attorney.name);
    }
    
    // Fallback to current logic if no specific attorneys listed
    const areaLower = practiceArea.title.toLowerCase();
    const experienceLower = attorney.experience.toLowerCase();
    
    if (areaLower.includes('family')) return experienceLower.includes('family');
    if (areaLower.includes('commercial') || areaLower.includes('litigation') || areaLower.includes('business')) return experienceLower.includes('litigation') || experienceLower.includes('commercial');
    if (areaLower.includes('corporate')) return experienceLower.includes('corporate') || experienceLower.includes('business');
    if (areaLower.includes('personal injury')) return experienceLower.includes('personal injury') || experienceLower.includes('civil');
    if (areaLower.includes('estate')) return experienceLower.includes('estate');
    if (areaLower.includes('real estate')) return experienceLower.includes('real estate');
    if (areaLower.includes('criminal')) return experienceLower.includes('criminal');
    if (areaLower.includes('employment')) return experienceLower.includes('employment');
    if (areaLower.includes('municipal')) return experienceLower.includes('municipal');
    
    return false;
  });

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
              {/* Hero Image */}
              {practiceArea.image && (
                <div className="mb-8 rounded-lg overflow-hidden bg-gray-200">
                  <img 
                    src={practiceArea.image} 
                    alt={practiceArea.title}
                    className="w-full h-96 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-96 bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center text-white" style={{display: 'none'}}>
                    <div className="text-center">
                      <Scale className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                      <h3 className="text-2xl font-bold">{practiceArea.title}</h3>
                      <p className="text-gray-300 mt-2">Professional Legal Services</p>
                    </div>
                  </div>
                </div>
              )}

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {practiceArea.title}
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {practiceArea.fullDescription || practiceArea.description}
              </p>

              {/* Detailed Content Sections */}
              {practiceArea.detailedContent && practiceArea.detailedContent.sections && (
                <div className="space-y-8 mb-8">
                  {practiceArea.detailedContent.sections.map((section, index) => (
                    <div key={index} className="bg-white border-l-4 border-gray-900 pl-6 py-4">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                      <div className="text-gray-600 whitespace-pre-line mb-4">
                        {section.content}
                      </div>
                      {section.subServices && (
                        <ul className="space-y-2 text-gray-600 ml-4">
                          {section.subServices.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-start">
                              <Scale className="h-4 w-4 text-gray-600 mt-1 mr-2 flex-shrink-0" />
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Services List */}
              {practiceArea.services && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Services Include:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {practiceArea.services.map((service, index) => (
                      <div key={index} className="flex items-start">
                        <Scale className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Briglia Hundley® for {practiceArea.title}?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Tier 1 ranked law firm with proven track record in {practiceArea.title.toLowerCase()}</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Experienced attorneys with specialized expertise in {practiceArea.title.toLowerCase()}</span>
                  </li>
                  <li className="flex items-start">
                    <Scale className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Comprehensive legal strategies and personalized service</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Serving Northern Virginia, Washington D.C., and Maryland</span>
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
                    className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
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
                        <div className="flex items-center space-x-3">
                          {attorney.image && (
                            <img 
                              src={attorney.image} 
                              alt={attorney.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                          )}
                          <div>
                            <div className="font-medium text-gray-900">{attorney.name}</div>
                            <div className="text-sm text-gray-600">{attorney.position}</div>
                            {attorney.phone && (
                              <div className="text-xs text-gray-500">{attorney.phone}</div>
                            )}
                          </div>
                        </div>
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