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
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mr-6">
                <User className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">{attorney.name}</h1>
                <p className="text-xl text-gray-300">{attorney.position}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gray-300 text-gray-300" />
                ))}
              </div>
              <span className="text-gray-300">Client Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-1 gap-12">
          {/* Main Content - Centered */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">About {attorney.name}</h2>
              
              <div className="text-center mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {attorney.experience}
                </p>
              </div>

              {attorney.education && (
                <div className="bg-gray-50 rounded-lg p-8 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Education</h3>
                  <div className="space-y-3">
                    {attorney.education.map((edu, index) => (
                      <div key={index} className="text-center">
                        <div className="font-medium text-gray-900">{edu.degree}</div>
                        <div className="text-gray-600">{edu.institution} ({edu.year})</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {attorney.admissions && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Bar Admissions</h3>
                  <div className="grid md:grid-cols-2 gap-2 text-center">
                    {attorney.admissions.map((admission, index) => (
                      <div key={index} className="text-gray-600">• {admission}</div>
                    ))}
                  </div>
                </div>
              )}

              {attorney.professionalAssociations && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Professional Associations</h3>
                  <div className="space-y-2 text-center">
                    {attorney.professionalAssociations.map((association, index) => (
                      <div key={index} className="text-gray-600">• {association}</div>
                    ))}
                  </div>
                </div>
              )}

              {attorney.certifications && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Certifications, Honors & Awards</h3>
                  <div className="space-y-2 text-center">
                    {attorney.certifications.map((cert, index) => (
                      <div key={index} className="text-gray-600">• {cert}</div>
                    ))}
                  </div>
                </div>
              )}

              {attorney.practiceAreas && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Areas of Practice</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {attorney.practiceAreas.map((area, index) => (
                      <span key={index} className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Schedule a Consultation</h3>
                <p className="text-gray-300 mb-6">
                  Ready to discuss your legal needs with {attorney.name}? Contact our office today to schedule your consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>

        {/* Contact Info Section - Centered */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-gray-900 mb-2" />
                <span className="text-gray-600">{data.business.phone}</span>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-gray-900 mb-2" />
                <span className="text-gray-600">{data.business.email}</span>
              </div>
              <div className="flex flex-col items-center">
                <svg className="h-8 w-8 text-gray-900 mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 text-center">{data.business.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttorneyProfilePage;