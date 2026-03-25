"use client";

import { Box, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(to right, #eca25dff, #d46f11ff)",
        color: "white",
        px: { xs: 2, md: 8 },
      }}
    >
      <Grid container alignItems="center">

        {/* LEFT TEXT */}
        <Grid size={{ xs: 12, md: 6 }}>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" fontWeight="bold">
              Kollapasi 🍔
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Typography mt={2} fontSize="18px">
              Delicious food delivered fast to your doorstep
            </Typography>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button
              variant="contained"
              sx={{
                mt: 4,
                bgcolor: "white",
                color: "#d46f11",
                "&:hover": { bgcolor: "#f1f1f1" },
              }}
            >
              Order Now
            </Button>
          </motion.div>

        </Grid>

        {/* RIGHT IMAGE */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/food-app.png"
              alt="food illustration"
              width={650}
              height={650}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </motion.div>
        </Grid>

      </Grid>
    </Box>
  );
}