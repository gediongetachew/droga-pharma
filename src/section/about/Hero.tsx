import { Button, Grid, Typography, Box } from "@mui/material";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import logo from "../../../public/logo.png";

import Image from "next/image";

export default function Hero() {
  return (
    <Grid
      container
      sx={{ background: "white", height: "100vh", position: "relative" }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            top: 0,
            left: 0
          }}
        >
          <Image
            src={"/aboutHero.png"}
            alt="hero"
            fill
            style={{ 
              objectFit: "cover", 
              width: "100%",
              height: "100%"
            }}
          />
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginBottom: 4,
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                md: "100px",
              },
              fontWeight: 600,
              color: "black",
              fontFamily: "Plus Jakarta Sans",
              zIndex: 2,
            }}
          >
            Empowering Healthcare
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                md: "100px",
              },
              fontWeight: 600,
              color: "black",
              fontFamily: "Plus Jakarta Sans",
              zIndex: 2,
            }}
          >
            In Ethiopia
          </Typography>
          <Button
            sx={{
              fontSize: { xs: "15px", md: "30px" },
              fontFamily: "Plus Jakarta Sans",
              marginTop:{xs:1, md:15},
              fontWeight: 700,
              textTransform:"none",
              color: "#FCEE23",
              borderRadius: "100px",
              background: "black",
              width: { xs: "200px", md: "250px" },
              height: { xs: "60px", md: "90px" },
              zIndex: 2,
            }}
          >
            Read More
          </Button>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            px: 8,
            zIndex: 2,
          }}
        >
          {/* Arrow */}
          <Box
            sx={{
              flexShrink: 0,
              cursor: "pointer", // Add pointer cursor
            }}
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight, // Changed to scroll to bottom
                behavior: "smooth",
              });
            }}
          >
            <ArrowDownwardIcon
              sx={{
                scale: 4,
                color: "black",
                transition: "transform 0.3s ease", // Optional: add hover animation
                "&:hover": {
                  transform: "translateY(5px)",
                },
              }}
            />
          </Box>

          {/* Logo */}
          <Box
            sx={{
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={logo.src}
              alt="logo"
              width={250} // Increased size
              height={120} // Adjusted height
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
