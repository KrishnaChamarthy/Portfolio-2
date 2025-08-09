import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../constants/constants';

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard project={projects[0]} cardType="wide" />
          
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[2]} />
          
          <ProjectCard project={projects[3]} />
          <ProjectCard project={projects[4]} />
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">Building innovative solutions and turning ideas into reality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
