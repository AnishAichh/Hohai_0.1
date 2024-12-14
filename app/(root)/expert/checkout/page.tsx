"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const CheckoutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Service Testimonials");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Placeholder */}
      <Box
        sx={{
          width: "300px",
          backgroundColor: "#f5f5f5",
        }}
      ></Box>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Page Header */}
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "1.5rem" }}>
          Checkout
        </Typography>

        {/* Chips for Navigation */}
        <Box sx={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <Chip
            label="Pricing"
            clickable
            onClick={() => handleTabClick("Pricing")}
            color={activeTab === "Pricing" ? "primary" : "default"}
            sx={{
              backgroundColor: activeTab === "Pricing" ? "#1976d2" : "#f0f0f0",
              color: activeTab === "Pricing" ? "#fff" : "#000",
              fontWeight: activeTab === "Pricing" ? "bold" : "normal",
            }}
          />
          <Chip
            label="Service Testimonials"
            clickable
            onClick={() => handleTabClick("Service Testimonials")}
            color={activeTab === "Service Testimonials" ? "primary" : "default"}
            sx={{
              backgroundColor: activeTab === "Service Testimonials" ? "#1976d2" : "#f0f0f0",
              color: activeTab === "Service Testimonials" ? "#fff" : "#000",
              fontWeight: activeTab === "Service Testimonials" ? "bold" : "normal",
            }}
          />
        </Box>

        {/* Active Tab Content */}
        {activeTab === "Service Testimonials" && (
          <>
            {/* Poster Section */}
            <Paper
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2rem",
                marginBottom: "2rem",
                backgroundColor: "#e3f2fd",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={handleDialogOpen} // Open dialog on click
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Showcase your testimonials
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Highlight your best testimonials on your service pages & convert your customers better.
                </Typography>
              </Box>
              <img
                src="https://via.placeholder.com/150x120?text=Testimonials" // Replace with a web image URL
                alt="Showcase Illustration"
                style={{ width: "150px", height: "auto" }}
              />
            </Paper>

            {/* Table Section */}
            <TableContainer component={Paper} sx={{ borderRadius: "8px", overflow: "hidden" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Topmate</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Showcased</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    "smkpmxas",
                    "Mock interview",
                    "Interview prep & tips",
                    "1:1 Mentorship",
                    "Discovery Call",
                  ].map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item}</TableCell>
                      <TableCell sx={{ color: "red" }}>Not added</TableCell>
                      <TableCell>
                        <Button
                          variant="text"
                          size="small"
                          sx={{
                            color: "#1976d2",
                            textTransform: "none",
                            fontWeight: "bold",
                          }}
                        >
                          Add
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        {activeTab === "Pricing" && (
          <Typography variant="body1" sx={{ textAlign: "center", marginTop: "2rem" }}>
            Pricing section coming soon...
          </Typography>
        )}

        {/* Dialog Box */}
        <Dialog open={isDialogOpen} onClose={handleDialogClose} fullWidth maxWidth="sm">
          <DialogTitle>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Showcase testimonials
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "2rem" }}>
              You can showcase up to 5 testimonials on a service page.
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <img
                src="https://via.placeholder.com/150x150?text=No+Testimonials" // Replace with a web image URL
                alt="No testimonials"
                style={{ marginBottom: "1rem" }}
              />
              <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                No testimonials received :(
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Go ask your customers for a testimonial
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleDialogClose}
              variant="contained"
              sx={{
                backgroundColor: "#d3d3d3",
                color: "#000",
                textTransform: "none",
              }}
            >
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
