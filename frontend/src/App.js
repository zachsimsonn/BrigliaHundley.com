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
            <About data={data} editableContent={editableData} />
          </div>
        );
      
      case 'attorneys':
        return (
          <div className="min-h-screen bg-white pt-20">
            <Attorneys data={data} onNavigate={handleNavigate} />
          </div>
        );
      
      case 'testimonials':
        return (
          <div className="min-h-screen bg-white pt-20">
            <Testimonials data={data} />
          </div>
        );
      
      case 'contact':
        return (
          <div className="min-h-screen bg-white pt-20">
            <Contact data={data} editableContent={editableData} />
          </div>
        );
      
      case 'blog':
        return (
          <div className="min-h-screen bg-white pt-20">
            <Blog data={data} onNavigate={handleNavigate} />
          </div>
        );
      
      case 'practice-area':
        return (
          <PracticeAreaPage 
            areaName={pageParams.area} 
            data={data} 
            onNavigate={handleNavigate} 
          />
        );
      
      case 'attorney-profile':
        return (
          <AttorneyProfilePage 
            attorneyName={pageParams.name} 
            data={data} 
            onNavigate={handleNavigate} 
          />
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
