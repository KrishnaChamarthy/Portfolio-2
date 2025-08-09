import React, { useEffect, useState } from 'react';
import { ArrowLeft, Github, ExternalLink, Users, Calendar, FileText, Award, Database, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, CAMPUSCORE_PICS } from '../constants/constants';

const CampusCoreProject = () => {
  const project = projects.find(p => p.id === 2);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === CAMPUSCORE_PICS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? CAMPUSCORE_PICS.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const techStack = [
    { category: "Frontend", items: ["React", "React Hooks", "HTML5", "CSS3"] },
    { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs"] },
    { category: "Database", items: ["MongoDB", "Mongoose ODM"] },
    { category: "Authentication", items: ["JWT", "bcrypt", "Role-based Access"] },
    { category: "Tools & Deployment", items: ["Git", "GitHub", "Postman", "Visual Studio Code"] }
  ];

  const features = [
    {
      title: "Student Management",
      icon: Users,
      description: "Comprehensive student profile management with personal information, academic records, attendance tracking, and grade monitoring. Students can view their timetables, assignments, and performance analytics."
    },
    {
      title: "Faculty Dashboard",
      icon: Award,
      description: "Faculty-specific interface for course management, attendance marking, assignment creation, and student performance evaluation. Includes tools for curriculum planning and academic reporting."
    },
    {
      title: "Course Scheduling",
      icon: Calendar,
      description: "Automated timetable generation and management system. Handles course scheduling, room allocation, and faculty assignment with conflict resolution and optimization algorithms."
    },
    {
      title: "Assignment System",
      icon: FileText,
      description: "Complete assignment lifecycle management from creation to submission and grading. Supports file uploads, deadline tracking, and automated notification systems."
    },
    {
      title: "Attendance Tracking",
      icon: Database,
      description: "Real-time attendance monitoring with analytics and reporting. Automated attendance calculation, absence tracking, and parent/student notifications for low attendance."
    },
    {
      title: "Secure Authentication",
      icon: Shield,
      description: "Multi-level role-based authentication system ensuring secure access for students, faculty, and administrators. Implements JWT tokens and encrypted password storage."
    }
  ];

  const systemModules = [
    {
      module: "Student Portal",
      capabilities: ["Profile Management", "Timetable View", "Assignment Submission", "Grade Tracking", "Attendance Reports"]
    },
    {
      module: "Faculty Portal", 
      capabilities: ["Course Management", "Attendance Marking", "Assignment Creation", "Student Evaluation", "Performance Analytics"]
    },
    {
      module: "Admin Dashboard",
      capabilities: ["User Management", "Course Scheduling", "System Reports", "Data Analytics", "Notification Management"]
    },
    {
      module: "Communication Hub",
      capabilities: ["Circular Distribution", "Real-time Notifications", "Announcement System", "Message Center", "Email Integration"]
    }
  ];

  const performanceMetrics = [
    { metric: "API Response Time", value: "< 200ms", improvement: "Optimized database queries" },
    { metric: "System Modules", value: "10+", improvement: "Comprehensive feature coverage" },
    { metric: "Report Generation", value: "4x Faster", improvement: "Automated academic reporting" },
    { metric: "User Roles", value: "3 Levels", improvement: "Role-based access control" }
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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-gray-400/50 hover:bg-green-900/20 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </div>


        <div className="text-center mb-12 animate-fade-in-up delay-200">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              CampusCore
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-gray-400 font-normal">
              College Management System
            </span>
          </h1>
          

          {project?.underDevelopment && (
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400/30 rounded-full text-orange-300 font-semibold mb-6">
              <span className="text-xl">🚧</span>
              <span>Under Active Development</span>
            </div>
          )}
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A comprehensive web application designed to streamline college administration, 
            student management, and academic processes with an intuitive, centralized platform
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
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-300 rounded-lg hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300"
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
                CampusCore is a comprehensive College Management System (CMS) designed to eliminate administrative overhead 
                and enhance communication between students, faculty, and administrators. This full-stack application 
                streamlines essential academic processes through an intuitive, centralized platform.
              </p>
              <p>
                Built with modern web technologies, the system features <span className="text-green-400 font-semibold"> 10+ integrated modules{" "}</span> 
                covering everything from student enrollment and course management to assignment tracking and performance analytics. 
                The optimized backend architecture achieves <span className="text-green-400 font-semibold">sub-200ms API response times</span>, 
                ensuring smooth user experience across all functionalities.
              </p>
              <p>
                The system implements role-based authentication with distinct interfaces for students, faculty, and administrators, 
                providing secure access to relevant features while maintaining data integrity and user privacy.
              </p>
            </div>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-500">
          <h2 className="text-3xl font-bold mb-8 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-green-400 mb-4">{tech.category}</h3>
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
                  <feature.icon className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-green-400">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-700">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Screenshots</h2>
          <div className="border border-gray-700/50 rounded-2xl p-8 hover:border-gray-400/50 transition-all duration-300">
            <div className="relative">

              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={CAMPUSCORE_PICS[currentImageIndex].src}
                  alt={CAMPUSCORE_PICS[currentImageIndex].alt}
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
                  {currentImageIndex + 1} of {CAMPUSCORE_PICS.length}
                </span>
              </div>


              <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
                {CAMPUSCORE_PICS.map((_, index) => (
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
                  {CAMPUSCORE_PICS[currentImageIndex].alt}
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-800">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Modules</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {systemModules.map((module, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-green-400 mb-4">{module.module}</h3>
                <ul className="space-y-2">
                  {module.capabilities.map((capability, capIndex) => (
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


        <div className="mb-16 animate-fade-in-up delay-900">
          <h2 className="text-3xl font-bold mb-8 text-center">Performance Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((perf, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">{perf.value}</div>
                <div className="text-lg font-semibold text-gray-200 mb-2">{perf.metric}</div>
                <div className="text-sm text-gray-400">{perf.improvement}</div>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-1000">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-400/50 hover:bg-gray-800/20 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Architecture</h2>
            

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-green-400 mb-6 text-center">Entity Relationship Diagram</h3>
              <div className="bg-green-50/95 rounded-xl p-4 mb-6 max-w-4xl mx-auto">
                <img 
                  src="/src/assets/CampusCore/CMS_ERD.png"
                  alt="CampusCore Database Entity Relationship Diagram showing relationships between Students, Faculty, Courses, Assignments, and other system entities"
                  className="w-full h-auto rounded-lg max-h-96 object-contain"
                />
              </div>
              <p className="text-gray-300 text-sm text-center leading-relaxed mb-8">
                Comprehensive database schema illustrating the relationships between core entities: Students, Faculty, Courses, 
                Assignments, Attendance, and User Authentication. The ERD demonstrates normalized data structure with proper 
                foreign key relationships ensuring data integrity and efficient queries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">Frontend Architecture</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>React Framework:</strong> Component-based architecture with React Hooks for state management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Responsive Design:</strong> Mobile-first approach with CSS3 and responsive layouts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Dynamic Routing:</strong> React Router for seamless navigation between modules</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">Backend Architecture</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Node.js Server:</strong> Express.js framework with RESTful API design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>MongoDB Database:</strong> NoSQL database with Mongoose ODM for data modeling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>JWT Authentication:</strong> Secure token-based authentication with role management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-16 animate-fade-in-up delay-1100">
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-gray-400/30 rounded-2xl p-8">
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

export default CampusCoreProject;
