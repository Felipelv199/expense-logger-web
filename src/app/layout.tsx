"use client";
import { useState } from "react";

import { Box, Container, Toolbar } from "@mui/material";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Header from "./components/header";
import Sidebar from "./components/sidebar";

const SIDEBAR_FULL_WIDTH = "200px";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarWidth = sidebarOpen
    ? SIDEBAR_FULL_WIDTH
    : `50px`;

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ display: "flex" }}>
            <Header />
            <Sidebar
              width={sidebarWidth as string}
              open={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
              onOpen={() => setSidebarOpen(true)}
            />
            <Container sx={{ paddingTop: 2 }}>
              <Toolbar />
              <ScopedCssBaseline>{children}</ScopedCssBaseline>
            </Container>
          </Box>
        </LocalizationProvider>
      </body>
    </html>
  );
}
