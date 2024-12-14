"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";

const PriorityDM = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState<number>(0);

  // Handle tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
      }}
    >
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Priority DM
      </Typography>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{ marginBottom: 4 }}
        textColor="primary"
        indicatorColor="primary"
        variant="fullWidth"
      >
        <Tab label="Pending" />
        <Tab label="Answered" />
      </Tabs>

      <Divider sx={{ mb: 4 }} />

      {/* Tab Content */}
      {activeTab === 0 && (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
            You have no pending Priority DM requests.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ textTransform: "none" }}
          >
            Add Priority DM
          </Button>
        </Box>
      )}

      {activeTab === 1 && (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
            No answered Priority DM requests yet.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ textTransform: "none" }}
          >
            Add Priority DM
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PriorityDM;
