"use client";
import { ReactNode } from "react";
import MainAppBar from "@/components/MainAppBar";
import MainFooter from "@/components/MainFooter";
import BackgroundCover from "@/components/BackgroundCover";
import { Box } from "@mui/material";
import { CustomThemeProvider } from "@/ThemeContext";

export interface MainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <CustomThemeProvider>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        alignItems="stretch"
      >
        <MainAppBar />

        <Box flexGrow={1} position="relative">
          <BackgroundCover />
          <main style={{ flex: 1, overflow: "auto" }}>{props.children}</main>
        </Box>

        <MainFooter />
      </Box>
    </CustomThemeProvider>
  );
}
