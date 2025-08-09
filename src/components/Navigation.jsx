import React from 'react';
import { navigationItems } from '../constants/constants';

const Navigation = ({ activeSection, setActiveSection }) => {
  const handleSectionClick = (section) => {
    setActiveSection(section);
    
    const sectionId = section === 'home' ? 'hero' : section;
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-2xl">
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 bg-black/10 backdrop-blur-xl rounded-full p-2 md:p-2 border border-white/5">
        {navigationItems.map((section) => (
          <button
            key={section}
            onClick={() => handleSectionClick(section)}
            className={`relative px-3 md:px-5 py-2 md:py-2.5 rounded-full capitalize transition-all duration-200 transform text-xs md:text-sm font-medium whitespace-nowrap ${
              activeSection === section 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/30 scale-105' 
                : 'text-gray-300 hover:text-white hover:bg-white/5 hover:scale-105'
            }`}
          >
            {section}
            {activeSection === section && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-lg" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
