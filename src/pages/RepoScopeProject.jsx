import React, { useEffect, useState } from 'react';
import { ArrowLeft, Github, ExternalLink, Search, Database, Cpu, Code, FileText, Brain, Globe, Server, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, REPOSCOPE_PICS } from '../constants/constants';

const RepoScopeProject = () => {
  const project = projects.find(p => p.id === 1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === REPOSCOPE_PICS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? REPOSCOPE_PICS.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const techStack = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3"] },
    { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs"] },
    { category: "Database", items: ["PostgreSQL", "FTS5 Full-Text Search", "Vector Embeddings"] },
    { category: "AI/ML", items: ["Ollama", "LLaMA 3.2", "Natural Language Processing", "Semantic Search"] },
    { category: "DevOps", items: ["Docker", "Docker Compose", "Linux Environments"] },
    { category: "Tools & Services", items: ["GitHub API", "Git", "PowerShell", "Multi-language Parser"] }
  ];

  const features = [
    {
      title: "Intelligent Code Indexing",
      icon: Database,
      description: "Advanced repository scanning that indexes source code across multiple programming languages, creating searchable databases with FTS5 full-text search capabilities for lightning-fast code discovery."
    },
    {
      title: "AI-Powered Code Analysis",
      icon: Brain,
      description: "Integrated LLaMA 3.2 models provide intelligent explanations of functions, classes, and complex logic patterns. Supports model upgrades from 3B to 11B parameters for enhanced analysis depth."
    },
    {
      title: "Semantic Code Search",
      icon: Search,
      description: "Advanced search algorithms with 92% relevance accuracy, enabling developers to find code snippets using natural language queries and contextual understanding rather than exact keyword matching."
    },
    {
      title: "Multi-Language Support",
      icon: Code,
      description: "Comprehensive parsing and analysis support for JavaScript, Python, Java, C++, and dozens of other programming languages with syntax-aware indexing and cross-language dependency tracking."
    },
    {
      title: "Scalable Architecture",
      icon: Server,
      description: "Containerized microservices architecture built with Docker ensures consistent deployment across environments while handling codebases with 10,000+ files efficiently."
    },
    {
      title: "GitHub Integration",
      icon: Globe,
      description: "Direct GitHub API integration enables seamless repository import, real-time synchronization, and automated analysis of public and private repositories with proper authentication."
    }
  ];

  const systemComponents = [
    {
      component: "Frontend Dashboard",
      technologies: ["React", "Modern JavaScript", "Responsive Design"],
      description: "Interactive user interface for repository management, search execution, and AI analysis visualization"
    },
    {
      component: "Backend API Server",
      technologies: ["Node.js", "Express.js", "RESTful Architecture"],
      description: "High-performance API layer handling repository processing, search queries, and AI model integration"
    },
    {
      component: "Search Engine",
      technologies: ["PostgreSQL", "FTS5", "Vector Embeddings"],
      description: "Advanced full-text search system with semantic understanding and relevance scoring algorithms"
    },
    {
      component: "AI Analysis Engine",
      technologies: ["Ollama", "LLaMA 3.2", "Custom Embeddings"],
      description: "Intelligent code analysis system providing contextual explanations and semantic code understanding"
    }
  ];

  const performanceMetrics = [
    { metric: "Search Accuracy", value: "92%", improvement: "Semantic relevance scoring" },
    { metric: "File Capacity", value: "10,000+", improvement: "Scalable indexing system" },
    { metric: "Response Time", value: "< 500ms", improvement: "Optimized PostgreSQL queries" },
    { metric: "Languages Supported", value: "20+", improvement: "Multi-language parser integration" }
  ];

  const aiModels = [
    {
      model: "LLaMA 3.2:3B",
      type: "Basic Analysis",
      performance: "Fast",
      useCase: "Quick code explanations and basic pattern recognition"
    },
    {
      model: "LLaMA 3.2:7B", 
      type: "Recommended",
      performance: "Balanced",
      useCase: "Detailed analysis with better context understanding"
    },
    {
      model: "LLaMA 3.2:11B",
      type: "Premium",
      performance: "Maximum",
      useCase: "Complex codebase analysis and advanced reasoning"
    }
  ];

  const systemArchitecture = [
    {
      layer: "Presentation Layer",
      components: ["React Frontend", "Interactive Dashboard", "Search Interface", "Visualization Tools"]
    },
    {
      layer: "API Gateway",
      components: ["Express.js Server", "Authentication", "Rate Limiting", "Request Routing"]
    },
    {
      layer: "Processing Layer",
      components: ["Code Parser", "Indexing Engine", "AI Integration", "Search Algorithms"]
    },
    {
      layer: "Data Layer",
      components: ["PostgreSQL Database", "Vector Storage", "GitHub API", "File System Cache"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        

        <div className="mb-8 animate-fade-in-up">
          <Link 
            to="/"
            onClick={() => {
              setTimeout(() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-blue-500/50 hover:bg-blue-900/20 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </div>


        <div className="text-center mb-12 animate-fade-in-up delay-200">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              RepoScope
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-gray-400 font-normal">
              Intelligent Codebase Explorer
            </span>
          </h1>
          

          {project?.underDevelopment && (
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400/30 rounded-full text-orange-300 font-semibold mb-6">
              <span className="text-xl">🚧</span>
              <span>Under Active Development</span>
            </div>
          )}
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            An advanced code exploration platform that combines AI-powered analysis with intelligent search capabilities, 
            enabling developers to understand, navigate, and discover insights across large codebases
          </p>
        </div>


        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-300">
          <a
            href={project?.links?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-gray-500 hover:bg-gray-700/50 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>View Code</span>
          </a>
          <a
            href={project?.links?.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        </div>


        <div className="mb-16 animate-fade-in-up delay-400">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 text-center">Project Overview</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                RepoScope is a cutting-edge code exploration platform that revolutionizes how developers interact with large 
                codebases. Built with modern web technologies and powered by advanced AI models, it provides intelligent code 
                analysis, semantic search capabilities, and comprehensive repository insights.
              </p>
              <p>
                The platform leverages <span className="text-blue-400 font-semibold">PostgreSQL's FTS5 full-text search</span> combined 
                with <span className="text-blue-400 font-semibold">LLaMA 3.2 AI models</span> to achieve 92% search relevance accuracy 
                across codebases containing over 10,000 files. The containerized architecture ensures consistent deployment and 
                scalability across different environments.
              </p>
              <p>
                Whether you're exploring a new codebase, conducting code reviews, or seeking to understand complex algorithms, 
                RepoScope transforms traditional code browsing into an intelligent, context-aware exploration experience that 
                adapts to your workflow and provides meaningful insights.
              </p>
            </div>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-450">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Screenshots</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300">
            <div className="relative">

              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={REPOSCOPE_PICS[currentImageIndex].src}
                  alt={REPOSCOPE_PICS[currentImageIndex].alt}
                  className="w-full h-auto max-h-96 object-contain bg-gray-900/50 rounded-lg"
                />
                

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>


              <div className="text-center mt-4">
                <span className="text-gray-400 text-sm">
                  {currentImageIndex + 1} of {REPOSCOPE_PICS.length}
                </span>
              </div>


              <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
                {REPOSCOPE_PICS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-blue-400 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>


              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  {REPOSCOPE_PICS[currentImageIndex].title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {REPOSCOPE_PICS[currentImageIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-500">
          <h2 className="text-3xl font-bold mb-8 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-sm text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-600">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-blue-400">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-700">
          <h2 className="text-3xl font-bold mb-8 text-center">AI Model Configuration</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {aiModels.map((model, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Cpu className="w-6 h-6 text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold text-blue-400">{model.model}</h3>
                </div>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Type:</span>
                    <span className="text-gray-300">{model.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Performance:</span>
                    <span className="text-gray-300">{model.performance}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{model.useCase}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-800">
          <h2 className="text-3xl font-bold mb-8 text-center">System Components</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {systemComponents.map((component, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">{component.component}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {component.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-xs text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-900">
          <h2 className="text-3xl font-bold mb-8 text-center">Performance Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((perf, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">{perf.value}</div>
                <div className="text-lg font-semibold text-gray-200 mb-2">{perf.metric}</div>
                <div className="text-sm text-gray-400">{perf.improvement}</div>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-1000">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8 text-center">System Architecture</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {systemArchitecture.map((layer, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center mb-4">
                    <Layers className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-blue-400">{layer.layer}</h3>
                  </div>
                  <ul className="space-y-2">
                    {layer.components.map((component, compIndex) => (
                      <li key={compIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">{component}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-1100">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Frontend Architecture</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>React Framework:</strong> Modern component-based architecture with hooks for state management and real-time updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Interactive Dashboard:</strong> Dynamic visualizations for code metrics, search results, and AI analysis insights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Responsive Design:</strong> Mobile-first approach ensuring optimal experience across all devices</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Backend Implementation</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Microservices Architecture:</strong> Scalable Node.js services with Docker containerization for consistent deployment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>PostgreSQL Integration:</strong> Advanced FTS5 full-text search with custom indexing strategies for code analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>AI Integration:</strong> Ollama integration with custom embedding algorithms for semantic code understanding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-1200">
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project?.achievements?.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RepoScopeProject;
