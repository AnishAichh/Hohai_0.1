"use client";

import React, { useState } from "react";
import { Box, Typography, Button, Chip, Grid, Paper, IconButton, Stack, CircularProgress } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PublicIcon from "@mui/icons-material/Public";
import InfoIcon from "@mui/icons-material/Info";

const ServicesPage: React.FC = () => {
  const categories = ["1:1 Call", "Webinar", "Priority DM", "Digital Product", "Package"];
  const [activeCategory, setActiveCategory] = useState("1:1 Call"); // Default to 1:1 Call
  const [priorityDMStatus, setPriorityDMStatus] = useState("Pending"); // Options: Pending, Answered

  const services = [
    { title: "Discovery Call", time: "15 mins", price: "Free", status: "Public" },
    { title: "Mock Interview", time: "60 mins", price: "₹1000", status: "Public" },
    { title: "1:1 Mentorship", time: "30 mins", price: "₹500", status: "Public" },
    { title: "Interview Prep & Tips", time: "30 mins", price: "₹500", status: "Public" },
  ];

  const renderPriorityDMContent = () => {
    const content = priorityDMStatus === "Pending" ? (
      <Box sx={{ textAlign: "center" }}>
        <Box
          component="img"
          src="/priority-dm-placeholder.png" // Replace with the actual image path
          alt="Try Priority DM"
          sx={{ width: "150px", height: "150px", marginBottom: "1rem" }}
        />
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
          Try Priority DM
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "1rem" }}>
          Priority DM allows you to accept DM requests without revealing your information and reply seamlessly through WhatsApp.
        </Typography>
        <Button variant="contained" color="primary">
          Add Priority DM
        </Button>
      </Box>
    ) : (
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
          Answered Priority DMs
        </Typography>
        <Typography variant="body2" color="textSecondary">
          No answered DMs yet. Once answered, they’ll appear here.
        </Typography>
      </Box>
    );

    return content;
  };

  const renderContent = () => {
    switch (activeCategory) {
      case "1:1 Call":
        return (
          <Grid container spacing={2}>
            {services.map((service, index) => (
              <Grid item xs={12} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem",
                  }}
                >
                  {/* Service Details */}
                  <Box>
                    <Typography variant="h6">{service.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {service.time} | {service.price}
                    </Typography>
                  </Box>

                  {/* Status and Actions */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box>
                      <Typography variant="body2">{service.status}</Typography>
                    </Box>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                    <IconButton>
                      <PublicIcon />
                    </IconButton>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        );
      case "Webinar":
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "calc(100vh - 200px)",
            }}
          >
            <Box
              component="img"
              src="/webinar-placeholder.png" // Replace with the actual image path
              alt="Host a webinar"
              sx={{ width: "150px", height: "150px", marginBottom: "1rem" }}
            />
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
              Host a webinar
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ textAlign: "center" }}>
              Address common questions by hosting a webinar for the masses.
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: "1.5rem" }}>
              + Add New
            </Button>
          </Box>
        );
      case "Priority DM":
        return (
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "calc(100vh - 200px)",
            }}
          >
            {/* Circular Categories for Priority DM */}
            <Box
              sx={{
                position: "absolute",
                top: "1rem",
                right: "2rem",
                display: "flex",
                gap: "1rem",
              }}
            >
              <Chip
                label="Pending"
                variant={priorityDMStatus === "Pending" ? "filled" : "outlined"}
                sx={{
                  cursor: "pointer",
                  backgroundColor: priorityDMStatus === "Pending" ? "#e0e0e0" : "transparent",
                  borderRadius: "50%",
                  padding: "0.5rem",
                }}
                onClick={() => setPriorityDMStatus("Pending")}
              />
              <Chip
                label="Answered"
                variant={priorityDMStatus === "Answered" ? "filled" : "outlined"}
                sx={{
                  cursor: "pointer",
                  backgroundColor: priorityDMStatus === "Answered" ? "#e0e0e0" : "transparent",
                  borderRadius: "50%",
                  padding: "0.5rem",
                }}
                onClick={() => setPriorityDMStatus("Answered")}
              />
            </Box>

            {/* Priority DM Content */}
            {renderPriorityDMContent()}
          </Box>
        );
      case "Digital Product":
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "calc(100vh - 200px)",
            }}
          >
            <Box
              component="img"
              src="/digital-product-placeholder.png" // Replace with the actual image path
              alt="Nothing to see here"
              sx={{ width: "150px", height: "150px", marginBottom: "1rem" }}
            />
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
              Nothing to see here
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ textAlign: "center" }}>
              Testimonials and ratings from your audience show up here.
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: "1.5rem" }}>
              + Add Testimonial
            </Button>
          </Box>
        );
      case "Package":
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "calc(100vh - 200px)",
            }}
          >
            <Box
              component="img"
              src="/digital-product-placeholder.png" // Replace with the actual image path
              alt="Create a package"
              sx={{ width: "150px", height: "150px", marginBottom: "1rem" }}
            />
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
              Create a Package
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ textAlign: "center" }}>
              Combine your services to sell as a package.
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: "1.5rem" }}>
              + Add New
            </Button>
          </Box>
        );
      default:
        return (
          <Typography variant="body2" color="textSecondary" sx={{ textAlign: "center" }}>
            Select a category to view its content.
          </Typography>
        );
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Placeholder */}
      <Box
        sx={{
          width: "300px",
          backgroundColor: "#f5f5f5",
          padding: "1rem",
        }}
      >
        <Typography variant="h6">Sidebar</Typography>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: "2rem" }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h4" sx={{ marginBottom: "1.5rem" }}>
            Services
          </Typography>
          <Button variant="outlined">+ Add New</Button>
        </Box>

        {/* Category Chips */}
        <Stack direction="row" spacing={1} sx={{ marginBottom: "2rem" }}>
          {categories.map((category, index) => (
            <Chip
              key={index}
              label={category}
              variant={activeCategory === category ? "filled" : "outlined"}
              sx={{
                cursor: "pointer",
                backgroundColor: activeCategory === category ? "#e0e0e0" : "transparent",
              }}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </Stack>

        {/* Dynamic Content */}
        {renderContent()}
      </Box>
    </Box>
  );
};

export default ServicesPage;
