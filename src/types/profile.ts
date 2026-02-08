export interface PersonalInfo {
  name: string;
  title: string;
  bio: string[];
  headshot: string;
  email: string;
  phone?: string;
  location: string;
  links: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Highlight {
  label: string;
  value: number | string;
  suffix?: string;
  prefix?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  dates: string;
  location: string;
  description?: string;
  achievements: string[];
  tags: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  brief: string;
  problem: string;
  approach: string[];
  outcome: string;
  impact?: {
    users?: number;
    countries?: number;
    timeline?: string;
    savings?: string;
  };
  tags: string[];
  links?: ProjectLink[];
  image?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterCard?: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  year?: number;
  category?: string;
}

export interface ProfileData {
  personal: PersonalInfo;
  highlights: Highlight[];
  skills: string[];
  toolbox: string[];
  experience: ExperienceItem[];
  projects: Project[];
  testimonials: Testimonial[];
  seo: SEOData;
  charts?: {
    projectsByYear?: ChartDataPoint[];
    skillsRadar?: ChartDataPoint[];
    careerProgression?: ChartDataPoint[];
  };
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
