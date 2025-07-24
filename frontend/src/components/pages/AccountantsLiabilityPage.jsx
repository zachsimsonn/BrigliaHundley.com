import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowLeft, Phone, Mail, Calendar, Award, Users, Scale, User } from 'lucide-react';
import SEO from '../SEO';
import Breadcrumb from '../Breadcrumb';
import practiceAreasData from '../../data/newPracticeArea';

const AccountantsLiabilityPage = ({ data, onNavigate }) => {
  const practiceArea = practiceAreasData[0]; // Get the Accountants Liability data

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
    { name: practiceArea.title, url: '/practice-area/accountants-liability-and-securities-litigation' }
  ];

  // Get attorneys for this practice area
  const relatedAttorneys = data.attorneys.filter(attorney => {
    if (practiceArea.attorneys) {
      return practiceArea.attorneys.includes(attorney.name);
    }
    return false;
  });

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={practiceArea.title}
        description={metaDescription}
        keywords={keywords}
        canonical="https://brigliahundley.com/practice-area/accountants-liability-and-securities-litigation"
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
                  />
                </div>
              )}

              {/* Full Description */}
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {practiceArea.fullDescription}
                </p>
              </div>

              {/* Detailed Content Sections */}
              {practiceArea.detailedContent && practiceArea.detailedContent.sections && (
                <div className="space-y-8">
                  {practiceArea.detailedContent.sections.map((section, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                      <p className="text-gray-700 leading-relaxed text-left">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services</h3>
              
              {/* Services List */}
              {practiceArea.services && (
                <ul className="space-y-2 mb-6">
                  {practiceArea.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Scale className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Attorney Section */}
              {relatedAttorneys.length > 0 && (
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    Our {practiceArea.title} Attorneys
                  </h4>
                  
                  <div className="space-y-4">
                    {relatedAttorneys.map((attorney, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img 
                            src={attorney.image || '/api/placeholder/60/60'} 
                            alt={attorney.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <Link 
                            to={`/attorney-profile/${attorney.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="font-medium text-blue-600 hover:text-blue-700"
                          >
                            {attorney.name}
                          </Link>
                          <p className="text-sm text-gray-500">{attorney.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <Link 
                      to="/attorneys"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      View All Attorneys
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}

              {/* Contact Section */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-blue-600 mr-2" />
                    <a href="tel:7035227222" className="text-blue-600 hover:text-blue-700">
                      (703) 522-7222
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-blue-600 mr-2" />
                    <a href="mailto:info@brigliahundley.com" className="text-blue-600 hover:text-blue-700 text-sm">
                      info@brigliahundley.com
                    </a>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <Link to="/practice-areas">
            <Button variant="outline" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Practice Areas
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountantsLiabilityPage;