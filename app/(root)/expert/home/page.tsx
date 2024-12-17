"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useUser } from "@/context/UserContext";
import { db } from "@/utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function HomePage() {
  const { user } = useUser();
  const router = useRouter();
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [user]);

  if (loading) return <Typography>Loading...</Typography>;

  const fullName = `${firstName} ${lastName}`.trim();

  return (
    <Box sx={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      {/* Greeting Section */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
        Hi, {fullName}
      </Typography>

      {/* Notification Banner */}
      <Box
        sx={{
          backgroundColor: "#f8e4fc",
          padding: "10px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#8e44ad" }}>
          The Referral Leaderboard is <span style={{ textDecoration: "underline" }}>NOW LIVE</span>.
        </Typography>
      </Box>

      {/* Main Card */}
      <Card sx={{ borderRadius: "16px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Make the page yours!
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "20px" }}>
            Unlock the potential of your HOHAI page
          </Typography>

          {/* Steps Section */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Add availability
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                Add your availability so your followers can select a slot.
              </Typography>
              <Button
                variant="contained"
                onClick={() => router.push("/expert/calendar")}
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#333" },
                }}
              >
                Add availability
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Complete your profile
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                Add details to complete your profile.
              </Typography>
              <Button
                variant="contained"
                onClick={() => router.push("/expert/profile")}
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#333" },
                }}
              >
                Complete your profile
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Create a service
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                Define services to offer to your followers.
              </Typography>
              <Button
                variant="contained"
                onClick={() => router.push("/expert/services")}
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#333" },
                }}
              >
                Create a service
              </Button>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Box>
  );
}
