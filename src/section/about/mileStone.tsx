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
        height: { xs: "3000px", md: "950px" },
        background:'whtie'
      }}
    >
      <Box
        sx={{
          display:{xs:'none', md:'flex'},
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      >
        <Image
          src="/mileStone.svg"
          alt="milestone"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          display:{xs:'flex', md:'none'},
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        
        }}
      >
        <Image
          src="/milestoneVertical.svg"
          alt="milestone"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Typography
        sx={{
          position: "relative",
          zIndex: 1,
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 500,
          color: "black",
          paddingLeft: {xs:5,md:10,lg:15},
          paddingTop: 15,
          fontSize: { xs: 32, md: "60px" },
        }}
      >
        Our Journey
      </Typography>
    </Box>
  );
}
