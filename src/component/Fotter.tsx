import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import Image from "next/image";
import logo from "../../public/Ema.png";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import Link from "next/link";
export default function Fotter() {
  return (
    <Grid container sx={{ background: "white", height: "auto" }}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          background: "black",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          paddingX: { xs: 4, md: 20 },
          paddingTop: { xs: 8, md: 15 },
          paddingBottom: 5,
          gap: { xs: 6, md: 0 },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Image src={logo} alt="logo" width={100} height={100} />
          <Typography
            sx={{
              fontSize: { xs: "10px", md: "20px" },
              fontWeight: 400,
              fontFamily: "Plus Jakarta Sans",
              color: "#F3EFEF",
              textAlign: "left",
            }}
          >
            feel free to contact us we'll get back to you shortly
          </Typography>
          <form>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              sx={{
                marginBottom: 2,
                "& .MuiOutlinedInput-root": {
                  height: "45px",
                  backgroundColor: "#2A2A2A",
                  borderRadius: "24px",
                },
                "& .MuiInputLabel-root": {
                  color: "#999999",
                  left: "10%",

                  transform: "translate(-50%, 20px)",
                  "&.Mui-focused, &.MuiFormLabel-filled": {
                    transform: "translate(-50%, -50%) scale(0.75)",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: "#999999",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: { xs: "8px", md: "13px" },
                  textAlign: "center",
                },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              sx={{
                marginBottom: 2,
                "& .MuiOutlinedInput-root": {
                  height: "45px",
                  backgroundColor: "#2A2A2A",
                  borderRadius: "24px",
                },
                "& .MuiInputLabel-root": {
                  color: "#999999",
                  left: "10%",
                  transform: "translate(-50%, 20px)",
                  "&.Mui-focused, &.MuiFormLabel-filled": {
                    transform: "translate(-50%, -50%) scale(0.75)",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: "#999999",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: { xs: "8px", md: "13px" },
                  textAlign: "center",
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="subscribe"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      borderRadius: "100%",
                      border: "1px solid #5A5A5A",
                      backgroundColor: "transparent",
                    },
                  }}
                />
              }
              label={
                <Typography sx={{ color: "#999999", fontSize: "14px" }}>
                  i agree with the{" "}
                  <Box component="span" sx={{ color: "#FCEE23" }}>
                    Terms & Conditions
                  </Box>
                </Typography>
              }
              sx={{ marginBottom: 2 }}
            />
          </form>
          <Button
            sx={{
              width: { xs: "150px", md: "160px" },
              height: { xs: "42px", md: "60px" },
              paddngY: { xs: 1, md: 4 },
              fontSize: { xs: "12px", md: "15px" },
              fontWeight: 700,
              borderRadius: "95px",
              fontFamily: "Plus Jakarta Sans",
              color: "black",
              background: "#FCEE23",
              marginTop: 2,
            }}
          >
            Get In Touch
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 5 },
            textAlign: "left",
            marginTop: { xs: 0, md: 6 },
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color="#FFFFFFBF"
            sx={{ marginBottom: { xs: 0 } }}
          >
            Companies
          </Typography>
          <Typography variant="body2"> Ema</Typography>
          <Typography variant="body2">Droga Pharmacy</Typography>
          <Typography variant="body2">Trust Pharma</Typography>
          <Typography variant="body2">Droga Physioterapy</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 5 },
            textAlign: "left",
            marginTop: { xs: 0, md: 6 },
          }}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            color="#FFFFFFBF"
            sx={{ marginBottom: { xs: 0 } }}
          >
            Companies
          </Typography>
          <Typography variant="body2"> Ema</Typography>
          <Typography variant="body2">Droga Pharmacy</Typography>
          <Typography variant="body2">Trust Pharma</Typography>
          <Typography variant="body2">Droga Physioterapy</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 5 },
            textAlign: "left",
            marginTop: { xs: 0, md: 6 },
          }}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            color="#FFFFFFBF"
            sx={{ marginBottom: { xs: 0 } }}
          >
            Companies
          </Typography>
          <Typography variant="body2"> Ema</Typography>
          <Typography variant="body2">Droga Pharmacy</Typography>
          <Typography variant="body2">Trust Pharma</Typography>
          <Typography variant="body2">Droga Physioterapy</Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            background: "#FCEE23",
            bottom: { xs: "-110%", md: "-40%" },

            right: 0,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 2,
            borderRadius: "12px 0 0 12px",
            zIndex: 5,
            "& svg": {
              fontSize: "24px",
              cursor: "pointer",
              "&:hover": {
                opacity: 0.8,
              },
            },
          }}
        >
          <LinkedInIcon
            sx={{ color: "black", width: "40px", border: "black" }}
          />
          <XIcon sx={{ color: "black", width: "40px", border: "black" }} />
          <InstagramIcon
            sx={{ color: "black", width: "40px", border: "black" }}
          />
          <FacebookIcon
            sx={{ color: "black", width: "40px", border: "black" }}
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "black",
          padding: { xs: 2, md: 8 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: { xs: "85%", md: "18%" },
              marginX: { xs: 0, md: 11 },
              alignItems: "center",
              gap: { xs: 1, md: 2 },
            }}
          >
            <Image
              src={logo}
              alt="logo"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Segoe UI",
                fontSize: { xs: "10px", md: "12px" },
                fontWeight: 400,
                color: "#999A9A",
              }}
            >
              © The Droga Pharma Ltd 2024 | Company
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              fontSize: { xs: "10px", md: "12px" },
              fontWeight: 700,
              color: "#999A9A",
            }}
          >
            Powered By Droga Consulting @2024
          </Typography>
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              fontSize: { xs: "10px", md: "12px" },
              fontWeight: 400,
              color: "#999A9A",
            }}
          >
            All Rights Reserved |{" "}
            <Link href="/privacy-policy"> Privacy Policy</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
