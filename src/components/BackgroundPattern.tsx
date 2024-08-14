import Image from "next/image";
import { Box } from "@mui/material";
import { useThemeContext } from "@/ThemeContext";

export default function BackgroundCover() {
  const { mode } = useThemeContext();

  return (
    <Box
      sx={{
        width: "100vw",
        height: { xs: "300px", sm: "500px", md: "850px", lg: "100vh" },
        position: "absolute",
        overflow: "hidden",
        bottom: 0,
        zIndex: -1,
      }}
    >
      <Box
        sx={{
          position: "relative", // Importante para o comportamento do layout fill
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={mode === "dark" ? "/images/darkdiamonts2.png" : "/images/whitediamonts2.png"}
          alt={mode === "dark" ? "darkdiamonts" : "whitediamonts"}
          layout="fill"
          objectFit="cover"
          priority
          quality={100} // Define a qualidade para 100 para melhor definição
        />
      </Box>
    </Box>
  );
}

