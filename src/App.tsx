import React, { useEffect } from 'react';
import CursorEffect from './components/CursorEffect';
import ScrollProgress from './components/ScrollProgress';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience'; // ✅ Import Experience
import Projects from './components/Projects';
import Achievements from './components/Achievements'; // ✅ Import Achievements (we’ll create this)
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Shoyeb Chaudhari'; // ✅ Update your name
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <CursorEffect />
      <ScrollProgress />
      <Navigation />
      
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience /> {/* ✅ Added Experience */}
        <Projects />
        <Achievements /> {/* ✅ Added Achievements */}
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
