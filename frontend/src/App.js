import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// Data
import { siteData, editableContent } from "./data/mockData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = ({ data, editableData, onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
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
  );
};

export default App;
