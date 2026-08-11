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
    ariaLabel: "Visit Kaviyarasu's GitHub profile",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/kaviyarasu-c",
    icon: "linkedin",
    ariaLabel: "Connect with Kaviyarasu on LinkedIn",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:kavi22052004@gmail.com",
    icon: "email",
    ariaLabel: "Send an email to Kaviyarasu",
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
