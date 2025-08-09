import React from 'react';
import { ExternalLink, ChevronDown, Code, Trophy } from 'lucide-react';
import profileImg from '../assets/KC_Profile_Img.jpeg';
import resumePdf from '../assets/KC_Resume.pdf';
import { FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { heroInfo } from '../constants/constants';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-32 md:pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="text-center md:text-left space-y-6">
          <div className="animate-fade-in-up">
            <span className="text-xl md:text-2xl font-semibold text-gray-200">Hi, I'm</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-1 mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                {heroInfo.name.split(' ')[0]}
              </span>
              <br />
              <span className="text-white">{heroInfo.name.split(' ')[1]}</span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up delay-200">
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              {heroInfo.title}
            </p>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              {heroInfo.description}
            </p>
          </div>

          <div className="animate-fade-in-up delay-300 mt-6 flex items-center justify-center md:justify-start gap-4">
            <a
                href={heroInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-3xl text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href={heroInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-3xl text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub />
              </a>
          </div>

          <div className="animate-fade-in-up delay-300 mt-4 flex items-center justify-center md:justify-start gap-2">
            <FaLocationDot className="text-lg text-purple-400" />
            <span className="text-gray-400 text-base">{heroInfo.location}</span>
          </div>

          <div className="animate-fade-in-up delay-350 mt-6">
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href={heroInfo.codingProfiles.leetcode.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 px-4 py-3 rounded-lg border border-gray-700/50 bg-gray-900/30 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${heroInfo.codingProfiles.leetcode.color}15, ${heroInfo.codingProfiles.leetcode.color}05)`
                }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${heroInfo.codingProfiles.leetcode.color}20` }}
                >
                  <Code 
                    className="w-5 h-5"
                    style={{ color: heroInfo.codingProfiles.leetcode.color }}
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">LeetCode</div>
                  <div className="flex items-center space-x-2">
                    <span 
                      className="text-sm font-semibold"
                      style={{ color: heroInfo.codingProfiles.leetcode.color }}
                    >
                      {heroInfo.codingProfiles.leetcode.rating}
                    </span>
                    <span 
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ 
                        backgroundColor: `${heroInfo.codingProfiles.leetcode.color}20`,
                        color: heroInfo.codingProfiles.leetcode.color 
                      }}
                    >
                      {heroInfo.codingProfiles.leetcode.badge}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors" />
              </a>

              <a
                href={heroInfo.codingProfiles.codeforces.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 px-4 py-3 rounded-lg border border-gray-700/50 bg-gray-900/30 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${heroInfo.codingProfiles.codeforces.color}15, ${heroInfo.codingProfiles.codeforces.color}05)`
                }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${heroInfo.codingProfiles.codeforces.color}20` }}
                >
                  <Trophy 
                    className="w-5 h-5"
                    style={{ color: heroInfo.codingProfiles.codeforces.color }}
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Codeforces</div>
                  <div className="flex items-center space-x-2">
                    <span 
                      className="text-sm font-semibold"
                      style={{ color: heroInfo.codingProfiles.codeforces.color }}
                    >
                      {heroInfo.codingProfiles.codeforces.rating}
                    </span>
                    <span 
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ 
                        backgroundColor: `${heroInfo.codingProfiles.codeforces.color}20`,
                        color: heroInfo.codingProfiles.codeforces.color 
                      }}
                    >
                      {heroInfo.codingProfiles.codeforces.badge}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
            <button 
              className="group bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <span className="flex items-center space-x-2 w-full justify-center">
                <span>View My Work</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              className="border border-purple-500/50 px-10 py-3 rounded-full hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(resumePdf, '_blank')}
            >
              Resume
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative animate-fade-in-up delay-300">
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Krishna Chamarthy Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl opacity-50 blur-xl animate-pulse" />
              
              <div className="absolute -top-6 -right-6 w-10 h-10 border-2 border-purple-400/50 rounded-full animate-bounce delay-1000" />
              <div className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-blue-400/50 rounded-lg rotate-45 animate-pulse delay-500" />
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
        <ChevronDown 
          className="w-8 h-8 text-purple-400 animate-bounce hover:text-purple-300 transition-colors cursor-pointer"
          onClick={() => {
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
              skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        />
      </div>

      <div className="absolute top-1/4 left-4 md:left-10 w-16 h-16 md:w-20 md:h-20 border border-purple-500/30 rounded-lg rotate-12 animate-pulse" />
      <div className="absolute bottom-1/4 right-4 md:right-10 w-12 h-12 md:w-16 md:h-16 border border-blue-500/30 rounded-full animate-pulse delay-1000" />
    </section>
  );
};

export default HeroSection;
