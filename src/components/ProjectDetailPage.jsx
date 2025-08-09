import React from 'react';
import { Github, ExternalLink, FileText, ArrowLeft, Calendar, Users, Target, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectDetailPage = ({ project }) => {
  const navigate = useNavigate();
  
  if (!project) {
    return <div>Project not found</div>;
  }

  const primaryColor = project.colorTheme?.primary || "#3B82F6";
  const secondaryColor = project.colorTheme?.secondary || "#1D4ED8";
  const accentColor = project.colorTheme?.accent || "#93C5FD";

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative py-20 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
          }}
        />
        
        <div className="relative max-w-6xl mx-auto">

          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-300 hover:text-white mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </button>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <h1 
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`
                }}
              >
                {project.title}
              </h1>
              

              {project.underDevelopment && (
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400/30 rounded-full text-orange-300 font-semibold">
                  <span className="text-lg">🚧</span>
                  <span>Under Active Development</span>
                </div>
              )}
              
              <p className="text-xl text-gray-300 leading-relaxed">
                {project.description}
              </p>
              

              <div className="flex flex-wrap gap-4">
                <button 
                  className="flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-300 hover:scale-105"
                  style={{
                    color: primaryColor,
                    backgroundColor: `${primaryColor}20`,
                    borderColor: `${primaryColor}30`
                  }}
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">View Code</span>
                </button>
                
                {project.isLive && (
                  <button 
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-300 hover:scale-105"
                    style={{
                      color: secondaryColor,
                      backgroundColor: `${secondaryColor}20`,
                      borderColor: `${secondaryColor}30`
                    }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-medium">Live Demo</span>
                  </button>
                )}
                
                {project.published && (
                  <button 
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-300 hover:scale-105"
                    style={{
                      color: accentColor,
                      backgroundColor: `${accentColor}20`,
                      borderColor: `${accentColor}30`
                    }}
                  >
                    <FileText className="w-5 h-5" />
                    <span className="font-medium">Research Paper</span>
                  </button>
                )}
              </div>
            </div>


            <div className="relative">
              <div 
                className="absolute inset-0 rounded-2xl opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
                }}
              />
              <img
                src={project.image}
                alt={project.title}
                className="relative w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </header>


      <main className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2 space-y-12">

              <section>
                <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3">
                  <Target className="w-8 h-8" style={{ color: primaryColor }} />
                  <span>Key Achievements</span>
                </h2>
                <div className="space-y-4">
                  {project.achievements?.map((achievement, index) => (
                    <div 
                      key={index}
                      className="p-6 rounded-xl border backdrop-blur-sm"
                      style={{
                        backgroundColor: `${primaryColor}10`,
                        borderColor: `${primaryColor}30`
                      }}
                    >
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </section>


              <section>
                <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3">
                  <Code className="w-8 h-8" style={{ color: secondaryColor }} />
                  <span>Technical Implementation</span>
                </h2>
                <div 
                  className="p-8 rounded-xl border backdrop-blur-sm"
                  style={{
                    backgroundColor: `${secondaryColor}10`,
                    borderColor: `${secondaryColor}30`
                  }}
                >
                  <p className="text-gray-300 leading-relaxed mb-6">
                    This project demonstrates advanced technical skills across multiple domains:
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    {project.tech?.map((tech, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: accentColor }}
                        />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>


            <div className="space-y-8">

              <div 
                className="p-6 rounded-xl border backdrop-blur-sm"
                style={{
                  backgroundColor: `${primaryColor}05`,
                  borderColor: `${primaryColor}20`
                }}
              >
                <h3 className="text-xl font-bold mb-4">Project Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5" style={{ color: primaryColor }} />
                    <div>
                      <p className="text-sm text-gray-400">Status</p>
                      <p className="font-medium">
                        {project.isLive ? 'Live & Active' : 'In Development'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5" style={{ color: primaryColor }} />
                    <div>
                      <p className="text-sm text-gray-400">Type</p>
                      <p className="font-medium">
                        {project.featured ? 'Featured Project' : 'Side Project'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div 
                className="p-6 rounded-xl border backdrop-blur-sm"
                style={{
                  backgroundColor: `${secondaryColor}05`,
                  borderColor: `${secondaryColor}20`
                }}
              >
                <h3 className="text-xl font-bold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm rounded-full border"
                      style={{
                        backgroundColor: `${accentColor}20`,
                        borderColor: `${accentColor}40`,
                        color: accentColor
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


              <div 
                className="p-6 rounded-xl border backdrop-blur-sm"
                style={{
                  backgroundColor: `${accentColor}05`,
                  borderColor: `${accentColor}20`
                }}
              >
                <h3 className="text-xl font-bold mb-4">Project Links</h3>
                <div className="space-y-3">
                  <a 
                    href={project.links?.github || '#'}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span>Source Code</span>
                  </a>
                  {project.isLive && (
                    <a 
                      href={project.links?.live || '#'}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.published && (
                    <a 
                      href={project.links?.paper || '#'}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <FileText className="w-5 h-5" />
                      <span>Research Paper</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;
