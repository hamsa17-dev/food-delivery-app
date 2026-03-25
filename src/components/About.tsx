"use client";

import { Box, Typography, Grid, Paper } from "@mui/material";

export default function About() {
  const highlights = [
    { title: "1000+ Restaurants", desc: "Wide variety of food options" },
    { title: "30 Min Delivery", desc: "Fast and reliable service" },
    { title: "24/7 Service", desc: "Order anytime, anywhere" },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 12,
        px: 2,
        background: "linear-gradient(to right, #fff3e0, #ffe0b2)",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        mb={3}
      >
        About Kollapasi 🍔
      </Typography>

      {/* Description */}
      <Typography
        textAlign="center"
        maxWidth="700px"
        mx="auto"
        mb={6}
        fontSize="18px"
      >
        Kollapasi is a modern food delivery platform connecting you with the best
        restaurants around you. We combine speed, quality, and convenience to
        deliver happiness to your doorstep.
      </Typography>

      {/* Highlights */}
      <Grid container spacing={4} justifyContent="center">
        {highlights.map((item, i) => (
          <Grid size={{ xs: 12, md: 3 }} key={i}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: "20px",
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography mt={1}>{item.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}