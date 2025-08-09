import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaGitAlt, 
  FaGithub, 
  FaDocker, 
  FaAws,
  FaMicrosoft,
  FaDatabase,
  FaCode,
  FaCog,
  FaCloud,
  FaServer,
  FaTools,
  FaLaptopCode,
  FaFileCode
} from 'react-icons/fa';
import { Mail, MapPin, Github, Linkedin, Download } from 'lucide-react';
import ntrsLogo from '../assets/NTRS.jpeg';
import mitwpuLogo from "../assets/MITWPU.jpg";
import gdscLogo from "../assets/GDSC.jpg";
import cmsImage from "../assets/CMS.png";
import exoImage from "../assets/EXO.webp";

import RP1 from "../assets/RepoScope/RP1.png";
import RP2 from "../assets/RepoScope/RP2.png";
import RP3 from "../assets/RepoScope/RP3.png";
import RP4 from "../assets/RepoScope/RP4.png";
import RP5 from "../assets/RepoScope/RP5.png";
import RP6 from "../assets/RepoScope/RP6.png";
import RP7 from "../assets/RepoScope/RP7.png";

import CMS1 from "../assets/CampusCore/CMS1.png";
import CMS2 from "../assets/CampusCore/CMS2.png";
import CMS3 from "../assets/CampusCore/CMS3.png";
import CMS4 from "../assets/CampusCore/CMS4.png";
import CMS5 from "../assets/CampusCore/CMS5.png";
import CMS6 from "../assets/CampusCore/CMS6.png";
import CMS7 from "../assets/CampusCore/CMS7.png";
import CMS8 from "../assets/CampusCore/CMS8.png";
import CMS9 from "../assets/CampusCore/CMS9.png";
import CMS10 from "../assets/CampusCore/CMS10.png";
import CMS11 from "../assets/CampusCore/CMS11.png";
import CMS12 from "../assets/CampusCore/CMS12.png";
import CMS_ERD from "../assets/CampusCore/CMS_ERD.png";

import CEX1 from "../assets/CurrExch/CEX1.png";
import CEX2 from "../assets/CurrExch/CEX2.png";
import CEX3 from "../assets/CurrExch/CEX3.png";
import CEX4 from "../assets/CurrExch/CEX4.png";
import CEX5 from "../assets/CurrExch/CEX5.png";

import ExoNo from "../assets/Exoplanet/Exo-No.png";
import ExoYes from "../assets/Exoplanet/Exo-Yes.png";
import ExoResult from "../assets/Exoplanet/result.png";

import PFA1 from "../assets/PathFinding/PFA1.mp4";
import PFA2 from "../assets/PathFinding/PFA2.mp4";
import PFA3 from "../assets/PathFinding/PFA3.mp4";
import PFA4 from "../assets/PathFinding/PFA4.mp4";
import PFA5 from "../assets/PathFinding/PFA5.mp4";

export const allSkills = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: FaFileCode, color: "#3178C6" },
    { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: FaLaptopCode, color: "#000000" },
    { name: "Tailwind CSS", icon: FaCss3Alt, color: "#06B6D4" },
    { name: "Node.JS", icon: FaNodeJs, color: "#339933" },
    { name: "Express.JS", icon: FaServer, color: "#000000" },
    { name: "Pandas", icon: FaCode, color: "#E97627" },
    { name: "NumPy", icon: FaCode, color: "#013243" },
    { name: "Scikit-learn", icon: FaCog, color: "#F7931E" },
    { name: "PyTorch", icon: FaCog, color: "#EE4C2C" },
    { name: "MongoDB", icon: FaDatabase, color: "#47A248" },
    { name: "MySQL", icon: FaDatabase, color: "#4479A1" },
    { name: "PostgreSQL", icon: FaDatabase, color: "#336791" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Azure", icon: FaMicrosoft, color: "#0078D4" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Vercel", icon: FaCloud, color: "#000000" },
    { name: "Postman", icon: FaTools, color: "#FF6C37" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "C++", icon: FaCode, color: "#00599C" },
    { name: "Java", icon: FaJava, color: "#007396" }
  ];

export const experiences = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Northern Trust Corporation",
      logo: ntrsLogo,
      location: "Pune, India",
      duration: "June 2025 - October 2025",
      type: "Internship",
      colorTheme: {
        primary: "#22C55E",
        secondary: "#16A34A",
        accent: "#4ADE80"
      },
      description: "Designed and developed a user data flow monitoring system integrating Snowflake and Azure Cosmos DB. Built scalable backend services in Spring Boot. Delivered a React-based dashboard for real-time data visualization and auditing.",
      achievements: [
        "Designed a unified data monitoring pipeline across Snowflake and Azure Cosmos DB",
        "Delivered full end-to-end data traceability for legacy-to-cloud migration",
        "Built a responsive dashboard reducing data issue detection time"
      ],
      technologies: ["React.js", "Spring Boot", "Snowflake", "Azure DevOps", "Azure Cosmos DB", "Git", "GitHub"]
    },
    {
      id: 2,
      title: "Technical Team Member",
      company: "Google Developer Student Club, MIT-WPU",
      logo: gdscLogo,
      location: "Pune, India",
      duration: "Sept 2023 – Feb 2024",
      type: "Leadership",
      colorTheme: {
        primary: "#4285F4",
        secondary: "#1A73E8",
        accent: "#80B3FF"
      },
      description: "Mentored 70+ junior developers in coding best practices through hands-on sessions, and contributed to key modules for university hackathons and workshops to promote innovation.",
      achievements: [
        "Mentored 70+ junior developers in coding best practices",
        "Contributed to key modules for university hackathons",
        "Promoted innovation through workshops and hands-on sessions"
      ],
    },
    {
      id: 3,
      title: "B.Tech - Computer Science and Engineering",
      company: "MIT World Peace University",
      logo: mitwpuLogo,
      location: "Pune, Maharashtra",
      duration: "Aug 2022 - May 2026",
      type: "Education",
      colorTheme: {
        primary: "#FFFFFF",
        secondary: "#E5E7EB",
        accent: "#F3F4F6"
      },
      description: "Bachelor of Engineering in Computer Science. Focused on software development, data structures, algorithms, and machine learning. Maintained excellent academic record.",
      achievements: [
        "Maintained 8.73 CGPA with MIT WPU Merit Scholarship for 3 consecutive years",
        "Won multiple university-level hackathons and coding competitions",
        "Published research paper on ML algorithms"
      ]
    }

  ];

export const projects = [
    {
      id: 1,
      title: "RepoScope - Intelligent Codebase Explorer",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "API"],
      tech: ["React", "Node.js", "PostgreSQL", "Docker", "API"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center",
      links: {
        github: "https://github.com/KrishnaChamarthy/RepoScope",
        live: "https://github.com/KrishnaChamarthy/RepoScope"
      },
      colorTheme: {
        primary: "#E5E7EB",
        secondary: "#D1D5DB",
        accent: "#F3F4F6"
      },
      description: "Engineered a code exploration platform using React, Node.js, and PostgreSQL with FTS5 full-text search, enabling efficient information retrieval across multi-language codebases containing 10,000+ files.",
      achievements: [
        "Engineered a code exploration platform with FTS5 full-text search for 10,000+ files",
        "Containerized the application using Linux-based Docker environments for consistent deployment",
        "Accomplished accurate semantic code search (92% relevance score) with 46/50 manually verified queries",
        "Integrated Ollama models with custom embedding-based retrieval algorithms"
      ],
      featured: true,
      isLive: false,
      underDevelopment: true
    },
    {
      id: 2,
      title: "CampusCore - College Management System",
      technologies: ["React", "Node.js", "MongoDB"],
      tech: ["React", "Node.js", "MongoDB"],
      image: cmsImage,
      links: {
        github: "https://github.com/KrishnaChamarthy/FSD_Miniproject",
        live: "https://erpsystem-krishna.netlify.app"
      },
      colorTheme: {
        primary: "#E5E7EB",
        secondary: "#D1D5DB",
        accent: "#F3F4F6"
      },
      description: "Built a full-stack college management system with 10+ integrated modules including student records, timetables, assignments, and faculty dashboards. Reduced API response times to under 200ms on average.",
      achievements: [
        "Built full-stack system with 10+ integrated modules for complete college management",
        "Reduced API response times to under 200ms using scalable Node.js microservices",
        "Accomplished 4x faster academic reporting during review cycles",
        "Implemented role-based access, dynamic dashboards, and automated report generation"
      ],
      featured: true,
      isLive: true,
      underDevelopment: false
    },
    {
      id: 3,
      title: "Exoplanet Detection and Classification",
      technologies: ["Python", "Machine Learning", "Data Science"],
      tech: ["Python", "Machine Learning", "Data Science"],
      image: exoImage,
      links: {
        github: "https://github.com/KrishnaChamarthy/Exoplanet-Detection-and-Classification",
        paper: "https://drive.google.com/file/d/1F9_1iBfC0GAnnqRsd1hD4podC1_qZ3Od/view?usp=sharing"
      },
      colorTheme: {
        primary: "#E5E7EB",
        secondary: "#D1D5DB",
        accent: "#F3F4F6"
      },
      description: "Improved an existing ML-based system for detecting and classifying exoplanets by implementing k-fold cross-validation, optimizing model architecture, and tuning hyperparameters using grid search.",
      achievements: [
        "Improved ML-based exoplanet detection with k-fold cross-validation and hyperparameter tuning",
        "Enhanced system achieved 99.5% accuracy on Kepler dataset with 150,000+ stellar observations",
        "Reduced false positive rate from 8.3% to 7.1% through model optimization",
        "Published research findings on arXiv demonstrating significant improvements"
      ],
      featured: true,
      published: true,
      isLive: false,
      underDevelopment: false
    },
    {
      id: 4,
      title: "CurrExch - Currency Converter",
      technologies: ["Python", "Streamlit", "Docker", "Pandas", "NumPy"],
      tech: ["Python", "Streamlit", "Docker", "Pandas", "NumPy"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop&crop=center",
      links: {
        github: "https://github.com/KrishnaChamarthy/CurrExch",
        live: "https://currexch-aidudbniw3gjmvwhgamqtp.streamlit.app"
      },
      colorTheme: {
        primary: "#E5E7EB",
        secondary: "#D1D5DB",
        accent: "#F3F4F6"
      },
      description: "An interactive web application developed with Streamlit and Python that allows users to convert currencies, view real-time exchange rates, analyze historical trends, and predict future currency rates using AI.",
      achievements: [
        "Built interactive currency converter with real-time exchange rates",
        "Implemented historical trend analysis and visualization features",
        "Integrated AI-powered currency rate prediction algorithms",
        "Deployed using Streamlit for seamless user experience"
      ],
      featured: false,
      isLive: true,
      underDevelopment: false
    },
    {
      id: 5,
      title: "Path Finding Algorithm Visualizer",
      technologies: ["React", "JavaScript", "Algorithms", "Data Structures"],
      tech: ["React", "JavaScript", "Algorithms", "Data Structures"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop&crop=center",
      links: {
        github: "https://github.com/KrishnaChamarthy/PathFindingAlgorithmVisalizer",
        live: "https://github.com/KrishnaChamarthy/PathFindingAlgorithmVisalizer"
      },
      colorTheme: {
        primary: "#E5E7EB",
        secondary: "#D1D5DB",
        accent: "#F3F4F6"
      },
      description: "An interactive web application built with React that enables users to explore and visualize various pathfinding algorithms, such as Depth-First Search, Breadth-First Search, Dijkstra's, A* and Greedy Best-Fit Search.",
      achievements: [
        "Visualized multiple pathfinding algorithms including DFS, BFS, Dijkstra's, and A*",
        "Built interactive grid interface for algorithm exploration",
        "Implemented real-time algorithm visualization with step-by-step execution",
        "Created educational tool for learning algorithm concepts"
      ],
      featured: false,
      isLive: true,
      underDevelopment: false
    }
  ];

export const navigationItems = ['home', 'skills', 'experiences', 'projects', 'contact'];

export const contactMethods = [
  { 
    icon: Mail, 
    label: "Email", 
    value: "chamarthysr@gmail.com",
    href: "mailto:chamarthysr@gmail.com"
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    value: "Krishna Chamarthy",
    href: "https://linkedin.com/in/krishna-chamarthy"
  },
  { 
    icon: Github, 
    label: "GitHub", 
    value: "KrishnaChamarthy",
    href: "https://github.com/KrishnaChamarthy"
  }
];

export const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/krishna-chamarthy" },
  { icon: Mail, href: "mailto:chamarthysr@gmail.com" }
];

export const heroInfo = {
  name: "Krishna Chamarthy",
  title: "Full-Stack Developer & Machine Learning Enthusiast",
  description: "Building robust and scalable web applications with a passion for clean code and innovative solutions. Exploring the exciting world of machine learning and its endless possibilities.",
  location: "Pune, Maharashtra, India",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/krishna-chamarthy-291409187/",
    github: "https://github.com/KrishnaChamarthy"
  },
  codingProfiles: {
    leetcode: {
      username: "chamarthysr", 
      rating: "1850+", 
      badge: "Knight", 
      profileUrl: "https://leetcode.com/u/chamarthysr", 
      color: "#FFA116"
    },
    codeforces: {
      username: "DraGon9236", 
      rating: "1400+", 
      badge: "Specialist", 
      profileUrl: "https://codeforces.com/profile/DraGon9236 ", 
      color: "#1F8ACB"
    }
  }
};

export const PFA_PICS = [
  { 
    src: PFA1, 
    alt: "A* Algorithm Pathfinding Demonstration",
    title: "A* Algorithm",
    description: "Demonstrates the A* algorithm finding the optimal path with heuristic-based search"
  },
  { 
    src: PFA2, 
    alt: "Dijkstra's Algorithm Pathfinding Visualization",
    title: "Dijkstra's Algorithm", 
    description: "Shows Dijkstra's algorithm guaranteeing the shortest path through systematic exploration"
  },
  { 
    src: PFA3, 
    alt: "Breadth-First Search Algorithm in Action",
    title: "Breadth-First Search",
    description: "Visualizes BFS exploring nodes level by level to find the shortest unweighted path"
  },
  { 
    src: PFA4, 
    alt: "Depth-First Search Algorithm Traversal",
    title: "Depth-First Search",
    description: "Demonstrates DFS diving deep into paths before backtracking to explore alternatives"
  },
  { 
    src: PFA5, 
    alt: "Interactive Grid Customization and Algorithm Comparison",
    title: "Interactive Features",
    description: "Shows grid customization, obstacle placement, and real-time algorithm comparisons"
  }
];

export const REPOSCOPE_PICS = [
  { 
    src: RP1, 
    alt: "RepoScope Dashboard and Main Interface",
    title: "Main Dashboard",
    description: "Overview of the RepoScope main interface showing repository selection and search capabilities"
  },
  { 
    src: RP2, 
    alt: "Code Search and Repository Cloning",
    title: "Search Interface", 
    description: "Repository Cloning and advanced search functionality with semantic code analysis and filtering options"
  },
  { 
    src: RP3, 
    alt: "Cloned Repositories Display",
    title: "Cloned Repositories",
    description: "Display of successfully cloned repositories with status indicators and management options"
  },
  { 
    src: RP4, 
    alt: "Repository File Explorer and Navigation",
    title: "File Explorer",
    description: "Interactive file browser with syntax highlighting and code preview capabilities"
  },
  { 
    src: RP5, 
    alt: "AI-Powered Code Explanations",
    title: "AI Analysis",
    description: "LLaMA model integration providing intelligent code explanations and insights"
  },
  { 
    src: RP6, 
    alt: "Repository Analysis Using AI",
    title: "AI Repository Analysis",
    description: "AI-powered repository analysis showing code insights, patterns, and intelligent recommendations"
  },
  { 
    src: RP7, 
    alt: "User Repositories Dashboard",
    title: "User Repositories",
    description: "Personal repository dashboard displaying user's GitHub repositories with management and access controls"
  }
];

export const CAMPUSCORE_PICS = [
  { 
    src: CMS1, 
    alt: "Student Login In Screen",
    title: "Student Login",
    description: "Secure student authentication interface with role-based access control"
  },
  { 
    src: CMS2, 
    alt: "Faculty Login In Screen",
    title: "Faculty Login", 
    description: "Faculty authentication portal with administrative privileges"
  },
  { 
    src: CMS3, 
    alt: "Student Profile",
    title: "Student Profile",
    description: "Comprehensive student profile management with personal and academic information"
  },
  { 
    src: CMS4, 
    alt: "Student Attendance Screen",
    title: "Attendance Tracking",
    description: "Real-time attendance monitoring and historical attendance records"
  },
  { 
    src: CMS5, 
    alt: "Student TimeTable",
    title: "Schedule Management",
    description: "Interactive timetable with class schedules and academic calendar integration"
  },
  { 
    src: CMS6, 
    alt: "Student Markssheet",
    title: "Academic Records",
    description: "Detailed grade reports and academic performance analytics"
  },
  { 
    src: CMS7, 
    alt: "Student Assignments",
    title: "Assignment Portal",
    description: "Assignment submission and tracking system with deadline management"
  },
  { 
    src: CMS8, 
    alt: "Faculty Attendance Assignment",
    title: "Faculty Attendance",
    description: "Faculty tools for marking and managing student attendance records"
  },
  { 
    src: CMS9, 
    alt: "Faculty Marks Assignment",
    title: "Grade Management",
    description: "Faculty interface for entering and managing student grades and assessments"
  },
  { 
    src: CMS10, 
    alt: "Faculty Homework Assignment",
    title: "Assignment Creation",
    description: "Faculty dashboard for creating and managing homework assignments"
  },
  { 
    src: CMS11, 
    alt: "Admin Circulars Posting",
    title: "Administrative Notices",
    description: "Administrative interface for posting circulars and important announcements"
  },
  { 
    src: CMS12, 
    alt: "Admin Add Students",
    title: "Student Management",
    description: "Administrative tools for student registration and profile management"
  }
];

export const CMS_ERD_IMAGE = CMS_ERD;

export const CURREXCH_PICS = [
  { 
    src: CEX1, 
    alt: "CurrExch Main Dashboard - Currency Conversion Interface",
    title: "Main Dashboard",
    description: "Primary currency conversion interface with real-time exchange rates"
  },
  { 
    src: CEX2, 
    alt: "Real-time Exchange Rates Display",
    title: "Exchange Rates",
    description: "Live currency exchange rates with market data visualization"
  },
  { 
    src: CEX3, 
    alt: "Historical Currency Trend Analysis",
    title: "Trend Analysis",
    description: "Historical currency trends and pattern analysis tools"
  },
  { 
    src: CEX4, 
    alt: "Interactive Currency Comparison Charts",
    title: "Comparison Charts",
    description: "Interactive charts for comparing multiple currencies and market trends"
  },
  { 
    src: CEX5, 
    alt: "Future Rate Prediction Visualizations",
    title: "Rate Predictions",
    description: "Machine learning-powered currency rate predictions and forecasting"
  }
];

export const EXOPLANET_PICS = [
  { 
    src: ExoNo, 
    alt: "Exoplanet Detection - Negative Result",
    title: "No Exoplanet Detected",
    description: "Analysis result showing no exoplanet detected in the stellar light curve"
  },
  { 
    src: ExoYes, 
    alt: "Exoplanet Detection - Positive Result",
    title: "Exoplanet Detected",
    description: "Successful exoplanet detection with transit signature in light curve data"
  },
  { 
    src: ExoResult, 
    alt: "Exoplanet Analysis Results",
    title: "Analysis Results",
    description: "Comprehensive analysis results and classification metrics for exoplanet detection"
  }
];