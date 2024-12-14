"use client";

import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import Header from "./components/header";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Header />
          <ScopedCssBaseline>{children}</ScopedCssBaseline>
        </LocalizationProvider>
      </body>
    </html>
  );
}
