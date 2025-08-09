import React, { useEffect } from 'react';
import { ArrowLeft, Github, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../constants/constants';

const ExoplanetProject = () => {
  const project = projects.find(p => p.id === 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techStack = [
    { category: "Languages", items: ["Python"] },
    { category: "Libraries & Frameworks", items: ["TensorFlow", "Keras", "SciPy", "Scikit-Learn"] },
    { category: "Data Sources", items: ["Kepler Space Telescope", "TESS data"] },
    { category: "Tools", items: ["Jupyter Notebooks", "Matplotlib", "NumPy", "Pandas"] }
  ];

  const features = [
    {
      title: "Exoplanet Detection",
      description: "Utilizes light curve data from telescopes like Kepler and TESS to detect potential exoplanets through transit photometry and radial velocity techniques. Employs machine learning algorithms to identify exoplanet candidates from complex and noisy datasets."
    },
    {
      title: "Model Comparison & Accuracy Testing",
      description: "Tests and compares the accuracy of various machine learning models for detecting exoplanets. Evaluates performance metrics including precision, recall, and overall detection accuracy across multiple algorithms."
    },
    {
      title: "Exoplanet Characterization",
      description: "Analyzes detected exoplanets to predict key properties such as orbital period, size, and atmospheric composition. Provides detailed characterization based on model predictions to understand habitability potential."
    },
    {
      title: "Advanced Data Processing",
      description: "Implements sophisticated preprocessing techniques to handle noisy astronomical data, feature extraction from light curves, and data augmentation methods to improve model performance."
    }
  ];

  const modelResults = [
    { model: "Convolutional Neural Network (CNN)", accuracy: "99.5%", f1Score: "0.727", description: "Highest accuracy but moderate F1 score due to precision-recall imbalance." },
    { model: "Random Forest", accuracy: "97.8%", f1Score: "0.790", description: "Best overall performance with optimal precision-recall balance." },
    { model: "Support Vector Classifier", accuracy: "98.9%", f1Score: "0.760", description: "Strong classification performance with balanced metrics." },
    { model: "LightGBM", accuracy: "96.5%", f1Score: "0.675", description: "Good accuracy but struggled with imbalanced data handling." },
    { model: "Logistic Regression", accuracy: "96.2%", f1Score: "0.640", description: "Baseline performance with challenges in imbalanced classification." }
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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-gray-400/50 hover:bg-purple-900/20 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </div>


        <div className="text-center mb-12 animate-fade-in-up delay-200">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Exoplanet Detection & Classification
            </span>
          </h1>
          

          {project?.underDevelopment && (
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400/30 rounded-full text-orange-300 font-semibold mb-6">
              <span className="text-xl">🚧</span>
              <span>Under Active Development</span>
            </div>
          )}
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Advanced machine learning system for detecting and characterizing exoplanets using astronomical data from space telescopes
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
            href={project?.links?.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            <span>Research Paper</span>
          </a>
        </div>


        <div className="mb-16 animate-fade-in-up delay-400">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 text-center">Project Overview</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                This advanced computational project explores exoplanet detection using state-of-the-art data analysis techniques and machine learning models. Utilizing astronomical data from the Kepler Space Telescope and TESS, the system identifies potential exoplanets and analyzes their characteristics including size, orbit, and atmospheric composition.
              </p>
              <p>
                Through rigorous testing and optimization, I compared multiple machine learning models including neural networks, random forests, and support vector machines to determine optimal precision and reliability in exoplanet detection. The project achieved a remarkable <span className="text-purple-400 font-semibold">99.5% accuracy</span> with advanced CNN architectures.
              </p>
              <p>
                The system not only identifies exoplanets but provides deeper insights into their composition through advanced characterization algorithms, contributing valuable research to the field of exoplanet discovery and space exploration.
              </p>
            </div>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-500">
          <h2 className="text-3xl font-bold mb-8 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">{tech.category}</h3>
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
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-700">
          <h2 className="text-3xl font-bold mb-8 text-center">Data Visualizations</h2>
          

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">No Exoplanet Detection</h3>
              <div className="mb-4">
                <img 
                  src="/src/assets/Exoplanet/Exo-No.png" 
                  alt="Light curve showing no exoplanet transit - stable flux measurements over time"
                  className="w-full h-auto rounded-lg border border-gray-600/50"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Light curve data showing stable flux measurements with minimal variation, indicating no planetary transits. 
                The consistent baseline demonstrates clear stellar emission without exoplanet interference.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Exoplanet Transit Detection</h3>
              <div className="mb-4">
                <img 
                  src="/src/assets/Exoplanet/Exo-Yes.png" 
                  alt="Light curve showing clear exoplanet transits - periodic flux dips indicating planetary orbits"
                  className="w-full h-auto rounded-lg border border-gray-600/50"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Light curve displaying clear periodic flux dips characteristic of exoplanet transits. 
                The regular patterns indicate consistent planetary orbits crossing the stellar disk.
              </p>
            </div>
          </div>


          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">Model Performance Comparison</h3>
            <div className="mb-4">
              <img 
                src="/src/assets/Exoplanet/result.png" 
                alt="Comprehensive model performance comparison showing accuracy and F1 scores across CNN, Random Forest, LightGBM, Logistic Regression, and SVC models"
                className="w-full h-auto rounded-lg border border-gray-600/50 max-w-4xl mx-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              Comparative analysis of machine learning models showing both accuracy (blue bars) and F1 scores (red bars). 
              Random Forest achieved the optimal balance with highest F1 score, while CNN demonstrated superior raw accuracy.
            </p>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-800">
          <h2 className="text-3xl font-bold mb-8 text-center">Model Performance Results</h2>
          

          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="pb-4 text-purple-400 font-semibold">Model</th>
                    <th className="pb-4 text-purple-400 font-semibold text-center">Accuracy</th>
                    <th className="pb-4 text-purple-400 font-semibold text-center">F1 Score</th>
                  </tr>
                </thead>
                <tbody>
                  {modelResults.map((result, index) => (
                    <tr key={index} className="border-b border-gray-700/50">
                      <td className="py-4 text-gray-300">{result.model}</td>
                      <td className="py-4 text-center text-green-400 font-semibold">{result.accuracy}</td>
                      <td className="py-4 text-center text-blue-400 font-semibold">{result.f1Score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modelResults.map((result, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">{result.model}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-2 py-1 bg-gray-600/30 border border-gray-400/30 rounded-full text-xs text-green-400">
                    {result.accuracy}
                  </span>
                  <span className="px-2 py-1 bg-gray-600/30 border border-gray-400/30 rounded-full text-xs text-blue-400">
                    F1: {result.f1Score}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{result.description}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-1000">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-gray-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project?.achievements.map((achievement, index) => (
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

export default ExoplanetProject;
