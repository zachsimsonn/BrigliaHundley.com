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
import Footer from "./components/Footer";
import About from "./components/About";
import Attorneys from "./components/Attorneys";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import PracticeAreasPage from "./components/pages/PracticeAreasPage";
import PracticeAreaPage from "./components/pages/PracticeAreaPage";
import AttorneyProfilePage from "./components/pages/AttorneyProfilePage";
import BlogPostPage from "./components/pages/BlogPostPage";
import LocationPracticeAreaPage from "./components/pages/LocationPracticeAreaPage";
import { Toaster } from "./components/ui/toaster";
import Hero from "./components/Hero";
import ServiceAreas from "./components/ServiceAreas";
import PracticeAreas from "./components/PracticeAreas";
import FAQ from "./components/FAQ";
import SEO from "./components/SEO";

// Data
import { siteData, editableContent } from "./data/mockData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const App = () => {
  const [data, setData] = useState(siteData);
  const [editableData, setEditableData] = useState(editableContent);

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

  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="home"
                />
                <div className="min-h-screen bg-white">
                  <SEO 
                    title="Home"
                    description="Tier 1 ranked law firm in Tysons Corner, VA. Expert attorneys in criminal defense, civil litigation, corporate law since 1993."
                    keywords="law firm, attorneys, lawyers, Tysons Corner, Virginia, criminal defense, civil litigation, corporate law, family law, personal injury, real estate, estate planning"
                    canonical="https://brigliahundley.com/"
                  />
                  <Hero data={data} editableContent={editableData} />
                  <About data={data} editableContent={editableData} />
                  <ServiceAreas data={data} />
                  <PracticeAreas data={data} onNavigate={handleNavigate} />
                  <Attorneys data={data} onNavigate={handleNavigate} />
                  <Testimonials data={data} />
                  <FAQ data={data} />
                  <Contact data={data} editableContent={editableData} />
                </div>
                <Footer data={data} />
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
                    description="Learn about Briglia Hundley®, Tier 1 ranked law firm in Tysons Corner, VA. Experienced attorneys serving clients since 1993."
                    keywords="about Briglia Hundley, law firm history, Tysons Corner attorneys, Virginia lawyers"
                    canonical="https://brigliahundley.com/about"
                  />
                  <About data={data} editableContent={editableData} />
                </div>
                <Footer data={data} />
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
                    description="Meet our AV-rated attorneys at Briglia Hundley®. Best Lawyers and Super Lawyers recognized legal team in Tysons Corner."
                    keywords="attorneys, lawyers, legal team, Briglia Hundley, Virginia lawyers, Tysons Corner attorneys"
                    canonical="https://brigliahundley.com/attorneys"
                  />
                  <Attorneys data={data} onNavigate={handleNavigate} />
                </div>
                <Footer data={data} />
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
                    description="Client testimonials for Briglia Hundley®. Read reviews from satisfied clients in Virginia, DC, and Maryland."
                    keywords="testimonials, client reviews, Briglia Hundley reviews, law firm testimonials"
                    canonical="https://brigliahundley.com/testimonials"
                  />
                  <Testimonials data={data} />
                </div>
                <Footer data={data} />
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
                    description="Contact Briglia Hundley® in Tysons Corner, VA. Call (703) 522-7222 or schedule a free consultation today."
                    keywords="contact Briglia Hundley, law firm contact, Tysons Corner legal help, Virginia lawyers"
                    canonical="https://brigliahundley.com/contact"
                  />
                  <Contact data={data} editableContent={editableData} />
                </div>
                <Footer data={data} />
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
                    description="Legal insights from Briglia Hundley® attorneys. Expert analysis on Virginia law, criminal defense, family law, and more."
                    keywords="legal blog, law firm blog, Virginia legal news, criminal defense updates, family law insights"
                    canonical="https://brigliahundley.com/blog"
                  />
                  <Blog data={data} onNavigate={handleNavigate} />
                </div>
                <Footer data={data} />
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
                    description="Legal insights from Briglia Hundley® attorneys. Expert analysis on Virginia law, criminal defense, family law, and more."
                    keywords="legal blog, law firm blog, Virginia legal news, criminal defense updates, family law insights"
                    canonical="https://brigliahundley.com/blog"
                  />
                  <Blog data={data} onNavigate={handleNavigate} />
                </div>
                <Footer data={data} />
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
                    description="12 practice areas at Briglia Hundley®. Expert legal services in Northern Virginia, Washington DC, and Maryland."
                    keywords="practice areas, legal services, criminal defense, family law, business litigation, Virginia attorneys"
                    canonical="https://brigliahundley.com/practice-areas"
                  />
                  <PracticeAreasPage data={data} onNavigate={handleNavigate} />
                </div>
                <Footer data={data} />
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
                <Toaster />
              </div>
            } />
            {/* Hidden SEO Pages - Location + Practice Area Combinations */}
            <Route path="/:location-:practiceArea-lawyer" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="hidden-seo"
                />
                <LocationPracticeAreaPage data={data} onNavigate={handleNavigate} />
                <Footer data={data} />
                <Toaster />
              </div>
            } />
            <Route path="/:location-:practiceArea-attorney" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="hidden-seo"
                />
                <LocationPracticeAreaPage data={data} onNavigate={handleNavigate} />
                <Footer data={data} />
                <Toaster />
              </div>
            } />
            <Route path="/:location-:practiceArea-law-firm" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="hidden-seo"
                />
                <LocationPracticeAreaPage data={data} onNavigate={handleNavigate} />
                <Footer data={data} />
                <Toaster />
              </div>
            } />
            <Route path="/best-:location-:practiceArea-attorneys" element={
              <div>
                <Header 
                  data={data} 
                  onEdit={handleContentEdit} 
                  onNavigate={handleNavigate}
                  currentPage="hidden-seo"
                />
                <LocationPracticeAreaPage data={data} onNavigate={handleNavigate} />
                <Footer data={data} />
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