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
    link: "https://github.com/yogeshbisht",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/yogesh.bisht.925",
  },
  {
    name: "Upwork",
    icon: "upwork",
    link: "https://www.upwork.com/freelancers/yogeshbishtdev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/yogesh-bisht-5871191b8",
  },
];
