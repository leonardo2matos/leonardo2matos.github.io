import React from 'react';
import { Box, Tooltip } from '@mui/material';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaCss3Alt, FaHtml5, FaNode, FaNpm, FaReact, FaYarn } from 'react-icons/fa';
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { SiMui, SiNextdotjs, SiNextui } from "react-icons/si";

const icons = [
  { Component: FaHtml5, className: 'html', title: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { Component: FaCss3Alt, className: 'css', title: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { Component: RiJavascriptFill, className: 'js', title: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { Component: BiLogoTypescript, className: 'typescript', title: 'TypeScript', link: 'https://www.typescriptlang.org/' },
  { Component: FaReact, className: 'react', title: 'React', link: 'https://reactjs.org/' },
  { Component: SiNextdotjs, className: 'nextjs', title: 'Next.js', link: 'https://nextjs.org/' },
  { Component: SiNextui, className: 'nextui', title: 'NextUI', link: 'https://nextui.org/' },
  { Component: SiMui, className: 'mui', title: 'MUI', link: 'https://mui.com/' },
  { Component: FaNode, className: 'node', title: 'Node.js', link: 'https://nodejs.org/' },
  { Component: BiLogoMongodb, className: 'mongo', title: 'MongoDB', link: 'https://www.mongodb.com/' },
  { Component: FaNpm, className: 'npm', title: 'NPM', link: 'https://www.npmjs.com/' },
  { Component: FaYarn, className: 'yarn', title: 'Yarn', link: 'https://yarnpkg.com/' },
];


const CardComponentsStacks: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: { xs: '0.2em', sm: '0.5em', md: '0.5em', lg: '0.5em' }, // Espaçamento entre os ícones no layout de coluna
      '& svg': {
        fontSize: { xs: 'em', sm: '4em', md: '5em', lg: '6em' },
        transition: 'transform 0.3s, font-size 0.3s',
      },
      '& svg:hover': {
        transform: 'scale(1.2)', // Aumenta o tamanho do ícone em 20% ao passar o mouse
      },
      '& .js': {
        color: 'gold'
      },
      '& .react': {
        color: 'cyan'
      },
      '& .typescript': {
        color: 'blue'
      },
      '& .css': {
        color: 'lightblue'
      },
      '& .html': {
        color: 'orange'
      },
      '& .nextjs': {
        color: 'black'
      },
      '& .nextui': {
        color: 'black'
      },
      '& .mui': {
        color: 'blue'
      },
      '& .node': {
        color: 'green'
      },
      '& .mongo': {
        color: 'green'
      },
      '& .npm': {
        color: 'red'
      },
      '& .yarn': {
        color: 'cyan'
      },
    }}>
      {icons.map((icon, index) => {
        const IconComponent = icon.Component;
        const angle = (index / icons.length) * 360;
        const radius = 200; // Ajuste conforme necessário para controlar a distância entre os ícones no layout circular
        const x = Math.cos(angle * (Math.PI / 180)) * radius;
        const y = Math.sin(angle * (Math.PI / 180)) * radius;

        return (
          <Tooltip title={icon.title} key={index}>
            <Box
              component="a"
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                position: { xs: 'static', sm: 'static', md: 'absolute' },
                transform: { xs: 'none', sm: 'none', md: `translate(${x}px, ${y}px)` },
                transition: 'transform 0.3s, color 0.3s',
                margin: '0.1em', // Controle adicional sobre o espaçamento vertical e horizontal
                padding: '0.1em', // Controle adicional sobre o espaçamento interno dos ícones
                '&:hover': {
                  transform: { xs: 'none', sm: 'none', md: `translate(${x}px, ${y}px) scale(1.2)` }
                },
                '& svg': {
                  fontSize: { xs: '3em', sm: '4em', md: '5em', lg: '6em' },
                },
                [`& .${icon.className}`]: {
                  color: 'inherit',
                },
              }}
              className={icon.className}
            >
              <IconComponent />
            </Box>
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default CardComponentsStacks;
