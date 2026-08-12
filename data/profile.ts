import { Profile } from "@/types/portfolio";

export const PROFILE: Profile = {
  name: "Kaviyarasu C",
  role: "Frontend Developer",
  secondaryRole: "Next.js, React & Modern E-Commerce Storefront Specialist",
  location: "Chennai, Tamil Nadu, India",
  email: "kavi22052004@gmail.com",
  availability: "Available for opportunities",
  bio: "Frontend Developer at Arizon Digital USA specialized in Next.js, React, and BigCommerce Catalyst. Proven track record of modernizing legacy architectures, building high-converting e-commerce pages, and delivering production-ready features.",
  summary: "Frontend Developer with 1 year of professional experience building and modernizing scalable e-commerce storefronts at Arizon Digital USA. Specialized in Next.js, React, and the BigCommerce Catalyst framework, with a proven track record of migrating legacy architectures to modern stacks, delivering production-ready features, and improving UI/UX across high-traffic platforms. Recognized with the 'Rock Star Award' for consistent performance and impactful contributions.",
  currentlyWorkingWith: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "BigCommerce Catalyst",
    "Makeswift CMS",
    "REST APIs"
  ],
  currentlyLearning: [
    "Advanced Headless Commerce",
    "Full-Stack System Architecture",
    "Server Actions & Edge Runtime",
    "Web Performance Optimization"
  ],
  lookingFor: [
    "Frontend Engineer Roles",
    "Next.js / React Specialist Positions",
    "Modern Web Application Teams",
    "High-Impact Engineering Roles"
  ],
  social: {
    github: "https://github.com/kavi-22",
    linkedin: "https://www.linkedin.com/in/kaviyarasu-c-bsc/",
    email: "mailto:kavi22052004@gmail.com",
    website: "https://portfolio-hazel-gamma-94.vercel.app/",
  },
  resumeUrl:
    process.env.NEXT_PUBLIC_RESUME_LINK ||
    process.env.RESUME_LINK ||
    "https://drive.google.com/file/d/11B0OPc5IV-ZqxioR1nTUr0jOaPT7RaFZ/view?usp=drivesdk",
  stats: {
    projectsBuilt: "3+ Flagship Apps",
    yearsExperience: "1 Year Pro Exp",
    technologies: "15+ Technologies",
    currentRole: "MTS-1 @ Arizon Digital",
  },
  codeSnippet: {
    filename: "developer.config.ts",
    language: "typescript",
    code: `export const developer: DeveloperProfile = {
  name: "Kaviyarasu C",
  title: "Frontend Developer (MTS-1)",
  company: "Arizon Digital USA",
  location: "Chennai, Tamil Nadu, India",
  honors: "Rock Star Award Recipient ⭐",
  primaryStack: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "BigCommerce Catalyst",
    "Makeswift CMS"
  ],
  status: "Building next-generation web platforms",
  principles: [
    "Scalable, component-driven UI architecture",
    "Modernizing legacy stacks into fast web apps",
    "High-converting UX, accessibility & speed"
  ],
  contact: () => "kavi22052004@gmail.com"
};`,
  },
};
