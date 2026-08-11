export interface SocialItem {
  id: string;
  name: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "email" | "globe";
  ariaLabel: string;
}

export const SOCIAL_LINKS: SocialItem[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/kavi-22",
    icon: "github",
    ariaLabel: "Visit Kavi's GitHub profile",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/kavi", // Update with your LinkedIn profile
    icon: "linkedin",
    ariaLabel: "Connect with Kavi on LinkedIn",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:kavi@example.com", // Update with your personal email
    icon: "email",
    ariaLabel: "Send an email to Kavi",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
