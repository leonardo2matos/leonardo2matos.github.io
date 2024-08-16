import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaNpm,
  FaYarn,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiNextdotjs, SiNextui, SiMui } from "react-icons/si";
import { PlanetItem } from "./CustomPlanet";


const stacks: PlanetItem[] = [
  {
    icon: FaHtml5,
    className: "html",
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    color: "orange",
  },
  {
    icon: FaCss3Alt,
    className: "css",
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    color: "lightblue",
  },
  {
    icon: RiJavascriptFill,
    className: "js",
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    color: "gold",
  },
  {
    icon: BiLogoTypescript,
    className: "typescript",
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
    color: "blue",
  },
  {
    icon: FaReact,
    className: "react",
    title: "React",
    link: "https://reactjs.org/",
    color: "cyan",
  },
  {
    icon: SiNextdotjs,
    className: "nextjs",
    title: "Next.js",
    link: "https://nextjs.org/",
    color: "gray",
  },
  {
    icon: SiNextui,
    className: "nextui",
    title: "NextUI",
    link: "https://nextui.org/",
    color: "darkgray",
  },
  {
    icon: SiMui,
    className: "mui",
    title: "MUI",
    link: "https://mui.com/",
    color: "blue",
  },
  {
    icon: FaNode,
    className: "node",
    title: "Node.js",
    link: "https://nodejs.org/",
    color: "green",
  },
  {
    icon: BiLogoMongodb,
    className: "mongo",
    title: "MongoDB",
    link: "https://www.mongodb.com/",
    color: "green",
  },
  {
    icon: FaNpm,
    className: "npm",
    title: "NPM",
    link: "https://www.npmjs.com/",
    color: "red",
  },
  {
    icon: FaYarn,
    className: "yarn",
    title: "Yarn",
    link: "https://yarnpkg.com/",
    color: "cyan",
  },
];

const educations: PlanetItem[] = [
  {
    icon: "/images/ufrrj-logo-1.png",
    alt: "FAU-UFRRJ",
    title: "Arquitetura e Urbanismo - FAU - UFRRJ",
    link: "https://www.ufrrj.br/",
  },
  {
    icon: "/images/formacao.png",
    alt: "Full Stack JS - Hotmart",
    title: "Full Stack JS - Hotmart",
    link: "https://www.hotmart.com/",
  },
  {
    icon: "/images/cesae_mongodb.png",
    alt: "Full Stack Developer JS - Back-end",
    title: "Cesae Digital - Full Stack Developer JS - Back-end",
    link: "https://www.cesaedigital.pt",
  },
  {
    icon: "/images/cesae_laravel.png",
    alt: "Cesae Digital - PHP/Laravel",
    title: "Cesae Digital - PHP/Laravel",
    link: "https://www.cesaedigital.pt",
  },
];

const experiences: PlanetItem[] = [
  {
    icon: "/images/equantic.png",
    alt: "equantic",
    title: "equantic",
    link: "https://equantic.tech/",
    
   
  },
];

export { stacks, educations, experiences, };
