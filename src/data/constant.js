import reactImg from "../assets/skillImages/react.webp";
import nextImg from "../assets/skillImages/next.webp";
import reduxImg from "../assets/skillImages/redux.webp";
import htmlImg from "../assets/skillImages/html.webp";
import cssImg from "../assets/skillImages/css.webp";
import jsImg from "../assets/skillImages/js.webp";
import tailwindImg from "../assets/skillImages/tailwind.webp";
import materialUiImg from "../assets/skillImages/material.webp";
import nodeJsImg from "../assets/skillImages/nodejs.webp";
import expressImg from "../assets/skillImages/express.webp";
import graphQlImg from "../assets/skillImages/graphql.webp";
import mySqlImg from "../assets/skillImages/mysql.webp";
import mongoDbImg from "../assets/skillImages/mongodb.webp";
import firebaseImg from "../assets/skillImages/firebase.webp";
import javaImg from "../assets/skillImages/java.webp";
import typescriptImg from "../assets/skillImages/ts.webp";
import gitImg from "../assets/skillImages/git.webp";
import ipsator from "../assets/experience/ipsator_logo.webp";
import MealHub from "../assets/projects/react-meal.webp";
import Vtube from "../assets/projects/v-tube.webp";
import HabbitTracker from "../assets/projects/habit-tracker.webp";
import NextEcom from "../assets/projects/next-ecom.webp";
import cn from "../assets/education/cn.webp";
import nitp from "../assets/education/nitp.webp";

export const Bio = {
  name: "Divya Gaurav",
  roles: ["Full-Stack Developer", "Frontend Engineer", "JavaScript Expert"],
  description:
    "Full-stack developer with 3+ years of professional software development experience. I build frontend workflows and backend APIs with JavaScript, React.js, Next.js, and Node.js, with a focus on frontend performance and practical AI integrations.",
  github: "https://github.com/DivyaGaurav21",
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  linkedin: "https://www.linkedin.com/in/divya-gaurav/",
  insta: "https://www.instagram.com/divya.gaurav.dg/",
  facebook: "https://www.facebook.com/gaurav.divya.7528/",
  email: "divyagaurav.dev@gmail.com",
  phone: "+91 9334802030",
  location: "India",
};

export const skills = [
  {
    title: "Frontend & State Management",
    skills: [
      { name: "React.js", image: reactImg },
      { name: "Next.js", image: nextImg },
      { name: "Redux", image: reduxImg },
      { name: "Zustand" },
      { name: "HTML", image: htmlImg },
      { name: "CSS", image: cssImg },
      { name: "Tailwind CSS", image: tailwindImg },
      { name: "Material UI", image: materialUiImg },
    ],
  },
  {
    title: "Backend, APIs & Real-time Communication",
    skills: [
      { name: "Node.js", image: nodeJsImg },
      { name: "Express.js", image: expressImg },
      { name: "FastAPI" },
      { name: "REST API" },
      { name: "GraphQL", image: graphQlImg },
      { name: "Firebase", image: firebaseImg },
      { name: "WebSockets" },
    ],
  },
  {
    title: "Languages & Testing",
    skills: [
      { name: "JavaScript", image: jsImg },
      { name: "TypeScript", image: typescriptImg },
      { name: "Python" },
      { name: "Java", image: javaImg },
      { name: "Chai" },
      { name: "Mocha" },
    ],
  },
  {
    title: "Data & Cloud",
    skills: [
      { name: "MongoDB", image: mongoDbImg },
      { name: "MySQL", image: mySqlImg },
      { name: "AWS" },
      { name: "Git", image: gitImg },
    ],
  },
  {
    title: "Generative AI & LLMs",
    skills: [
      { name: "Generative AI" },
      { name: "OpenAI API" },
      { name: "LLM APIs" },
      { name: "Function/Tool Calling" },
      { name: "RAG Basics" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    title: "AI Development Tools",
    skills: [
      { name: "GitHub Copilot" },
      { name: "Cursor" },
      { name: "Claude" },
      { name: "CodeRabbit" },
      { name: "ChatGPT" },
      { name: "Windsurf" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Full Stack Developer",
    company: "Echomind (Contract, Remote)",
    date: "April 2026 - Present",
    desc: "Contributed to full-stack academic scheduling features using React, FullCalendar, Node.js, and REST APIs. Developed backend APIs for programs, faculty, classes, and academic schedules, including CRUD operations. Implemented availability-based slot booking so participants can schedule sessions and faculty can manage classes and academic events.",
    skills: ["React", "FullCalendar", "Node.js", "REST APIs"],
  },
  {
    id: 1,
    img: ipsator,
    role: "Software Engineer - Frontend",
    company: "Ipsator Analytics Private Limited",
    date: "March 2025 - March 2026",
    desc: "Built frontend workflows for 300+ daily customer complaints, including complaint tracking, refund and reorder actions, and API-driven status updates. Built and tested a universal search feature for IRCTC e-Catering, helping 10K+ users find food by item, restaurant, or station. Improved food discovery with request caching and efficient data fetching to reduce redundant API calls. Collaborated with product managers, backend engineers, and UX designers in Agile sprints, contributing code reviews and Git-based pull requests.",
    skills: ["Frontend workflows", "API integrations", "Request caching", "Agile", "Git"],
  },
  {
    id: 2,
    img: ipsator,
    role: "Frontend Developer",
    company: "Ipsator Analytics Private Limited",
    date: "September 2023 - February 2025",
    desc: "Led frontend modernization and version upgrades, addressing legacy technical debt and establishing modular coding patterns across shared modules. Enhanced the HeliYatra booking flow with improved journey selection, passenger forms, API-driven availability, and validation. Built a responsive Karnataka Tourism website using React.js and Next.js, with GraphQL-driven pages based on URL routes and cross-browser support. Reduced JavaScript bundle size by 20% through dynamic imports and code splitting.",
    skills: ["React.js", "Next.js", "GraphQL", "Frontend optimization", "Code splitting"],
  },
];

export const education = [
  {
    id: 0,
    img: nitp,
    school: "National Institute of Technology, Patna",
    date: "August 2017 - May 2021",
    degree: "B.Tech (Major: EE, Minor: CSE)",
  },
  {
    id: 1,
    img: cn,
    school: "Coding Ninjas (Certified)",
    date: "June 2022 - August 2023",
    degree: "Full Stack Web Development",
  },
];

export const projects = [
  {
    id: 0,
    title: "Test Series Platform",
    description: "Full-stack test series platform with timed exams, an admin panel, and PDF results.",
    image: null,
    tags: ["Timed Exams", "JWT", "Google OAuth", "REST APIs", "MongoDB", "PDF Results"],
    details: [
      "Built timed exams with automatic submission when the timer expires.",
      "Implemented JWT and Google OAuth authentication with role-based admin access.",
      "Developed an admin panel with bulk JSON exam import and CRUD management.",
      "Designed REST APIs with MongoDB aggregation for real-time score analytics.",
      "Automated Unicode-supported PDF result generation and built a Hindi/English interface.",
    ],
    category: "Full-stack platform",
    github: "https://github.com/DivyaGaurav21/test-pilot-quizz",
    webapp: "https://divyagarav.vercel.app/",
  },
  {
    id: 1,
    title: "GPT Flix",
    description: "Movie discovery platform with secure login, AI-powered personalized recommendations, and dynamic content from public movie APIs.",
    image: null,
    tags: ["React.js", "Firebase Auth", "OpenAI", "Movie APIs"],
    details: [
      "Developed a React.js movie discovery platform with Firebase Authentication.",
      "Integrated public movie APIs and OpenAI for AI-powered personalized recommendations.",
    ],
    category: "AI-powered movie discovery",
    github: "https://github.com/DivyaGaurav21/GPTFlix",
    webapp: "https://aigptflix.netlify.app/",
  },
  {
    id: 2,
    title: "Next-Ecommerce",
    date: "November 2023 - December 2023",
    description:
      "The E-Commerce Website Development project aims to create a comprehensive and user-friendly online platform for buying and selling products. Leveraging a full-stack approach, the project utilizes Firebase Authentication for secure user authentication, MongoDB for efficient data storage, and Next.js with Tailwind CSS for frontend development. The key objectives include implementing robust authentication, seamless data management, and essential features such as filtering, pagination, and cart management.",
    image: NextEcom,
    tags: [
      "React Js",
      "Next Js",
      "firebase authentication",
      "Rest API",
      "Mongo DB",
      "Tailwind CSS",
    ],
    category: "web app",
    github: "https://github.com/DivyaGaurav21/next-ecommerce",
    webapp: "https://github.com/DivyaGaurav21/next-ecommerce",
  },
  {
    id: 3,
    title: "V-Tube",
    date: "April 2023 - June 2023",
    description:
      "Created a YouTube-like platform, which can display and play videos, search and browse video content, and manage user accounts. The project uses the React library as its frontend framework, which allows for building a responsive, dynamic user interface with reusable components. Material UI is used as the design system to provide a consistent look and feel throughout the application. This helps to create a modern and intuitive user experience. In addition, the YouTube API is integrated into the project, allowing users to search for videos and view their details such as title, description, and duration. Users can also play videos directly from the app and browse related content.",
    image: Vtube,
    tags: [
      "html-css-js",
      "React",
      "hooks: usestate useref usereducer useeffect",
      "javaScript",
      "Material UI",
      "Rapid API",
    ],
    category: "web app",
    github: "https://github.com/DivyaGaurav21/vidTube",
    webapp: "https://divyagaurav-vtube.netlify.app/",
  },
  {
    id: 4,
    title: "Habbit-Tracker",
    date: "June 2023 - July 2023",
    description:
      "The Habit Tracker is a web application designed to help authenticated users track their daily and weekly habits. It provides users with a simple and intuitive platform to set, monitor, and visualize their progress towards achieving their desired habits. The application is built using Node.js, Express.js, MongoDB, and EJS templating engine, offering a seamless user experience",
    image: HabbitTracker,
    tags: [
      "html5-css3-Js",
      "node js",
      "express js",
      "nodemon",
      "mongo db",
      "ejs - template engine",
    ],
    category: "web-app",
    github: "https://github.com/DivyaGaurav21/habbit_tracker_nodejs",
    webapp: "http://habit-tracker-dg.onrender.com/",
  },
  {
    id: 5,
    title: "E-Commerce Meal-Hub",
    date: "January 2023 - February 2023",
    description:
      "It is a React & Redux Based Real World Project, Ecommerce Website (MEAL HUB). where user can buy food receipy and a Restaurent owner able to sell their Restaurent's Food Items.Any User can add, remove , update ,delete (crud operation) receipy in cart. in Other hand ,Restaurent owner who want to sell their food item , they will able to add , update , and delete their receipy. if user click on theire desire receipy , they were able to see receipy details such as restorent name , receipy name, rating , price , overview etc... with recommended similar items at bottom",
    image: MealHub,
    tags: [
      "html5",
      "css3",
      "vanilla-js",
      "rest-api",
      "reactjs",
      "jsx",
      "hooks",
      " react-router-dom",
      " material-ui",
      " react-bootstrap",
      "redux-toolkit",
    ],
    category: "web app",
    github: "https://github.com/DivyaGaurav21/Ecoomerce-React-App",
    webapp: "https://ecommerce-meal.netlify.app/",
  },
];
