// pages/profile.js
"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Avatar, Card, CardContent } from "@mui/material";
import { useUser } from "@/context/UserContext";  // Assuming you have this context for user info
import { db } from "@/utils/firebaseConfig";  // Firebase configuration
import { doc, getDoc, updateDoc } from "firebase/firestore";

const ProfilePage = () => {
  const { user } = useUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [topmateLink, setTopmateLink] = useState("");
  const [yourIntro, setYourIntro] = useState("");  // New field for intro
  const [aboutYourself, setAboutYourself] = useState("");  // New field for about yourself
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user?.id) return;
      try {
        const userRef = doc(db, "users", user.id);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const profileData = userSnap.data().expertProfile;
          setFirstName(profileData.firstName || "Expert");
          setLastName(profileData.lastName || "");
          setTopmateLink(profileData.topmateLink || "");
          setYourIntro(profileData.yourIntro || "");
          setAboutYourself(profileData.aboutYourself || "");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [user]);

  const handleApply = async () => {
    if (!user?.id) return;
    try {
      const userRef = doc(db, "users", user.id);
      await updateDoc(userRef, {
        "expertProfile.yourIntro": yourIntro,
        "expertProfile.aboutYourself": aboutYourself,
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;

  const fullName = `${firstName} ${lastName}`.trim();

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
          <TextField
            label="Your Hoahi page link"
            value={topmateLink}
            fullWidth
            disabled
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label="First Name"
              value={firstName}
              fullWidth
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              value={lastName}
              fullWidth
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
          <TextField
            label="Display Name"
            value={`${firstName} ${lastName}`}
            fullWidth
            disabled
          />
          <TextField
            label="Your hohai intro"
            value={yourIntro}
            fullWidth
            onChange={(e) => setYourIntro(e.target.value)}
          />
          <TextField
            label="About Yourself"
            multiline
            rows={4}
            value={aboutYourself}
            fullWidth
            onChange={(e) => setAboutYourself(e.target.value)}
          />
        </Box>

        {/* Apply Button */}
        <Button
          variant="contained"
          onClick={handleApply}
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#333" },
          }}
        >
          Apply
        </Button>

        {/* Widget Section */}
        <Card sx={{ maxWidth: 600, mb: 15 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Website Widget
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
              Embed topmate on your website in under 1 minute.
            </Typography>
            <Button variant="contained" fullWidth>
              Generate
            </Button>
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
