import { ExperienceItem } from "@/types/portfolio";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-freelance",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed / Freelance",
    employmentType: "Freelance / Contract",
    location: "Remote",
    period: "2024 - Present",
    description: "Architecting and delivering bespoke web applications, interactive calculators, and responsive dashboards for individual clients and academic workflows.",
    responsibilities: [
      "Designed and developed full-stack web applications utilizing Next.js, React, and TypeScript with focus on responsive layouts",
      "Engineered real-time data integration with third-party REST APIs (weather data, e-commerce product catalogs)",
      "Implemented modular, reusable component systems with Tailwind CSS, reducing development iteration cycles",
      "Optimized client-side rendering performance, state management, and asset delivery for fast initial load times"
    ],
    achievements: [
      "Successfully launched production-ready web apps with 100% responsive cross-device compatibility",
      "Created reusable calculation and dashboard engines used across multiple client and student workflows"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript", "REST APIs", "Git"],
    current: true,
  },
];
