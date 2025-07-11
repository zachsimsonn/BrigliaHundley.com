import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import axios from "axios";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoHero from "./components/VideoHero";
import About from "./components/About";
import ServiceAreas from "./components/ServiceAreas";
import PracticeAreas from "./components/PracticeAreas";
import Attorneys from "./components/Attorneys";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";
import PracticeAreaPage from "./components/pages/PracticeAreaPage";
import PracticeAreasPage from "./components/pages/PracticeAreasPage";
import AttorneyProfilePage from "./components/pages/AttorneyProfilePage";
import BlogPostPage from "./components/pages/BlogPostPage";
import { Toaster } from "./components/ui/toaster";
import SEO from "./components/SEO";

// Data
import { siteData, editableContent } from "./data/mockData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = ({ data, editableData, onNavigate }) => {
  const homeSchemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Briglia Hundley PC",
    "alternateName": "Briglia Hundley®",
    "url": "https://brigliahundley.com",
    "logo": "https://brigliahundley.com/bhlogo.png",
    "description": data.business.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1921 Gallows Road, Suite 900",
      "addressLocality": "Tysons Corner",
      "addressRegion": "VA",
      "postalCode": "22182",
      "addressCountry": "US"
    },
    "telephone": data.business.phone,
    "email": data.business.email,
    "foundingDate": "1993",
    "areaServed": [
      {
        "@type": "Place",
        "name": "Tysons Corner, Virginia"
      },
      {
        "@type": "Place", 
        "name": "Fairfax County, Virginia"
      },
      {
        "@type": "Place",
        "name": "Arlington County, Virginia"
      },
      {
        "@type": "Place",
        "name": "Prince William County, Virginia"
      },
      {
        "@type": "Place",
        "name": "Northern Virginia"
      },
      {
        "@type": "Place",
        "name": "McLean, Virginia"
      },
      {
        "@type": "Place",
        "name": "Vienna, Virginia"
      },
      {
        "@type": "Place",
        "name": "Falls Church, Virginia"
      },
      {
        "@type": "Place",
        "name": "Alexandria, Virginia"
      },
      {
        "@type": "Place",
        "name": "Herndon, Virginia"
      },
      {
        "@type": "Place",
        "name": "Reston, Virginia"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "38.9187",
        "longitude": "-77.2411"
      },
      "geoRadius": "50000"
    },
    "priceRange": "$$$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.martindale.com/brigliahundley",
      "https://www.superlawyers.com/brigliahundley",
      "https://www.bestlawyers.com/brigliahundley"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Law",
            "description": "Comprehensive family law services in Northern Virginia including divorce, custody, and support matters"
          },
          "areaServed": "Northern Virginia"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Criminal Defense",
            "description": "Experienced criminal defense representation in Northern Virginia courts"
          },
          "areaServed": "Northern Virginia"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Corporate Law",
            "description": "Complete corporate legal services for Northern Virginia businesses"
          },
          "areaServed": "Northern Virginia"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Home"
        description="Briglia Hundley® is a Tier 1 ranked, award-winning law firm in Tysons Corner, Virginia. Expert legal services in criminal defense, civil litigation, corporate law, family law, and more since 1993."
        keywords="law firm, attorneys, lawyers, Tysons Corner, Virginia, criminal defense, civil litigation, corporate law, family law, personal injury, real estate, estate planning"
        canonical="https://brigliahundley.com/"
        schemaData={homeSchemaData}
      />
      <Hero data={data} editableContent={editableData} />
      <About data={data} editableContent={editableData} />
      <ServiceAreas data={data} />
      <PracticeAreas data={data} onNavigate={onNavigate} />
      <Attorneys data={data} onNavigate={onNavigate} />
      <Testimonials data={data} />
      <FAQ data={data} />
      <Contact data={data} editableContent={editableData} />
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(siteData);
  const [editableData, setEditableData] = useState(editableContent);
  const [currentPage, setCurrentPage] = useState('home');
  const [pageParams, setPageParams] = useState({});

  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  const handleContentEdit = (field, value) => {
    const fieldParts = field.split('.');
    if (fieldParts.length > 1) {
      setEditableData(prev => ({
        ...prev,
        [fieldParts[0]]: {
          ...prev[fieldParts[0]],
          [fieldParts[1]]: value
        }
      }));
    } else {
      setEditableData(prev => ({
        ...prev,
        [field]: value
      }));
    }
    
    localStorage.setItem('editableContent', JSON.stringify(editableData));
  };

  const handleDataUpdate = (newData) => {
    setData(newData);
    localStorage.setItem('siteData', JSON.stringify(newData));
  };

  const handleNavigate = (page, params = {}) => {
    setCurrentPage(page);
    setPageParams(params);
    window.scrollTo(0, 0);
  };

  // Load saved content from localStorage on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem('editableContent');
    const savedData = localStorage.getItem('siteData');
    
    if (savedContent) {
      setEditableData(JSON.parse(savedContent));
    }
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home data={data} editableData={editableData} onNavigate={handleNavigate} />;
      
      case 'about':
        return (
          <div className="min-h-screen bg-white pt-20">
            <SEO 
              title="About Us"
              description="Learn about Briglia Hundley®, a Tier 1 ranked law firm in Tysons Corner, Virginia. Our experienced attorneys have been serving clients since 1993."
              keywords="about Briglia Hundley, law firm history, Tysons Corner attorneys, Virginia lawyers"
              canonical="https://brigliahundley.com/about"
            />
            <About data={data} editableContent={editableData} />
          </div>
        );
      
      case 'attorneys':
        return (
          <div className="min-h-screen bg-white pt-20">
            <SEO 
              title="Attorneys"
              description="Meet our experienced legal team at Briglia Hundley®. Our attorneys are AV rated and recognized by Best Lawyers and Super Lawyers."
              keywords="attorneys, lawyers, legal team, Briglia Hundley, Virginia lawyers, Tysons Corner attorneys"
              canonical="https://brigliahundley.com/attorneys"
            />
            <Attorneys data={data} onNavigate={handleNavigate} />
          </div>
        );
      
      case 'testimonials':
        return (
          <div className="min-h-screen bg-white pt-20">
            <SEO 
              title="Testimonials"
              description="Read what our clients say about Briglia Hundley®. Client testimonials and reviews from satisfied clients in Virginia, DC, and Maryland."
              keywords="testimonials, client reviews, Briglia Hundley reviews, law firm testimonials"
              canonical="https://brigliahundley.com/testimonials"
            />
            <Testimonials data={data} />
          </div>
        );
      
      case 'contact':
        return (
          <div className="min-h-screen bg-white pt-20">
            <SEO 
              title="Contact Us"
              description="Contact Briglia Hundley® for your legal needs. Located in Tysons Corner, Virginia. Schedule a free consultation today."
              keywords="contact, Tysons Corner law firm, free consultation, Virginia attorneys"
              canonical="https://brigliahundley.com/contact"
            />
            <Contact data={data} editableContent={editableData} />
          </div>
        );
      
      case 'blog':
        return (
          <div className="min-h-screen bg-white pt-20">
            <SEO 
              title="Blog"
              description="Briglia Hundley Blogs - Stay informed with articles on Virginia law, legal updates, and attorney insights from our experienced legal team."
              keywords="legal blog, Virginia law, legal news, attorney insights, Briglia Hundley blog"
              canonical="https://brigliahundley.com/blog"
            />
            <Blog data={data} onNavigate={handleNavigate} />
          </div>
        );
      
      case 'blog-post':
        return (
          <BlogPostPage 
            slug={pageParams.slug} 
            data={data} 
            onNavigate={handleNavigate} 
          />
        );
      
      case 'practice-areas':
        return (
          <div className="min-h-screen bg-white pt-20">
            <SEO 
              title="Practice Areas"
              description="Briglia Hundley Practice Areas - Comprehensive legal services across 12 practice areas serving Northern Virginia, Washington DC, and Maryland."
              keywords="practice areas, legal services, Virginia attorneys, Washington DC lawyers, Maryland law firm"
              canonical="https://brigliahundley.com/practice-areas"
            />
            <PracticeAreasPage data={data} onNavigate={handleNavigate} />
          </div>
        );
      
      case 'practice-area':
        const practiceArea = data.practiceAreas.find(area => 
          area.title.toLowerCase().replace(/\s+/g, '-') === pageParams.area
        );
        const areaTitle = practiceArea ? practiceArea.title : 'Practice Area';
        return (
          <>
            <SEO 
              title={areaTitle}
              description={`Expert ${areaTitle.toLowerCase()} legal services from Briglia Hundley®. Experienced attorneys serving Virginia, Washington DC, and Maryland.`}
              keywords={`${areaTitle.toLowerCase()}, Virginia ${areaTitle.toLowerCase()}, ${areaTitle.toLowerCase()} attorney, Briglia Hundley`}
              canonical={`https://brigliahundley.com/practice-area/${pageParams.area}`}
            />
            <PracticeAreaPage 
              areaName={pageParams.area} 
              data={data} 
              onNavigate={handleNavigate} 
            />
          </>
        );
      
      case 'attorney-profile':
        const attorney = data.attorneys.find(att => 
          att.name.toLowerCase().replace(/\s+/g, '-') === pageParams.name
        );
        const attorneyName = attorney ? attorney.name : 'Attorney';
        const attorneyPosition = attorney ? attorney.position : '';
        return (
          <>
            <SEO 
              title={`${attorneyName}${attorneyPosition ? ` - ${attorneyPosition}` : ''}`}
              description={`${attorneyName} is ${attorneyPosition ? `a ${attorneyPosition}` : 'an attorney'} at Briglia Hundley® in Tysons Corner, Virginia. ${attorney?.experience || 'Experienced legal representation.'}`}
              keywords={`${attorneyName}, ${attorneyPosition}, Virginia attorney, Tysons Corner lawyer, Briglia Hundley`}
              canonical={`https://brigliahundley.com/attorney-profile/${pageParams.name}`}
            />
            <AttorneyProfilePage 
              attorneyName={pageParams.name} 
              data={data} 
              onNavigate={handleNavigate} 
            />
          </>
        );
      
      default:
        return <Home data={data} editableData={editableData} onNavigate={handleNavigate} />;
    }
  };

  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage={currentPage}
                />
                <Home data={data} editableData={editableData} onNavigate={handleNavigate} />
                <Footer data={data} />
                <AdminDashboard 
                  data={data} 
                  onDataUpdate={handleDataUpdate} 
                />
                <Toaster />
              </div>
            } />
            <Route path="/about" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="about"
                />
                <div className="min-h-screen bg-white pt-20">
                  <SEO 
                    title="About Us"
                    description="Learn about Briglia Hundley®, a Tier 1 ranked law firm in Tysons Corner, Virginia. Our experienced attorneys have been serving clients since 1993."
                    keywords="about Briglia Hundley, law firm history, Tysons Corner attorneys, Virginia lawyers"
                    canonical="https://brigliahundley.com/about"
                  />
                  <About data={data} editableContent={editableData} />
                </div>
                <Footer data={data} />
                <AdminDashboard 
                  data={data} 
                  onDataUpdate={handleDataUpdate} 
                />
                <Toaster />
              </div>
            } />
            <Route path="/attorneys" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="attorneys"
                />
                <div className="min-h-screen bg-white pt-20">
                  <SEO 
                    title="Attorneys"
                    description="Meet our experienced legal team at Briglia Hundley®. Our attorneys are AV rated and recognized by Best Lawyers and Super Lawyers."
                    keywords="attorneys, lawyers, legal team, Briglia Hundley, Virginia lawyers, Tysons Corner attorneys"
                    canonical="https://brigliahundley.com/attorneys"
                  />
                  <Attorneys data={data} onNavigate={handleNavigate} />
                </div>
                <Footer data={data} />
                <AdminDashboard 
                  data={data} 
                  onDataUpdate={handleDataUpdate} 
                />
                <Toaster />
              </div>
            } />
            <Route path="/testimonials" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="testimonials"
                />
                <div className="min-h-screen bg-white pt-20">
                  <SEO 
                    title="Testimonials"
                    description="Read what our clients say about Briglia Hundley®. Client testimonials and reviews from satisfied clients in Virginia, DC, and Maryland."
                    keywords="testimonials, client reviews, Briglia Hundley reviews, law firm testimonials"
                    canonical="https://brigliahundley.com/testimonials"
                  />
                  <Testimonials data={data} />
                </div>
                <Footer data={data} />
                <AdminDashboard 
                  data={data} 
                  onDataUpdate={handleDataUpdate} 
                />
                <Toaster />
              </div>
            } />
            <Route path="/contact" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="contact"
                />
                <div className="min-h-screen bg-white pt-20">
                  <SEO 
                    title="Contact Us"
                    description="Contact Briglia Hundley® for expert legal representation in Tysons Corner, Virginia. Call (703) 522-7222 or schedule a free consultation today."
                    keywords="contact Briglia Hundley, law firm contact, Tysons Corner legal help, Virginia lawyers"
                    canonical="https://brigliahundley.com/contact"
                  />
                  <Contact data={data} editableContent={editableData} />
                </div>
                <Footer data={data} />
                <AdminDashboard 
                  data={data} 
                  onDataUpdate={handleDataUpdate} 
                />
                <Toaster />
              </div>
            } />
            <Route path="/blog" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="blog"
                />
                <div className="min-h-screen bg-white pt-20">
                  <SEO 
                    title="Blog"
                    description="Read the latest legal insights and updates from Briglia Hundley® attorneys. Expert analysis on Virginia law, criminal defense, family law, and more."
                    keywords="legal blog, law firm blog, Virginia legal news, criminal defense updates, family law insights"
                    canonical="https://brigliahundley.com/blog"
                  />
                  <Blog data={data} onNavigate={handleNavigate} />
                </div>
                <Footer data={data} />
                <AdminDashboard 
                  data={data} 
                  onDataUpdate={handleDataUpdate} 
                />
                <Toaster />
              </div>
            } />
            <Route path="/blog/category/:category" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="blog"
                />
                <div className="min-h-screen bg-white pt-20">
                  <SEO 
                    title="Blog"
                    description="Read the latest legal insights and updates from Briglia Hundley® attorneys. Expert analysis on Virginia law, criminal defense, family law, and more."
                    keywords="legal blog, law firm blog, Virginia legal news, criminal defense updates, family law insights"
                    canonical="https://brigliahundley.com/blog"
                  />
                  <Blog data={data} onNavigate={handleNavigate} />
                </div>
                <Footer data={data} />
                <AdminDashboard 
                  data={data} 
                  onDataUpdate={handleDataUpdate} 
                />
                <Toaster />
              </div>
            } />
            <Route path="/practice-areas" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="practice-areas"
                />
                <div className="min-h-screen bg-white pt-20">
                  <SEO 
                    title="Practice Areas"
                    description="Explore our comprehensive legal services at Briglia Hundley®. Expert representation in criminal defense, family law, business litigation, and more."
                    keywords="practice areas, legal services, criminal defense, family law, business litigation, Virginia attorneys"
                    canonical="https://brigliahundley.com/practice-areas"
                  />
                  <PracticeAreasPage data={data} onNavigate={handleNavigate} />
                </div>
                <Footer data={data} />
                <AdminDashboard 
                  data={data} 
                  onDataUpdate={handleDataUpdate} 
                />
                <Toaster />
              </div>
            } />
            <Route path="/practice-area/:area" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="practice-area"
                />
                <PracticeAreaPage data={data} onNavigate={handleNavigate} />
                <Footer data={data} />
                <AdminDashboard 
                  data={data} 
                  onDataUpdate={handleDataUpdate} 
                />
                <Toaster />
              </div>
            } />
            <Route path="/attorney-profile/:name" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="attorney-profile"
                />
                <AttorneyProfilePage data={data} onNavigate={handleNavigate} />
                <Footer data={data} />
                <AdminDashboard 
                  data={data} 
                  onDataUpdate={handleDataUpdate} 
                />
                <Toaster />
              </div>
            } />
            <Route path="/blog/:slug" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="blog-post"
                />
                <BlogPostPage data={data} onNavigate={handleNavigate} />
                <Footer data={data} />
                <AdminDashboard 
                  data={data} 
                  onDataUpdate={handleDataUpdate} 
                />
                <Toaster />
              </div>
            } />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
};

export default App;
