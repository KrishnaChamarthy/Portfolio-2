import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import ContinuousBackground from './components/ContinuousBackground';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isManualNavigation, setIsManualNavigation] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    let ticking = false;
    let scrollTimeout;

    const handleScroll = () => {
      if (isManualNavigation) return;

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const sections = [
              { id: 'hero', name: 'home' },
              { id: 'skills', name: 'skills' },
              { id: 'experiences', name: 'experiences' },
              { id: 'projects', name: 'projects' },
              { id: 'contact', name: 'contact' }
            ];

            let currentSection = 'home';
            let maxVisibility = 0;

            sections.forEach(({ id, name }) => {
              const element = document.getElementById(id);
              if (element) {
                const rect = element.getBoundingClientRect();
                const elementHeight = rect.height;
                const viewportHeight = window.innerHeight;
                
                const visibleTop = Math.max(0, -rect.top);
                const visibleBottom = Math.min(elementHeight, viewportHeight - rect.top);
                const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                const visibilityRatio = visibleHeight / elementHeight;

                if (visibilityRatio > maxVisibility && visibilityRatio > 0.3) {
                  maxVisibility = visibilityRatio;
                  currentSection = name;
                }
              }
            });

            setActiveSection(currentSection);
            ticking = false;
          });
          ticking = true;
        }
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isManualNavigation]);

  const handleManualNavigation = (section) => {
    setActiveSection(section);
    setIsManualNavigation(true);
    
    setTimeout(() => {
      setIsManualNavigation(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      <ContinuousBackground mousePosition={mousePosition} />
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onManualNavigation={handleManualNavigation}
      />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="skills">
        <TechStackSection />
      </div>
      <div id="experiences">
        <ExperienceSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;
