import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';
import SEO from '../SEO';
import Breadcrumb from '../Breadcrumb';

const AccountantsLiabilityPage = ({ data, onNavigate }) => {
  // Find the Accountants Liability practice area from mockData
  const practiceArea = data.practiceAreas.find(area => area.title === "Accountants Liability and Securities Litigation");

  if (!practiceArea) {
    return <div>Practice area not found</div>;
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
      "url": "https://brigliahundley.com"
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
        backgroundImage: `url(${practiceArea.image})`,
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
            {/* Full Description */}
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">
                {practiceArea.fullDescription}
              </p>
            </div>

            {/* Detailed Content Sections */}
            {practiceArea.detailedContent && practiceArea.detailedContent.sections && (
              <div className="space-y-8 mb-8 text-left">
                {practiceArea.detailedContent.sections.map((section, index) => (
                  <div key={index} className="text-left">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-left">{section.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-left">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Our Services Include Section */}
            {practiceArea.services && (
              <div className="mb-8 text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-left">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {practiceArea.services.map((service, index) => (
                    <div key={index} className="text-gray-700">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Why Choose Briglia Hundley Section */}
            <div className="mb-8 text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-left">Why Choose Briglia Hundley® for {practiceArea.title}?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Tier 1 ranked law firm with proven track record in securities litigation</li>
                <li>Experienced attorneys with specialized expertise in accounting and securities law</li>
                <li>Former regulators and prosecutors with insider knowledge of enforcement processes</li>
                <li>Comprehensive legal strategies and personalized service</li>
                <li>Serving Northern Virginia, Washington D.C., and Maryland</li>
              </ul>
            </div>

            {/* Ready to Get Started Section */}
            <div className="mb-8 text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-left">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-6 text-left">
                Contact our {practiceArea.title.toLowerCase()} team today to schedule your free consultation and discuss your legal needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3">
                  Call Now
                </Button>
              </div>
            </div>

            {/* Attorney Photos Section - Like Business Litigation */}
            {relatedAttorneys.length > 0 && (
              <div className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedAttorneys.map((attorney, index) => (
                    <div key={index} className="text-center">
                      <img 
                        src={attorney.image || '/api/placeholder/300/300'} 
                        alt={attorney.name}
                        className="w-full h-80 object-cover rounded-lg mb-4"
                      />
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{attorney.name}</h4>
                      <p className="text-gray-600 mb-4">{attorney.position}</p>
                      <Link 
                        to={`/attorney-profile/${attorney.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        View Profile
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Contact Information Only */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-left">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <a href="tel:7035227222" className="text-blue-600 hover:text-blue-700 font-medium">
                    (703) 522-7222
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <a href="mailto:info@brigliahundley.com" className="text-blue-600 hover:text-blue-700">
                    info@brigliahundley.com
                  </a>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div className="text-gray-700">
                    <p>1921 Gallows Road, Suite 900</p>
                    <p>Tysons Corner, Virginia 22182</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Schedule Consultation
                </Button>
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