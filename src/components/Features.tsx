"use client";

import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

export default function Features() {
  const data = [
    { title: "Fast Delivery 🚀", desc: "Get your food in 30 minutes" },
    { title: "Live Tracking 📍", desc: "Track your order in real-time" },
    { title: "Fresh Food 🍃", desc: "Prepared with quality ingredients" },
  ];

  return (
    <Box id="features" sx={{ py: 10, bgcolor: "#ebb37aff" }}>
      <Typography variant="h4" textAlign="center" mb={6}>
        Why Choose Kollapasi
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {data.map((item, i) => (
          <Grid size={{ xs: 12, md: 3 }} key={i}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: "20px",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography mt={2}>{item.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}