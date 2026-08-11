import { SkillCategory } from "@/types/portfolio";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frameworks & Libraries",
    description: "Modern component-driven frontend technologies powering high-conversion web applications",
    skills: [
      { name: "Next.js (App Router)", category: "frontend", description: "SSR, SSG, Server Components, API routes", highlight: true },
      { name: "React (18 / 19)", category: "frontend", description: "Hooks, Context API, Component Hierarchy", highlight: true },
      { name: "Tailwind CSS", category: "frontend", description: "Responsive layouts, utility architecture, dark mode", highlight: true },
    ],
  },
  {
    title: "Headless Commerce & CMS",
    description: "Enterprise e-commerce architectures and visual content management systems",
    skills: [
      { name: "BigCommerce Catalyst", category: "frontend", description: "Composable storefront framework & Next.js integration", highlight: true },
      { name: "BigCommerce Storefront APIs", category: "backend", description: "Cart, Checkout, Customer, Catalog GraphQL/REST", highlight: true },
      { name: "Makeswift CMS", category: "tools", description: "Visual drag-and-drop builder for Next.js dynamic pages", highlight: true },
    ],
  },
  {
    title: "Programming Languages",
    description: "Core scripting and typed programming fundamentals",
    skills: [
      { name: "JavaScript (ES6+)", category: "languages", description: "Async/Await, DOM manipulation, modular JS", highlight: true },
      { name: "TypeScript", category: "languages", description: "Strict type safety, interfaces, generics", highlight: true },
      { name: "HTML5 & Semantic Web", category: "languages", description: "Accessibility (WCAG), SEO structure", highlight: true },
      { name: "CSS3 / Modern Layouts", category: "languages", description: "Flexbox, Grid, keyframe animations, responsive design" },
      { name: "Python", category: "languages", description: "Core syntax, data structures & algorithms (Basics)" },
      { name: "SQL", category: "languages", description: "Relational queries, schema design, joins (Basics)" },
    ],
  },
  {
    title: "Developer Tools & Platforms",
    description: "Version control, API testing, build optimization, and cloud deployment",
    skills: [
      { name: "Git & GitHub", category: "tools", description: "Branching strategies, PR reviews, code collaboration", highlight: true },
      { name: "Postman", category: "tools", description: "REST/GraphQL API debugging, automated test collections", highlight: true },
      { name: "VS Code", category: "tools", description: "Full-featured IDE workflows, debugging, linters" },
      { name: "Vercel", category: "tools", description: "Continuous integration, edge deployments & previews", highlight: true },
      { name: "pnpm / npm", category: "tools", description: "Package management, dependency resolution" },
    ],
  },
];
