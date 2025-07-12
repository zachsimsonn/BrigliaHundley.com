import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import { ExternalLink, MapPin, Users, Scale, FileText, Home } from 'lucide-react';

const SitemapPage = () => {
  // Main pages
  const mainPages = [
    { title: 'Home', url: '/', description: 'Welcome to Briglia Hundley Law Firm' },
    { title: 'About', url: '/about', description: 'Learn about our award-winning law firm' },
    { title: 'Attorneys', url: '/attorneys', description: 'Meet our experienced legal team' },
    { title: 'Practice Areas', url: '/practice-areas', description: 'Our comprehensive legal services' },
    { title: 'Testimonials', url: '/testimonials', description: 'Client reviews and testimonials' },
    { title: 'Blog', url: '/blog', description: 'Legal insights and news' },
    { title: 'Contact', url: '/contact', description: 'Get in touch with our legal team' }
  ];

  // Location-specific practice area pages (hidden SEO pages)
  const locationPracticePages = [
    // Tysons Corner
    { title: 'Tysons Corner Criminal Defense Lawyer', url: '/tysons-corner-criminal-defense-lawyer' },
    { title: 'Tysons Corner Criminal Defense Attorney', url: '/tysons-corner-criminal-defense-attorney' },
    { title: 'Best Tysons Corner Criminal Defense Attorneys', url: '/best-tysons-corner-criminal-defense-attorneys' },
    { title: 'Tysons Corner Family Law Lawyer', url: '/tysons-corner-family-law-lawyer' },
    { title: 'Tysons Corner Family Law Attorney', url: '/tysons-corner-family-law-attorney' },
    { title: 'Best Tysons Corner Family Law Attorneys', url: '/best-tysons-corner-family-law-attorneys' },
    { title: 'Tysons Corner Personal Injury Lawyer', url: '/tysons-corner-personal-injury-lawyer' },
    { title: 'Tysons Corner Personal Injury Attorney', url: '/tysons-corner-personal-injury-attorney' },
    { title: 'Best Tysons Corner Personal Injury Attorneys', url: '/best-tysons-corner-personal-injury-attorneys' },
    { title: 'Tysons Corner DUI Defense Lawyer', url: '/tysons-corner-dui-defense-lawyer' },
    { title: 'Tysons Corner DUI Defense Attorney', url: '/tysons-corner-dui-defense-attorney' },
    { title: 'Best Tysons Corner DUI Defense Attorneys', url: '/best-tysons-corner-dui-defense-attorneys' },
    { title: 'Tysons Corner DUI Lawyer', url: '/tysons-corner-dui-lawyer' },
    { title: 'Tysons Corner Divorce Lawyer', url: '/tysons-corner-divorce-lawyer' },
    { title: 'Tysons Corner Child Custody Lawyer', url: '/tysons-corner-child-custody-lawyer' },
    { title: 'Tysons Corner Traffic Defense Lawyer', url: '/tysons-corner-traffic-defense-lawyer' },
    { title: 'Tysons Corner Traffic Defense Attorney', url: '/tysons-corner-traffic-defense-attorney' },
    { title: 'Tysons Corner Traffic Lawyer', url: '/tysons-corner-traffic-lawyer' },
    { title: 'Tysons Corner Reckless Driving Lawyer', url: '/tysons-corner-reckless-driving-lawyer' },
    { title: 'Tysons Corner Domestic Violence Lawyer', url: '/tysons-corner-domestic-violence-lawyer' },
    { title: 'Tysons Corner Assault Lawyer', url: '/tysons-corner-assault-lawyer' },
    { title: 'Tysons Corner Protective Order Lawyer', url: '/tysons-corner-protective-order-lawyer' },
    { title: 'Tysons Corner Drug Crime Lawyer', url: '/tysons-corner-drug-crime-lawyer' },

    // Fairfax County
    { title: 'Fairfax County Criminal Defense Lawyer', url: '/fairfax-county-criminal-defense-lawyer' },
    { title: 'Fairfax County Criminal Defense Attorney', url: '/fairfax-county-criminal-defense-attorney' },
    { title: 'Best Fairfax County Criminal Defense Attorneys', url: '/best-fairfax-county-criminal-defense-attorneys' },
    { title: 'Fairfax County Family Law Lawyer', url: '/fairfax-county-family-law-lawyer' },
    { title: 'Fairfax County Family Law Attorney', url: '/fairfax-county-family-law-attorney' },
    { title: 'Best Fairfax County Family Law Attorneys', url: '/best-fairfax-county-family-law-attorneys' },
    { title: 'Fairfax County Personal Injury Lawyer', url: '/fairfax-county-personal-injury-lawyer' },
    { title: 'Fairfax County Personal Injury Attorney', url: '/fairfax-county-personal-injury-attorney' },
    { title: 'Best Fairfax County Personal Injury Attorneys', url: '/best-fairfax-county-personal-injury-attorneys' },
    { title: 'Fairfax County DUI Defense Lawyer', url: '/fairfax-county-dui-defense-lawyer' },
    { title: 'Fairfax County DUI Defense Attorney', url: '/fairfax-county-dui-defense-attorney' },
    { title: 'Best Fairfax County DUI Defense Attorneys', url: '/best-fairfax-county-dui-defense-attorneys' },
    { title: 'Fairfax County DUI Lawyer', url: '/fairfax-county-dui-lawyer' },
    { title: 'Fairfax County Divorce Lawyer', url: '/fairfax-county-divorce-lawyer' },
    { title: 'Fairfax County Child Custody Lawyer', url: '/fairfax-county-child-custody-lawyer' },
    { title: 'Fairfax County Traffic Lawyer', url: '/fairfax-county-traffic-lawyer' },
    { title: 'Fairfax County Reckless Driving Lawyer', url: '/fairfax-county-reckless-driving-lawyer' },
    { title: 'Fairfax County Domestic Violence Lawyer', url: '/fairfax-county-domestic-violence-lawyer' },
    { title: 'Fairfax County Assault Lawyer', url: '/fairfax-county-assault-lawyer' },
    { title: 'Fairfax County Protective Order Lawyer', url: '/fairfax-county-protective-order-lawyer' },
    { title: 'Fairfax County Drug Crime Lawyer', url: '/fairfax-county-drug-crime-lawyer' },

    // Arlington
    { title: 'Arlington Criminal Defense Lawyer', url: '/arlington-criminal-defense-lawyer' },
    { title: 'Arlington Criminal Defense Attorney', url: '/arlington-criminal-defense-attorney' },
    { title: 'Best Arlington Criminal Defense Attorneys', url: '/best-arlington-criminal-defense-attorneys' },
    { title: 'Arlington Family Law Lawyer', url: '/arlington-family-law-lawyer' },
    { title: 'Arlington Family Law Attorney', url: '/arlington-family-law-attorney' },
    { title: 'Best Arlington Family Law Attorneys', url: '/best-arlington-family-law-attorneys' },
    { title: 'Arlington DUI Defense Lawyer', url: '/arlington-dui-defense-lawyer' },
    { title: 'Arlington DUI Defense Attorney', url: '/arlington-dui-defense-attorney' },
    { title: 'Arlington DUI Lawyer', url: '/arlington-dui-lawyer' },
    { title: 'Arlington Divorce Lawyer', url: '/arlington-divorce-lawyer' },
    { title: 'Arlington Child Custody Lawyer', url: '/arlington-child-custody-lawyer' },
    { title: 'Arlington Traffic Lawyer', url: '/arlington-traffic-lawyer' },
    { title: 'Arlington Reckless Driving Lawyer', url: '/arlington-reckless-driving-lawyer' },
    { title: 'Arlington Domestic Violence Lawyer', url: '/arlington-domestic-violence-lawyer' },
    { title: 'Arlington Assault Lawyer', url: '/arlington-assault-lawyer' },
    { title: 'Arlington Protective Order Lawyer', url: '/arlington-protective-order-lawyer' },
    { title: 'Arlington Drug Crime Lawyer', url: '/arlington-drug-crime-lawyer' },

    // McLean
    { title: 'McLean Criminal Defense Lawyer', url: '/mclean-criminal-defense-lawyer' },
    { title: 'McLean Criminal Defense Attorney', url: '/mclean-criminal-defense-attorney' },
    { title: 'McLean Family Law Lawyer', url: '/mclean-family-law-lawyer' },
    { title: 'McLean Family Law Attorney', url: '/mclean-family-law-attorney' },

    // Virginia Statewide
    { title: 'Virginia Criminal Defense Lawyer', url: '/virginia-criminal-defense-lawyer' },
    { title: 'Virginia Criminal Defense Attorney', url: '/virginia-criminal-defense-attorney' },
    { title: 'Virginia Criminal Defense Law Firm', url: '/virginia-criminal-defense-law-firm' },
    { title: 'Virginia Family Law Lawyer', url: '/virginia-family-law-lawyer' },
    { title: 'Virginia Family Law Attorney', url: '/virginia-family-law-attorney' },
    { title: 'Virginia Family Law Firm', url: '/virginia-family-law-firm' },
    { title: 'Virginia DUI Defense Lawyer', url: '/virginia-dui-defense-lawyer' },
    { title: 'Virginia DUI Defense Attorney', url: '/virginia-dui-defense-attorney' },
    { title: 'Virginia DUI Lawyer', url: '/virginia-dui-lawyer' },
    { title: 'Virginia Divorce Lawyer', url: '/virginia-divorce-lawyer' },

    // Additional Secondary Locations
    { title: 'Vienna Criminal Defense Lawyer', url: '/vienna-criminal-defense-lawyer' },
    { title: 'Vienna Family Law Lawyer', url: '/vienna-family-law-lawyer' },
    { title: 'Vienna DUI Lawyer', url: '/vienna-dui-lawyer' },
    { title: 'Falls Church Criminal Defense Lawyer', url: '/falls-church-criminal-defense-lawyer' },
    { title: 'Falls Church Family Law Lawyer', url: '/falls-church-family-law-lawyer' },
    { title: 'Falls Church DUI Lawyer', url: '/falls-church-dui-lawyer' },
    { title: 'Herndon Criminal Defense Lawyer', url: '/herndon-criminal-defense-lawyer' },
    { title: 'Herndon Family Law Lawyer', url: '/herndon-family-law-lawyer' },
    { title: 'Herndon DUI Lawyer', url: '/herndon-dui-lawyer' },
    { title: 'Reston Criminal Defense Lawyer', url: '/reston-criminal-defense-lawyer' },
    { title: 'Reston Family Law Lawyer', url: '/reston-family-law-lawyer' },
    { title: 'Reston DUI Lawyer', url: '/reston-dui-lawyer' }
  ];

  // Service area pages
  const serviceAreaPages = [
    { title: 'Fairfax County Attorneys', url: '/fairfax-county-attorneys' },
    { title: 'Arlington County Lawyers', url: '/arlington-county-lawyers' },
    { title: 'Prince William County Attorneys', url: '/prince-william-county-attorneys' },
    { title: 'Loudoun County Attorneys', url: '/loudoun-county-attorneys' },
    { title: 'Tysons Corner Law Firm', url: '/tysons-corner-law-firm' },
    { title: 'McLean Attorneys', url: '/mclean-attorneys' },
    { title: 'Vienna Lawyers', url: '/vienna-lawyers' },
    { title: 'Falls Church Attorneys', url: '/falls-church-attorneys' },
    { title: 'Herndon Lawyers', url: '/herndon-lawyers' },
    { title: 'Reston Attorneys', url: '/reston-attorneys' }
  ];

  // Legal service pages
  const legalServicePages = [
    { title: 'Divorce Attorney Virginia', url: '/divorce-attorney-virginia' },
    { title: 'Criminal Defense Lawyer Virginia', url: '/criminal-defense-lawyer-virginia' },
    { title: 'Business Litigation Attorney', url: '/business-litigation-attorney' },
    { title: 'Personal Injury Lawyer Virginia', url: '/personal-injury-lawyer-virginia' }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEO 
        title="Sitemap"
        description="Complete sitemap for Briglia Hundley law firm website. Find all our pages including attorney profiles, practice areas, and local legal services."
        keywords="sitemap, Briglia Hundley, law firm pages, attorneys, practice areas, Virginia legal services"
        canonical="https://brigliahundley.com/sitemap"
      />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-xl text-gray-600">
            Complete directory of all pages on the Briglia Hundley website
          </p>
          <p className="text-gray-500 mt-2">
            Find information about our legal services across Virginia, including specialized pages for each location and practice area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Home className="text-blue-600" size={24} />
              <h2 className="text-xl font-semibold text-gray-900">Main Pages</h2>
            </div>
            <div className="space-y-2">
              {mainPages.map((page, index) => (
                <div key={index}>
                  <Link 
                    to={page.url}
                    className="block text-blue-600 hover:text-blue-800 hover:underline font-medium"
                  >
                    {page.title}
                  </Link>
                  <p className="text-sm text-gray-600 mb-2">{page.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Area Pages */}
          <div className="bg-green-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-green-600" size={24} />
              <h2 className="text-xl font-semibold text-gray-900">Service Areas</h2>
            </div>
            <div className="space-y-1">
              {serviceAreaPages.map((page, index) => (
                <Link 
                  key={index}
                  to={page.url}
                  className="block text-green-600 hover:text-green-800 hover:underline text-sm"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Service Pages */}
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-purple-600" size={24} />
              <h2 className="text-xl font-semibold text-gray-900">Legal Services</h2>
            </div>
            <div className="space-y-1">
              {legalServicePages.map((page, index) => (
                <Link 
                  key={index}
                  to={page.url}
                  className="block text-purple-600 hover:text-purple-800 hover:underline text-sm"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Location-Specific Practice Area Pages - The Hidden SEO Empire */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 text-white mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-yellow-400" size={28} />
              <h2 className="text-2xl font-semibold">Location-Specific Legal Services</h2>
            </div>
            <p className="text-blue-100 mb-4">
              Specialized legal representation for each community we serve. Our attorneys understand local courts, 
              procedures, and legal landscape to provide the most effective representation for your case.
            </p>
            <div className="bg-blue-800/50 rounded-lg p-4">
              <p className="text-sm text-blue-200">
                <strong>Coverage Areas:</strong> Tysons Corner, Fairfax County, Arlington, McLean, Vienna, Falls Church, 
                Herndon, Reston, and throughout Northern Virginia
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locationPracticePages.map((page, index) => (
              <Link 
                key={index}
                to={page.url}
                className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-300 transition-all duration-200 group"
              >
                <div className="flex items-start gap-3">
                  <Scale className="text-blue-600 group-hover:text-blue-700 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700 group-hover:text-blue-600 text-sm font-medium leading-relaxed">
                    {page.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-gray-600" size={24} />
            <h2 className="text-xl font-semibold text-gray-900">About Our Sitemap</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Coverage</h3>
              <p>
                Our comprehensive sitemap includes all pages across our website, from main navigation 
                pages to specialized location and practice area combinations. We maintain detailed 
                pages for each community we serve to provide the most relevant legal information.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Updates</h3>
              <p>
                This sitemap is updated regularly to reflect new content, practice areas, and service 
                locations. All links are verified to ensure they lead to current, accurate information 
                about our legal services in Virginia.
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Need help finding specific information? <Link to="/contact" className="text-blue-600 hover:underline">Contact us</Link> and 
              our team will be happy to assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;