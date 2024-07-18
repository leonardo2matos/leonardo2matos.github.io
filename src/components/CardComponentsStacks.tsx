import React from "react";
import {
  Box,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Planet } from "react-planet";
import { RiJavascriptFill } from "react-icons/ri";
import {
  FaCss3Alt,
  FaHtml5,
  FaNode,
  FaNpm,
  FaReact,
  FaYarn,
} from "react-icons/fa";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { SiMui, SiNextdotjs, SiNextui } from "react-icons/si";

const icons = [
  {
    Component: FaHtml5,
    className: "html",
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    Component: FaCss3Alt,
    className: "css",
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    Component: RiJavascriptFill,
    className: "js",
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    Component: BiLogoTypescript,
    className: "typescript",
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    Component: FaReact,
    className: "react",
    title: "React",
    link: "https://reactjs.org/",
  },
  {
    Component: SiNextdotjs,
    className: "nextjs",
    title: "Next.js",
    link: "https://nextjs.org/",
  },
  {
    Component: SiNextui,
    className: "nextui",
    title: "NextUI",
    link: "https://nextui.org/",
  },
  {
    Component: SiMui,
    className: "mui",
    title: "MUI",
    link: "https://mui.com/",
  },
  {
    Component: FaNode,
    className: "node",
    title: "Node.js",
    link: "https://nodejs.org/",
  },
  {
    Component: BiLogoMongodb,
    className: "mongo",
    title: "MongoDB",
    link: "https://www.mongodb.com/",
  },
  {
    Component: FaNpm,
    className: "npm",
    title: "NPM",
    link: "https://www.npmjs.com/",
  },
  {
    Component: FaYarn,
    className: "yarn",
    title: "Yarn",
    link: "https://yarnpkg.com/",
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
    return 200; // Default case
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
        "& .js": { color: "gold" },
        "& .react": { color: "cyan" },
        "& .typescript": { color: "blue" },
        "& .css": { color: "lightblue" },
        "& .html": { color: "orange" },
        "& .nextjs": { color: "black" },
        "& .nextui": { color: "black" },
        "& .mui": { color: "blue" },
        "& .node": { color: "green" },
        "& .mongo": { color: "green" },
        "& .npm": { color: "red" },
        "& .yarn": { color: "cyan" },
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
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                boxShadow:
                  "0 0 7px 0 #9013fe, 0 0 5px 2px #d64eff, inset 0 0 5px 1px #d64eff",
                "&:hover": {
                  transform: "scale(1.1)",
                  border: "1px solid #f3eaff,",
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
                  fontSize: { xs: "1.5em", sm: "2em", md: "3em", lg: "4em" },
                  mb: { xs: 2, md: 0 },
                }}
              >
                Stacks
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
        {icons.map((icon, index) => {
          const IconComponent = icon.Component;
          return (
            <Tooltip title={icon.title} key={index}>
              <Box
                component="a"
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "2em", sm: "3em", md: "4em", lg: "5em" },
                  height: { xs: "2em", sm: "5em", md: "5em", lg: "5em" },
                  borderRadius: "50%",
                  margin: { xs: "0.3em", sm: "0.5em", md: "0.7em", lg: "1em" },
                  padding: "0.5em",
                  transition: "transform 0.3s, color 0.3s",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                  "& svg": {
                    fontSize: { xs: "20em", sm: "8em", md: "10em", lg: "8em" },
                    color: "inherit",
                  },
                }}
                className={icon.className}
              >
                <IconComponent />
              </Box>
            </Tooltip>
          );
        })}
      </Planet>
    </Box>
  );
};

export default CardComponentsStacks;
