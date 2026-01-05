
import { DevProfile, Project, Skill, Education, WorkExperience, Review, Certification, LifestyleItem } from './types';

export const PROFILE: DevProfile = {
  name: "Antony Emong'oluk",
  title: "Full-Stack Engineer",
  about: "I build scalable digital solutions. Based in Nairobi, Kenya, I specialize in full-stack development with a focus on e-commerce platforms and interactive web experiences. With 3 years of intensive industry experience, I turn complex problems into elegant code.",
  location: "Nairobi, Kenya",
  availability: "Available",
  avatarUrl: "/assets/images/teflon.jpg",
  stats: {
    yearsExperience: 2,
    projectsCompleted: 10,
    coffeeConsumed: 3072
  }
};

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    institution: "KCA University",
    degree: "Bachelor of Science in Information Technology",
    period: "2024 - Present",
    description: "Specializing in Software Engineering and Advanced Database Systems. Dean's List for academic excellence."
  },
  {
    id: "edu2",
    institution: "Nairobi Technical Institute",
    degree: "Diploma in Information Technology",
    period: "2021 - 2023",
    description: "Foundation in computer systems, networking, and procedural programming. Graduated with Distinction."
  }
];

export const EXPERIENCE: WorkExperience[] = [
  {
    id: "exp1",
    company: "Freelance / Self-Employed",
    role: "Lead Full-Stack Engineer",
    period: "2025 - Present",
    description: "Architecting and deploying production-grade applications. Key achievement: Built and launched 'Bigi', a multi-vendor e-commerce platform serving thousands of users in Nairobi.",
    tech: ["React", "Node.js", "MongoDB" ]
  },
  {
    id: "exp2",
    company: "State Department for Gender and Affirmative Actions",
    role: "Junior Software Developer",
    period: "2023 - 2024",
    description: "Collaborated with a cross-functional team to develop fintech solutions. Optimized React components reducing page load times by 40%.",
    tech: ["TypeScript", "React", "Figma"]
  },
  {
    id: "exp3",
    company: "Digiduka Solutions",
    role: "Internship",
    period: "June - Nov,2023",
    description: "Assisted in the maintenance of client websites. Migrated legacy jQuery codebases to modern React functional components.",
    tech: ["HTML/CSS", "JavaScript", "PHP"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "bigi",
    title: "Bigi E-Commerce",
    description: "A robust multi-vendor e-commerce platform live in Kenya. Features real-time inventory tracking, secure M-Pesa & card payment integration, and a responsive mobile-first design.",
    tech: ["React", "Node.js", "MongoDB", "Express",],
    status: "Live",
    link: "https://bigi.africa",
    github: "#"
  },
  {
    id: "todo",
    title: "Futuristic Todo PWA",
    description: "A cyberpunk-themed Progressive Web App for task management. Features offline capabilities, persistent local storage, and a unique neon aesthetic interface.",
    tech: ["JavaScript", "PWA", "CSS3", "Local Storage"],
    status: "Live",
    link: "https://mistaken-identity.github.io/Futuristic-todo-pwa-v2/",
    github: "https://github.com/Mistaken-identity/Futuristic-todo-pwa-v2"
  },
  {
    id: "bmi",
    title: "BMI Calculator",
    description: "A precise health utility tool designed for quick Body Mass Index calculations. Features a clean, responsive interface with instant health category categorization.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    status: "Live",
    link: "https://mistaken-identity.github.io/BMI-calculator/",
    github: "https://github.com/Mistaken-identity/BMI-calculator"
  },
  {
    id: "portfolio",
    title: "Interactive Portfolio",
    description: "My personal digital HQ. A high-tech showcase featuring a neural interface chat powered by Gemini, glassmorphism UI, and interactive component demos.",
    tech: ["React", "TypeScript", "Tailwind", "Gemini API"],
    status: "Live",
    github: "#",
    demoId: "void" 
  },
  {
    id: "p1",
    title: "Nebula Dashboard",
    description: "A real-time data visualization platform for IoT devices using WebSockets and D3.js. Handles 50k+ concurrent connections.",
    tech: ["React", "TypeScript", "Node.js", "Redis"],
    status: "Concept",
    link: "#",
    github: "#",
    demoId: "nebula"
  },
  {
    id: "p2",
    title: "Quantum CMS",
    description: "Headless CMS built with Next.js and GraphQL. Features an AI-powered content suggestion engine.",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Gemini API"],
    status: "Beta",
    github: "#",
    demoId: "quantum"
  },
  {
    id: "p4",
    title: "Echo Chat",
    description: "End-to-end encrypted messaging app prototype with ephemeral messages.",
    tech: ["React Native", "Firebase", "WebRTC"],
    status: "Concept",
    demoId: "echo"
  }
];

export const SKILLS: Skill[] = [
  
  { category: "Frontend", name: "React/Next.js", level: 98 },
  { category: "Backend", name: "Node.js", level: 92 },
  { category: "Frontend", name: "TypeScript", level: 95 },
  { category: "Backend", name: "MongoDB", level: 90 },
  { category: "DevOps", name: "Git/GitHub", level: 95 },
  { category: "AI", name: "Vibe Coding", level: 100 },
  { category: "AI", name: "LLM Integration", level: 85 },

  { category: "Frontend", name: "JavaScript", level: 97 },
  { category: "Frontend", name: "HTML5/CSS3", level: 96 },
  { category: "Frontend", name: "Tailwind CSS", level: 96 },
  { category: "Frontend", name: "Redux/Context", level: 90 },
  
  { category: "Backend", name: "Express.js", level: 90 },
  { category: "Backend", name: "Python", level: 80 },
  { category: "Backend", name: "PostgreSQL", level: 88 },
  { category: "Backend", name: "Firebase", level: 85 },

  { category: "DevOps", name: "CI/CD Pipelines", level: 80 },
  { category: "DevOps", name: "AWS Services", level: 75 },
  { category: "DevOps", name: "Docker/K8s", level: 75 },
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Shem Johns",
    role: "Product Manager",
    company: "Bigi Africa",
    text: "Antony single-handedly transformed our monolithic legacy system into a high-performance microservices architecture. The new checkout flow he built increased our conversion rate by 35% in the first month.",
    rating: 5,
    date: "Dec 2025",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "r2",
    author: "David Ochieng",
    role: "Senior Systems Admin",
    company: "GovTech Dept",
    text: "Worked with Antony during his time at the State Department. His ability to optimize SQL queries and React render cycles is top-tier. A rare talent who understands both the code and the business logic.",
    rating: 5,
    date: "Aug 2024",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "r3",
    author: "Kevin M.",
    role: "Founder",
    company: "Digiduka Solutions",
    text: "I hired Antony as an intern, but he was coding like a senior dev within weeks. He revamped our entire client dashboard with a level of polish that exceeded our expectations.",
    rating: 5,
    date: "Nov 2023",
    avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "c1",
    name: "Meta Front-End Developer",
    issuer: "Coursera / Meta",
    date: "2024",
    description: "Professional certification covering advanced React, UI/UX principles, and accessible web development protocols.",
    link: "#"
  },
  {
    id: "c_devtown",
    name: "Backend Web Development",
    issuer: "DevTown",
    date: "2024",
    description: "Completed an intensive bootcamp on server-side scalable architecture using Node.js and Express.",
    link: "#"
  },
  {
    id: "c2",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Validation of overall understanding of the AWS Cloud platform, security, and architectural principles.",
    link: "#"
  },
  {
    id: "c_solo",
    name: "Python Core",
    issuer: "Sololearn",
    date: "2023",
    description: "Advanced training in Python syntax, OOP, and functional programming concepts.",
    link: "#sololearn.com"
  },
  {
    id: "c3",
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    description: "Rigorous training in JavaScript fundamentals, object-oriented programming, and algorithm optimization.",
    link: "#"
  },
  {
    id: "c_mimo",
    name: "Full Stack Web Development",
    issuer: "Mimo",
    date: "2022",
    description: "Comprehensive mobile-first learning path covering HTML, CSS, JavaScript, and SQL.",
    link: "#"
  },
  {
    id: "c4",
    name: "MongoDB Node.js Developer Path",
    issuer: "MongoDB University",
    date: "2023",
    description: "Advanced certification for data modeling, aggregation pipelines, and driver integration in Node.js environments.",
    link: "#"
  }
];

export const LIFESTYLE_ITEMS: LifestyleItem[] = [
  {
    id: "ls1",
    title: "Strength & Conditioning Protocol",
    category: "Gym",
    coverUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop",
    date: "Weekly Routine",
    description: "Maintaining physical hardware optimized for long coding sessions. Focus on calisthenics and compound lifts.",
    gallery: [
      {
        type: "video",
        url: "/assets/videos/petal_20250602_234108.mp4",
        caption: "High Intensity Interval Training"
      },
      {
        type: "video",
        url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        caption: "Deadlift Form Check"
      }
    ]
  },
  {
    id: "ls2",
    title: "Weekend Match Highlights",
    category: "Football",
    coverUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop",
    date: "Sunday League",
    description: "Team collaboration in a real-time, physics-based environment. Midfielder role.",
    gallery: [
      {
        type: "video",
        url: "/assets/videos/petal_20250717_104312.mp4",
        caption: "Match Highlights - friendly"
      },
      {
        type: "video",
        url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        caption: "Training Drills"
      }
    ]
  },
  {
    id: "ls3",
    title: "System Reboot: Hiking",
    category: "Lifestyle",
    coverUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=600&auto=format&fit=crop",
    date: "Mt. Longonot",
    description: "Disconnecting from the grid to clear cache and reset mental state.",
    gallery: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
        caption: "Summit View"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
        caption: "Trailhead Marker"
      }
    ]
  },
  {
    id: "ls4",
    title: "Remote Ops Station",
    category: "Lifestyle",
    coverUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
    date: "Current Setup",
    description: "Deployment environment calibration. High caffeine intake required.",
    gallery: [
      {
        type: "image",
        url: "/assets/images/code.jpg",
        caption: "Main Battlestation"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
        caption: "Dual Monitor Config"
      }
    ]
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI avatar of Antony Emongoluk, a Full-Stack Engineer based in Nairobi, Kenya.
Your goal is to impress recruiters and potential clients visiting Antony's portfolio.
Use the following data to answer questions:

Name: ${PROFILE.name}
Role: ${PROFILE.title}
Experience: ${PROFILE.stats.yearsExperience} years
Location: ${PROFILE.location}
Projects Completed: ${PROFILE.stats.projectsCompleted}
Key Projects: 
- Bigi (Live E-commerce platform at bigi.africa)
- Futuristic Todo PWA (Live PWA)
- BMI Calculator (Live Tool)
- Interactive Portfolio (This site)
- Nebula Dashboard (IoT Visualization)

Education:
- KCA University (BSc IT)
- Nairobi Technical Institute (Diploma IT)

Certifications:
- Meta Front-End Developer
- Backend Web Development (DevTown)
- AWS Certified Cloud Practitioner
- Python Core (Sololearn)
- JavaScript Algorithms & Data Structures (freeCodeCamp)
- Full Stack Web Development (Mimo)
- MongoDB Node.js Developer Path

Work History:
- Freelance Lead Engineer (Current, built Bigi)
- The State Department for Gender and Affirmative Actions (Junior Dev)
- Digiduka Solutions (Intern)

Activities / Interests:
- Football (Midfielder, plays in Sunday leagues)
- Gym (Strength training for focus)
- Hiking (To disconnect and reset)

Contact Information:
- Email: antonyteflon10@gmail.com
- WhatsApp/Phone: +254 769 259 151
- GitHub: Mistaken-identity
- Instagram: Anthony Teflon

Personality:
- Professional, knowledgeable, and enthusiastic about tech.
- Use tech metaphors (e.g., "My schedule is currently non-blocking").
- Keep answers concise (under 3 sentences usually).
- If asked about contact, provide the specific details listed above (Email or WhatsApp).
- If asked to write code, provide clean, modern TypeScript snippets.

Do not break character. You ARE the digital representation of Antony.
`;
