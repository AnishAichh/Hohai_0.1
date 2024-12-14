"use client";

import React from "react";
import { Box, Typography, Button, Paper, Chip, Divider, Stack } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const MarketingPage: React.FC = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Placeholder */}
      <Box
        sx={{
          width: "300px",
          backgroundColor: "#f5f5f5", // Sidebar background
        }}
      >
        {/* Sidebar content here */}
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", padding: "2rem" }}>
        {/* Header Section */}
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Marketing Dashboard
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ marginTop: "1rem" }}>
            <Chip label="Premium" icon={<PlayArrowIcon />} color="secondary" />
            <Chip label="Credits: 0" color="success" />
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                fontSize: "14px",
              }}
            >
              Talk to our expert
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ marginBottom: "2rem" }} />

        {/* WhatsApp Campaign Section */}
        <Box sx={{ display: "flex", marginBottom: "3rem", alignItems: "center" }}>
          {/* Left Content */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
              Create your first <span style={{ color: "#25D366" }}>WhatsApp</span> campaign
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                marginBottom: "1.5rem",
                maxWidth: "500px",
                lineHeight: "1.5",
              }}
            >
              Reach out to your customers where they are. Announce your new offerings or upsell
              existing offerings. Increase your bookings and earnings!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                textTransform: "none",
                borderRadius: "8px",
                backgroundColor: "#25D366",
                fontWeight: "bold",
                paddingX: "2rem",
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Right Image */}
          <Box
            sx={{
              position: "relative",
              width: "400px",
              height: "250px",
              borderRadius: "16px",
              overflow: "hidden",
              transform: "rotate(-4deg)", // Adds dynamic tilt effect to the image container
              boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
            }}
          >
            <Box
              component="img"
              src="/whatsapp-campaign-image.png" // Replace with the actual image path
              alt="WhatsApp Campaign"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>

        {/* Analytics Section */}
        <Box sx={{ marginBottom: "3rem" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
            Track your Campaign's Performance
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginBottom: "2rem", lineHeight: "1.5" }}
          >
            Use advanced analytics to track the performance of your campaigns, monitor click-through rates,
            and gather customer feedback to optimize future campaigns.
          </Typography>
          <Box sx={{ display: "flex", gap: "2rem" }}>
            {/* Example Charts */}
            <Box sx={{ flex: 1, padding: "1rem", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
              <Typography variant="h6">Click-Through Rate</Typography>
              <canvas id="ctrChart" />
            </Box>
            <Box sx={{ flex: 1, padding: "1rem", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
              <Typography variant="h6">Customer Ratings</Typography>
              <canvas id="ratingsChart" />
            </Box>
          </Box>
        </Box>

        {/* Additional Features Section */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
            Explore More Marketing Tools
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginBottom: "2rem", lineHeight: "1.5" }}
          >
            Unlock the full potential of your marketing efforts by integrating email campaigns,
            social media advertisements, and other automation tools.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              paddingX: "2rem",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MarketingPage;
