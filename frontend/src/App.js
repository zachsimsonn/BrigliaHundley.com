import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import axios from "axios";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import Attorneys from "./components/Attorneys";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";
import PracticeAreaPage from "./components/pages/PracticeAreaPage";
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
    "logo": "https://brigliahundley.com/briglia-hundley-logo.svg",
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
    "areaServed": {
      "@type": "Place",
      "name": "Mid-Atlantic region"
    },
    "serviceArea": [
      {
        "@type": "State",
        "name": "Virginia"
      },
      {
        "@type": "State", 
        "name": "Washington, D.C."
      },
      {
        "@type": "State",
        "name": "Maryland"
      }
    ],
    "priceRange": "$$$$",
    "openingHours": "Mo-Fr 09:00-18:00"
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
              description="Legal insights and news from Briglia Hundley®. Stay informed with articles on Virginia law, legal updates, and attorney insights."
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
                {renderCurrentPage()}
                <Footer data={data} />
                <AdminDashboard 
                  data={data} 
                  onDataUpdate={handleDataUpdate} 
                />
                <Toaster />
              </div>
            }>
              <Route index element={<div />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
};

export default App;
