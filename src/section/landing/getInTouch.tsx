import Grid from "@mui/material/Grid";
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import dna from '../../../public/dna.svg';
import dna2 from '../../../public/dna2.svg';

export default function GetInTouch(hidden?: any) {
  return (
    <Grid
      container
      sx={{
        height: {xs:"50%", md:"100%"},
        alignItems: "center",
        background: "white",
        position: "relative",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          borderRadius: "24px",
          margin: { xs: 2, md: 10 },
          display: {
            xs: "flex",
            md: hidden === true ? "none" : "flex",
          },
          flexDirection: "column",
          height: "600px",
          position: "relative",
          overflow: "hidden",
          background: 'black'
        }}
      >
        {/* Left DNA Image */}
        <Box sx={{
          position: 'absolute',
          width: {xs:'40%', md:'20%'},
          height: '100%',
          left: 0,
          top: 0,
          zIndex: 1
        }}>
          <Image 
            src={dna} 
            alt='dna spiral' 
            fill 
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%'
            }}
          />
        </Box>

        {/* Right DNA Image */}
        <Box sx={{
          position: 'absolute',
          width: {xs:'40%', md:'20%'},
          height: '100%',
          right: 0,
          top: 0,
          zIndex: 1
        }}>
          <Image 
            src={dna} 
            alt='dna spiral' 
            fill 
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
  transform: 'rotate(-180deg) scaleX(-1)'
            }}
          />
        </Box>

        {/* Content Box */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#FCEE23",
              fontSize: { xs: "20px", md: "60px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 700,
              width: { xs: "100%", md: "60%" },
              textAlign: "center",
              zIndex: 2,
            }}
          >
            Partner With Us
          </Typography>
          <Typography
            sx={{
              color: "#FCEE23",
              fontSize: { xs: "20px", md: "60px" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 700,
              width: { xs: "100%", md: "60%" },
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
              width: { xs: "100%", md: "50%" },
              zIndex: 2,
              marginTop: { xs: 1, md: 2 },
              textAlign: "center",
              opacity: "51%",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Ultrices diam vulputate
            tempus congue ac. In faucibus senectus risus risus orci. Semper sit.
          </Typography>
          <Button
            sx={{
              width: { xs: "170px", md: "230px" },
              padding: { 
                xs: "8px 16px",    // Small screens
                sm: "10px 20px",   // Medium screens
                md: "20px 15px"    // Large screens
              },
              fontSize: { xs: "16px", md: "25.5px" },
              fontWeight: 700,
              borderRadius: "93px",
              fontFamily: "Plus Jakarta Sans",
              color: "black",
              background: "#FCEE23",
              marginTop: 4,
              textTransform:'none',
              transition: "all 0.3s ease",
              '&:hover': {
                background: "#FCEE23",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
              }
            }}
          >
            Get in touch
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
