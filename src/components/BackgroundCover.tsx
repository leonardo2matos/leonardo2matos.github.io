import Image from "next/image";
import { Box } from "@mui/material";
import { useThemeContext } from "@/ThemeContext";

export default function BackgroundCover() {
  const { mode } = useThemeContext();

  return (
    <Box
      sx={{
        width: "100vw",
        height: { xs: "250px", sm: "500px", md: "850px", lg: "100vh" }, //md: '800px'
        position: "absolute",
        overflow: "hidden",
        bottom: 0,
        zIndex: -1,
      }}
    >
      <Image
        src="/images/whitediamonts.jpg"
        alt="whitediamonts"
        layout="fill"
        objectFit="cover"
        priority
      />
    </Box>
  );
}
