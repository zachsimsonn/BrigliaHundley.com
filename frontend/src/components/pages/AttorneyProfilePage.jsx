import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowLeft, Phone, Mail, Calendar, Award, User, MapPin, Scale, BookOpen, ExternalLink } from 'lucide-react';
import SEO from '../SEO';
import Breadcrumb from '../Breadcrumb';

const AttorneyProfilePage = ({ data, onNavigate }) => {
  const { name } = useParams();
  const attorney = data.attorneys.find(att => 
    att.name.toLowerCase().replace(/\s+/g, '-') === name
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

  // Enhanced SEO meta description based on attorney's expertise
  const metaDescription = `${attorney.name} is ${attorney.position} at Briglia Hundley® in Tysons Corner, Virginia. ${attorney.experience.substring(0, 120)}. Contact our experienced legal team today.`;
  
  const practiceAreasText = attorney.practiceAreas ? attorney.practiceAreas.join(', ') : 'legal services';
  const keywords = `${attorney.name}, ${attorney.position}, Virginia attorney, Tysons Corner lawyer, ${practiceAreasText}, Briglia Hundley, Northern Virginia law firm`;

  // Attorney structured data
  const attorneySchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": attorney.name,
    "jobTitle": attorney.position,
    "worksFor": {
      "@type": "LegalService",
      "name": "Briglia Hundley PC",
      "url": "https://brigliahundley.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1921 Gallows Road, Suite 900",
        "addressLocality": "Tysons Corner",
        "addressRegion": "VA",
        "postalCode": "22182",
        "addressCountry": "US"
      }
    },
    "image": attorney.image,
    "description": attorney.experience,
    "email": attorney.email,
    "telephone": attorney.phone,
    "url": `https://brigliahundley.com/attorney-profile/${name}`,
    "knowsAbout": attorney.practiceAreas || [],
    "memberOf": {
      "@type": "Organization",
      "name": "Virginia State Bar"
    }
  };

  // Breadcrumb data
  const breadcrumbItems = [
    { name: 'Attorneys', url: '/attorneys' },
    { name: attorney.name, url: `/attorney-profile/${name}` }
  ];

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
      <SEO 
        title={`${attorney.name} - ${attorney.position}`}
        description={metaDescription}
        keywords={keywords}
        canonical={`https://brigliahundley.com/attorney-profile/${name}`}
        ogType="profile"
        ogImage={attorney.image}
        schemaData={attorneySchema}
        breadcrumbs={breadcrumbItems}
      />
      
      <Breadcrumb items={breadcrumbItems} />

      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            onClick={() => onNavigate('attorneys')}
            variant="ghost"
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Attorneys
          </Button>
        </div>
      </div>

      {/* Attorney Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Attorney Photo */}
            <div className="mb-8">
              <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg" style={{maxWidth: '300px'}}>
                {attorney.image ? (
                  <img 
                    src={attorney.image} 
                    alt={attorney.name}
                    className="w-full h-full object-cover"
                    style={{objectPosition: '50% 35%'}}
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
              <h3 className="text-base font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="text-gray-900 font-medium text-sm">{attorney.phone || data.business.phone}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                  <div className="text-left min-w-0 flex-1">
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-gray-900 font-medium text-sm break-words">{attorney.email || data.business.email}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Office</div>
                    <a 
                      href="https://maps.app.goo.gl/Dqo1syhK2exWUfBM6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 font-medium text-sm hover:text-blue-600 transition-colors duration-200"
                    >
                      {data.business.address}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button 
                  onClick={() => onNavigate('contact')}
                  size="lg"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
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
            <div className="max-w-none">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 text-left">{attorney.name}</h1>
                <p className="text-xl text-gray-600 text-left">{attorney.position}</p>
              </div>

              {/* Full Biography */}
              <div className="mb-8 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">Biography</h2>
                {attorney.fullBio ? (
                  <div className="space-y-4">
                    {attorney.fullBio.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-600 leading-relaxed text-base text-left">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 leading-relaxed text-base text-left">
                    {attorney.experience}
                  </p>
                )}
              </div>

              {/* Significant Representations */}
              {attorney.significantRepresentations && (
                <div className="mb-8 text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-left">Significant Representations</h3>
                  <div className="space-y-4">
                    {attorney.significantRepresentations.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-600 leading-relaxed text-base text-left">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Areas of Practice */}
              {attorney.practiceAreas && (
                <div className="mb-8 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">Areas of Practice</h3>
                  <div className="flex flex-wrap gap-2">
                    {attorney.practiceAreas.map((area, index) => (
                      <span key={index} className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Education */}
              {attorney.education && (
                <div className="mb-8 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">Education</h3>
                  <div className="space-y-3 text-left">
                    {attorney.education.map((edu, index) => (
                      <div key={index} className="border-l-4 border-gray-900 pl-4 text-left">
                        <div className="font-medium text-gray-900 text-base text-left">{edu.degree}</div>
                        <div className="text-gray-600 text-base text-left">{edu.institution} ({edu.year})</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bar Admissions */}
              {attorney.admissions && (
                <div className="mb-8 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">Admissions</h3>
                  <div className="space-y-2 text-left">
                    {attorney.admissions.map((admission, index) => (
                      <div key={index} className="flex items-start text-left">
                        <Scale className="h-4 w-4 text-gray-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 text-base text-left">{admission}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Professional Associations */}
              {attorney.professionalAssociations && (
                <div className="mb-8 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">Professional Associations and Memberships</h3>
                  <div className="space-y-2 text-left">
                    {attorney.professionalAssociations.map((association, index) => (
                      <div key={index} className="flex items-start text-left">
                        <Award className="h-4 w-4 text-gray-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 text-base text-left">{association}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications, Honors & Awards */}
              {attorney.certifications && (
                <div className="mb-8 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">Certifications, Honors, and Awards</h3>
                  <div className="space-y-2 text-left">
                    {attorney.certifications.map((cert, index) => (
                      <div key={index} className="flex items-start text-left">
                        <Award className="h-4 w-4 text-gray-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 text-base text-left">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Publications & Speaking Engagements */}
              {attorney.publicationsAndSpeaking && (
                <div className="mb-8 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">Publications & Speaking Engagements</h3>
                  <div className="space-y-2 text-left">
                    {attorney.publicationsAndSpeaking.map((item, index) => (
                      <div key={index} className="flex items-start text-left">
                        <BookOpen className="h-4 w-4 text-gray-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 text-base text-left">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Past Employment */}
              {attorney.pastEmployment && (
                <div className="mb-8 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">Past Employment Positions</h3>
                  <div className="space-y-2 text-left">
                    {attorney.pastEmployment.map((employment, index) => (
                      <div key={index} className="flex items-start text-left">
                        <User className="h-4 w-4 text-gray-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 text-base text-left">{employment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog Posts */}
              {attorney.blogPosts && attorney.blogPosts.length > 0 && (
                <div className="mb-8 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-gray-900" />
                    Blog Posts
                  </h3>
                  <div className="space-y-4">
                    {attorney.blogPosts.map((post, index) => (
                      <div key={index} className="border-l-4 border-gray-900 pl-6 py-4 bg-gray-50 rounded-r-lg text-left">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 text-left">{post.title}</h4>
                        <p className="text-gray-600 mb-2 text-left">{post.date}</p>
                        {post.coAuthor && (
                          <p className="text-gray-600 mb-2 text-left">Co-authored with {post.coAuthor}</p>
                        )}
                        <a 
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium text-left"
                        >
                          Read More on brigliahundley.com
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Practice Areas */}
        {relatedPracticeAreas.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Practice Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPracticeAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => onNavigate('practice-area', { areaName: area.title.toLowerCase().replace(/\s+/g, '-') })}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                  <div className="mt-4">
                    <span className="text-gray-900 font-medium hover:text-gray-700">Learn More →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttorneyProfilePage;