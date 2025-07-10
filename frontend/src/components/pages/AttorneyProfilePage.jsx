import React from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, Phone, Mail, Calendar, Award, User, MapPin, Scale } from 'lucide-react';

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
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mr-6 overflow-hidden">
                {attorney.image ? (
                  <img 
                    src={attorney.image} 
                    alt={attorney.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="h-12 w-12 text-white" />
                )}
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">{attorney.name}</h1>
                <p className="text-xl text-gray-300">{attorney.position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Left Sidebar - Attorney Photo and Contact */}
          <div className="lg:col-span-1">
            {/* Large Square Portrait */}
            <div className="mb-8">
              <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg" style={{maxWidth: '350px'}}>
                {attorney.image ? (
                  <img 
                    src={attorney.image} 
                    alt={attorney.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <User className="h-20 w-20 text-gray-500" />
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="text-gray-900 font-medium">{attorney.phone || data.business.phone}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-gray-900 font-medium">{attorney.email || data.business.email}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Office</div>
                    <div className="text-gray-900 font-medium">
                      {data.business.address}<br />
                      {data.business.city}, {data.business.state} {data.business.zip}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <Button 
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  onClick={() => window.location.href = `tel:${attorney.phone || data.business.phone}`}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About {attorney.name}</h2>
              
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {attorney.fullExperience || attorney.experience}
                </p>
              </div>

              {attorney.education && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education</h3>
                  <div className="space-y-3">
                    {attorney.education.map((edu, index) => (
                      <div key={index} className="border-l-4 border-gray-900 pl-4">
                        <div className="font-medium text-gray-900">{edu.degree}</div>
                        <div className="text-gray-600">{edu.institution} ({edu.year})</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {attorney.admissions && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bar Admissions</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {attorney.admissions.map((admission, index) => (
                      <div key={index} className="flex items-start">
                        <Scale className="h-4 w-4 text-gray-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{admission}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {attorney.professionalAssociations && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Associations</h3>
                  <div className="space-y-2">
                    {attorney.professionalAssociations.map((association, index) => (
                      <div key={index} className="flex items-start">
                        <Award className="h-4 w-4 text-gray-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{association}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {attorney.certifications && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Certifications, Honors & Awards</h3>
                  <div className="space-y-2">
                    {attorney.certifications.map((cert, index) => (
                      <div key={index} className="flex items-start">
                        <Award className="h-4 w-4 text-gray-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {attorney.languages && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {attorney.languages.map((language, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {attorney.practiceAreas && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Areas of Practice</h3>
                  <div className="flex flex-wrap gap-3">
                    {attorney.practiceAreas.map((area, index) => {
                      // Find the matching practice area in data to get the URL
                      const practiceArea = data.practiceAreas.find(pa => 
                        pa.title.toLowerCase() === area.toLowerCase() ||
                        pa.title.toLowerCase().includes(area.toLowerCase()) ||
                        area.toLowerCase().includes(pa.title.toLowerCase())
                      );
                      
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            if (practiceArea) {
                              onNavigate('practice-area', { area: practiceArea.title.toLowerCase().replace(/\s+/g, '-') });
                            }
                          }}
                          className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                        >
                          {area}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttorneyProfilePage;