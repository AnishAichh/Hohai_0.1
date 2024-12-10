import React from "react";
import { Box, Typography, Button, Chip, Grid, Paper, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PublicIcon from "@mui/icons-material/Public";
import InfoIcon from "@mui/icons-material/Info";

const ServicesPage: React.FC = () => {
  const categories = ["1:1 Call", "Webinar", "Priority DM", "Digital Product", "Package"];

  const services = [
    { title: "Discovery Call", time: "15 mins", price: "Free", status: "Public" },
    { title: "Mock Interview", time: "60 mins", price: "₹1000", status: "Public" },
    { title: "1:1 Mentorship", time: "30 mins", price: "₹500", status: "Public" },
    { title: "Interview Prep & Tips", time: "30 mins", price: "₹500", status: "Public" },
  ];

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
        {/* Add Sidebar content here if needed */}
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: "2rem" }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h4" sx={{ marginBottom: "1.5rem" }}>
            Services
          </Typography>
          <Box>
            <Button variant="contained" color="primary" sx={{ marginRight: "0.5rem" }}>
              + Add New
            </Button>
            <Button variant="outlined">Templates</Button>
          </Box>
        </Box>

        {/* Category Chips */}
        <Box sx={{ display: "flex", gap: 1, marginBottom: "2rem" }}>
          {categories.map((category, index) => (
            <Chip
              key={index}
              label={category}
              variant="outlined"
              sx={{ cursor: "pointer" }}
            />
          ))}
        </Box>

        {/* Service Cards */}
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
      </Box>
    </Box>
  );
};

export default ServicesPage;
