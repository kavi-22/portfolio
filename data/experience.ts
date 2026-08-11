import { ExperienceItem } from "@/types/portfolio";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-arizon-mts1",
    role: "Frontend Developer (MTS-1)",
    company: "Arizon Digital USA",
    employmentType: "Full-time",
    location: "Chennai, Tamil Nadu",
    period: "Jan 2026 – Present",
    description: "Develop and optimize scalable e-commerce storefronts using Next.js and the BigCommerce Catalyst framework, building high-conversion pages and integrating real-time APIs.",
    responsibilities: [
      "Develop and optimize scalable e-commerce storefronts using Next.js and BigCommerce Catalyst framework.",
      "Build key core pages (Homepage, Product Listing Page / PLP, Product Detail Page / PDP, Cart) with real-time API integrations.",
      "Utilize Makeswift CMS to build and manage static and dynamic content pages.",
      "Collaborate with designers and backend engineering teams to deliver production-ready features in an Agile environment."
    ],
    achievements: [
      "Awarded the 'Rock Star Award' for consistent performance, ownership, and impactful contributions to client platforms.",
      "Engineered responsive, reusable component systems with high lighthouse scores and fast page rendering."
    ],
    technologies: [
      "Next.js",
      "React",
      "BigCommerce Catalyst",
      "Makeswift CMS",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Git"
    ],
    current: true,
  },
  {
    id: "exp-arizon-intern",
    role: "Frontend Developer Intern",
    company: "Arizon Digital USA",
    employmentType: "Internship",
    location: "Chennai, Tamil Nadu",
    period: "Jun 2025 – Dec 2025",
    description: "Completed intensive onboarding in modern headless commerce stacks, transitioning into full storefront rebuilds and migrations from legacy architectures.",
    responsibilities: [
      "Completed intensive onboarding in BigCommerce, Catalyst, and Makeswift, transitioning to active client delivery within 2 months.",
      "Rebuilt e-commerce platforms using BigCommerce Catalyst and Next.js, migrating from legacy Stencil architecture.",
      "Developed responsive, reusable UI components with React and Tailwind CSS; implemented dynamic PLP, PDP, and cart functionalities.",
      "Built content-driven pages via Makeswift CMS, enabling flexible marketing updates without code changes."
    ],
    achievements: [
      "Successfully modernized legacy storefronts into high-performance, mobile-first Next.js applications.",
      "Promoted to Member Technical Staff (MTS-1) following proven track record of reliable delivery and ownership."
    ],
    technologies: [
      "Next.js",
      "React",
      "BigCommerce Catalyst",
      "Makeswift CMS",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    current: false,
  },
];
