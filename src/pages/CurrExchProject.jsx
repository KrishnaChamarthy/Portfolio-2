import React, { useEffect, useState } from 'react';
import { ArrowLeft, Github, ExternalLink, TrendingUp, DollarSign, BarChart3, Smartphone, Globe, Calculator, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, CURREXCH_PICS } from '../constants/constants';

const CurrExchProject = () => {
  const project = projects.find(p => p.id === 4);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === CURREXCH_PICS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? CURREXCH_PICS.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const techStack = [
    { category: "Languages", items: ["Python"] },
    { category: "Frontend Framework", items: ["Streamlit"] },
    { category: "Data Processing", items: ["Pandas", "NumPy"] },
    { category: "Visualization", items: ["Matplotlib", "Plotly"] },
    { category: "APIs & Services", items: ["Exchange Rate API", "Real-time Data"] },
    { category: "Tools", items: ["Jupyter Notebook", "Docker", "Git"] }
  ];

  const features = [
    {
      title: "Real-Time Currency Conversion",
      icon: Calculator,
      description: "Instantly convert between multiple currencies using live exchange rates. Supports 150+ global currencies with accurate, up-to-the-minute conversion rates for travelers and businesses."
    },
    {
      title: "Historical Data Analysis",
      icon: BarChart3,
      description: "Analyze currency trends over different time periods including daily, weekly, monthly, and yearly views. Interactive charts help users understand market patterns and volatility."
    },
    {
      title: "Future Rate Predictions",
      icon: TrendingUp,
      description: "AI-powered predictions for future exchange rates based on historical data patterns and market trends. Helps users make informed financial decisions for upcoming transactions."
    },
    {
      title: "Interactive Visualizations",
      icon: Globe,
      description: "Dynamic charts and graphs powered by Plotly provide intuitive data representation. Users can explore currency trends through interactive dashboards and customizable time ranges."
    },
    {
      title: "Multi-Currency Support",
      icon: DollarSign,
      description: "Comprehensive support for major world currencies including USD, EUR, GBP, JPY, CAD, AUD, and many more. Real-time rate updates ensure accuracy for international transactions."
    },
    {
      title: "User-Friendly Interface",
      icon: Smartphone,
      description: "Clean, intuitive Streamlit interface designed for ease of use. Responsive design works seamlessly across desktop and mobile devices for on-the-go currency conversions."
    }
  ];

  const systemComponents = [
    {
      component: "Frontend Interface",
      technologies: ["Streamlit", "Plotly", "Custom CSS"],
      description: "Interactive web interface with real-time updates and responsive design"
    },
    {
      component: "Data Processing Engine",
      technologies: ["Pandas", "NumPy", "Python"],
      description: "Efficient data processing for historical analysis and rate calculations"
    },
    {
      component: "API Integration Layer",
      technologies: ["Exchange Rate APIs", "REST APIs", "JSON"],
      description: "Real-time data fetching from multiple currency exchange services"
    },
    {
      component: "Prediction Models",
      technologies: ["Scikit-learn", "Statistical Models", "Time Series"],
      description: "Machine learning algorithms for future rate prediction and trend analysis"
    }
  ];

  const achievements = [
    "Built interactive currency converter with real-time exchange rates",
    "Implemented historical trend analysis and visualization features", 
    "Integrated AI-powered currency rate prediction algorithms",
    "Deployed using Streamlit for seamless user experience"
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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-gray-400/50 hover:bg-yellow-900/20 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </div>


        <div className="text-center mb-12 animate-fade-in-up delay-200">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              CurrExch
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-gray-400 font-normal">
              Smart Currency Converter
            </span>
          </h1>
          

          {project?.underDevelopment && (
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400/30 rounded-full text-orange-300 font-semibold mb-6">
              <span className="text-xl">🚧</span>
              <span>Under Active Development</span>
            </div>
          )}
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            An intelligent web application that simplifies currency conversion with real-time exchange rates, 
            historical analysis, and AI-powered predictions for informed financial decisions
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
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        </div>


        <div className="mb-16 animate-fade-in-up delay-400">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 text-center">Project Overview</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                CurrExch is a comprehensive currency converter application developed with Python and Streamlit, designed to 
                simplify international financial transactions and currency analysis. The application serves travelers, 
                businesses, and financial analysts by providing accurate, real-time exchange rates and comprehensive market insights.
              </p>
              <p>
                Built with modern data science tools, the application features <span className="text-yellow-400 font-semibold">real-time API integration</span> 
                for live exchange rates, interactive data visualizations powered by Plotly, and machine learning algorithms 
                for future rate predictions. The intuitive Streamlit interface ensures accessibility across desktop and mobile devices.
              </p>
              <p>
                The system empowers users to make informed financial decisions through historical trend analysis, 
                predictive modeling, and comprehensive currency insights, reducing manual calculations and enhancing 
                the overall experience of managing international transactions.
              </p>
            </div>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-500">
          <h2 className="text-3xl font-bold mb-8 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="px-3 py-1 bg-gray-600/30 border border-gray-400/30 rounded-full text-sm text-gray-300">
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
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-semibold text-yellow-400">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-700">
          <h2 className="text-3xl font-bold mb-8 text-center">Application Screenshots</h2>
          <div className="border border-gray-700/50 rounded-2xl p-8 hover:border-gray-400/50 transition-all duration-300">
            <div className="relative">

              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={CURREXCH_PICS[currentImageIndex].src}
                  alt={CURREXCH_PICS[currentImageIndex].alt}
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
                  {currentImageIndex + 1} of {CURREXCH_PICS.length}
                </span>
              </div>


              <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
                {CURREXCH_PICS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-gray-400 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>


              <div className="text-center mt-4">
                <p className="text-gray-300 text-sm">
                  {CURREXCH_PICS[currentImageIndex].alt}
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-800">
          <h2 className="text-3xl font-bold mb-8 text-center">System Components</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {systemComponents.map((component, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">{component.component}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {component.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-600/30 border border-gray-400/30 rounded-full text-xs text-gray-300">
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
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8 text-center">System Architecture</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Frontend & Interface</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Streamlit Framework:</strong> Interactive web interface with real-time updates and responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Plotly Visualizations:</strong> Dynamic charts and graphs for currency trend analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>User Experience:</strong> Intuitive interface optimized for both desktop and mobile access</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Backend & Data Processing</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Python Backend:</strong> Core logic for currency conversion and data processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>API Integration:</strong> Real-time exchange rate fetching from multiple sources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>ML Predictions:</strong> Statistical models for future rate forecasting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-1000">
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 backdrop-blur-sm border border-gray-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
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

export default CurrExchProject;
