"use client";

import { Box, Container, Toolbar } from "@mui/material";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "@/components/layout/header";

import Sidebar from "../components/layout/sidebar";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <QueryClientProvider client={queryClient}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ display: "flex" }}>
              <Header />
              <Sidebar />
              <Container sx={{ paddingTop: 2 }}>
                <Toolbar />
                <ScopedCssBaseline>{children}</ScopedCssBaseline>
              </Container>
            </Box>
          </LocalizationProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
