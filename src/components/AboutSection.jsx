import React from 'react';
import { Code, Palette, Zap, User, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: "Frontend Development", icon: Code, level: 95 },
    { name: "UI/UX Design", icon: Palette, level: 88 },
    { name: "Backend Development", icon: Zap, level: 85 },
    { name: "Database Design", icon: Briefcase, level: 82 }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience creating 
              digital solutions that bridge the gap between design and functionality. 
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey began with a curiosity for how things work, which led me to 
              explore everything from frontend frameworks to backend architectures. 
              I believe in writing clean, efficient code and creating user experiences 
              that are both intuitive and delightful.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <User className="w-48 h-48 mx-auto text-purple-300" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
