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
 


 //// 18/07


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
      '& svg': {
        fontSize: { xs: '3em', sm: '4em', md: '5em', lg: '6em' },
        transition: 'transform 0.3s, font-size 0.3s',
      },
      '& svg:hover': {
        transform: 'scale(1.2)', // Aumenta o tamanho do ícone em 20% ao passar o mouse
      },
      '& .js': { color: 'gold' },
      '& .react': { color: 'cyan' },
      '& .typescript': { color: 'blue' },
      '& .css': { color: 'lightblue' },
      '& .html': { color: 'orange' },
      '& .nextjs': { color: 'black' },
      '& .nextui': { color: 'black' },
      '& .mui': { color: 'blue' },
      '& .node': { color: 'green' },
      '& .mongo': { color: 'green' },
      '& .npm': { color: 'red' },
      '& .yarn': { color: 'cyan' },
    }}>
        <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '1.5em', sm: '2em', md: '3em', lg: '4em' },
          textAlign: 'center',
          width: '100%',
          mb: { xs: 2, md: 0 }, // Ajusta o espaçamento abaixo do título em telas menores
        }}
      >
        Stacks
      </Typography>
      <Box sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
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
                  position: { xs: 'static', md: 'absolute' },
                  transform: { xs: 'none', sm: 'none', md: `translate(${x}px, ${y}px)` },
                  transition: 'transform 0.3s, color 0.3s',
                  margin: '0.5em',
                  padding: '0.2em',
                  '&:hover': {
                    transform: { xs: 'none', sm: 'none', md: `translate(${x}px, ${y}px) scale(1.2)` }
                  },
                  '& svg': {
                    fontSize: { xs: '3em', sm: '4em', md: '5em', lg: '6em' },
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


// 19.07

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import CardComponents from "@/components/CardComponents";
import { Bolt } from "@mui/icons-material";
//import CardComponentsStacks from '@/components/CardComponentsStacks';

export default function BasicGrid() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 20, sm: 15, md: 25, lg: 15, xl: 5 }, // Adiciona margem superior para evitar sobreposição com a navbar
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CardComponents />
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={5} >
            <Typography 
            sx={{
               textAlign:'justify-center',
               fontWeight: 700,
               fontSize: 
              { 
               xs: "3.5em",
               sm: "4em",
               md:"5em",
               lg:"6em" 
               }, 
               
            }}
               variant="body1" component="div" >

               Hi,everyone!

            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            {/* Adicione mais conteúdo aqui se necessário */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

// sugestão chatGPt deagrade 

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import CardComponents from "@/components/CardComponents";
import { Bolt } from "@mui/icons-material";
//import CardComponentsStacks from '@/components/CardComponentsStacks';

const BasicGrid: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 20, sm: 15, md: 25, lg: 15, xl: 5 }, // Adiciona margem superior para evitar sobreposição com a navbar
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: 'linear-gradient(135deg, rgba(0,0,255,0.5), rgba(255,0,0,0.5))', // Degradê entre azul e vermelho
        filter: 'blur(8px)', // Adiciona efeito de desfoque
        '&:hover': {
          filter: 'blur(0)', // Remove o desfoque ao passar o mouse
          transition: 'filter 0.5s',
        },
        color: 'white', // Cor do texto
      }}
    >
      <Box
        sx={{
          width: "100%",
          background: 'inherit', // Herdar o fundo do Container
          filter: 'none', // Remover o desfoque do Box
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <CardComponents />
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={5}>
            <Typography
              sx={{
                textAlign: 'center', // Ajustado para centralizar corretamente
                fontWeight: 700,
                fontSize: {
                  xs: "3.5em",
                  sm: "4em",
                  md: "5em",
                  lg: "6em"
                },
                letterSpacing: '-0.1em', // Espaçamento entre as letras
                background: 'linear-gradient(135deg, rgba(0,0,255,1), rgba(255,0,0,1))',
                WebkitBackgroundClip: 'text', // Adiciona o degradê ao texto
                WebkitTextFillColor: 'transparent', // Faz o texto ser preenchido pelo degradê
                filter: 'blur(0.8px)', // Efeito de desfoque leve no texto
                '&:hover': {
                  filter: 'blur(0)', // Remove o desfoque ao passar o mouse
                  transition: 'filter 0.5s',
                }
              }}
              variant="body1"
              component="div"
            >
              Hi, everyone!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            {/* Adicione mais conteúdo aqui se necessário */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BasicGrid;

