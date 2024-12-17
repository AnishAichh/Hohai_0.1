"use client";

import * as React from "react";
import Link from "next/link"; // Importing Link from Next.js
import { usePathname } from "next/navigation"; // Importing usePathname to track the current route
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

// Importing icons
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BuildIcon from "@mui/icons-material/Build";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CampaignIcon from "@mui/icons-material/Campaign";
import PaymentIcon from "@mui/icons-material/Payment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

const drawerWidth = 300;

const menuItems = [
  { text: "Home", icon: <HomeIcon />, link: "/expert/home" },
  { text: "Bookings", icon: <CallIcon />, link: "/expert/bookings" },
  { text: "Priority DM", icon: <ChatBubbleIcon />, link: "/expert/priority-dm" },
  { text: "Testimonials", icon: <FavoriteIcon />, link: "/expert/testimonials" },
  { text: "Calendar", icon: <CalendarTodayIcon />, link: "/expert/calender" },
  { text: "Services", icon: <BuildIcon />, link: "/expert/services" },
  { text: "Analytics", icon: <AssessmentIcon />, link: "/expert/analytics" },
  { text: "Marketing", icon: <CampaignIcon />, link: "/expert/marketing" },
  { text: "Payments", icon: <PaymentIcon />, link: "/expert/payments" },
  { text: "Checkout", icon: <ShoppingCartIcon />, link: "/expert/checkout" },
  { text: "Profile", icon: <AccountCircleIcon />, link: "/expert/profile" },
  { text: "Rewards", icon: <CardGiftcardIcon />, link: "/rewards" },
  { text: "What's New", icon: <NewReleasesIcon />, link: "/whats-new" },
];

export default function Sidebar() {
  const pathname = usePathname(); // Get the current path

  const drawer = (
    <Box sx={{ padding: 4 }}>
      {/* Sidebar Header */}
      <Link href="/">
        <Typography variant="h4" color="red" sx={{ fontWeight: "bold", marginBottom: 4 }}>
          HOHAI
        </Typography>
      </Link>
      {/* Publish Button */}
      <Button
        variant="contained"
        color="error"
        size="small"
        sx={{
          textTransform: "none",
          width: "100%",
          fontWeight: "bold",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        Publish it on socials{" "}
        <Typography
          component="span"
          sx={{
            fontSize: "0.7em",
            backgroundColor: "white",
            padding: "2px 6px",
            borderRadius: "10px",
            color: "red",
          }}
        >
          NEW
        </Typography>
      </Button>
      <Divider sx={{ marginBottom: 2 }} />
      {/* Sidebar Menu */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link href={item.link} passHref>
              <ListItemButton
                component="a"
                sx={{
                  height: "50px", // Fixed height
                  width: "100%", // Fixed width (full button width)
                  backgroundColor: pathname === item.link ? "#e0e0e0" : "transparent",
                  "&:hover": { backgroundColor: "#e0e0e0" },
                  transition: "background-color 0.2s ease", // Smooth hover transition
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    fontSize: "0.9em", // Consistent font size
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, backgroundColor: "#f5f5f5" },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
