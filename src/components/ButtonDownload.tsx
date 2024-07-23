import React, { useState } from "react";
import { Button, CircularProgress, Box, styled } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const NeonButton = styled(Button)(({ theme, isloading }) => ({
  fontSize: "0.8rem", // Ajuste o tamanho da fonte conforme necessário
  fontWeight: 700,
  letterSpacing: "0.05em",
  padding: isloading === "true" ? "0" : "0.5em 1em",
  color: "#fff",
  transition: "all 0.3s ease",
  background: "linear-gradient(135deg, rgba(0,0,255,1), rgba(255,0,0,1))",
  borderRadius: isloading === "true" ? "50%" : "10px", // Define o botão como circular quando em estado de carregamento
  width: isloading === "true" ? "64px" : "auto", // Ajuste o tamanho conforme necessário
  height: isloading === "true" ? "64px" : "auto", // Ajuste o tamanho conforme necessário
  minWidth: "0", // Remove a largura mínima padrão do botão
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  filter: "blur(0.5px)",
  boxShadow: "0 0 5px #00f, 0 0 10px #00f, 0 0 20px #00f, 0 0 40px #0ff",
  animation: "neon 1.5s ease-in-out infinite alternate",
  "&:hover": {
    background: "linear-gradient(135deg, rgba(0,0,255,0.8), rgba(255,0,0,0.8))",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
    transform: "scale(1.00)",
  },
  "@keyframes neon": {
    from: {
      boxShadow: "0 0 5px #00f, 0 0 3px #00f, 0 0 3px #00f, 0 0 3px #00f",
    },
    to: {
      boxShadow:
        "0 0 10px #0ff, 0 0 10px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 15px #0ff",
    },
  },
}));

const ButtonDownload: React.FC = () => {
  const [isDownloading, setDownloading] = useState(false);

  const handleDownloadClick = () => {
    setDownloading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/path/to/your/file.txt";
      link.download = "file.txt";
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
      >
        {!isDownloading && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DownloadIcon sx={{ marginRight: "0.5em" }} />
            Download CV
          </Box>
        )}
        {isDownloading && (
          <CircularProgress
            size={24}
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
