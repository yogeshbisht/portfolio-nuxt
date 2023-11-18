import type { NavData, SocialLink } from "~/types";

export const navData: NavData[] = [
  {
    id: "home",
    name: "Home",
    path: "/",
    icon: "home",
  },
  {
    id: "about",
    name: "About Me",
    path: "#about",
    icon: "user",
  },
  {
    id: "skills",
    name: "Skills",
    path: "#skills",
    icon: "graduation-cap",
  },
  {
    id: "projects",
    name: "Professional Works",
    path: "#projects",
    icon: "code",
  },
  {
    id: "personal",
    name: "Personal Projects",
    path: "#personal",
    icon: "book",
  },
  {
    id: "testimonials",
    name: "Testimonials",
    path: "#testimonials",
    icon: "comment-dots",
  },
  {
    id: "contact",
    name: "Contact",
    path: "#contact",
    icon: "envelope",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Github",
    icon: "github",
    link: "",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "",
  },
  {
    name: "Twitter",
    icon: "x-twitter",
    link: "",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "",
  },
];
