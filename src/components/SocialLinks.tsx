// src/components/SocialLinks.tsx
import * as React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

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

const SocialLinks: React.FC = () => {
  return (
    <Stack direction="row" spacing={{ xs: 1, sm: 1, md: 2 }}>
      {socialLinks.map((link, index) => (
        <Tooltip key={index} title={link.title} arrow>
          <Link
            href={link.href}
            target="_blank"
            sx={{
              color: "primary.contrastText",
              fontSize: { xs: "2em", sm: "2.5em", md: "3em" },
              "&:hover": { color: "gray" },
            }}
          >
            {link.icon}
          </Link>
        </Tooltip>
      ))}
    </Stack>
  );
};

export default SocialLinks;
