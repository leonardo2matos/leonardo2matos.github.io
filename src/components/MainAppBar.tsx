import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import { MdEmail } from "react-icons/md";
import Divider from "@mui/material/Divider";
import { FaWhatsapp, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Container } from "@mui/material";

const socialLinks = [
  { icon: <MdEmail />, title: "Email", href: "mailto:youremail@example.com" },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    href: "https://wa.me/351910546862",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    href: "https://github.com/leonardo2matos",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    href: "https://linkedin.com/in/leonardoanjosmatosarqurb",
  },
  {
    icon: <FaTelegram />,
    title: "Telegram",
    href: "https://t.me/@Leonardo2Matos",
  },
];

export default function EnableColorOnDarkAppBar() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: { xs: 1, sm: 2 },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Divider 
              orientation="vertical" 
              flexItem 
              sx={{ 
                height: { xs: "90px", sm: "150px", md: "150px", lg: "150px" }, 
                marginTop:2,
                marginRight: 1, 
                backgroundColor: "white" 
              }} 
            />
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h1"
                noWrap
                component="h1"
                sx={{ fontSize: { xs: "1.5em", sm: "3em" } }}
              >
                Leonardo
                <br />
                Matos
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                
    
                sx={{ fontSize: { xs: "1em", sm: "1.25em" } }}
              >
                Front-end Developer
              </Typography>
            </Box>
          </Box>
          <Box>
            <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 3 }}>
              {socialLinks.map((link, index) => (
                <Tooltip key={index} title={link.title} arrow>
                  <Link
                    href={link.href}
                    target="_blank"
                    sx={{
                      color: "inherit",
                      fontSize: { xs: "1.5em", sm: "2em", md: "2em" },
                      "&:hover": { color: "primary.light" },
                    }}
                  >
                    {link.icon}
                  </Link>
                </Tooltip>
              ))}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
