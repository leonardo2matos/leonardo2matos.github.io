import React from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
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
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: { xs: 'auto', md: '400px', lg: '500px' },
      mt: { xs: 4, md: 0 },
      flexWrap: 'wrap',
    }}>
      <Box sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: { xs: 'flex-start', md: 'center' },
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <Typography
          variant="h2"
          sx={{
            position: { xs: 'static', md: 'absolute' },
            top: { md: '50%' },
            left: { md: '50%' },
            transform: { md: 'translate(-50%, -50%)' },
            fontSize: { xs: '1.5em', sm: '2em', md: '3em', lg: '4em' },
            zIndex: 1,
            textAlign: 'center',
            mb: { xs: 2, md: 0 },
          }}
        >
          Stacks
        </Typography>
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
                  position: { xs: 'static', md: 'absolute' },
                  transform: { xs: 'none', sm: 'none', md: `translate(${x}px, ${y}px)` },
                  transition: 'transform 0.3s, color 0.3s',
                  margin: '0.5em',
                  padding: '0.2em',
                  '&:hover': {
                    transform: { xs: 'none', sm: 'none', md: `translate(${x}px, ${y}px) scale(1.2)` }
                  },
                  '& svg': {
                    fontSize: { xs: '2em', sm: '3em', md: '4em', lg: '5em' },
                  },
                  [`& .${icon.className}`]: { color: 'inherit' },
                }}
                className={icon.className}
              >
                <IconComponent />
              </Box>
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );
};

export default CardComponentsStacks;
