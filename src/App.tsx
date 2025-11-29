import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import CursorEffect from './components/CursorEffect';
import ScrollProgress from './components/ScrollProgress';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from "./components/ChatWidget";
import ResumeView from "./components/ResumeView";

function App() {
  useEffect(() => {
    document.title = 'Shoyeb Chaudhari';
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <CursorEffect />
      <ScrollProgress />
      <Navigation />

      {/* 🔥 Routes */}
      <Routes>
        {/* Portfolio Main Page */}
        <Route
          path="/"
          element={
            <>
              <main className="relative">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Achievements />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />
        
        {/* Resume Viewer Page */}
        <Route path="/resume-view" element={<ResumeView />} />
      </Routes>

      {/* 👇 Floating Chatbot always visible */}
      <ChatWidget />
    </div>
  );
}

export default App;
