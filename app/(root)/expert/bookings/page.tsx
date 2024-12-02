"use client";

import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Button } from "@mui/material";

// Tab panel helper component
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function BookingSection() {
  const [tabValue, setTabValue] = useState(0);
  const [categoryValue, setCategoryValue] = useState(0); // State for category selection

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleCategoryChange = (newCategory: number) => {
    setCategoryValue(newCategory); // Set the selected category
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Placeholder */}
      <Box
        sx={{
          width: "300px", // Matches your Sidebar width
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
          backgroundColor: "#fff", // Background for content section
          overflowY: "auto", // Scroll if content overflows
        }}
      >
        {/* Section Title */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Bookings
        </Typography>

        {/* Category Buttons */}
        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          <Button
            variant={categoryValue === 0 ? "contained" : "outlined"}
            color="primary"
            size="small"
            sx={{ textTransform: "none" }}
            onClick={() => handleCategoryChange(0)} // Set to 1:1 Calls
          >
            1:1 Calls
          </Button>
          <Button
            variant={categoryValue === 1 ? "contained" : "outlined"}
            color="primary"
            size="small"
            sx={{ textTransform: "none" }}
            onClick={() => handleCategoryChange(1)} // Set to Package/Subscriptions
          >
            Package/Subscriptions
          </Button>
          <Button
            variant={categoryValue === 2 ? "contained" : "outlined"}
            color="primary"
            size="small"
            sx={{ textTransform: "none" }}
            onClick={() => handleCategoryChange(2)} // Set to Webinar
          >
            Webinar
          </Button>
          <Button
            variant={categoryValue === 3 ? "contained" : "outlined"}
            color="primary"
            size="small"
            sx={{ textTransform: "none" }}
            onClick={() => handleCategoryChange(3)} // Set to Digital Product
          >
            Digital Product
          </Button>
        </Box>

        {/* Category Content */}
        <Box sx={{ marginBottom: 4 }}>
          <TabPanel value={categoryValue} index={0}>
            {/* Content for 1:1 Calls */}
            <Typography variant="h6">1:1 Calls Content</Typography>
            <Typography variant="body2" color="text.secondary">
              This section will contain content for 1:1 Calls.
            </Typography>

            {/* Tabs for Upcoming and Completed under 1:1 Calls */}
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={tabValue} onChange={handleTabChange} aria-label="booking tabs">
                <Tab label="Upcoming" />
                <Tab label="Completed" />
              </Tabs>
            </Box>

            {/* Tab Panels for Upcoming and Completed under 1:1 Calls */}
            <TabPanel value={tabValue} index={0}>
              {/* Empty State for Upcoming */}
              <Box sx={{ textAlign: "center", mt: 4 }}>
                <img
                  src="/images/empty-state.png"
                  alt="Empty State"
                  style={{ width: "150px", marginBottom: "16px" }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Share your page
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  A new booking might just be around the corner, share your page today!
                </Typography>
                <Button variant="contained" color="primary">
                  Share Page
                </Button>
              </Box>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              {/* Empty State for Completed */}
              <Typography variant="body1" color="text.secondary">
                No completed bookings yet.
              </Typography>
            </TabPanel>
          </TabPanel>
          <TabPanel value={categoryValue} index={1}>
            {/* Content for Package/Subscriptions */}
            <Typography variant="h6">Package/Subscriptions Content</Typography>
            <Typography variant="body2" color="text.secondary">
              This section will contain content for Package/Subscriptions.
            </Typography>
          </TabPanel>
          <TabPanel value={categoryValue} index={2}>
            {/* Content for Webinar */}
            <Typography variant="h6">Webinar Content</Typography>
            <Typography variant="body2" color="text.secondary">
              This section will contain content for Webinar.
            </Typography>
          </TabPanel>
          <TabPanel value={categoryValue} index={3}>
            {/* Content for Digital Product */}
            <Typography variant="h6">Digital Product Content</Typography>
            <Typography variant="body2" color="text.secondary">
              This section will contain content for Digital Product.
            </Typography>
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
