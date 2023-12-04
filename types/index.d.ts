type TechData = {
  frontend?: string;
  backend?: string;
  mobile?: string;
  database?: string;
  full?: string;
};

type FeatureData = {
  id: string;
  name: string;
  description: string[];
  image?: boolean;
};

export type ProjectsData = {
  id: string;
  title: string;
  hero?: boolean;
  tech: TechData;
  intro: string[];
  features?: FeatureData[];
  imgUrl: string;
  video?: string;
  homeUrl?: string;
  webUrl: string;
  tag?: string[];
  siteDown?: boolean;
  brand?: string;
  mockupImg?: string;
};

export type NavData = {
  id: string;
  name: string;
  path: string;
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
