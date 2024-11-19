import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import aboutImage from "../../../public/aboutus.png";
import logo from "../../../public/logo.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function AboutUs() {
  return (
    <Grid
      container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: {xs:'column', md:'row'},
        justifyContent: "space-between",
        paddingX: { xs: "5%" },
        background: "white",
        paddingY: { xs: 10 },
      }}
    >
      <Grid item xs={12} md={5} sx={{ justifyContent: "center", alignItems: "center" }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: {xs:'55vh', md:"80vh"},
            borderRadius: "20px",
            zindex: 1,

            overflow: "hidden",
          }}
        >
          <Image
            src={aboutImage}
            alt="about us"
            fill
            style={{ objectFit: "cover" }}
          />

          <Box
            sx={{
              position: "absolute",
              top: "0%",
              right: "0%",
              width: {xs:"50%",md:"40%"},
              height: {xs:"20%",md:"10%"},
              zIndex: 2,
              background: "white",

              borderBottomLeftRadius: "20px",
            }}
          >
            <Image
              src={logo}
              alt="about us"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          gap: { xs: 4, },
          marginTop: 5,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "35px", md: "48px" },
            width: "100%",
            fontWeight: 600,
            color: "#000000",
            fontFamily: "Plus Jakarta Sans",
            textWrap: "nowrap",
          }}
        >
          Who are we
        </Typography>

        <Typography
          sx={{
            width: "100%",

            color: "#737373",
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 400,

            fontSize: { xs: "12px", sm: "18px", md: "24px" },
          }}
        >
          Droga Pharma Pvt. Ltd. Co., based in Addis Ababa, Ethiopia, is
          committed to delivering a sustainable and reliable supply of
          high-quality medical products. Specializing in medicines, sutures,
          orthopedic implants, disposable devices, and diagnostic equipment, the
          company ensures that healthcare providers have access to essential
          products at competitive prices. With a focus on both quality and
          affordability, Droga Pharma contributes significantly to improving
          healthcare standards in the region.
        </Typography>

        <Button
          component="a"
          href="/aboutUs"
          sx={{
            borderRadius: "100px",
            width: {
              xs: "200px",
              md: "213px"},
              paddingX: { xs: 1, md: 2 },
              paddingY: { xs: 2, md: 3 },
              fontFamily: "Plus Jakarta Sans",
              color: "#FCEE23",
              background: "black",
              fontSize: {xs:'18px',sm:'20px', md:'24px'}
          }}
        >
          Read More
        </Button>
      </Grid>
    </Grid>
  );
}
