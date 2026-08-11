import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PROFILE } from "@/data/profile";

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kavi-22.github.io"),
  title: {
    default: `${PROFILE.name} | ${PROFILE.role}`,
    template: `%s | ${PROFILE.name}`,
  },
  description: `${PROFILE.name} is a ${PROFILE.role} and B.Sc. Computer Science graduate (First Class) from Annamalai University specializing in Next.js, React, TypeScript, and modern web engineering.`,
  keywords: [
    "Kavi",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer Portfolio",
    "Annamalai University Computer Science",
    "Computer Science Graduate",
  ],
  authors: [{ name: PROFILE.name, url: "https://github.com/kavi-22" }],
  creator: PROFILE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kavi-22.github.io/Portfolio_website-/",
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: PROFILE.bio,
    siteName: `${PROFILE.name} Developer Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: PROFILE.bio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: PROFILE.role,
    url: "https://kavi-22.github.io",
    sameAs: [
      PROFILE.social.github,
      PROFILE.social.linkedin,
    ].filter(Boolean),
    knowsAbout: PROFILE.currentlyWorkingWith,
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#090d16] text-slate-100 antialiased font-sans min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
