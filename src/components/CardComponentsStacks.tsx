import React from 'react';
import { Box, Link } from '@mui/material';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaCss3Alt, FaHtml5, FaNode, FaNpm, FaReact, FaYarn } from 'react-icons/fa';
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { SiMui, SiNextdotjs, SiNextui } from "react-icons/si";

const icons = [
  { Component: FaHtml5, className: 'html', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { Component: FaCss3Alt, className: 'css', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { Component: RiJavascriptFill, className: 'js', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { Component: BiLogoTypescript, className: 'typescript', link: 'https://www.typescriptlang.org/' },
  { Component: FaReact, className: 'react', link: 'https://reactjs.org/' },
  { Component: SiNextdotjs, className: 'nextjs', link: 'https://nextjs.org/' },
  { Component: SiNextui, className: 'nextui', link: 'https://nextui.org/' },
  { Component: SiMui, className: 'mui', link: 'https://mui.com/' },
  { Component: FaNode, className: 'node', link: 'https://nodejs.org/' },
  { Component: BiLogoMongodb, className: 'mongo', link: 'https://www.mongodb.com/' },
  { Component: FaNpm, className: 'npm', link: 'https://www.npmjs.com/' },
  { Component: FaYarn, className: 'yarn', link: 'https://yarnpkg.com/' },
];

const CardComponentsStacks: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center', // Centraliza os ícones
      alignItems: 'center',
      gap: { xs: '1em', sm: '1.5em', md: '2em', lg: '2.5em' }, // Espaçamento entre os ícones
      "& svg": {
        fontSize: { xs: '3em', sm: '4em', md: '5em', lg: '6em' },
        transition: 'transform 0.3s, font-size 0.3s',
      },
      "& .js": {
        color: 'gold'
      },
      "& .react": {
        color: 'cyan'
      },
      "& .typescript": {
        color: 'blue'
      },
      "& .css": {
        color: 'lightblue'
      },
      "& .html": {
        color: 'orange'
      },
      "& .nextjs": {
        color: 'black'
      },
      "& .nextui": {
        color: 'black'
      },
      "& .mui": {
        color: 'blue'
      },
      "& .node": {
        color: 'green'
      },
      "& .mongo": {
        color: 'green'
      },
      "& .npm": {
        color: 'red'
      },
      "& .yarn": {
        color: 'cyan'
      },
      "& svg:hover": {
        transform: 'scale(1.2)', // Aumenta o tamanho do ícone em 20% ao passar o mouse
      },
    }}>
      {icons.map((icon, index) => {
        const IconComponent = icon.Component;
        return (
          <Link
            key={index}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit', // Para herdar a cor definida pelas classes
              [`& .${icon.className}`]: {
                color: 'inherit',
              },
            }}
            className={icon.className}
          >
            <IconComponent className={icon.className} />
          </Link>
        );
      })}
    </Box>
  );
};

export default CardComponentsStacks;
