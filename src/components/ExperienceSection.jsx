import React, { useState } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { experiences } from '../constants/constants';

const ExperienceSection = () => {
  

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900/20 via-purple-900/10 to-blue-900/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Education
          </span>
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-blue-400 hidden md:block"></div>
          
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative mb-12 md:mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-gray-900 z-10 hidden md:block"></div>
              
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div 
                    className="group relative backdrop-blur-md border-2 rounded-lg p-6 hover:scale-105 transition-all duration-500"
                    style={{
                      borderColor: `${experience.colorTheme?.primary || '#ffffff'}40`,
                      backgroundColor: `${experience.colorTheme?.primary || '#ffffff'}0D`,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = `${experience.colorTheme?.primary || '#ffffff'}80`;
                      e.target.style.backgroundColor = `${experience.colorTheme?.primary || '#ffffff'}1A`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = `${experience.colorTheme?.primary || '#ffffff'}40`;
                      e.target.style.backgroundColor = `${experience.colorTheme?.primary || '#ffffff'}0D`;
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                          <img 
                              src={experience.logo} 
                              alt={`${experience.company} logo`}
                              className="w-16 h-16 rounded-lg transition-transform duration-300 group-hover:scale-110"
                          />
                        
                        <div>
                          <h3 
                            className="text-xl font-bold text-white transition-colors duration-300"
                            style={{ color: experience.colorTheme?.accent || '#ffffff' }}
                          >
                            {experience.title}
                          </h3>
                          <p 
                            className="font-medium"
                            style={{ color: experience.colorTheme?.secondary || '#a855f7' }}
                          >
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        experience.type === 'Full-time' 
                          ? 'bg-green-400/20 text-green-300 border border-green-400/30' 
                          : experience.type === 'Internship'
                          ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30'
                          : 'bg-blue-400/20 text-blue-300 border border-blue-400/30'
                      }`}>
                        {experience.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt style={{ color: experience.colorTheme?.primary || '#06b6d4' }} />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt style={{ color: experience.colorTheme?.secondary || '#a855f7' }} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                            <span 
                              className="leading-5 flex-shrink-0"
                              style={{ color: experience.colorTheme?.accent || '#06b6d4' }}
                            >
                              •
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {experience.technologies && <div>
                      <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 border rounded text-xs transition-colors duration-300 hover:opacity-80"
                            style={{
                              backgroundColor: `${experience.colorTheme?.primary || '#06b6d4'}20`,
                              borderColor: `${experience.colorTheme?.primary || '#06b6d4'}60`,
                              color: experience.colorTheme?.accent || '#67e8f9'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>}
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  </div>
                </div>
                
                <div className="w-full md:w-2/12 hidden md:block"></div>
                
                <div className="w-full md:w-5/12 hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">Growing and learning with every experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
