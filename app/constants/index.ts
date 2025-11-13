import type { HeaderData, SocialLink, TabData } from "~/app/types";

export const headerData: HeaderData[] = [
  {
    id: "about",
    name: "About Me",
    icon: "user",
  },
  {
    id: "skills",
    name: "Skills",
    icon: "graduation-cap",
  },
  {
    id: "professional",
    name: "Professional Projects",
    icon: "code",
  },
  {
    id: "personal",
    name: "Personal Projects",
    icon: "book",
  },
  {
    id: "testimonials",
    name: "Testimonials",
    icon: "comment-dots",
  },
  {
    id: "contact",
    name: "Contact",
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
    name: "Upwork",
    icon: "square-upwork",
    link: "https://www.upwork.com/freelancers/yogeshbishtdev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/yogesh-bisht-5871191b8",
  },
  {
    name: "X",
    icon: "square-x-twitter",
    link: "https://twitter.com/yogeshbisht",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/yogesh.bisht.925",
  },
];

export enum SkillLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advance = "Advance",
}

export const tabData: TabData[] = [
  {
    title: "Software Engineering",
    id: "software-engineering",
    skills: [
      {
        title: "Programming",
        description:
          "I have experience in the following programming languages.",
        items: [
          { name: "JavaScript", level: SkillLevel.Advance },
          { name: "TypeScript", level: SkillLevel.Intermediate },
          { name: "PHP", level: SkillLevel.Intermediate },
          { name: "Kotlin", level: SkillLevel.Intermediate },
          { name: "Java", level: SkillLevel.Beginner },
          { name: "Python", level: SkillLevel.Beginner },
        ],
      },
      {
        title: "Frameworks (Full Stack)",
        description:
          "I have experience in following frameworks where I combine the power of overall user experience with server-side architecture to handle data management, authorization, security, business logic and more.",
        items: [
          { name: "Node/Express/Nest.js", level: SkillLevel.Advance },
          { name: "Vue/Nuxt.js", level: SkillLevel.Advance },
          { name: "React/Next.js", level: SkillLevel.Advance },
          { name: "React Native", level: SkillLevel.Intermediate },
          { name: "Laravel", level: SkillLevel.Beginner },
          { name: "Django/Flask", level: SkillLevel.Beginner },
        ],
      },
      {
        title: "Databases",
        description:
          "I have experience in the following relational and non-relational databases.",
        items: [
          { name: "MongoDB", level: SkillLevel.Advance },
          { name: "MySQL", level: SkillLevel.Advance },
          { name: "PostgreSQL", level: SkillLevel.Advance },
          { name: "Supabase", level: SkillLevel.Intermediate },
          { name: "Neon", level: SkillLevel.Intermediate },
          { name: "Redis", level: SkillLevel.Beginner },
        ],
      },
      {
        title: "Cloud and Hosting",
        items: [
          { name: "Netlify", level: SkillLevel.Advance },
          { name: "Vercel", level: SkillLevel.Advance },
          { name: "Google Cloud", level: SkillLevel.Intermediate },
          { name: "Heroku", level: SkillLevel.Intermediate },
        ],
      },
      {
        title: "Amazon Web Services",
        description:
          "A comprehensive and widely adopted cloud computing platform provided by Amazon. It offers a vast array of on-demand services, including computing power, storage, databases, machine learning, analytics, content delivery, and more, allowing businesses to scale and deploy applications and resources with ease. Below are the AWS services that I have experience in.",
        items: [
          { name: "EC2", level: SkillLevel.Advance },
          { name: "S3", level: SkillLevel.Advance },
          { name: "Route 53", level: SkillLevel.Advance },
          { name: "CloudFront", level: SkillLevel.Intermediate },
          { name: "DynamoDB", level: SkillLevel.Intermediate },
          { name: "Lambda", level: SkillLevel.Beginner },
        ],
      },
      {
        title: "Other Services",
        items: [
          { name: "Git/GitHub", level: SkillLevel.Advance },
          { name: "Strapi", level: SkillLevel.Advance },
          { name: "Payload CMS", level: SkillLevel.Intermediate },
          { name: "Docker", level: SkillLevel.Intermediate },
          { name: "Kubernetes", level: SkillLevel.Beginner },
          { name: "GraphQL", level: SkillLevel.Beginner },
        ],
      },
    ],
  },
  {
    title: "Project Management",
    id: "project-management",
    skills: [
      {
        title: "Agile Methodologies",
        description:
          "I have experience in using Agile methodologies to manage projects effectively. I've worked with both Scrum and Kanban methodologies, and I'm comfortable with the iterative and collaborative approach they offer.",
        items: [
          { name: "Kanban", level: SkillLevel.Advance },
          { name: "Scrum", level: SkillLevel.Intermediate },
        ],
      },
      {
        title: "CI/CD Pipelines",
        description:
          "I have experience in setting up and managing CI/CD pipelines to automate the build, test, and deployment process of my projects.",
        items: [{ name: "Jenkins", level: SkillLevel.Intermediate }],
      },
    ],
  },
  {
    title: "Graphic Design",
    id: "graphic-design",
    skills: [
      {
        title: "Adobe Creative Cloud",
        description:
          "I primarily use the Adobe Creative Cloud suite to create and edit visual content for my projects. From designing logos and illustrations to editing photos and videos, I leverage the power of these tools to bring my ideas to life.",
        items: [
          { name: "Adobe XD", level: SkillLevel.Advance },
          { name: "Photoshop", level: SkillLevel.Advance },
          { name: "Illustrator", level: SkillLevel.Intermediate },
          { name: "Premiere Pro", level: SkillLevel.Intermediate },
          { name: "After Effects", level: SkillLevel.Intermediate },
          { name: "Adobe Spark", level: SkillLevel.Intermediate },
        ],
      },
      {
        title: "Other Tools",
        description:
          "I also use other designing tools to create visual content for my projects. Below are the proficiencies in the various designing tools.",
        items: [
          { name: "Figma", level: SkillLevel.Advance },
          { name: "Canva", level: SkillLevel.Intermediate },
          { name: "Motion", level: SkillLevel.Intermediate },
          { name: "Sketch", level: SkillLevel.Beginner },
          { name: "InVision", level: SkillLevel.Beginner },
        ],
      },
    ],
  },
];
