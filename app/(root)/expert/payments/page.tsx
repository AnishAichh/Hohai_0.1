"use client";

import React, { useState } from "react";
import { Box, Typography, Paper, Button, Chip, Grid } from "@mui/material";

const PaymentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Summary"); // State to track the active tab

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Placeholder */}
      <Box
        sx={{
          width: "300px",
          backgroundColor: "#f5f5f5",
        }}
      >
        {/* Sidebar content can be placed here */}
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: "2rem", backgroundColor: "#f9f9f9" }}>
        {/* Header Section */}
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "1.5rem" }}>
          Payments
        </Typography>

        {/* Stats Section */}
        <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
          {/* Balance Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                padding: "1rem",
                borderRadius: "8px",
                backgroundColor: "#e8f5e9",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="subtitle1" color="textSecondary" sx={{ marginBottom: "0.5rem" }}>
                Balance
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2e7d32" }}>
                ₹ 0
              </Typography>
            </Paper>
          </Grid>

          {/* Lifetime Earnings Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                padding: "1rem",
                borderRadius: "8px",
                backgroundColor: "#e3f2fd",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="subtitle1" color="textSecondary" sx={{ marginBottom: "0.5rem" }}>
                Lifetime Earnings
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1565c0" }}>
                ₹ 0
              </Typography>
            </Paper>
          </Grid>

          {/* Pending Completion Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                padding: "1rem",
                borderRadius: "8px",
                backgroundColor: "#fff3e0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="subtitle1" color="textSecondary" sx={{ marginBottom: "0.5rem" }}>
                Pending Call Completion
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#ef6c00" }}>
                ₹ 0
              </Typography>
            </Paper>
          </Grid>

          {/* Current Plan Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                padding: "1rem",
                borderRadius: "8px",
                backgroundColor: "#fce4ec",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="subtitle1" color="textSecondary" sx={{ marginBottom: "0.5rem" }}>
                Current Plan
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#d81b60" }}>
                Premium
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "0.5rem", color: "#d81b60" }}>
                10% fee charge
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{
                  marginTop: "1rem",
                  textTransform: "none",
                  borderRadius: "8px",
                  backgroundColor: "#d81b60",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#c2185b" },
                }}
              >
                See Details
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Navigation Tabs */}
        <Box sx={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          {["Summary", "Transactions", "Withdrawals", "Incentives"].map((tab) => (
            <Chip
              key={tab}
              label={tab}
              clickable
              onClick={() => handleTabClick(tab)}
              color={activeTab === tab ? "primary" : "default"}
              sx={{
                backgroundColor: activeTab === tab ? "#1976d2" : "#f0f0f0",
                color: activeTab === tab ? "#fff" : "#000",
                fontWeight: activeTab === tab ? "bold" : "normal",
                textTransform: "none",
              }}
            />
          ))}
        </Box>

        {/* Table Section */}
        <Paper
          sx={{
            padding: "2rem",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
            {activeTab} Overview
          </Typography>

          {/* Placeholder for Table */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "200px",
              border: "1px dashed #ccc",
              borderRadius: "8px",
              backgroundColor: "#fafafa",
            }}
          >
            <Typography variant="body1" color="textSecondary">
              No data available for {activeTab}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default PaymentPage;
