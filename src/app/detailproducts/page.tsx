"use client";

import { Box, Typography, IconButton, Grid, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ReviewCard from "@/components/RateSection";
import { useState } from "react";
import RelatedProducts from "@/components/RelatedProducts";

export default function DetailProducts() {
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const totalReviews = 3;

  const thumbnails = ["/suply1.jpeg", "/suply2.jpeg", "/suply3.jpeg"];

  return (
    <Box
      sx={{
        bgcolor: "#F8F9FA",
        minHeight: "100vh",
        p: { xs: 2, md: 4 },
        pt: { xs: 4, md: 13 },
      }}
    >
      <IconButton
        onClick={() => router.back()}
        sx={{
          mb: 4,
          border: "1px solid #E0E0E0",
          borderRadius: "24px",
          px: 2,
          py: 1,
          "&:hover": {
            border: "1px solid #BDBDBD",
            bgcolor: "rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        <ArrowBackIcon sx={{ color: "black", fontWeight: "bold" }} />{" "}
        <Typography sx={{ ml: 1, color: "black", fontWeight: "bold" }}>
          Back
        </Typography>
      </IconButton>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "300px", md: "500px" },
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/medicine1.png"
              alt="Medical Supplies"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", gap: 4 }}>
            <Stack spacing={2} sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                component="h1"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Medical Suppliers
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Category: Medical supplies
              </Typography>

              <Typography color="text.secondary" sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet consectetur. Pellentesque ipsum
                tellus facilisis ultrices ut tempor ultricies amet sit. Massa
                nunc pellentesque a in vitam tempus diam. Viverra nunc tempor
                sed pellentesque. Vel ullamcorper ut blanket amet diam duis a
                non. Faucibus diam augue sem sapien. Amet turpis molestie purus
                amet tortor. Suspendisse sed at ut pharetra facilisis amet sit.
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "black", fontWeight: "bold" }}
                >
                  Material Info:
                </Typography>
                <Stack spacing={1} sx={{ color: "text.secondary" }}>
                  <Typography>Size: 34px x 34mm</Typography>
                  <Typography>Country: Munich, Germany</Typography>
                  <Typography>Dimension: 34mm x 34mm</Typography>
                </Stack>
              </Box>
            </Stack>

            <Stack
              spacing={2}
              sx={{
                display: { xs: "none", md: "flex" },
                width: "100px",
              }}
            >
              {thumbnails.map((thumb, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Stack>
          </Box>

          <Box
            sx={{
              display: { xs: "block", md: "none" },
              mt: 3,
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                px: 2,
                pb: 2,
              }}
            >
              {thumbnails.map((thumb, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    minWidth: "80px",
                    width: "80px",
                    height: "80px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography
          variant="h5"
          sx={{ mb: 4, fontWeight: "bold", color: "black" }}
        >
          Rate and Review
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            width: "100%",
          }}
        >
          {[1, 2, 3].map((review) => (
            <ReviewCard key={review} />
          ))}
        </Box>

        <Box
          sx={{
            display: { xs: "block", md: "none" },
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              px: 2,
              pb: 2,
            }}
            onScroll={(e) => {
              const element = e.target as HTMLElement;
              const scrollPosition = element.scrollLeft;
              const cardWidth = 300 + 16; // card width + gap
              const newStep = Math.round(scrollPosition / cardWidth);
              setActiveStep(newStep);
            }}
          >
            {[1, 2, 3].map((review) => (
              <ReviewCard key={review} />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              mt: 2,
            }}
          >
            {[...Array(totalReviews)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 24,
                  height: 4,
                  borderRadius: "2px",
                  bgcolor: index === activeStep ? "#333" : "#E0E0E0",
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <RelatedProducts />
    </Box>
  );
}
