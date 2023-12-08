import type { ProjectsData } from "~/types";

const projects: ProjectsData[] = [
  {
    id: "devtrovex",
    title: "Stack Overflow Concept",
    type: "personal",
    tech: ["Next.js"],
    intro: [
      "This is a Stack Overflow concept built with NextJS.",
      "Includes authentication and is fully responsive.",
      "Dynamically renders the questions and answers created by the user.",
      "Users can upvote and downvote the questions and answers.",
    ],
    imgUrl: "devtrovex.png",
    mockupImg: "devtrovex.png",
    webUrl: "https://devtrovex.vercel.app/",
  },
  {
    id: "imprezion",
    title: "Note Creating App",
    type: "personal",
    tech: ["Next.js"],
    intro: [
      "This is a note creating app built with NextJS.",
      "Includes authentication and is fully responsive.",
      "Dynamically renders the notes created by the user and option to publish the notes.",
    ],
    imgUrl: "imprezion.png",
    mockupImg: "imprezion.png",
    webUrl: "https://imprezion.vercel.app/",
  },
  {
    id: "teachsimple",
    title: "Learning Management System",
    brand: "Teach Simple LLC.",
    type: "professional",
    tech: ["Nuxt.js", "Node.js"],
    intro: [
      "A learning management system website created for Teach Simple LLC.",
      "The website provides a common platform where teachers can upload their products.",
      "A user gets access to unlimited resources such as activities, worksheets, ebooks, book companions etc. in different languages.",
    ],
    imgUrl: "teachsimple.jpg",
    mockupImg: "teachsimple.png",
    video: "https://www.youtube.com/watch?v=qY6-iODMcXE",
    webUrl: "https://teachsimple.com/",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    type: "personal",
    tech: ["React.js"],
    intro: ["Portfolio website including some standard animations."],
    imgUrl: "ybnew.png",
    mockupImg: "ybnew.png",
    webUrl: "https://ybnew.netlify.com/",
  },
  {
    id: "homewayz",
    title: "Real Estate Dashboard",
    brand: "HomeWayz",
    type: "professional",
    tech: ["Vue.js", "Node.js"],
    intro: [
      "HomeWayz is the first of its kind workflow solution. It is established in 2018 by an Agent for Agents.",
      "It's a real estate application consisting of a huge database of active properties for rent and sale.",
      "I handled the frontend development in agent/client dashboard system.",
    ],
    features: [
      {
        id: "feature1",
        name: "Route Map generation",
        description: [
          "It's one of the key feature of HomeWayz application",
          "It helps agents to create routes by choosing any of the properties and entering the time/data",
          "The routes can be assigned different states like saved, pending, confirmed based on its status",
          "All scheduled routes can be used by clients to generate a route map for that particular day to visit included properties",
        ],
      },
      {
        id: "feature2",
        name: "Google Map & Search Integration",
        description: [
          "Google map integration is included in the application that works and route generation utility",
          "Consists of a fully featured search system with different functionalities",
          "Allows users to search MLS properties by google location search",
        ],
      },
      {
        id: "feature3",
        name: "Assignment of properties to clients by agents",
        description: [
          "Agents are able to assign properties to clients that they find would align with clients needs and wants",
          "The properties can be saved and requested by clients for a tour",
        ],
      },
      {
        id: "feature4",
        name: "Needs/Wants for client side dashboard",
        description: [
          "Clients are able to input their needs and wants which are then matched with MLS properties",
          "Based on client's needs/wants, a match percent is generated that helps clients determine their available options",
          "Needs and wants are also assigned by agents to respective clients by having a thorough conversation with what a client need",
        ],
      },
      {
        id: "feature5",
        name: "Messaging & email system",
        description: [
          "A two way communication channel between agents and clients",
          "Clients are duly notified for any updates in MLS properties that might match with their requirements.",
          "A fully integrated email and phone system",
        ],
      },
    ],
    imgUrl: "homewayz.png",
    mockupImg: "homewayz.png",
    video: "https://www.youtube.com/watch?v=knBgZnPthMY",
    webUrl: "https://app.homewayz.io",
    appUrl: "https://homewayz.io",
  },
  {
    id: "zentapon",
    title: "Cash Flow Manager",
    brand: "Zentapon Pty. Ltd.",
    type: "professional",
    tech: ["React.js", "Node.js", "React Native"],
    intro: [
      "The application focuses on managing cashflow for present and future based on your current entries.",
      "Consists of utilities like guided tour, video player, drag/drop, Bank-Feed API Integration and more.",
      "Involves complex real time transactional calculations.",
    ],
    features: [
      {
        id: "feature1",
        name: "Interactive Charts & Dynamic Tables",
        image: true,
        description: [
          "Usage of interactive curve and bar charts",
          "Use of dynamic, sortable and expandable tables",
          "Import/Export transactions from any data file to custom output file",
        ],
      },
      {
        id: "feature2",
        name: "Plaid Integration",
        image: true,
        description: [
          "The website is integrated with Plaid API for users to get benefits from their own bank accounts",
          "Different scenarios that user can create to mock up a real bank like feature and estimated future earnings",
        ],
      },
    ],
    imgUrl: "zentapon.jpg",
    mockupImg: "zentapon.png",
    webUrl: "https://zentaflowplan.com",
    appUrl: "https://zentapon.com.au",
  },
  {
    id: "nfsc",
    title: "Financial Services",
    brand: "NorthState Financial Services Corporation",
    type: "professional",
    tech: ["PHP", "JavaScript", "HTML", "CSS"],
    intro: [
      "The organization provides affordable solutions to financial security of customers.",
      "Consists of a variety of insurance and loan options which users can opt based on their needs.",
      "Includes calculations and comparisons of insurance options provided by other brands.",
    ],
    features: [
      {
        id: "feature1",
        name: "Multiple Forms",
        image: true,
        description: [
          "Each insurance type has its own specific form  that is submitted to understand customer's needs",
          "A quote is generated based on client's requirements",
        ],
      },
      {
        id: "feature2",
        name: "Email system & Fully responsive",
        image: true,
        description: [
          "Email integration to send the owner notifications about a customer's application for its service",
          "Beautiful UI layout made from scratch without any template",
        ],
      },
    ],
    imgUrl: "nfsc.jpg",
    mockupImg: "nfsc.png",
    webUrl: "https://northstate.ca",
  },
  {
    id: "exyofin",
    title: "Finance Landing Page",
    type: "personal",
    tech: ["Vue.js"],
    intro: [
      "This website is kind of a one page template built with basic HTML, CSS and JavaScript code.",
      "Includes carousel and is fully responsive.",
    ],
    imgUrl: "exyofin.png",
    mockupImg: "exyofin.png",
    webUrl: "https://vt-exyofin.netlify.app/",
  },
  {
    id: "findfi",
    title: "Data Scraping",
    type: "professional",
    tech: ["React.js", "PHP"],
    intro: [
      "Website to search any of the financial institutions and their details.",
      "The project was ended halfway due to unavailability of client.",
    ],
    features: [
      {
        id: "feature1",
        name: "App Features",
        image: true,
        description: [
          "An excel sheet is being used as the source to fetch data",
          "The website page is integrated with instagram account posts",
        ],
      },
    ],
    imgUrl: "findfi.jpg",
    mockupImg: "findfi.png",
    webUrl: "http://findfi.co",
    siteDown: true,
  },
];

export default projects;
