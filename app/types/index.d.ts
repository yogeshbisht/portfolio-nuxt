type FeatureData = {
  id: string;
  name: string;
  description: string[];
  image?: boolean;
};

export type Project = {
  id: string;
  title: string;
  brand?: string;
  type?: "professional" | "personal";
  tech: string[];
  intro: string[];
  features?: FeatureData[];
  imgUrl: string;
  video?: string;
  appUrl?: string;
  webUrl: string;
  siteDown?: boolean;
  mockupImg?: string;
  display?: boolean;
};

export type HeaderData = {
  id: string;
  name: string;
  icon: any;
};

export type SocialLink = {
  name: string;
  icon: any;
  link: string;
};

export type ExperienceLevel = {
  name: SkillLevel;
  color: string;
};

type SkillItem = {
  name: string;
  level: SkillLevel;
};

type Skill = {
  title: string;
  items?: SkillItem[];
  description?: string;
};

export type TabData = {
  title: string;
  id: string;
  skills: Skill[];
};
