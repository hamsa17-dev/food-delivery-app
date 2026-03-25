"use client";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Kollapasi 🍔
        </Typography>

        <Button color="inherit" href="#home">Home</Button>
        <Button color="inherit" href="#about">About</Button>
        <Button color="inherit" href="#features">Features</Button>
        <Button color="inherit" href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}