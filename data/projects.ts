import { Project } from "@/types/portfolio";

export const PROJECTS: Project[] = [
  {
    id: "weather-dashboard-pro",
    title: "Weather Dashboard Pro",
    tagline: "Real-time meteorological analytics with 5-day forecast & dynamic theming",
    description: "An interactive weather application providing real-time conditions, multi-day forecasting, dynamic atmospheric theme adjustments, and location-based weather detection via OpenWeatherMap API.",
    longDescription: "Weather Dashboard Pro is a responsive web application engineered to deliver fast, accurate meteorological data. The application interfaces with the OpenWeatherMap API, translating raw weather metrics into an intuitive visual dashboard with dynamic environmental theme transitions based on daylight and precipitation conditions.",
    problem: "Users often face slow or cluttered weather interfaces with excessive ads and complex navigation to get simple local forecasts and hourly changes.",
    solution: "Built a streamlined, high-contrast dashboard with instant location search, automatic geolocation detection, clear forecast breakdowns, and dynamic CSS theme transitions.",
    role: "Lead Frontend Developer",
    category: "frontend",
    categoryLabel: "Frontend & API",
    tags: ["React", "OpenWeatherMap API", "JavaScript", "Responsive UI", "Tailwind CSS"],
    technologies: ["React", "JavaScript (ES6+)", "OpenWeatherMap API", "Tailwind CSS", "HTML5 Geolocation"],
    features: [
      "Real-time temperature, humidity, wind speed, and atmospheric pressure metrics",
      "5-day predictive weather forecast with daily high/low summaries",
      "Browser geolocation auto-detection with fallback city search",
      "Dynamic background gradients adapting to live climate and time of day",
      "Fully responsive viewport optimization across mobile, tablet, and desktop"
    ],
    challenges: [
      "Handling asynchronous API rate limits and network latency gracefully",
      "Parsing nested JSON weather data with proper error boundaries for missing city queries"
    ],
    learnings: [
      "Mastered REST API integration patterns and debounced search inputs",
      "Learned effective state management for multi-condition UI theming"
    ],
    liveUrl: "https://kavi-22.github.io/Weather-Dashboard/",
    githubUrl: "https://github.com/kavi-22/Weather-Dashboard",
    featured: true,
    completionDate: "2024",
  },
  {
    id: "academic-grade-calculator",
    title: "Academic Grade Calculator",
    tagline: "Dynamic GPA/CGPA computational engine with multi-subject evaluation",
    description: "A precision academic computation tool supporting customizable subject grading, weighted credit calculations, real-time percentage analysis, and PDF export capabilities.",
    longDescription: "Academic Grade Calculator addresses the need for students and educators to calculate multi-subject semester grades, cumulative GPAs, and cutoff percentages. Designed with reactive DOM state updates and clean validation logic to prevent calculation errors.",
    problem: "Calculating complex academic percentages across varying subject credits and grading scales often leads to manual mathematical errors and confusion.",
    solution: "Engineered a reactive calculation engine with instant recalculations upon subject input, dynamic row additions, validation bounds (0-100), and PDF export options.",
    role: "Full-Stack Developer",
    category: "tools",
    categoryLabel: "Web Utility / Tool",
    tags: ["JavaScript", "DOM Architecture", "Math Logic", "PDF Generation", "UI/UX"],
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "DOM API", "Client-side PDF Library"],
    features: [
      "Dynamic subject addition and deletion with instant weight recalculation",
      "Support for percentage-based scoring and weighted GPA scales",
      "Visual performance indicators with real-time feedback thresholds",
      "One-click print and PDF export formatting for academic records",
      "Local state preservation to prevent loss of inputs during session refreshes"
    ],
    challenges: [
      "Ensuring sub-millisecond calculation updates across dynamic DOM elements without lag",
      "Formatting complex dynamic tables cleanly for standard PDF and print viewports"
    ],
    learnings: [
      "Deepened understanding of vanilla JavaScript DOM lifecycle and performance optimizations",
      "Implemented strict input validation and boundary testing for computational accuracy"
    ],
    liveUrl: "https://kavi-22.github.io/Academic-percentage-calculator-/",
    githubUrl: "https://github.com/kavi-22/Academic-percentage-calculator-",
    featured: true,
    completionDate: "2024",
  },
  {
    id: "ecommerce-store",
    title: "Modern E-Commerce Storefront",
    tagline: "Full-featured shopping platform with catalog filtering, cart state & checkout flow",
    description: "A modern e-commerce storefront with categorized product browsing, dynamic cart management, interactive product modals, and responsive checkout user flows.",
    longDescription: "Engineered with Next.js and React component hierarchy, this project features robust client-side state management for cart operations, product categorization, price filtering, and seamless simulated checkout workflows utilizing FakeStoreAPI endpoints.",
    problem: "Many entry-level e-commerce templates suffer from disconnected cart states and poor mobile browsing experiences.",
    solution: "Created a centralized cart state system with responsive layout grids, fast product filtering, modal previews, and persistent cart items.",
    role: "Full Stack Developer",
    category: "fullstack",
    categoryLabel: "Full Stack App",
    tags: ["Next.js", "React", "State Management", "FakeStoreAPI", "Tailwind CSS"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FakeStoreAPI", "Context API"],
    features: [
      "Product catalog with category filtering (Electronics, Clothing, Accessories)",
      "Interactive cart drawer with item quantity adjustments and dynamic total calculations",
      "Product detail preview with high-res imagery and pricing breakdowns",
      "Simulated multi-step checkout workflow with client-side form validation",
      "Mobile-optimized drawer navigation and touch-friendly UI controls"
    ],
    challenges: [
      "Synchronizing client cart state with asynchronous product fetching",
      "Building a lightweight modal system without external heavy UI dependencies"
    ],
    learnings: [
      "Gained deep hands-on expertise in React Context API and custom hooks for shopping cart workflows",
      "Refined modern e-commerce UI patterns and responsive layout design"
    ],
    liveUrl: "#", // Update with live URL if deployed
    githubUrl: "https://github.com/kavi-22", // Update with specific repo URL
    featured: false,
    completionDate: "2024",
  },
  {
    id: "portfolio-website",
    title: "Developer Portfolio Website",
    tagline: "High-performance personal developer showcase with dark developer aesthetic",
    description: "A showcase portfolio built with Next.js 15, TypeScript, and Tailwind CSS. Features modular data-driven architecture, accessible modals, serverless contact dispatch, and dark aesthetics.",
    longDescription: "Designed from the ground up to reflect modern web engineering standards. Emphasizes clean TypeScript typings, central configuration layers, accessibility (WCAG compliance), responsive layouts, and zero client secrets.",
    problem: "Traditional portfolios are often monolithic, hardcoded, and difficult to update with new projects or credentials.",
    solution: "Architected a completely modular, data-driven system where all projects, skills, and profile metrics are decoupled into structured configuration files with typed schemas.",
    role: "Designer & Engineer",
    category: "frontend",
    categoryLabel: "Design & Next.js",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Resend API", "Accessibility"],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Resend API"],
    features: [
      "Strict data-driven separation: profile, skills, projects, and career timeline",
      "Interactive code snippet preview window with copy capabilities",
      "Comprehensive project modal with in-depth problem/solution case studies",
      "Working Resend contact system with server-side validation and rate limiting",
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
    liveUrl: "https://kavi-22.github.io/Portfolio_website-/",
    githubUrl: "https://github.com/kavi-22/Portfolio_website-",
    featured: false,
    completionDate: "2024",
  },
];
