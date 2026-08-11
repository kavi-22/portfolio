import { Project } from "@/types/portfolio";

export const PROJECTS: Project[] = [
  {
    id: "weather-pro",
    title: "Weather Pro",
    tagline: "Next-gen atmospheric intelligence platform with 5-day analytics & dynamic theming",
    description: "An advanced real-time meteorological platform featuring location auto-detection, multi-day forecasting, responsive visual charts, and climate-adaptive dark/light theming via OpenWeather API.",
    longDescription: "Weather Pro represents the evolution of our weather application architecture. Engineered with modern component hierarchy, reactive state management, and optimized API caching, it translates meteorological data into high-contrast analytics cards with sub-second response times.",
    problem: "Traditional weather tools are bloated with ads, sluggish API waterfalls, and lack dynamic visual adaptations for extreme weather or time of day.",
    solution: "Architected a responsive dashboard with debounced city queries, geolocation auto-fallback, predictive 5-day breakdown charts, and dynamic background gradients synced with live atmospheric conditions.",
    role: "Lead Frontend Engineer",
    category: "frontend",
    categoryLabel: "Frontend & API",
    tags: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API", "Geolocation"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API", "HTML5 Geolocation", "Lucide Icons"],
    features: [
      "Real-time temperature, humidity, wind velocity, and atmospheric pressure metrics",
      "5-day predictive weather forecasting with diurnal high/low temperature curves",
      "Browser geolocation auto-detection with fallback global city search",
      "Dynamic background gradient engine responding to live climate and solar elevation",
      "Fully responsive mobile-to-4K desktop UI architecture"
    ],
    challenges: [
      "Handling asynchronous API rate limits and network latency gracefully with graceful fallbacks",
      "Parsing nested JSON weather data with proper error boundaries for missing city queries"
    ],
    learnings: [
      "Mastered REST API integration patterns and debounced search inputs",
      "Learned effective state management for multi-condition UI theming"
    ],
    liveUrl: "https://weather-pro-woad.vercel.app/",
    githubUrl: "https://github.com/kavi-22/Weather-Pro",
    v1Title: "Weather Dashboard (v1)",
    v1GithubUrl: "https://github.com/kavi-22/Weather-Dashboard",
    v1LiveUrl: "https://kavi-22.github.io/Weather-Dashboard/",
    v1Tech: ["HTML5", "CSS3", "JavaScript (ES6)", "OpenWeather API"],
    featured: true,
    completionDate: "2024",
  },
  {
    id: "grade-calculator-pro",
    title: "Grade Calculator Pro",
    tagline: "Dynamic GPA/CGPA computational engine with multi-subject evaluation & export",
    description: "A precision academic computation tool supporting customizable subject grading, weighted credit calculations, real-time percentage analysis, and PDF export capabilities.",
    longDescription: "Grade Calculator Pro addresses the need for students and educators to calculate multi-subject semester grades, cumulative GPAs, and cutoff percentages. Designed with reactive state updates and clean validation logic to prevent calculation errors.",
    problem: "Calculating complex academic percentages across varying subject credits and grading scales often leads to manual mathematical errors and confusion.",
    solution: "Engineered a reactive calculation engine with instant recalculations upon subject input, dynamic row additions, validation bounds (0-100), and export options.",
    role: "Full-Stack Developer",
    category: "tools",
    categoryLabel: "Web Utility / Engine",
    tags: ["React", "TypeScript", "Tailwind CSS", "Math Logic", "PDF Export"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "DOM API", "Client-side PDF Library"],
    features: [
      "Dynamic subject addition and deletion with instant weight recalculation",
      "Support for percentage-based scoring, 4.0/10.0 scale, and weighted GPA calculations",
      "Visual performance indicators with real-time feedback thresholds",
      "One-click print and PDF export formatting for academic records",
      "Local state preservation to prevent loss of inputs during session refreshes"
    ],
    challenges: [
      "Ensuring sub-millisecond calculation updates across dynamic form elements without lag",
      "Formatting complex dynamic tables cleanly for standard PDF and print viewports"
    ],
    learnings: [
      "Deepened understanding of computational state lifecycle and performance optimizations",
      "Implemented strict input validation and boundary testing for computational accuracy"
    ],
    liveUrl: "https://grade-calculator-pro.vercel.app/",
    githubUrl: "https://github.com/kavi-22/Grade-Calculator-Pro",
    v1Title: "Grade Calculator Pro (v1)",
    v1GithubUrl: "https://github.com/kavi-22/grade-calculator-pro-v1",
    v1LiveUrl: "https://kavi-22.github.io/Academic-percentage-calculator-/",
    v1Tech: ["HTML5", "CSS3", "JavaScript (ES6)"],
    featured: true,
    completionDate: "2024",
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio Pro",
    tagline: "High-performance personal developer showcase with dark aesthetic & serverless contact",
    description: "A flagship developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Resend API. Features modular data architecture, accessible modals, and dark aesthetics.",
    longDescription: "Designed from the ground up to reflect modern web engineering standards. Emphasizes clean TypeScript typings, central configuration layers, accessibility (WCAG compliance), responsive layouts, and serverless email delivery.",
    problem: "Traditional static portfolios are monolithic, hardcoded, and lack interactive case study breakdowns and robust email contact handlers.",
    solution: "Architected a completely modular, data-driven system where all projects, skills, and profile metrics are decoupled into structured configuration files with typed schemas and serverless contact delivery.",
    role: "Designer & Engineer",
    category: "frontend",
    categoryLabel: "Full Stack & Design",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Resend API"],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend API"],
    features: [
      "Strict data-driven separation: profile, skills, projects, and career timeline",
      "Interactive code snippet preview window with copy capabilities",
      "Comprehensive project modal with in-depth problem/solution case studies and version history",
      "Working Resend contact system with server-side validation and anti-spam honeypot",
      "Accessible ARIA dialogs, keyboard navigation, and prefers-reduced-motion support"
    ],
    challenges: [
      "Balancing rich interactive aesthetics with lightweight bundle size and fast load times",
      "Ensuring seamless responsiveness across ultra-compact 320px screens up to 1920px 4K displays"
    ],
    learnings: [
      "Architected clean, decoupled Next.js components with reusable prop interfaces",
      "Implemented secure serverless API handlers with anti-spam protections"
    ],
    liveUrl: "https://portfolio-hazel-gamma-94.vercel.app/",
    githubUrl: "https://github.com/kavi-22/portfolio",
    v1Title: "Portfolio (v1)",
    v1GithubUrl: "https://github.com/kavi-22/Portfolio-v1",
    v1Tech: ["HTML5", "CSS3"],
    featured: true,
    completionDate: "2024",
  },
];

