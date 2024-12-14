"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  Switch,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";

export default function CalendarSection() {
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
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Availability
          </Typography>
          {/* Tabs */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary" size="small" sx={{ textTransform: "none" }}>
              Calendar
            </Button>
            <Button variant="outlined" color="primary" size="small" sx={{ textTransform: "none" }}>
              Schedule
            </Button>
          </Box>
        </Box>

        {/* Timezone and Policies */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              Timezone
            </Typography>
            <Select
              defaultValue="(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi"
              sx={{ width: "300px" }}
            >
              <MenuItem value="(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi">
                (GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi
              </MenuItem>
            </Select>
          </Box>
          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              Reschedule Policy
              <Typography variant="body2" color="text.secondary">
                How can customers reschedule calls
              </Typography>
            </Typography>
            <Button variant="outlined" color="primary" size="small">
              Update Policy
            </Button>
          </Box>
          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              Booking Period
              <Typography variant="body2" color="text.secondary">
                How far in the future can attendees book
              </Typography>
            </Typography>
            <Select defaultValue="2 Months" sx={{ width: "100px" }}>
              <MenuItem value="1 Month">1 Month</MenuItem>
              <MenuItem value="2 Months">2 Months</MenuItem>
              <MenuItem value="3 Months">3 Months</MenuItem>
            </Select>
          </Box>
          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body1" fontWeight="bold">
              Notice Period
              <Typography variant="body2" color="text.secondary">
                Set the minimum amount of notice that is required
              </Typography>
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Select defaultValue="240" sx={{ width: "100px" }}>
                <MenuItem value="240">240</MenuItem>
                <MenuItem value="120">120</MenuItem>
                <MenuItem value="60">60</MenuItem>
              </Select>
              <Typography>Minutes</Typography>
            </Box>
          </Box>
        </Box>

        {/* Meeting Location */}
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Meeting Location
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography>Zoom Pro</Typography>
            <Switch />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography>Google Meet</Typography>
            <Switch />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography>Personal Meeting Link</Typography>
            <Switch />
          </Box>
        </Box>

        {/* Calendars */}
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Calendars
        </Typography>
        <Button variant="outlined" color="primary" size="small" sx={{ textTransform: "none" }}>
          + Add calendar account
        </Button>
      </Box>
    </Box>
  );
}
