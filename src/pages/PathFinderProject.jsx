import React, { useEffect, useState, useRef } from 'react';
import { ArrowLeft, Github, ExternalLink, Search, Zap, Grid, Eye, Route, Brain, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, PFA_PICS } from '../constants/constants';

const PathFinderProject = () => {
  const project = projects.find(p => p.id === 5);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === PFA_PICS.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? PFA_PICS.length - 1 : prevIndex - 1
    );
    setIsPlaying(false);
  };

  const goToVideo = (index) => {
    setCurrentVideoIndex(index);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isPlaying) {
              video.play();
              setIsPlaying(true);
            } else if (!entry.isIntersecting && isPlaying) {
              video.pause();
              setIsPlaying(false);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(video);
      return () => observer.unobserve(video);
    }
  }, [currentVideoIndex, isPlaying]);

  const techStack = [
    { category: "Frontend", items: ["React", "React Hooks", "HTML5", "CSS3"] },
    { category: "Languages", items: ["JavaScript", "ES6+"] },
    { category: "Algorithms", items: ["A* Algorithm", "Dijkstra's", "BFS", "DFS"] },
    { category: "Data Structures", items: ["Graphs", "Priority Queues", "Arrays", "Sets"] },
    { category: "Visualization", items: ["Canvas API", "CSS Animations", "Real-time Rendering"] },
    { category: "Tools", items: ["Git", "GitHub", "Visual Studio Code", "Chrome DevTools"] }
  ];

  const features = [
    {
      title: "Algorithm Selection",
      icon: Search,
      description: "Choose from multiple pathfinding algorithms including A*, Dijkstra's, Breadth-First Search (BFS), and Depth-First Search (DFS). Each algorithm demonstrates unique traversal patterns and optimization strategies."
    },
    {
      title: "Real-Time Visualization",
      icon: Zap,
      description: "Watch algorithms execute step-by-step with smooth animations. Visualize how each algorithm explores the grid, marks visited nodes, and discovers the optimal path in real-time."
    },
    {
      title: "Interactive Grid System",
      icon: Grid,
      description: "Customize grid layouts by adding walls, moving start/end points, and creating complex mazes. The responsive grid system adapts to different screen sizes and user interactions."
    },
    {
      title: "Visual Learning Tool",
      icon: Eye,
      description: "Educational interface designed to make complex algorithms accessible. Color-coded visualizations help users understand algorithm behavior, performance differences, and optimal use cases."
    },
    {
      title: "Path Optimization",
      icon: Route,
      description: "Compare different pathfinding strategies and their efficiency. Observe how weighted vs unweighted algorithms handle various terrain types and obstacle configurations."
    },
    {
      title: "Algorithm Analysis",
      icon: Brain,
      description: "Built-in performance metrics and comparison tools. Analyze time complexity, space usage, and optimality guarantees for each algorithm implementation."
    }
  ];

  const algorithms = [
    {
      name: "A* Algorithm",
      type: "Heuristic Search",
      complexity: "O(b^d)",
      guarantee: "Optimal & Complete",
      description: "Uses heuristic function to guide search towards goal, guaranteeing optimal path while exploring fewer nodes than Dijkstra's algorithm."
    },
    {
      name: "Dijkstra's Algorithm", 
      type: "Uniform Cost Search",
      complexity: "O(V log V + E)",
      guarantee: "Optimal & Complete",
      description: "Explores all possible paths systematically, guaranteeing the shortest path but potentially exploring more nodes than necessary."
    },
    {
      name: "Breadth-First Search",
      type: "Unweighted Search",
      complexity: "O(V + E)",
      guarantee: "Optimal for Unweighted",
      description: "Explores nodes level by level, finding the shortest path in unweighted graphs but not suitable for weighted scenarios."
    },
    {
      name: "Depth-First Search",
      type: "Exhaustive Search", 
      complexity: "O(V + E)",
      guarantee: "Complete (Not Optimal)",
      description: "Explores paths deeply before backtracking, useful for maze generation but doesn't guarantee optimal solutions."
    }
  ];

  const systemFeatures = [
    {
      feature: "Interactive Controls",
      capabilities: ["Start/Stop Animation", "Speed Control", "Step-by-Step Mode", "Reset Grid", "Clear Path"]
    },
    {
      feature: "Grid Customization",
      capabilities: ["Drag Start/End Points", "Draw Walls", "Clear Obstacles", "Generate Mazes", "Resize Grid"]
    },
    {
      feature: "Visual Feedback",
      capabilities: ["Node State Indicators", "Path Highlighting", "Algorithm Progress", "Performance Metrics", "Color-Coded Legend"]
    },
    {
      feature: "Educational Tools",
      capabilities: ["Algorithm Comparison", "Complexity Analysis", "Use Case Examples", "Interactive Tutorials", "Performance Statistics"]
    }
  ];

  const performanceMetrics = [
    { metric: "Algorithms", value: "4+", improvement: "Multiple pathfinding strategies" },
    { metric: "Grid Size", value: "50x25", improvement: "Scalable visualization grid" },
    { metric: "Animation Speed", value: "Variable", improvement: "Customizable execution speed" },
    { metric: "Response Time", value: "< 50ms", improvement: "Real-time user interactions" }
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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-gray-400/50 hover:bg-red-900/20 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </div>


        <div className="text-center mb-12 animate-fade-in-up delay-200">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
              PathFinder
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-gray-400 font-normal">
              Algorithm Visualizer
            </span>
          </h1>
          

          {project?.underDevelopment && (
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400/30 rounded-full text-orange-300 font-semibold mb-6">
              <span className="text-xl">🚧</span>
              <span>Under Active Development</span>
            </div>
          )}
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            An interactive web application that brings pathfinding algorithms to life through dynamic visualizations, 
            making complex computer science concepts accessible and engaging for learners and developers
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
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-300 rounded-lg hover:shadow-lg hover:shadow-red-400/30 transition-all duration-300"
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
                PathFinder is an educational pathfinding algorithm visualizer designed to make complex computer science 
                concepts accessible through interactive demonstrations. Built with React, the application showcases how 
                different algorithms navigate grids to find optimal paths between start and end points.
              </p>
              <p>
                The project features <span className="text-red-400 font-semibold">4 core pathfinding algorithms</span> including 
                A*, Dijkstra's, BFS, and DFS, each with unique characteristics and use cases. The interactive grid system 
                allows users to create custom scenarios with obstacles and waypoints, providing hands-on experience with 
                algorithm behavior and performance trade-offs.
              </p>
              <p>
                Designed as an educational tool, PathFinder bridges the gap between theoretical algorithm knowledge and 
                practical understanding through real-time visualizations, making it ideal for students, educators, and 
                developers looking to deepen their understanding of pathfinding and graph traversal algorithms.
              </p>
            </div>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-500">
          <h2 className="text-3xl font-bold mb-8 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-red-400 mb-4">{tech.category}</h3>
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
                  <feature.icon className="w-8 h-8 text-red-400 mr-3" />
                  <h3 className="text-xl font-semibold text-red-400">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-700">
          <h2 className="text-3xl font-bold mb-8 text-center">Algorithm Demonstrations</h2>
          <div className="border border-gray-700/50 rounded-2xl p-8 hover:border-gray-400/50 transition-all duration-300">
            <div className="relative">

              <div className="relative overflow-hidden rounded-xl">
                <video 
                  ref={videoRef}
                  src={PFA_PICS[currentVideoIndex].src}
                  className="w-full h-auto max-h-96 object-contain bg-gray-900/50 rounded-lg"
                  loop
                  muted
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                

                <button
                  onClick={togglePlayPause}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300"
                >
                  {!isPlaying && (
                    <div className="bg-red-500/80 hover:bg-red-500 text-white p-4 rounded-full transition-all duration-300">
                      <Play className="w-8 h-8" />
                    </div>
                  )}
                </button>


                <button
                  onClick={prevVideo}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextVideo}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Next video"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>


              <div className="text-center mt-4">
                <span className="text-gray-400 text-sm">
                  {currentVideoIndex + 1} of {PFA_PICS.length}
                </span>
              </div>


              <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
                {PFA_PICS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToVideo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentVideoIndex 
                        ? 'bg-gray-400 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>


              <div className="text-center mt-4">
                <h4 className="text-red-400 font-semibold text-lg mb-2">
                  {PFA_PICS[currentVideoIndex].title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {PFA_PICS[currentVideoIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-800">
          <h2 className="text-3xl font-bold mb-8 text-center">Algorithm Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {algorithms.map((algorithm, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-red-400 mb-3">{algorithm.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Type:</span>
                    <span className="text-gray-300">{algorithm.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Complexity:</span>
                    <span className="text-gray-300 font-mono">{algorithm.complexity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Guarantee:</span>
                    <span className="text-gray-300">{algorithm.guarantee}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{algorithm.description}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-900">
          <h2 className="text-3xl font-bold mb-8 text-center">Interactive Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {systemFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-red-400 mb-4">{feature.feature}</h3>
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-1000">
          <h2 className="text-3xl font-bold mb-8 text-center">Performance Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((perf, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
                <div className="text-3xl font-bold text-red-400 mb-2">{perf.value}</div>
                <div className="text-lg font-semibold text-gray-200 mb-2">{perf.metric}</div>
                <div className="text-sm text-gray-400">{perf.improvement}</div>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-1100">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8 text-center">System Architecture</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-4">Frontend Architecture</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>React Framework:</strong> Component-based architecture with hooks for state management and real-time updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Canvas Integration:</strong> HTML5 Canvas for smooth grid rendering and algorithm visualization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Interactive Controls:</strong> Event handling for drag-and-drop grid modification and algorithm control</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-4">Algorithm Implementation</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Graph Structures:</strong> Efficient graph representation using adjacency lists and priority queues</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Visualization Engine:</strong> Step-by-step algorithm execution with customizable animation speeds</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Performance Analysis:</strong> Real-time metrics collection for algorithm comparison and education</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-1200">
          <div className="bg-gradient-to-r from-red-900/20 to-rose-900/20 backdrop-blur-sm border border-gray-400/30 rounded-2xl p-8">
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

export default PathFinderProject;
