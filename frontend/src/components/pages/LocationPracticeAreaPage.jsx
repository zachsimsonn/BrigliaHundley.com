import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../SEO';
import OptimizedImage from '../OptimizedImage';
import { siteData } from '../../data/mockData';
import { MapPin, Phone, Calendar, Star, Award, Users, Scale, Clock, CheckCircle, Shield, Briefcase } from 'lucide-react';

const LocationPracticeAreaPage = () => {
  const { location, practiceArea } = useParams();
  const [pageData, setPageData] = useState(null);

  // Location data
  const locationData = {
    'tysons-corner': {
      name: 'Tysons Corner',
      displayName: 'Tysons Corner, VA',
      description: 'Located in the heart of Northern Virginia\'s business district',
      courtInfo: {
        primary: 'Fairfax County Circuit Court',
        address: '4110 Chain Bridge Road, Fairfax, VA 22030',
        judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
        jurisdiction: 'Fairfax County'
      },
      localAdvantages: [
        'Minutes from Fairfax County Circuit Court',
        'Deep knowledge of local prosecutors and judges',
        'Established relationships with court staff',
        'Understanding of local legal procedures'
      ],
      demographics: 'Tysons Corner is home to Fortune 500 companies and busy professionals who need experienced legal representation.',
      proximityText: 'conveniently located in Tysons Corner\'s business district'
    },
    'fairfax-county': {
      name: 'Fairfax County',
      displayName: 'Fairfax County, VA',
      description: 'Serving all of Fairfax County with comprehensive legal services',
      courtInfo: {
        primary: 'Fairfax County Circuit Court',
        address: '4110 Chain Bridge Road, Fairfax, VA 22030',
        judges: ['Judge David S. Schell', 'Judge Penney S. Azcarate', 'Judge Randy I. Bellows'],
        jurisdiction: 'Fairfax County'
      },
      localAdvantages: [
        'Extensive experience in Fairfax County courts',
        'Knowledge of local legal community',
        'Understanding of county-specific procedures',
        'Relationships with local legal professionals'
      ],
      demographics: 'Fairfax County is Virginia\'s most populous county with diverse legal needs requiring skilled representation.',
      proximityText: 'strategically located to serve all of Fairfax County'
    }
  };

  // Practice area data
  const practiceAreaData = {
    'criminal-defense': {
      name: 'Criminal Defense',
      displayName: 'Criminal Defense Attorney',
      description: 'Experienced criminal defense representation for all manner of charges',
      services: [
        'DUI/DWI Defense',
        'White Collar Crime Defense',
        'Drug Charges',
        'Assault and Battery',
        'Theft and Larceny',
        'Traffic Offenses',
        'Juvenile Offenses',
        'Federal Criminal Defense'
      ],
      urgency: 'Criminal charges require immediate attention. Every moment counts in building your defense.',
      consequences: 'Criminal convictions can result in jail time, heavy fines, and permanent criminal records that affect employment, housing, and your future.',
      approach: 'Our criminal defense attorneys thoroughly investigate every case, challenge evidence, and fight aggressively to protect your rights and freedom.',
      experience: 'With over 30 years of criminal defense experience, we\'ve handled thousands of cases ranging from traffic violations to serious felonies.',
      results: 'Our track record includes dismissed charges, reduced sentences, and not guilty verdicts across all types of criminal cases.'
    },
    'family-law': {
      name: 'Family Law',
      displayName: 'Family Law Attorney',
      description: 'Compassionate family law representation for divorce, custody, and support matters',
      services: [
        'Divorce',
        'Child Custody',
        'Child Support',
        'Property Division',
        'Spousal Support',
        'Adoption',
        'Prenuptial Agreements',
        'Postnuptial Agreements'
      ],
      urgency: 'Family law matters affect your most important relationships and financial future. Acting quickly protects your interests.',
      consequences: 'Poorly handled family law cases can result in unfavorable custody arrangements, inadequate support, or unfair property division.',
      approach: 'We provide compassionate yet strategic representation, working to achieve fair outcomes while protecting your children\'s best interests.',
      experience: 'Our family law attorneys have guided hundreds of families through difficult transitions with skill and sensitivity.',
      results: 'We consistently achieve favorable custody arrangements, fair property settlements, and appropriate support orders for our clients.'
    },
    'personal-injury': {
      name: 'Personal Injury',
      displayName: 'Personal Injury Attorney',
      description: 'Aggressive personal injury representation for accident victims',
      services: [
        'Car Accidents',
        'Truck Accidents',
        'Motorcycle Accidents',
        'Slip and Fall',
        'Medical Malpractice',
        'Product Liability',
        'Wrongful Death',
        'Workers\' Compensation'
      ],
      urgency: 'Personal injury cases have strict deadlines. Evidence disappears and witnesses\' memories fade - time is critical.',
      consequences: 'Without proper legal representation, you may receive inadequate compensation that doesn\'t cover your medical bills, lost wages, and pain and suffering.',
      approach: 'We thoroughly investigate accidents, work with medical experts, and negotiate aggressively with insurance companies to maximize your compensation.',
      experience: 'Our personal injury team has recovered millions of dollars for accident victims and their families throughout Virginia.',
      results: 'We consistently achieve settlements and verdicts that fully compensate our clients for their injuries and losses.'
    },
    'dui-traffic-defense': {
      name: 'DUI/Traffic Defense',
      displayName: 'DUI/Traffic Defense Attorney',
      description: 'Expert DUI and traffic defense representation',
      services: [
        'DUI/DWI Defense',
        'Reckless Driving',
        'Speeding Tickets',
        'Driving on Suspended License',
        'Hit and Run',
        'Traffic Violations',
        'License Restoration',
        'Administrative Hearings'
      ],
      urgency: 'DUI and serious traffic charges can result in immediate license suspension and jail time. Quick action is essential.',
      consequences: 'Traffic convictions can result in license suspension, increased insurance rates, job loss, and even jail time for serious offenses.',
      approach: 'We challenge every aspect of traffic stops and DUI arrests, from the initial stop to the accuracy of testing equipment.',
      experience: 'Our attorneys appear in Virginia traffic courts daily and know the strategies that work to protect your driving privileges.',
      results: 'We regularly achieve reduced charges, dismissed cases, and preserved driving privileges for our clients.'
    }
  };

  useEffect(() => {
    const locationInfo = locationData[location];
    const practiceInfo = practiceAreaData[practiceArea];

    if (locationInfo && practiceInfo) {
      setPageData({
        location: locationInfo,
        practiceArea: practiceInfo,
        title: `${practiceInfo.displayName} in ${locationInfo.displayName}`,
        urlFriendlyTitle: `${locationInfo.name} ${practiceInfo.displayName}`,
        metaDescription: `Expert ${practiceInfo.name.toLowerCase()} attorney in ${locationInfo.displayName}. 30+ years experience in ${locationInfo.courtInfo.jurisdiction} courts. Free consultation. Call (703) 522-7222.`,
        keywords: `${practiceInfo.name.toLowerCase()} attorney ${locationInfo.displayName}, ${practiceInfo.name.toLowerCase()} lawyer ${locationInfo.name}, ${locationInfo.courtInfo.jurisdiction} ${practiceInfo.name.toLowerCase()}, ${locationInfo.name} legal help`
      });
    }
  }, [location, practiceArea]);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-6">The requested page could not be found.</p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={pageData.urlFriendlyTitle}
        description={pageData.metaDescription}
        keywords={pageData.keywords}
        canonical={`https://brigliahundley.com/${location}-${practiceArea}-lawyer`}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white pt-20">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {pageData.title}
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                {pageData.practiceArea.description} in {pageData.location.displayName}. 
                {pageData.practiceArea.urgency}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:7035227222" 
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call (703) 522-7222
                </a>
                <Link 
                  to="/contact" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Free Consultation
                </Link>
              </div>
              <div className="flex items-center gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <Award size={16} />
                  <span className="text-sm">AV Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} />
                  <span className="text-sm">Best Lawyers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span className="text-sm">30+ Years</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <OptimizedImage
                src="/bhlogo.png"
                alt="Briglia Hundley Law Firm Logo"
                className="w-48 h-48 mx-auto mb-6"
              />
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose Briglia Hundley?</h3>
                <ul className="space-y-2 text-blue-100">
                  {pageData.location.localAdvantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-sm">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Why Choose Us Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Briglia Hundley for {pageData.practiceArea.name} in {pageData.location.displayName}?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  When you need a {pageData.practiceArea.name.toLowerCase()} attorney in {pageData.location.displayName}, 
                  choosing the right legal representation can make all the difference in your case outcome. 
                  Briglia Hundley has been serving clients in {pageData.location.courtInfo.jurisdiction} for over 30 years, 
                  building a reputation for excellence and results.
                </p>
                <p className="mb-6">
                  {pageData.location.demographics} Our attorneys are {pageData.location.proximityText}, 
                  giving us unique advantages in representing clients facing {pageData.practiceArea.name.toLowerCase()} matters.
                </p>
                <p className="mb-6">
                  {pageData.practiceArea.consequences} That's why it's crucial to have experienced legal counsel 
                  who understands both the law and the local legal landscape.
                </p>
              </div>
            </section>

            {/* Our Experience Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our {pageData.practiceArea.name} Experience in {pageData.location.displayName}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  {pageData.practiceArea.experience} Our deep understanding of {pageData.location.courtInfo.jurisdiction} 
                  courts and procedures gives our clients a significant advantage.
                </p>
                <p className="mb-6">
                  {pageData.practiceArea.approach} We understand that every case is unique, and we tailor our strategy 
                  to the specific circumstances of your situation and the local court where your case will be heard.
                </p>
                <p className="mb-6">
                  {pageData.practiceArea.results} Our commitment to excellence has earned us recognition from 
                  Best Lawyers, Super Lawyers, and an AV rating from Martindale-Hubbell.
                </p>
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our {pageData.practiceArea.name} Services in {pageData.location.displayName}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {pageData.practiceArea.services.map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Scale className="text-blue-600" size={20} />
                      <h3 className="text-xl font-semibold text-gray-900">{service}</h3>
                    </div>
                    <p className="text-gray-600">
                      Expert legal representation for {service.toLowerCase()} cases in {pageData.location.displayName} 
                      and throughout {pageData.location.courtInfo.jurisdiction}.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Court Information Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {pageData.location.courtInfo.jurisdiction} Court Information
              </h2>
              <div className="bg-blue-50 rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Court</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-blue-600 mt-1" size={18} />
                        <div>
                          <p className="font-medium text-gray-900">{pageData.location.courtInfo.primary}</p>
                          <p className="text-gray-600">{pageData.location.courtInfo.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Presiding Judges</h3>
                    <ul className="space-y-2">
                      {pageData.location.courtInfo.judges.map((judge, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="text-blue-600" size={16} />
                          <span className="text-gray-700">{judge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-gray-600">
                    Our attorneys regularly appear before these judges and understand their preferences, 
                    procedures, and expectations. This familiarity helps us present your case more effectively.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions - {pageData.practiceArea.name} in {pageData.location.displayName}
              </h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Why should I hire a local {pageData.practiceArea.name.toLowerCase()} attorney in {pageData.location.displayName}?
                  </h3>
                  <p className="text-gray-600">
                    Local attorneys understand the specific procedures, judges, and legal community in {pageData.location.displayName}. 
                    This knowledge can be crucial to achieving the best possible outcome in your case. Our attorneys have appeared 
                    regularly in {pageData.location.courtInfo.jurisdiction} courts for over 30 years.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How much does a {pageData.practiceArea.name.toLowerCase()} attorney cost?
                  </h3>
                  <p className="text-gray-600">
                    Legal fees vary depending on the complexity of your case. We offer free consultations where we can discuss 
                    your specific situation and provide transparent information about costs. We believe in upfront, honest 
                    communication about fees and will work with you to find a payment structure that fits your situation.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How long will my {pageData.practiceArea.name.toLowerCase()} case take?
                  </h3>
                  <p className="text-gray-600">
                    The timeline for {pageData.practiceArea.name.toLowerCase()} cases varies significantly based on complexity, 
                    court schedules, and other factors. During your free consultation, we can provide a realistic timeline 
                    based on the specifics of your case and current court schedules in {pageData.location.displayName}.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-lg p-8 mb-8 sticky top-8">
              <h3 className="text-2xl font-bold mb-6">Get Legal Help Today</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-yellow-400" />
                  <div>
                    <p className="font-semibold">(703) 522-7222</p>
                    <p className="text-sm text-blue-100">Free Consultation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-yellow-400" />
                  <div>
                    <p className="font-semibold">Tysons Corner Office</p>
                    <p className="text-sm text-blue-100">1921 Gallows Road, Suite 900</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-yellow-400" />
                  <div>
                    <p className="font-semibold">Available 24/7</p>
                    <p className="text-sm text-blue-100">Emergency consultations</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <a 
                  href="tel:7035227222" 
                  className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <Link 
                  to="/contact" 
                  className="w-full bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar size={18} />
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Awards Section */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Awards & Recognition</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="text-yellow-500" size={20} />
                  <span className="text-gray-700">AV Rated - Martindale-Hubbell</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-500" size={20} />
                  <span className="text-gray-700">Best Lawyers Recognition</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-yellow-500" size={20} />
                  <span className="text-gray-700">Super Lawyers Selection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Scale className="text-yellow-500" size={20} />
                  <span className="text-gray-700">30+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Related Practice Areas */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Practice Areas</h3>
              <div className="space-y-2">
                {siteData.practiceAreas.slice(0, 5).map((area, index) => (
                  <Link 
                    key={index}
                    to={`/practice-area/${area.url.replace('/', '')}`}
                    className="block text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {area.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPracticeAreaPage;