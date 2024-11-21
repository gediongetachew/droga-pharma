"use client";
import Grid from "@mui/material/Grid";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
const navItems = ["Home", "About", "Products", "Companies", "Careers", "Media"];

export default function Nav() {
  const [active, setActive] = useState(0);
  const router = useRouter();

  const handleNavigation = (path: string, index: number) => {
    setActive(index);
    router.push(`/${path.toLowerCase()}`);
  };

  return (
    <Grid
      container
      sx={{
        position: "fixed", // Make nav fixed
        top: 0, // Align to top
        left: 0, // Align to left
        right: 0, // Align to right
        zIndex: 1000, // Ensure it's above other content
        padding: "20px 40px", // Add some padding
        background: "transparent", // Optional: make background transparent
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center", // Center items vertically
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Image src={logo} alt="logo" />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "40%",
            height: "100%",
            borderRadius: "60px",
            background: "black",
            paddingY: { md: 1 },
          }}
        >
          {navItems.map((item, index) => (
            <Button
              key={index}
              onClick={() => handleNavigation(item, index)}
              sx={{
                color: active === index ? "#FCEE23" : "#B4B4B4",
                background: active === index ? "#242424" : "transparent",
                textTransform: "none",
                width: { md: "90px", lg: "115px" },
                fontSize: {
                  md: "16px",
                  lg: "16px",
                  fontFamily: "Plus Jakarta Sans",
                  borderRadius: "40px",
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        <Button
          sx={{
            color: "black",
            background: "#FCEE23",
            width: { md: "150px", lg: "174px" },
            height: "73px",
            borderRadius: "40px",
            fontFamily: "Plus Jakarta Sans",
            fontSize: { md: "16px", lg: "16px" },
          }}
        >
          Contact Us
        </Button>
      </Grid>
    </Grid>
  );
}
