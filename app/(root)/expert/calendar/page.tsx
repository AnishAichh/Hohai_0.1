"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  Select,
  MenuItem,
  TextField,
  Divider,
  Switch,
} from "@mui/material";

// Define types for Schedule Days
type ScheduleDay = {
  enabled: boolean;
  from: string;
  to: string;
};

// Define Schedule State Type
type Schedule = {
  [key: string]: ScheduleDay;
};

export default function CalendarSection() {
  const [activeTab, setActiveTab] = useState<"calendar" | "schedule">("calendar");

  const [schedule, setSchedule] = useState<Schedule>({
    Monday: { enabled: true, from: "09:00 AM", to: "08:00 PM" },
    Tuesday: { enabled: true, from: "09:00 AM", to: "08:00 PM" },
    Wednesday: { enabled: false, from: "", to: "" },
    Thursday: { enabled: false, from: "", to: "" },
    Friday: { enabled: false, from: "", to: "" },
    Saturday: { enabled: false, from: "", to: "" },
    Sunday: { enabled: false, from: "", to: "" },
  });

  const handleTabSwitch = (tab: "calendar" | "schedule") => setActiveTab(tab);

  const handleScheduleChange = (day: string, key: "enabled" | "from" | "to", value: any) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [key]: value,
      },
    }));
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
        {/* Sidebar goes here */}
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          padding: 4,
          backgroundColor: "#fff",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Availability
          </Typography>
          {/* Tabs */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant={activeTab === "calendar" ? "contained" : "outlined"}
              color="primary"
              size="small"
              sx={{ textTransform: "none" }}
              onClick={() => handleTabSwitch("calendar")}
            >
              Calendar
            </Button>
            <Button
              variant={activeTab === "schedule" ? "contained" : "outlined"}
              color="primary"
              size="small"
              sx={{ textTransform: "none" }}
              onClick={() => handleTabSwitch("schedule")}
            >
              Schedule
            </Button>
          </Box>
        </Box>

        {/* Conditional Rendering */}
        {activeTab === "calendar" && (
          <Box>
            {/* Timezone and Policies */}
            <Box sx={{ mb: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
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

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
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

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
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

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
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
              <Box
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography>Zoom Pro</Typography>
                <Switch />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography>Google Meet</Typography>
                <Switch />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
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
        )}

        {activeTab === "schedule" && (
          <Box>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Weekly Schedule
            </Typography>
            {Object.keys(schedule).map((day) => (
              <Box key={day} sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <Checkbox
                  checked={schedule[day].enabled}
                  onChange={(e) => handleScheduleChange(day, "enabled", e.target.checked)}
                />
                <Typography sx={{ width: "100px" }}>{day}</Typography>
                <TextField
                  size="small"
                  placeholder="From"
                  value={schedule[day].from}
                  onChange={(e) => handleScheduleChange(day, "from", e.target.value)}
                  disabled={!schedule[day].enabled}
                />
                <TextField
                  size="small"
                  placeholder="To"
                  value={schedule[day].to}
                  onChange={(e) => handleScheduleChange(day, "to", e.target.value)}
                  disabled={!schedule[day].enabled}
                />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
