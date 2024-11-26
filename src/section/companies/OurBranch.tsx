import InvertedBorder from "@/component/InvertedBorder";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import OurPartners from "../about/OurPartners";
import Testimonials from "@/components/TestimonialSwiper";

export default function OurBranch() {
  return (
    <Grid container sx={{ background: "white", paddingTop: 10 }}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          paddingX: { xs: 1, md: 10 },
          paddingTop: { xs: 2, md: 10 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "48px" },
            fontFamily: "Plus Jakarta Sans",
            color: "black",
            width: { xs: "100", md: "45%" },
          }}
        >
          Our Brands
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "24px" },
            fontFamily: "Plus Jakarta Sans",
            color: "gray",
            width: { xs: "100", md: "55%" },
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Tristique dignissim sed diam
          eros hac risus pharetra quis. Eu sollicitudin ut quis a. Viverra fusce
          sem amet feugiat nibh pellentesque scelerisque scelerisque. Sed
          aliquam id faucibus integer pellentesque elementum risus ornare.
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Grid
          container
          sx={{
            display: "flex",
            paddingX: { xs: 1, md: 6 },
            marginTop: { xs: 3, md: 0 },
          }}
        >
          <Grid item xs={12} md={6}>
            <InvertedBorder name="somalia" />
          </Grid>

          <Grid
            item
            xs={12}
            md={5.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: { xs: 1, md: 10 },
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "32px" },
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 500,
                width: "90%",
                color: "black",
              }}
            >
              Droga Pharama - Somali Land
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "10px", md: "20px" },
                fontFamily: "Sego Ui",
                fontWeight: 400,
                width: "100%",
                color: "#686868",
              }}
            >
              Welcome to Droga Pharma, where our journey began with a simple yet
              profound vision: to make healthcare accessible, sustainable, and
              reliable for everyone. As the founder of this organization, my
              mission has always been to bridge the gap between professional
              care and the communities we serve, ensuring quality healthcare is
              within everyone's reach.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "10px", md: "20px" },
                fontFamily: "Sego Ui",
                fontWeight: 400,
                width: "100%",
                color: "#686868",
                marginTop: { xs: 2, md: 10 },
              }}
            >
              Thank you for trusting us with your health and well-being.
              Together, we are building a brighter and healthier future.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={12}>
        <Grid container sx={{ display: "flex", paddingX: { xs: 2, md: 6 } }}>
          <Grid
            item
            xs={12}
            md={5.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: { xs: 2, md: 10 },
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "32px" },
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 500,
                width: "90%",
                color: "black",
              }}
            >
              Droga Pharama - Somali Land
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "10px", md: "20px" },
                fontFamily: "Sego Ui",
                fontWeight: 400,
                width: "100%",
                color: "#686868",
              }}
            >
              Welcome to Droga Pharma, where our journey began with a simple yet
              profound vision: to make healthcare accessible, sustainable, and
              reliable for everyone. As the founder of this organization, my
              mission has always been to bridge the gap between professional
              care and the communities we serve, ensuring quality healthcare is
              within everyone's reach.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "10px", md: "20px" },
                fontFamily: "Sego Ui",
                fontWeight: 400,
                width: "100%",
                color: "#686868",
                marginTop: { xs: 2, md: 10 },
              }}
            >
              Thank you for trusting us with your health and well-being.
              Together, we are building a brighter and healthier future.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <InvertedBorder name="rwanda" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column" }}
      >
        <OurPartners />
        <Testimonials />
      </Grid>
    </Grid>
  );
}
