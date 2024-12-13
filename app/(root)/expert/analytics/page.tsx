"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const AnalyticsPage: React.FC = () => {
  // Data for Click-Through Rate (Line Chart)
  const clickThroughRateData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "CTR (%)",
        data: [5, 10, 7, 15, 12, 18],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const clickThroughRateOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "Click-Through Rate (CTR)" },
    },
  };

  // Data for Customer Ratings (Bar Chart)
  const customerRatingsData = {
    labels: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
    datasets: [
      {
        label: "Ratings",
        data: [5, 10, 15, 30, 40],
        backgroundColor: [
          "#f44336", // 1 Star - Red
          "#ff9800", // 2 Stars - Orange
          "#ffc107", // 3 Stars - Yellow
          "#8bc34a", // 4 Stars - Light Green
          "#4caf50", // 5 Stars - Green
        ],
        borderWidth: 1,
      },
    ],
  };

  const customerRatingsOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "Customer Ratings Distribution" },
    },
    scales: {
      y: { beginAtZero: true },
    },
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
        <Typography variant="h6" sx={{ p: 2 }}>
          Sidebar
        </Typography>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: "2rem" }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Analytics
        </Typography>

        <Box sx={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {/* Click-Through Rate Chart */}
          <Box sx={{ flex: 1, minWidth: "400px" }}>
            <Line data={clickThroughRateData} options={clickThroughRateOptions} />
          </Box>

          {/* Customer Ratings Chart */}
          <Box sx={{ flex: 1, minWidth: "400px" }}>
            <Bar data={customerRatingsData} options={customerRatingsOptions} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AnalyticsPage;
