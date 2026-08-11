import { SkillCategory } from "@/types/portfolio";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Modern component-driven UI development with responsive layouts and fluid interactions",
    skills: [
      { name: "React 19 / 18", category: "frontend", description: "Hooks, Context API, Component Architecture", highlight: true },
      { name: "Next.js (App Router)", category: "frontend", description: "SSR, SSG, Server Components, API routes", highlight: true },
      { name: "TypeScript", category: "frontend", description: "Strict type safety, generics, interfaces", highlight: true },
      { name: "Tailwind CSS", category: "frontend", description: "Utility-first design, custom design tokens, dark mode", highlight: true },
      { name: "JavaScript (ES6+)", category: "frontend", description: "Async/Await, DOM manipulation, modular JS" },
      { name: "HTML5 & Semantic Web", category: "frontend", description: "Accessibility (a11y), SEO-friendly structure" },
      { name: "CSS3 / Modern Layouts", category: "frontend", description: "Flexbox, CSS Grid, animations, responsive typography" },
    ],
  },
  {
    title: "Backend & Data Handling",
    description: "Server architecture, API integration, and database operations",
    skills: [
      { name: "Node.js", category: "backend", description: "Runtime environment, asynchronous I/O" },
      { name: "RESTful API Integration", category: "backend", description: "Consuming and structuring robust endpoints", highlight: true },
      { name: "Next.js Route Handlers", category: "backend", description: "Serverless endpoints, validation, error handling", highlight: true },
      { name: "SQL & Relational DBs", category: "database", description: "Data modeling, relational queries, normalization" },
      { name: "CRUD Operations", category: "database", description: "State persistence, query structuring, data sanitization" },
    ],
  },
  {
    title: "Core Programming Languages",
    description: "Algorithmic thinking, object-oriented principles, and versatile languages",
    skills: [
      { name: "TypeScript / JavaScript", category: "languages", description: "Primary stack language for full-stack applications", highlight: true },
      { name: "Python", category: "languages", description: "Data structures, scripting, algorithm design" },
      { name: "Java", category: "languages", description: "Object-oriented programming, design patterns" },
    ],
  },
  {
    title: "Developer Tools & Workflow",
    description: "Version control, modern build tooling, and deployment workflows",
    skills: [
      { name: "Git & GitHub", category: "tools", description: "Branching strategies, pull requests, issue tracking", highlight: true },
      { name: "Vercel / GitHub Pages", category: "tools", description: "CI/CD deployment, environment configurations", highlight: true },
      { name: "VS Code & Debugging", category: "tools", description: "Developer tooling, linting, formatting" },
      { name: "Postman / Thunder Client", category: "tools", description: "API testing, headers, request lifecycle" },
      { name: "pnpm / npm / yarn", category: "tools", description: "Package management, dependency auditing" },
    ],
  },
];
