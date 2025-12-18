
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  status: 'Live' | 'Beta' | 'Concept';
  demoId?: 'nebula' | 'quantum' | 'void' | 'echo';
}

export interface Skill {
  category: string;
  name: string;
  level: number; // 0-100
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export interface Review {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  text: string;
  rating: number;
  date: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
}

export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

export interface LifestyleItem {
  id: string;
  title: string;
  category: 'Gym' | 'Football' | 'Lifestyle';
  coverUrl: string; // The main thumbnail for the grid
  date: string;
  description: string;
  gallery: MediaItem[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isTyping?: boolean;
}

export interface DevProfile {
  name: string;
  title: string;
  about: string;
  location: string;
  avatarUrl?: string;
  availability: 'Available' | 'Busy' | 'Open to Offers';
  stats: {
    yearsExperience: number;
    projectsCompleted: number;
    coffeeConsumed: number;
  };
}
