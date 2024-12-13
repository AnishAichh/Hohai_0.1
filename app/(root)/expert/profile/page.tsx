// pages/profile.js
import React from "react";
import { Box, Typography, TextField, Button, Avatar, Card, CardContent } from "@mui/material";

const ProfilePage = () => {
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
          overflowY: "auto",
          p: 3,
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Profile
        </Typography>

        {/* Profile Section */}
        <Box sx={{ display: "flex", gap: 3, alignItems: "center", mb: 4 }}>
          <Avatar
            alt="Profile Photo"
            src="/path-to-avatar.jpg" // Replace with actual image URL
            sx={{ width: 100, height: 100, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
          />
          <Button variant="outlined">Change Photo</Button>
        </Box>

        {/* Profile Details Form */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 600, mb: 4 }}>
          <TextField label="Your topmate page link" defaultValue="topmate.io/anish_aich10" fullWidth />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField label="First Name" defaultValue="Anish" fullWidth />
            <TextField label="Last Name" defaultValue="Aich" fullWidth />
          </Box>
          <TextField label="Display Name" defaultValue="Anish Aich" fullWidth />
          <TextField label="Your topmate intro" defaultValue="ASTU 21-25 | Project Intern at Ujucode" fullWidth />
          <TextField
            label="About Yourself"
            multiline
            rows={4}
            defaultValue="Hi, I am Anish Aich, a B.Tech 6th-semester student at Dhemaji Engineering College under ASTU.\nMy area of interest includes web development, UI designing and photo editing. Other hobbies of mine are stock chart analysis and creating content.\nI am currently learning Javascript ES6 and React.js."
            fullWidth
          />
        </Box>

        {/* Widget Section */}
        <Card sx={{ maxWidth: 600, mb: 15}}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Website Widget
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
              Embed topmate on your website in under 1 minute.
            </Typography>
            <Button variant="contained" fullWidth>Generate</Button>
          </CardContent>
        </Card>

        {/* Scroll Down Section */}
        <Box>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Your Details
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 600 }}>
            <TextField label="Email Address" defaultValue="anishaich_cse_2021@dec.ac.in" fullWidth disabled />
            <TextField label="Mobile Number" defaultValue="+919957898979" fullWidth disabled />
            <TextField label="Password" type="password" defaultValue="********" fullWidth disabled />
          </Box>

          <Typography variant="h6" sx={{ mt: 5, mb: 2 }}>
            Notifications
          </Typography>
          <TextField label="Booking Notifications" defaultValue="On: Email, WhatsApp" fullWidth disabled />

          <Button variant="outlined" color="error" sx={{ mt: 3 }}>
            Delete Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
