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
    description: "Esta aplicación construida con React permite a los jugadores de Fortnite consultar principalmente la información más relevante, como las noticias, la tienda de artículos, etc.",
    repoLink: "http://github.com/jcruzbravo/fortnite-informer",
    productionLink: "https://fortnite-info.vercel.app/",
    tags: ["#React", "#JavaScript", "#HTML", "#CSS"],
  },
  {
    imgSrc: "https://res.cloudinary.com/dyfmjmdb4/image/upload/v1684699633/react-shop_j8effx.png",
    imgAlt: "TODO APP",
    title: "TODO APP",
    description: "Esta aplicación construida con React permite que cualquier persona registre sus tareas por realizar y finalizarlas, además cada una de estas tareas se guarda en el navegador.",
    repoLink: "https://github.com/jcruzbravo/introduction-react-js",
    productionLink: "https://jcruzbravo.github.io/introduction-react-js/",
    tags: ["#React", "#JavaScript", "#HTML", "#CSS"],
  },
  {
    imgSrc: "https://res.cloudinary.com/dyfmjmdb4/image/upload/v1686421978/jshop_wlaofv.png",
    imgAlt: "JShop",
    title: "JShop",
    description: "Esta aplicación construida con React, Vite y Tailwindcss simula una tienda de comercio electrónico virtual en la que puedes interactuar agregando productos al carrito de compras, previsualizando y buscando.",
    repoLink: "https://github.com/jcruzbravo/ecommerce-react-vite-tailwind",
    productionLink: "https://jsh0p.netlify.app/",
    tags: ["#React", "#JavaScript", "#HTML", "#CSS", "#TailwindCSS", "#Vite"],
  },
  {
    imgSrc: "https://res.cloudinary.com/dyfmjmdb4/image/upload/v1686422013/react-shop_yasfam.png",
    imgAlt: "React Shop",
    title: "React Shop",
    description: "Esta aplicación construida con React, HTML y CSS simula una tienda de comercio electrónico virtual en la que puedes interactuar agregando productos al carrito de compras, previsualizando y buscando.",
    repoLink: "https://github.com/jcruzbravo/react-shop",
    productionLink: "https://jcruzbravo.github.io/react-shop/",
    tags: ["#React", "#JavaScript", "#HTML", "#CSS"],
  }
];