import Grid from "@mui/material/Grid";
import React from "react";
import Image from "next/image";
import getInTouchImage from "../../../public/p2.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function GetInTouch() {
  return (
    <Grid container sx={{ height: "100%", alignItems: "center", background: "white", position: "relative" }}>
      <Grid
        item
        xs={12}
        sx={{
          borderRadius: "24px",
          
          margin: {xs:2,md:10},
          display: "flex",
          flexDirection: "column",
          gap: 4,
          height: "500px",
          position: "relative", // Ensure correct stacking context for image and content
          overflow: "hidden", // Ensures the image doesn't overflow its container
        }}
      >
        {/* Updated Image */}
        <Image
          src={getInTouchImage}
          alt="Get in Touch"
          fill // Use "fill" layout to make the image cover its parent container
          style={{
            objectFit: "cover",
            borderRadius: "24px",
            zIndex: 0, // Keep the image behind the content
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        >
          <Typography
            sx={{
              color: "#FCEE23",
              fontSize: { xs: "30px", md: "60px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 700,
              width:{xs:'100%', md: '40%'},
              textAlign: "center",
              zIndex: 2,
            }}
          >
            Partner With Us 
          </Typography>
          <Typography
            sx={{
              color: "#FCEE23",
              fontSize: { xs: "30px", md: "60px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 700,
              width: {xs:"100%", md:"50%"},
              textAlign: "center",
              zIndex: 2,
            }}
          >
            Your Trusted Pharma Ally!
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "15px", md: "25px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 704,
              width: {xs:'100%', md: '50%'},
              zIndex: 2,
              marginTop: {xs:1, md:2},
              textAlign: 'center'
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Ultrices diam vulputate tempus congue ac. In faucibus senectus risus
            risus orci. Semper sit.
          </Typography>
          <Button
            sx={{
              width: { xs: "200px", md: "215px" },
              paddngY:{xs:1, md:2},
              fontSize: { xs: "16px", md: "22.5px" },
              fontWeight: 700,
              borderRadius: '24px',
              fontFamily: "Plus Jakarta Sans",
              color: "black",
              background: "#FCEE23",
              marginTop: 4
            }}
          >
            Get In Touch
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
