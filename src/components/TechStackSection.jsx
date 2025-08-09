import React from 'react';
import { allSkills } from '../constants/constants'; 

const TechStackSection = () => {
  const skillCategories = [
    {
      skills: allSkills.filter(skill => 
        ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'HTML', 'CSS'].includes(skill.name)
      )
    },
    {
      skills: allSkills.filter(skill => 
        ['ReactJS', 'Next.js', 'Tailwind CSS', 'Node.JS', 'Express.JS', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch'].includes(skill.name)
      )
    },
    {
      skills: allSkills.filter(skill => 
        ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Docker', 'Azure', 'AWS', 'Vercel', 'Postman'].includes(skill.name)
      )
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900/20 via-purple-900/10 to-blue-900/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="group relative"
                  >
                    <div 
                      className="px-4 py-2 rounded-lg font-medium text-sm md:text-base shadow-lg transition-all duration-500 ease-out cursor-default flex items-center gap-2 relative backdrop-blur-md border-2 border-white/20 bg-white/5 text-white group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-white/20 group-hover:via-white/10 group-hover:to-white/20 group-hover:border-white/60 group-hover:shadow-2xl group-hover:-translate-y-1"
                    >
                      <skill.icon 
                        className="text-lg transition-all duration-500 ease-out group-hover:scale-125 group-hover:drop-shadow-lg" 
                        style={{ color: skill.color }}
                      />
                      <span className="transition-all duration-500 ease-out group-hover:text-white group-hover:font-semibold group-hover:drop-shadow-sm">{skill.name}</span>
                      
                      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-lg blur-xl scale-150"
                           style={{ 
                             background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`
                           }}>
                      </div>
                      
                      <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-30 transition-all duration-500 ease-out rounded-lg blur-sm animate-pulse"
                           style={{ 
                             background: `linear-gradient(45deg, ${skill.color}40, transparent, ${skill.color}40)`
                           }}>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-60 transition-all duration-500 ease-out scale-125"
                         style={{ 
                           background: `radial-gradient(circle at center, ${skill.color}30, ${skill.color}10, transparent)`
                         }}>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">Always learning and exploring new technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
