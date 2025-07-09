import React from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, Phone, Mail, Calendar, Award, Star, User } from 'lucide-react';

const AttorneyProfilePage = ({ attorneyName, data, onNavigate }) => {
  const attorney = data.attorneys.find(att => 
    att.name.toLowerCase().replace(/\s+/g, '-') === attorneyName
  );

  if (!attorney) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Attorney Not Found</h1>
          <Button onClick={() => onNavigate('home')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const relatedPracticeAreas = data.practiceAreas.filter(area => {
    const experienceLower = attorney.experience.toLowerCase();
    const areaLower = area.title.toLowerCase();
    
    if (experienceLower.includes('family') && areaLower.includes('family')) return true;
    if (experienceLower.includes('litigation') && (areaLower.includes('commercial') || areaLower.includes('litigation'))) return true;
    if (experienceLower.includes('corporate') && areaLower.includes('corporate')) return true;
    if (experienceLower.includes('personal injury') && areaLower.includes('personal injury')) return true;
    if (experienceLower.includes('estate') && areaLower.includes('estate')) return true;
    if (experienceLower.includes('real estate') && areaLower.includes('real estate')) return true;
    
    return false;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            onClick={() => onNavigate('attorneys')}
            variant="ghost"
            className="text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Attorneys
          </Button>
          
          <div className="flex items-center mb-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mr-6">
              <User className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">{attorney.name}</h1>
              <p className="text-xl text-gray-300">{attorney.position}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gray-300 text-gray-300" />
              ))}
            </div>
            <span className="text-gray-300">Client Rating</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About {attorney.name}</h2>
              
              <p className="text-gray-600 mb-8">
                {attorney.experience}
              </p>

              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Background</h3>
                <p className="text-gray-600 mb-4">
                  {attorney.name} brings extensive experience and a commitment to excellence in legal representation. 
                  As a {attorney.position} at Briglia Hundley®, {attorney.name.split(' ')[0]} has successfully handled 
                  numerous complex cases and has established a reputation for delivering superior results for clients.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                    <p className="text-gray-600">Law degree from accredited institution</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Bar Admissions</h4>
                    <p className="text-gray-600">Virginia State Bar</p>
                  </div>
                </div>
              </div>

              {relatedPracticeAreas.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Practice Areas</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {relatedPracticeAreas.map((area, index) => (
                      <button
                        key={index}
                        onClick={() => onNavigate('practice-area', { area: area.title.toLowerCase().replace(/\s+/g, '-') })}
                        className="text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">{area.title}</h4>
                        <p className="text-sm text-gray-600">{area.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Schedule a Consultation</h3>
                <p className="text-gray-300 mb-6">
                  Ready to discuss your legal needs with {attorney.name}? Contact our office today to schedule your consultation.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact {attorney.name}</h3>
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

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 mr-3 text-gray-600" />
                  <span>{attorney.position} at Briglia Hundley®</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Star className="h-5 w-5 mr-3 text-gray-600" />
                  <span>Excellent client reviews</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="h-5 w-5 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Proven track record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttorneyProfilePage;