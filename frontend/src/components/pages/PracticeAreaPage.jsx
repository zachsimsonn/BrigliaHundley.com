import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowLeft, Phone, Mail, Calendar, Award, Users, Scale, User } from 'lucide-react';
import SEO from '../SEO';
import Breadcrumb from '../Breadcrumb';

const PracticeAreaPage = ({ data, onNavigate }) => {
  const { area } = useParams();
  const practiceArea = data.practiceAreas.find(practiceAreaItem => 
    practiceAreaItem.title.toLowerCase().replace(/\s+/g, '-') === area
  );

  if (!practiceArea) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Practice Area Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Enhanced SEO meta description
  const metaDescription = `Expert ${practiceArea.title} legal services from Briglia Hundley® in Tysons Corner, Virginia. ${practiceArea.description.substring(0, 120)}. Contact our experienced attorneys today.`;
  
  const keywords = `${practiceArea.title}, ${practiceArea.title} attorney, Virginia ${practiceArea.title} lawyer, Tysons Corner legal services, Northern Virginia law firm, ${practiceArea.localKeywords || 'legal representation'}`;

  // Practice area structured data
  const practiceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": practiceArea.title,
    "description": practiceArea.description,
    "provider": {
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
    "areaServed": {
      "@type": "Place",
      "name": "Northern Virginia"
    },
    "serviceType": practiceArea.title,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${practiceArea.title} Services`,
      "itemListElement": practiceArea.services ? practiceArea.services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        }
      })) : []
    }
  };

  // Breadcrumb data
  const breadcrumbItems = [
    { name: 'Practice Areas', url: '/practice-areas' },
    { name: practiceArea.title, url: `/practice-area/${area}` }
  ];

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
      <SEO 
        title={practiceArea.title}
        description={metaDescription}
        keywords={keywords}
        canonical={`https://brigliahundley.com/practice-area/${area}`}
        ogType="article"
        schemaData={practiceAreaSchema}
        breadcrumbs={breadcrumbItems}
      />
      
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="gdlr-page-title-wrapper" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/6077797/pexels-photo-6077797.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="gdlr-page-title-overlay"></div>
        <div className="gdlr-page-title-container container">
          <h1 className="gdlr-page-title">{practiceArea.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {practiceArea.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="max-w-none">
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
                    <img 
                      src={(() => {
                        switch(practiceArea.title) {
                          case 'Family Law':
                            return 'https://brigliahundley.com/wp-content/uploads/bh-family-law-hero-0725-rp-750x380.jpg';
                          case 'Criminal Defense':
                            return 'https://brigliahundley.com/wp-content/uploads/BH-Criminal-law-hero-24-750x380.jpg';
                          case 'Business Litigation':
                            return 'https://brigliahundley.com/wp-content/uploads/bh-business-litigation-hero-25-750x380.jpg';
                          case 'Corporate Law':
                            return 'https://brigliahundley.com/wp-content/uploads/bh-corporate-law-hero-25.jpg';
                          case 'Personal Injury':
                            return 'https://brigliahundley.com/wp-content/uploads/bh-personal-injury-hero-a.jpg';
                          case 'Estate Planning':
                            return 'https://brigliahundley.com/wp-content/uploads/bh-trusts-estates-hero-24RR-750x380.jpg';
                          case 'Real Estate Law':
                            return 'https://brigliahundley.com/wp-content/uploads/bh-real-estate-hero-25.jpg';
                          case 'Employment Law':
                            return 'https://brigliahundley.com/wp-content/uploads/bh-employment-law-hero-25.jpg';
                          case 'Municipal Law':
                            return 'https://brigliahundley.com/wp-content/uploads/bh-municipal-law-hero-25.jpg';
                          case 'Appellate Litigation':
                            return 'https://brigliahundley.com/wp-content/uploads/bh-appellate-litigation-hero-25.jpg';
                          case 'Community Associations':
                            return 'https://brigliahundley.com/wp-content/uploads/bh-community-associations-hero-25.jpg';
                          default:
                            return 'https://brigliahundley.com/wp-content/uploads/bh-family-law-hero-0725-rp-750x380.jpg';
                        }
                      })()} 
                      alt={practiceArea.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="text-center">
                            <div class="flex items-center justify-center mb-4">
                              <div class="grid grid-cols-3 gap-2">
                                <div class="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                  </svg>
                                </div>
                                <div class="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                  </svg>
                                </div>
                                <div class="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                  </svg>
                                </div>
                                <div class="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                  </svg>
                                </div>
                                <div class="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                  </svg>
                                </div>
                                <div class="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <h3 class="text-2xl font-bold">${practiceArea.title}</h3>
                            <p class="text-gray-300 mt-2">Professional Legal Services</p>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              )}

              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left">
                {practiceArea.title}
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed text-left">
                {practiceArea.fullDescription || practiceArea.description}
              </p>

              {/* Detailed Content Sections */}
              {practiceArea.detailedContent && practiceArea.detailedContent.sections && (
                <div className="space-y-8 mb-8 text-left">
                  {practiceArea.detailedContent.sections.map((section, index) => (
                    <div key={index} className="bg-white border-l-4 border-gray-900 pl-6 py-4 text-left">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-left">{section.title}</h3>
                      <div className="text-gray-600 whitespace-pre-line mb-4 text-left">
                        {section.content}
                      </div>
                      {section.subServices && (
                        <ul className="space-y-2 text-gray-600 ml-4 text-left">
                          {section.subServices.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-start text-left">
                              <Scale className="h-4 w-4 text-gray-600 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-left">{service}</span>
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
                <div className="mb-8 text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-left">Our Services Include:</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-left">
                    {practiceArea.services.map((service, index) => (
                      <div key={index} className="flex items-start text-left">
                        <Scale className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 text-left">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-gray-50 rounded-lg p-8 mb-8 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-left">Why Choose Briglia Hundley® for {practiceArea.title}?</h3>
                <ul className="space-y-3 text-gray-600 text-left">
                  <li className="flex items-start text-left">
                    <Award className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-left">Tier 1 ranked law firm with proven track record in {practiceArea.title.toLowerCase()}</span>
                  </li>
                  <li className="flex items-start text-left">
                    <Users className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-left">Experienced attorneys with specialized expertise in {practiceArea.title.toLowerCase()}</span>
                  </li>
                  <li className="flex items-start text-left">
                    <Scale className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-left">Comprehensive legal strategies and personalized service</span>
                  </li>
                  <li className="flex items-start text-left">
                    <Phone className="h-5 w-5 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-left">Serving Northern Virginia, Washington D.C., and Maryland</span>
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
                  <a 
                    href="https://maps.app.goo.gl/Dqo1syhK2exWUfBM6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {data.business.address}
                  </a>
                </div>
              </div>
            </div>

            {relatedAttorneys.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our {practiceArea.title} Attorneys</h3>
                <div className="space-y-4">
                  {relatedAttorneys.map((attorney, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <a 
                        href={`/attorney-profile/${attorney.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200 -m-3"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            {attorney.image && (attorney.image.startsWith('data:') || attorney.image.startsWith('http')) ? (
                              <img 
                                src={attorney.image} 
                                alt={`${attorney.name} - ${attorney.position}`}
                                className="w-16 h-16 rounded-lg object-cover"
                                style={{objectPosition: '50% 30%'}}
                              />
                            ) : (
                              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                <User className="h-8 w-8 text-gray-400" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                              {attorney.name}
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">{attorney.position}</p>
                            {attorney.experience && (
                              <p className="text-sm text-gray-700 line-clamp-2">
                                {attorney.experience.substring(0, 120)}...
                              </p>
                            )}
                            <div className="mt-2 text-sm text-blue-600 font-medium flex items-center">
                              View Profile
                              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <a 
                    href="/attorneys"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View All Attorneys
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaPage;