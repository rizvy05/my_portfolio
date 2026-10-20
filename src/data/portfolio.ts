export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'Full Stack' | 'Frontend' | 'UI / Apps';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export const PORTFOLIO_DATA = {
  name: "Hadiuzzaman",
  nickname: "Rizvy",
  title: "Frontend & Software Developer",
  bio: "Computer Science undergraduate and developer with hands-on project experience in JavaScript, TypeScript, React.js, Next.js, Java, C, and Object-Oriented Programming. Skilled in Data Structures & Algorithms, building responsive UIs, and authentication-based applications.",
  location: "Dhaka, Bangladesh",
  contact: {
    phone: "01637050190",
    email: "hadiuzzamanrizvy@gmail.com",
    linkedin: "https://www.linkedin.com/in/rizvy05",
    github: "https://github.com/rizvy05",
  },
  // Place your resume PDF inside the `public/` folder as `resume.pdf`
  resumeUrl: "/resume.pdf",

  projects: [
    {
      id: "bazar-dor",
      title: "Bazar Dor — Market Price Platform",
      description: "A web platform for displaying market prices of products with Better Auth integration.",
      longDescription: "Developed a comprehensive market price tracking web application. Implemented Better Auth for secure user authentication, restricting product details to authenticated users while offering a clean UI for market price information.",
      tags: ["Next.js", "React.js", "Better Auth", "Tailwind CSS"],
      category: "Full Stack",
      featured: true,
      githubUrl: "https://github.com/rizvy05/Bazar-dor-new.git",
      liveUrl: "https://bazar-dor.vercel.app",
      highlights: [
        "Developed a web platform for displaying market prices",
        "Implemented authentication using Better Auth",
        "Restricted product details to authenticated users"
      ]
    },
    {
      id: "fitness-tracker",
      title: "Fitness & Calorie Tracker",
      description: "A fitness application to explore workout and calorie-related information with sorting features.",
      longDescription: "Designed an interactive fitness application featuring calorie-based sorting to help users compare options easily through responsive UI cards.",
      tags: ["React.js", "Next.js", "JavaScript", "Tailwind CSS"],
      category: "Frontend",
      featured: true,
      githubUrl: "https://github.com/rizvy05/workout-website.git",
      liveUrl: "https://fitlogworkout-neon.vercel.app/",
      highlights: [
        "Implemented calorie-based sorting for user comparison",
        "Designed interactive cards to display fitness information",
        "Created a fully responsive interface"
      ]
    },
    {
      id: "show-booking",
      title: "Show Booking Website",
      description: "A show-booking website built with HTML, CSS, JavaScript, and TypeScript.",
      longDescription: "Built a complete show-booking interface enabling users to browse shows and handle booking interactions seamlessly across all screen sizes.",
      tags: ["HTML", "CSS", "JavaScript", "TypeScript"],
      category: "Frontend",
      featured: true,
      githubUrl: "https://github.com/rizvy05/HTML-CSS-Project_Make-a-website-for-a-conference.git",
      liveUrl: "https://github.com",
      highlights: [
        "Built show-booking interface using core web tech",
        "Managed browsing and booking interactions",
        "Applied responsive styling for cross-device usability"
      ]
    }
  ] as Project[],

  skillCategories: [
    {
      title: "Web & Frontend Engineering",
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript (ES6+) & TypeScript", level: 90 },
        { name: "React.js & Next.js", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "REST API Integration", level: 88 }
      ]
    },
    {
      title: "Programming & Computer Science Core",
      skills: [
        { name: "C Programming Language", level: 85 },
        { name: "Java & Object-Oriented Programming (OOP)", level: 85 },
        { name: "Data Structures & Algorithms (DSA)", level: 82 },
        { name: "Computer Science Fundamentals", level: 88 }
      ]
    },
    {
      title: "Developer Tools & Methods",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Responsive & Mobile-First Design", level: 95 },
        { name: "Component-Based UI Architecture", level: 92 }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      degree: "B.Sc. in CSE",
      institution: "National Institute of Textile Engineering and Research (NITER)",
      period: "2024 - Ongoing",
      description: "Undergraduate studies in Computer Science and Engineering focusing on DSA, OOP, Software Engineering, and Web Technologies."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dr. Mahbubur Rahman Mollah College (GPA: 5.00)",
      period: "2021 - 2023",
      description: "Higher secondary education in Science."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Madhupur Shahid Smrity High School (GPA: 5.00)",
      period: "2016 - 2021",
      description: "Secondary school education."
    }
  ]
};