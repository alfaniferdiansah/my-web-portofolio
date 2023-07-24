import project1 from "../../../assets/project_portfolio.png";
import project2 from "../../../assets/project2.png";
import project3 from "../../../assets/project3.png";
import project4 from "../../../assets/project4.png";

export const projectsData = [
  {
    id: 1,
    image: project1,
    desc: "This is my portfolio responsive made with reactJS, show more info about my personal life and job skills",
    title: "Landing Page Portfolio",
    category: "frontend",
    link: "https://github.com/alfaniferdiansah/my-web-portofolio",
    alt: "My Portfolio responsive",
    date: {
      number: "2023-7",
      name: "July 2023",
    },
  },
  {
    id: 2,
    image: project2,
    desc: "This is my first mini project with Fullstack with CRUD method about product data sample",
    title: "product list website CRUD",
    category: "fullstack",
    link: "https://github.com/alfaniferdiansah/MERN-CRUD-Product",
    alt: "CRUD Product",
    date: {
      number: "2023-4",
      name: "April 2023",
    },
  },
  {
    id: 3,
    image: project3,
    desc: "This is a fullstack-based online shop project with a complex crud system about product data to invoice orders",
    title: "E-Commerce website",
    category: "fullstack",
    link: "https://github.com/alfaniferdiansah/MERN-Ecommerce",
    alt: "Ecommerce build website",
    date: {
      number: "2023-7",
      name: "July 2023",
    },
  },
  {
    id: 4,
    image: project4,
    desc: "This is a simple website with quiz content build with html css and js native",
    title: "Quiz Web",
    category: "frontend",
    link: "https://github.com/alfaniferdiansah/quiz-website.git",
    alt: "Quiz website",
    date: {
      number: "2023-7",
      name: "July 2023",
    },
  },
];

export const navProject = [
  {
    name: "frontend",
  },

  {
    name: "backend",
  },

  {
    name: "fullstack",
  },
];
