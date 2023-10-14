import html from "/src/assets/images/html.png";
import css from "/src/assets/images/css.png";
import javascript from "/src/assets/images/js.png";
import angular from "/src/assets/images/angular.png";
import react from "/src/assets/images/react.png";
import nextjs from "/src/assets/images/next.svg";
import bootstrap from "/src/assets/images/bootstrap.png";
import tailwind from "/src/assets/images/tailwind.png";
import typescript from "/src/assets/images/typescript.png";
import sass from "/src/assets/images/sass.png";
import vercel from "/src/assets/images/vercel.svg";
import cake from "/src/assets/images/cakephp.jpg";
import csharp from "/src/assets/images/csharp.png";
import laravel from "/src/assets/images/laravel.png";
import expressjs from "/src/assets/images/express.png";
import nodejs from "/src/assets/images/nodejs.png";
import php from "/src/assets/images/php.png";
import mysql from "/src/assets/images/mysql.png";
import postgresql from "/src/assets/images/postgresql.png";
import sqlserver from "/src/assets/images/sqlserver.svg";
import git from "/src/assets/images/git.png";
import github from "/src/assets/images/github.svg";
import gitlab from "/src/assets/images/gitlab.png";
import apirest from "/src/assets/images/apirest.png";
import npm from "/src/assets/images/npm.png";


export const frontEndSkills = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "Angular", image: angular },
  { name: "JavaScript", image: javascript },
  { name: "Next.js", image: nextjs },
  { name: "React", image: react },
  { name: "Bootstrap", image: bootstrap },
  { name: "Tailwind CSS", image: tailwind },
  { name: "Sass", image: sass },
  { name: "TypeScript", image: typescript },
  { name: "Vercel", image: vercel },
];

export const backEndSkills = [
  { name: "CakePhp", image: cake },
  { name: "Laravel", image: laravel },
  { name: "ExpressJs", image: expressjs },
  { name: "NodeJs", image: nodejs },
  { name: "C#", image: csharp },
  { name: "PHP", image: php },
];

export const databaseSkills = [
  { name: "MySQL", image: mysql },
  { name: "PostgreSQL", image: postgresql },
  { name: "SQL Server", image: sqlserver },
];

export const toolsSkills = [
  { name: "Git", image: git },
  { name: "Github", image: github },
  { name: "Gitlab", image: gitlab },
  { name: "ApiRest", image: apirest },
  { name: "NPM", image: npm },
]

export const projectsData = [
  {
    imgSrc: "https://res.cloudinary.com/dyfmjmdb4/image/upload/v1684695318/fortnite-informer_h2uv1c.png",
    imgAlt: "Fortnite Informer",
    title: "Fortnite Informer",
    description: "This application built with React allows Fortnite players to consult mainly the most relevant information, such as the news, the item shop, etc.",
    repoLink: "http://github.com/jcruzbravo/fortnite-informer",
    productionLink: "https://fortnite-info.vercel.app/",
    tags: ["#React", "#JavaScript", "#HTML", "#CSS"],
  },
  {
    imgSrc: "https://res.cloudinary.com/dyfmjmdb4/image/upload/v1684699633/react-shop_j8effx.png",
    imgAlt: "TODO APP",
    title: "TODO APP",
    description: "This application built with React allows anyone to register their tasks to be done andfinish them, also each of these tasks is saved in the browser.",
    repoLink: "https://github.com/jcruzbravo/introduction-react-js",
    productionLink: "https://jcruzbravo.github.io/introduction-react-js/",
    tags: ["#React", "#JavaScript", "#HTML", "#CSS"],
  },
  {
    imgSrc: "https://res.cloudinary.com/dyfmjmdb4/image/upload/v1686421978/jshop_wlaofv.png",
    imgAlt: "JShop",
    title: "JShop",
    description: "This application built with React, Vite and Tailwindcss simulates a virtual ecommerce store in which you can interact by adding products to the shopping cart, previewing and searching.",
    repoLink: "https://github.com/jcruzbravo/ecommerce-react-vite-tailwind",
    productionLink: "https://jsh0p.netlify.app/",
    tags: ["#React", "#JavaScript", "#HTML", "#CSS", "#TailwindCSS", "#Vite"],
  },
  {
    imgSrc: "https://res.cloudinary.com/dyfmjmdb4/image/upload/v1686422013/react-shop_yasfam.png",
    imgAlt: "React Shop",
    title: "React Shop",
    description: "This application built with React, HTML and CSS simulates a virtual ecommerce store in which you can interact by adding products to the shopping cart, previewing and searching.",
    repoLink: "https://github.com/jcruzbravo/react-shop",
    productionLink: "https://jcruzbravo.github.io/react-shop/",
    tags: ["#React", "#JavaScript", "#HTML", "#CSS"],
  }
];