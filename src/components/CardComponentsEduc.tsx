import React from "react";
import { Box, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Planet } from "react-planet";
import Image from 'next/image';

const images = [
  {
    src: "/images/ufrrj-logo-1.png",
    alt: "FAU-UFRRJ",
    title: "FAU-UFRRJ",
    link: "https://www.ufrrj.br/",
  },
  {
    src: "/images/fullstack-js-hotmart.png",
    alt: "Full Stack JS - Hotmart",
    title: "Full Stack JS - Hotmart",
    link: "https://www.hotmart.com/",
  },
  {
    src: "/images/cesae_mongodb.png",
    alt: "Full Stack Developer JS - Back-end",
    title: "Cesae Digital - Full Stack Developer JS - Back-end",
    link: "https://www.cesaedigital.pt",
  },
  {
    src: "/images/cesae_laravel1.png",
    alt: "Cesae Digital - PHP/Laravel",
    title: "Cesae Digital - PHP/Laravel",
    link: "https://www.cesaedigital.pt",
  },
];

const CardComponentsStacks: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery(theme.breakpoints.up("md"));

  const getOrbitRadius = () => {
    if (isXs) return 100;
    if (isSm) return 150;
    if (isMd) return 200;
    if (isLg) return 250;
    return 200;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: { xs: "auto", md: "500px" },
        mt: { xs: 4, md: 0 },
        textAlign: "center",
      }}
    >
      <Planet
        centerContent={
          <Tooltip title="Clique para ver mais">
            <Box
              sx={{
                width: { xs: "5em", sm: "6em", md: "8em", lg: "12em" },
                height: { xs: "5em", sm: "6em", md: "8em", lg: "12em" },
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                boxShadow:
                  "0 0 7px 0 #9013fe, 0 0 5px 2px #d64eff, inset 0 0 5px 1px #d64eff",
                "&:hover": {
                  transform: "scale(1.1)",
                  border: "1px solid #f3eaff",
                  boxShadow:
                    "0 0 7px 0 #9013fe, 0 0 5px 2px #d64eff, inset 0 0 7px 0 #9013fe, inset 0 0 5px 1px #d64eff",
                  cursor: "pointer",
                },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.0em", sm: "1.3em", md: "1.8em", lg: "2.5em" },
                }}
              >
                EDUCATION
              </Typography>
            </Box>
          </Tooltip>
        }
        open
        tension={500}
        friction={19}
        autoClose
        orbitRadius={getOrbitRadius()}
        hideOrbit
        rotation={80}
        dragablePlanet
        dragRadiusPlanet={20}
        bounce
      >
        {images.map((image, index) => (
          <Tooltip title={image.title} key={index}>
            <Box
              component="a"
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                position: 'relative',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "4em", sm: "6em", md: "8em", lg: "10em" },
                height: { xs: "4em", sm: "6em", md: "8em", lg: "10em" },
                borderRadius: "50%",
                overflow: "hidden",
                margin: { xs: "0.3em", sm: "0.5em", md: "0.7em", lg: "1em" },
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="contain" // Mantém a proporção da imagem
                sx={{
                  maxWidth: "100%",  // Limita o tamanho máximo da imagem
                  maxHeight: "100%", // Garante que a imagem não ultrapasse as dimensões do contêiner
                }}
              />
            </Box>
          </Tooltip>
        ))}
      </Planet>
    </Box>
  );
};

export default CardComponentsStacks;
