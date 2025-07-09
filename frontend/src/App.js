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
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

// Data
import { siteData, editableContent } from "./data/mockData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
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
    // Handle nested object updates
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
    
    // Save to localStorage for persistence
    localStorage.setItem('editableContent', JSON.stringify(editableData));
  };

  // Load saved content from localStorage on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem('editableContent');
    if (savedContent) {
      setEditableData(JSON.parse(savedContent));
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header data={data} />
      <Hero data={data} editableContent={editableData} />
      <About data={data} editableContent={editableData} />
      <PracticeAreas data={data} />
      <Attorneys data={data} />
      <Testimonials data={data} />
      <FAQ data={data} />
      <Contact data={data} editableContent={editableData} />
      <Footer data={data} />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
