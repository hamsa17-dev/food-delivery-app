"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        px: 2,
        background: "linear-gradient(to right, #ffecd2, #fcb69f)",
      }}
    >
      <Grid container spacing={6} alignItems="center" justifyContent="center">

        {/* LEFT SIDE TEXT */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h3" fontWeight="bold" mb={2}>
            Get in Touch 📞
          </Typography>

          <Typography fontSize="18px">
            Have questions or cravings? Reach out to us anytime. We’re here to
            make your food experience better and faster.
          </Typography>
        </Grid>

        {/* RIGHT SIDE FORM */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper
            elevation={6}
            sx={{
              p: 5,
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography variant="h5" mb={3} textAlign="center">
              Contact Us
            </Typography>

            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              sx={{ mb: 3 }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                py: 1.5,
                fontSize: "16px",
                borderRadius: "10px",
              }}
            >
              Send Message 🚀
            </Button>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}