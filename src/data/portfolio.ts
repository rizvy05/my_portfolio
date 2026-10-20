export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'Full Stack' | 'Frontend' | 'Security / Tools';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName?: string }[];
}

export const PORTFOLIO_DATA = {
  name: "Hadiuzzaman",
  nickname: "rizvy",
  title: "Full-Stack Engineer & CSE Student",
  bio: "Passionate Computer Science student and Full-Stack Developer specializing in modern web ecosystems (Next.js, React, TypeScript, Tailwind) and exploring cybersecurity fundamentals.",
  location: "Bangladesh",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "contact@example.com",
  },
  projects: [
    {
      id: "fitlog",
      title: "FitLog - Workout Tracker",
      description: "A dynamic Next.js application for tracking daily workouts, exercise logs, and progress metrics with reactive state management.",
      longDescription: "FitLog is designed for seamless fitness tracking. Built using Next.js App Router, Context API, and Tailwind CSS, it offers quick activity logging, real-time analytics, and persistent client storage.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Context API"],
      category: "Full Stack",
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://fitlog.vercel.app",
      highlights: [
        "Modular exercise logging system",
        "Responsive analytics dashboard",
        "Optimized client state & local persistence"
      ]
    },
    {
      id: "bazar-dor",
      title: "Bazar-dor - Commodity Tracker",
      description: "Real-time daily commodity market price tracker featuring live tickers, custom UI components, and authentication.",
      longDescription: "Bazar-dor keeps users informed on essential daily market price updates. Built with modular React components, custom marquee tickers, and secure authentication flow.",
      tags: ["Next.js", "React", "Tailwind CSS", "NextAuth / Auth"],
      category: "Full Stack",
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://bazar-dor.vercel.app",
      highlights: [
        "Interactive price ticker marquee",
        "Category-based filtering for groceries & staples",
        "User registration and bookmarking feature"
      ]
    },
    {
      id: "devstack",
      title: "DevStack Platform",
      description: "Developer resources and tools platform designed with clean UI/UX and Vercel deployment.",
      longDescription: "DevStack acts as a hub for developer utilities and curated learning resources, optimized for fast page loads and smooth client routing.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      category: "Frontend",
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://devstack.vercel.app",
      highlights: [
        "Sub-second load performance",
        "Fully accessible component design",
        "Dynamic search and tag system"
      ]
    }
  ] as Project[],

  skillCategories: [
    {
      title: "Web Engineering",
      skills: [
        { name: "Next.js (App Router)", level: 90 },
        { name: "React.js", level: 92 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML5 / CSS3", level: 95 }
      ]
    },
    {
      title: "Languages & Computer Science",
      skills: [
        { name: "C / C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 78 },
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "Database Management (SQL)", level: 80 }
      ]
    },
    {
      title: "Tools & Ecosystem",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code & IntelliJ IDEA", level: 92 },
        { name: "Vercel Deployment", level: 90 },
        { name: "Proteus Simulation", level: 75 }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "National Institute of Textile Engineering and Research (NITER) — University of Dhaka",
      period: "2024 - Present",
      description: "Studying core CSE topics including Algorithms, Data Structures, System Architecture, Database Systems, and Digital Logic."
    }
  ]
};