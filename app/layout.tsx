"use client";

import "./globals.css";

import { AppBar, Toolbar, Typography, Link } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mui Material</title>
      </head>
      <body>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/" color="secondary" underline="hover">
                Home
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        {children}
      </body>
    </html>
  );
}
