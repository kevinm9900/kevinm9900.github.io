export type Stat = {
  label: string;
  value: string;
};

export type Highlight = {
  id: string;
  label: string;
  emoji: string;
  summary: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  impact: string;
  tags: string[];
  accent: string;
  linkLabel?: string;
  linkUrl?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  details: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  notes: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type ProfileData = {
  name: string;
  username: string;
  headline: string;
  bio: string;
  location: string;
  websiteLabel: string;
  websiteUrl: string;
  about: string;
  avatarImageUrl?: string;
  avatarFallback: string;
  resumeUrl: string;
  stats: Stat[];
  highlights: Highlight[];
  projects: Project[];
  experience: Experience[];
  skills: string[];
  education: Education[];
  contact: ContactLink[];
};
