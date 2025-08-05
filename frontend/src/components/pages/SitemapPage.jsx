import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import { ExternalLink, MapPin, Users, Scale, FileText, Home } from 'lucide-react';

const SitemapPage = ({ data }) => {
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

  // Practice area pages - all working practice areas
  const practiceAreaPages = data.practiceAreas.map(area => ({
    title: area.title,
    url: `/practice-area/${area.title.toLowerCase().replace(/\s+/g, '-')}`,
    description: area.description
  }));

  // Attorney pages - all working attorney profiles  
  const attorneyPages = data.attorneys.map(attorney => ({
    title: attorney.name,
    url: `/attorney-profile/${attorney.name.toLowerCase().replace(/\s+/g, '-')}`,
    description: attorney.position
  }));

  // Service area pages - major service areas
  const serviceAreaPages = [
    { title: 'Tysons Corner Law Firm', url: '/contact', description: 'Legal services in Tysons Corner, Virginia' },
    { title: 'Fairfax County Legal Services', url: '/contact', description: 'Comprehensive legal representation in Fairfax County' },
    { title: 'Arlington County Attorneys', url: '/contact', description: 'Experienced lawyers serving Arlington County' },
    { title: 'Prince William County Legal Help', url: '/contact', description: 'Professional legal services in Prince William County' },
    { title: 'Loudoun County Law Firm', url: '/contact', description: 'Trusted attorneys serving Loudoun County' },
    { title: 'McLean Legal Services', url: '/contact', description: 'Expert legal representation in McLean, VA' },
    { title: 'Vienna Legal Help', url: '/contact', description: 'Experienced attorneys in Vienna, Virginia' },
    { title: 'Falls Church Law Firm', url: '/contact', description: 'Professional legal services in Falls Church' }
  ];

  // Blog pages
  const blogPages = data.blogs ? data.blogs.map(blog => ({
    title: blog.title,
    url: `/blog/${blog.slug}`,
    description: blog.excerpt
  })) : [];

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEO 
        title="Sitemap"
        description="Complete sitemap for Briglia Hundley law firm website. Find all our pages including attorney profiles, practice areas, and local legal services."
        keywords="sitemap, Briglia Hundley, law firm pages, attorneys, practice areas, Virginia legal services"
        canonical="https://brigliahundley.com/sitemap"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Website Sitemap</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete directory of all pages on the Briglia Hundley® website. Find information about our legal services, attorneys, and practice areas throughout Northern Virginia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Main Pages */}
          <div className="bg-white border-2 border-gray-900 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-900 p-2 rounded-lg">
                <Home className="text-white" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Main Pages</h2>
            </div>
            <div className="space-y-3">
              {mainPages.map((page, index) => (
                <div key={index}>
                  <Link 
                    to={page.url}
                    className="block text-gray-900 hover:text-gray-700 font-semibold text-lg transition-colors duration-200"
                  >
                    {page.title}
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div className="bg-white border-2 border-gray-900 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-900 p-2 rounded-lg">
                <Scale className="text-white" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Practice Areas</h2>
            </div>
            <div className="space-y-2">
              {practiceAreaPages.map((page, index) => (
                <Link 
                  key={index}
                  to={page.url}
                  className="block text-gray-700 hover:text-gray-900 hover:font-semibold transition-all duration-200 text-sm"
                >
                  {page.title}
                </Link>
              ))}
              <div className="pt-2 mt-4 border-t border-gray-200">
                <Link 
                  to="/practice-areas"
                  className="text-gray-900 font-semibold hover:text-gray-700 text-sm"
                >
                  View All Practice Areas →
                </Link>
              </div>
            </div>
          </div>

          {/* Attorneys */}
          <div className="bg-white border-2 border-gray-900 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-900 p-2 rounded-lg">
                <Users className="text-white" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Our Attorneys</h2>
            </div>
            <div className="space-y-2">
              {attorneyPages.map((page, index) => (
                <div key={index}>
                  <Link 
                    to={page.url}
                    className="block text-gray-700 hover:text-gray-900 hover:font-semibold transition-all duration-200 text-sm"
                  >
                    {page.title}
                  </Link>
                  <p className="text-xs text-gray-500">{page.description}</p>
                </div>
              ))}
              <div className="pt-2 mt-4 border-t border-gray-200">
                <Link 
                  to="/attorneys"
                  className="text-gray-900 font-semibold hover:text-gray-700 text-sm"
                >
                  Meet All Attorneys →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas Section */}
        <div className="mt-12">
          <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-white" size={28} />
              <h2 className="text-2xl font-bold">Service Areas</h2>
            </div>
            <p className="text-gray-300 mb-6">
              We proudly serve clients throughout Northern Virginia, providing comprehensive legal representation 
              in state and federal courts across multiple jurisdictions.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {serviceAreaPages.map((page, index) => (
                <Link 
                  key={index}
                  to={page.url}
                  className="block bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors duration-200"
                >
                  <h3 className="text-white font-semibold text-sm mb-2">{page.title}</h3>
                  <p className="text-gray-300 text-xs">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Section */}
        {blogPages.length > 0 && (
          <div className="mt-12">
            <div className="bg-white border border-gray-300 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gray-900 p-2 rounded-lg">
                  <FileText className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Legal Insights & Blog</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogPages.map((page, index) => (
                  <Link 
                    key={index}
                    to={page.url}
                    className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <h3 className="text-gray-900 font-semibold text-sm mb-2">{page.title}</h3>
                    <p className="text-gray-600 text-xs">{page.description}</p>
                  </Link>
                ))}
              </div>
              <div className="pt-4 mt-6 border-t border-gray-200 text-center">
                <Link 
                  to="/blog"
                  className="text-gray-900 font-semibold hover:text-gray-700"
                >
                  View All Blog Posts →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Contact & Additional Information */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Legal Help?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our experienced legal team is ready to help with any legal matter. 
              Contact us today for a consultation.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Contact Our Legal Team
              <ExternalLink className="ml-2" size={16} />
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-300">
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
                <p>
                  Our sitemap includes all active pages across our website, featuring 12 practice areas, 
                  14 attorney profiles, and service information for communities throughout Northern Virginia.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Regular Updates</h3>
                <p>
                  This sitemap is updated regularly to reflect new content, practice areas, and service 
                  locations. All links are verified to ensure they lead to current, accurate information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy Navigation</h3>
                <p>
                  Organized by categories to help you quickly find the legal information you need. 
                  From attorney profiles to practice area details, everything is clearly structured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;