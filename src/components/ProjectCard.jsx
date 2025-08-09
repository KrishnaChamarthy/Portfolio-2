import React from 'react';
import { Github, ExternalLink, FileText, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project, cardType = "standard" }) => {
  const navigate = useNavigate();
  
  if (!project) {
    return null;
  }
  
  const primaryColor = project.colorTheme?.primary || "#3B82F6";
  const secondaryColor = project.colorTheme?.secondary || "#1D4ED8";
  const accentColor = project.colorTheme?.accent || "#93C5FD";

  const isWide = cardType === "wide";
  
  const navigateToProject = () => {
    const routes = {
      1: '/projects/reposcope',
      2: '/projects/campuscore',
      3: '/projects/exoplanet',
      4: '/projects/currexch',
      5: '/projects/pathfinding'
    };
    const route = routes[project.id];
    if (route) {
      navigate(route);
      window.scrollTo(0, 0);
    }
  };
  
  return (
    <div className={`group relative backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl ${
      isWide ? 'md:col-span-2 md:flex' : ''
    }`}
    style={{
      background: `linear-gradient(135deg, ${primaryColor}15, ${secondaryColor}15)`,
      borderColor: `${primaryColor}40`,
      boxShadow: `0 0 0 1px ${primaryColor}20`
    }}>
      
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
        }}
      />
      
      <div className={`relative overflow-hidden ${isWide ? 'md:w-1/2 h-64 md:h-auto' : 'h-64'}`}>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:saturate-150"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${primaryColor}80, transparent, ${accentColor}10)`
          }}
        />
        
        {project.featured && (
          <div 
            className="absolute top-4 right-4 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg"
          >
            ⭐ Featured
          </div>
        )}
        
        {project.underDevelopment && (
          <div 
            className="absolute top-4 left-4 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: `#F59E0B90` }}
          >
            🚧 Under Development
          </div>
        )}
      </div>
      
      <div className={`relative p-8 space-y-6 ${isWide ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
        <div className="relative pb-1">
          <h3 
            className="text-3xl font-bold bg-clip-text text-transparent transition-colors duration-300"
            style={{
              backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`
            }}
          >
            {project.title}
          </h3>
          <div 
            className="absolute -bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out origin-left"
            style={{
              background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`
            }}
          />
        </div>
        
        <p className="text-gray-300 text-base leading-relaxed transition-colors duration-300">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {project.tech?.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-4 py-2 border text-sm font-medium rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: `${primaryColor}20`,
                borderColor: `${accentColor}50`,
                color: accentColor
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-4">
          <div className="flex space-x-4">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105"
                style={{
                  color: primaryColor,
                  backgroundColor: `${primaryColor}20`,
                  borderColor: `${primaryColor}30`
                }}
              >
                <Github className="w-5 h-5" />
                <span className="text-base font-medium">Code</span>
              </a>
            )}
            
            {project.isLive && project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105"
                style={{
                  color: secondaryColor,
                  backgroundColor: `${secondaryColor}20`,
                  borderColor: `${secondaryColor}30`
                }}
              >
                <ExternalLink className="w-5 h-5" />
                <span className="text-base font-medium">Live</span>
              </a>
            )}
            
            {project.published && project.links?.paper && (
              <a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105"
                style={{
                  color: accentColor,
                  backgroundColor: `${accentColor}20`,
                  borderColor: `${accentColor}30`
                }}
              >
                <FileText className="w-5 h-5" />
                <span className="text-base font-medium">Paper</span>
              </a>
            )}
          </div>
          
          <button 
            onClick={navigateToProject}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105 group"
            style={{
              color: primaryColor,
              backgroundColor: `${primaryColor}20`,
              borderColor: `${primaryColor}30`
            }}
          >
            <span className="text-base font-medium">Details</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
