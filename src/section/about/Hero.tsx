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
          }}
        >
          <Image
            src={"/aboutHero.png"}
            alt="hero"
            fill
            style={{ objectFit: "cover" }}
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
                md: "96px",
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
                md: "96px",
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
              fontSize: { xs: "15px", md:'24px'},
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 700,
              color: "#FCEE23",
              borderRadius: "100px",
              background: "black",
              width: { xs: "200px", md:'220px'},
              height: { xs: "60px" , md:'78px'},
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
          <Box sx={{ flexShrink: 0 }}>
            <ArrowDownwardIcon sx={{ scale: 5, color: "black" }} />
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
