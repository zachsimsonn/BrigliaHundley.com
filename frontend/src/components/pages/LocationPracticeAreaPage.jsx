import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Phone, MapPin, Clock, Star, Scale, Users, Award } from 'lucide-react';

const LocationPracticeAreaPage = ({ data, location, area }) => {
  const navigate = useNavigate();

  // Location data for SEO optimization
  const locationData = {
    'alexandria': {
      name: 'Alexandria',
      county: 'Alexandria City',
      courts: ['Alexandria General District Court', 'Alexandria Circuit Court'],
      zipCodes: ['22301', '22302', '22303', '22304', '22305', '22306', '22307', '22308', '22309', '22310', '22311', '22312', '22314', '22315'],
      population: '159,467',
      landmarks: ['Old Town Alexandria', 'King Street', 'Torpedo Factory', 'George Washington Masonic Memorial'],
      driveTime: '25 minutes from our Tysons Corner office'
    },
    'arlington': {
      name: 'Arlington',
      county: 'Arlington County',
      courts: ['Arlington General District Court', 'Arlington Circuit Court'],
      zipCodes: ['22201', '22202', '22203', '22204', '22205', '22206', '22207', '22209', '22213', '22214', '22215', '22216', '22217', '22219'],
      population: '238,643',
      landmarks: ['Pentagon', 'Arlington National Cemetery', 'Rosslyn', 'Crystal City', 'Ballston'],
      driveTime: '15 minutes from our Tysons Corner office'
    },
    'tysons-corner': {
      name: 'Tysons Corner',
      county: 'Fairfax County',
      courts: ['Fairfax County General District Court', 'Fairfax County Circuit Court'],
      zipCodes: ['22102', '22182'],
      population: '25,000+',
      landmarks: ['Tysons Corner Center', 'Tysons Galleria', 'Capital One Hall', 'Greensboro Metro Station'],
      driveTime: 'Located in our office building'
    },
    'fairfax-county': {
      name: 'Fairfax County',
      county: 'Fairfax County',
      courts: ['Fairfax County General District Court', 'Fairfax County Circuit Court', 'Fairfax County Juvenile Court'],
      zipCodes: ['22030', '22031', '22032', '22033', '22034', '22035', '22036', '22037', '22038', '22039', '22040', '22041', '22042', '22043', '22044', '22046', '22047', '22060', '22066', '22067', '22079', '22081', '22082', '22124', '22151', '22152', '22153', '22180', '22181', '22182'],
      population: '1,150,309',
      landmarks: ['Tysons Corner', 'Reston', 'Herndon', 'Vienna', 'McLean', 'Falls Church', 'Fairfax City'],
      driveTime: 'Throughout Fairfax County'
    }
  };

  // Practice area mapping for SEO content
  const practiceAreaData = {
    'criminal-defense': {
      title: 'Criminal Defense',
      services: ['DUI/DWI Defense', 'Reckless Driving', 'Drug Crimes', 'Domestic Violence', 'Traffic Violations', 'Assault & Battery', 'Protective Orders'],
      urgency: 'immediate',
      consequences: 'jail time, fines, license suspension, permanent criminal record',
      description: 'Experienced criminal defense representation protecting your rights and freedom.'
    },
    'family-law': {
      title: 'Family Law',
      services: ['Divorce', 'Child Custody', 'Child Support', 'Spousal Support', 'Property Division', 'Protective Orders'],
      urgency: 'time-sensitive',
      consequences: 'custody loss, financial hardship, asset forfeiture',
      description: 'Compassionate family law guidance through life\'s most challenging transitions.'
    },
    'personal-injury': {
      title: 'Personal Injury',
      services: ['Car Accidents', 'Truck Accidents', 'Slip and Fall', 'Wrongful Death', 'Medical Malpractice', 'Premises Liability', 'Workers Compensation'],
      urgency: 'statute of limitations',
      consequences: 'lost compensation, medical debt, ongoing pain and suffering',
      description: 'Aggressive advocacy to secure maximum compensation for your injuries.'
    },
    'employment-law': {
      title: 'Employment Law',
      services: ['Wrongful Termination', 'Workplace Discrimination', 'Sexual Harassment', 'Wage & Hour Disputes', 'Employment Contracts'],
      urgency: 'filing deadlines',
      consequences: 'lost wages, career damage, ongoing workplace harassment',
      description: 'Protecting employee rights and fighting workplace injustice.'
    },
    'real-estate-law': {
      title: 'Real Estate Law',
      services: ['Property Transactions', 'Real Estate Disputes', 'Landlord-Tenant Issues', 'Zoning Matters', 'Title Issues'],
      urgency: 'closing deadlines',
      consequences: 'financial loss, property disputes, failed transactions',
      description: 'Comprehensive real estate legal services for buyers, sellers, and investors.'
    },
    'estate-planning': {
      title: 'Estate Planning',
      services: ['Wills', 'Trusts', 'Probate', 'Estate Administration', 'Power of Attorney', 'Healthcare Directives'],
      urgency: 'tax deadlines',
      consequences: 'estate taxes, family disputes, assets going to unintended beneficiaries',
      description: 'Secure your family\'s future with comprehensive estate planning.'
    },
    'corporate-law': {
      title: 'Corporate Law',
      services: ['Business Formation', 'Contract Negotiation', 'Corporate Governance', 'Mergers & Acquisitions', 'Compliance'],
      urgency: 'regulatory deadlines',
      consequences: 'business liability, contract disputes, regulatory penalties',
      description: 'Strategic business legal counsel for companies of all sizes.'
    },
    'business-litigation': {
      title: 'Business Litigation',
      services: ['Commercial Disputes', 'Contract Disputes', 'Partnership Disputes', 'Intellectual Property', 'Employment Litigation'],
      urgency: 'statute of limitations',
      consequences: 'financial losses, business reputation damage, court judgments',
      description: 'Aggressive business litigation to protect your commercial interests.'
    }
  };

  const currentLocation = locationData[location] || {
    name: location?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    county: 'Northern Virginia',
    courts: ['Local District Court', 'Local Circuit Court'],
    zipCodes: ['22XXX'],
    population: 'Local community',
    landmarks: ['Local area'],
    driveTime: 'Short drive from our Tysons Corner office'
  };

  const currentPracticeArea = practiceAreaData[area] || practiceAreaData['criminal-defense'];

  // Generate SEO-optimized title and description
  const seoTitle = `${currentLocation.name} ${currentPracticeArea.title} Lawyer | Briglia Hundley PC`;
  const seoDescription = `Experienced ${currentPracticeArea.title.toLowerCase()} attorney serving ${currentLocation.name}, ${currentLocation.county}. Free consultation. Call (703) 783-5185. Representing clients in ${currentLocation.courts[0]}.`;

  const handleBackClick = () => {
    navigate('/practice-areas');
  };

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={`${currentLocation.name} ${currentPracticeArea.title.toLowerCase()} lawyer, ${currentLocation.name} attorney, ${currentLocation.county} legal services, ${currentPracticeArea.services.join(', ').toLowerCase()}`} />
        <link rel="canonical" href={`https://brigliahundley.com/${location}-${area.replace(/\s+/g, '-').toLowerCase()}-lawyer`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": `Briglia Hundley PC - ${currentLocation.name} ${currentPracticeArea.title}`,
            "description": seoDescription,
            "url": `https://brigliahundley.com/${location}-${area.replace(/\s+/g, '-').toLowerCase()}-lawyer`,
            "telephone": "(703) 783-5185",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "8180 Greensboro Dr. Suite 1050",
              "addressLocality": "McLean",
              "addressRegion": "VA",
              "postalCode": "22102"
            },
            "areaServed": {
              "@type": "City",
              "name": currentLocation.name,
              "containedIn": currentLocation.county
            },
            "legalName": "Briglia Hundley, P.C.",
            "knowsAbout": currentPracticeArea.services,
            "attorney": data.attorneys?.map(attorney => ({
              "@type": "Person",
              "name": attorney.name,
              "jobTitle": "Attorney"
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Local Focus */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-blue-300" />
                  <span className="text-blue-200 font-medium">Serving {currentLocation.name}, {currentLocation.county}</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  {currentLocation.name} {currentPracticeArea.title} Lawyer
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Experienced {currentPracticeArea.title.toLowerCase()} representation for residents of {currentLocation.name}. 
                  We handle cases in {currentLocation.courts[0]} and throughout {currentLocation.county}.
                  <span className="block mt-2 font-semibold">
                    Don't face {currentPracticeArea.consequences} alone.
                  </span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${data.business?.phone}`}
                    className="inline-flex items-center justify-center bg-white text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call (703) 783-5185
                  </a>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
                  >
                    Free Consultation
                  </button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Briglia Hundley for {currentLocation.name}?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Tier 1 Ranked Law Firm</div>
                      <div className="text-blue-100 text-sm">7 attorneys named "Best Lawyers" 2025</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Local Knowledge</div>
                      <div className="text-blue-100 text-sm">{currentLocation.driveTime}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Scale className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Court Experience</div>
                      <div className="text-blue-100 text-sm">Regular practice in {currentLocation.courts.join(' and ')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Immediate Response</div>
                      <div className="text-blue-100 text-sm">This is {currentPracticeArea.urgency} - we respond quickly</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location-Specific Content */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {currentPracticeArea.title} Services in {currentLocation.name}
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you're facing {currentPracticeArea.title.toLowerCase()} charges or legal issues in {currentLocation.name}, 
                  you need experienced local representation. Our attorneys at Briglia Hundley have been serving residents of 
                  {currentLocation.name} and {currentLocation.county} for over 30 years, with regular appearances in {currentLocation.courts[0]}.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our {currentPracticeArea.title} Services:</h3>
                    <ul className="space-y-2">
                      {currentPracticeArea.services.map((service, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Scale className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{currentLocation.name} Coverage:</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div><strong>Population Served:</strong> {currentLocation.population}</div>
                      <div><strong>Local Courts:</strong> {currentLocation.courts.join(', ')}</div>
                      <div><strong>Service Areas:</strong> {currentLocation.landmarks.join(', ')}</div>
                      <div><strong>ZIP Codes:</strong> {currentLocation.zipCodes.slice(0, 6).join(', ')}{currentLocation.zipCodes.length > 6 && '...'}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
                  <div className="flex">
                    <Clock className="h-6 w-6 text-red-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">Time is Critical</h3>
                      <p className="text-red-700">
                        {currentPracticeArea.title} cases in {currentLocation.name} require {currentPracticeArea.urgency} attention. 
                        Delays can result in {currentPracticeArea.consequences}. Contact us immediately for a free consultation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-blue-900 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Rights in {currentLocation.name}?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Don't wait - contact our experienced {currentPracticeArea.title.toLowerCase()} attorneys today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${data.business?.phone}`}
                  className="inline-flex items-center justify-center bg-white text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (703) 783-5185 Now
                </a>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  Schedule Free Consultation
                </button>
              </div>
            </div>

            {/* Back Navigation */}
            <div className="mt-8 text-center">
              <button
                onClick={handleBackClick}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Practice Areas
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationPracticeAreaPage;