
"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Testimonials() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Placeholder */}
      <Box
        sx={{
          width: "300px", // Matches Sidebar width
          backgroundColor: "#f5f5f5", // Optional placeholder color
        }}
      >
        {/* Sidebar goes here */}
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          padding: 4,
          backgroundColor: "#fff",
          overflowY: "auto", // Allows scrolling if content overflows
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Testimonials and Ratings
          </Typography>
          <Button variant="contained" color="primary" size="small" sx={{ textTransform: "none" }}>
            Share Page
          </Button>
        </Box>

        {/* Filters */}
        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          <Button variant="contained" color="primary" size="small" sx={{ textTransform: "none" }}>
            All (0)
          </Button>
          <Button variant="outlined" color="primary" size="small" sx={{ textTransform: "none" }}>
            High Rating (0)
          </Button>
          <Button variant="outlined" color="primary" size="small" sx={{ textTransform: "none" }}>
            Low Rating (0)
          </Button>
        </Box>

        {/* Empty State */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <img
            src="/images/empty-state.png"
            alt="Empty State"
            style={{ width: "150px", marginBottom: "16px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Nothing to see here
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Testimonials and ratings from your audience show up here.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
