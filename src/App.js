// App.js
import React, { useState } from "react";
import Navbar from "./Components/NavBar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import './App.css';

const AppContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode } = useTheme();

  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <div className="main-content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App