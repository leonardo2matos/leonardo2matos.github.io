import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Box,
  styled,
  ButtonProps,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

interface CustomButtonProps extends ButtonProps {
  isloading?: boolean;
}

const NeonButton = styled(Button)<CustomButtonProps>(({ isloading }) => ({
  fontSize: "0.8rem",
  fontWeight: 700,
  letterSpacing: "0.05em",
  padding: isloading ? "0" : "0.5em 1em",
  color: "#fff",
  transition: "all 0.3s ease",
  background: "black",
  borderRadius: isloading ? "50%" : "22px", // Ajuste do borderRadius para evitar elipse
  width: isloading ? "64px" : "auto",
  height: isloading ? "64px" : "auto",
  minWidth: "64px", // Mantém uma largura mínima
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow:
    "0 0 5px #9013fe, 0 0 10px #d64eff, 0 0 20px #9013fe, 0 0 40px #d64eff",
  animation: "neon 1.5s ease-in-out infinite alternate",
  "&:hover": {
    background: "black",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
    transform: "scale(1.00)",
    border: "1px solid #f3eaff",
  },
  "@keyframes neon": {
    from: {
      boxShadow:
        "0 0 5px #9013fe, 0 0 3px #9013fe, 0 0 3px #d64eff, 0 0 3px #d64eff",
    },
    to: {
      boxShadow:
        "0 0 10px #d64eff, 0 0 10px #d64eff, 0 0 10px #d64eff, 0 0 20px #d64eff, 0 0 15px #d64eff",
    },
  },
}));

const ButtonDownload: React.FC = () => {
  const [isDownloading, setDownloading] = useState(false);

  const handleDownloadClick = () => {
    setDownloading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/docs/leonardoMatos_CV.pdf";
      link.download = "leonardoMatos_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloading(false);
    }, 2000);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
      <NeonButton
        variant="contained"
        onClick={handleDownloadClick}
        disabled={isDownloading}
        isloading={isDownloading}
      >
        {!isDownloading && (
        <Box 
            sx={{ 
              display: "flex", 
              alignItems: "center",
              
            }}>
            <DownloadIcon
              sx={{
                marginRight: "0.5em" 
              }} />
                  Download CV
        </Box>
        )}
        {isDownloading && (
          <CircularProgress
            size={45}
            sx={{
              color: "white",
              position: "absolute",
            }}
          />
        )}
      </NeonButton>
    </Box>
  );
};

export default ButtonDownload;
