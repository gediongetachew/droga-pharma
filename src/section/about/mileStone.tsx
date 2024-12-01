import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Image from "next/image";

export default function mileStone() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "300px", md: "950px" },
      }}
    >
      <Image
        src="/mileStone.svg"
        alt="milestone"
        fill
        style={{ objectFit: "cover" }}
      />

      <Typography
        sx={{
          position: "relative",
          zIndex: 1,
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 500,
          color: "black",
          paddingLeft: 15,
          paddingTop: 15,
          fontSize: { xs: "20px", md: "60px" },
        }}
      >
        Our Journey
      </Typography>
    </Box>
  );
}
