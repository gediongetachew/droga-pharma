"use client";

import { Box, Typography, IconButton, Grid, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ReviewCard from "@/components/RateSection";
import { useState, useRef, MouseEvent, TouchEvent } from "react";
import RelatedProducts from "@/components/RelatedProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DetailedProducts() {
  const router = useRouter();

  const thumbnails = ["/suply1.jpeg", "/suply2.jpeg", "/suply3.jpeg"];

  const reviews = [1, 2, 3, 4, 5, 6]; // Example of more reviews

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const startDragging = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    setIsDragging(true);
    if ("touches" in e) {
      setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
    } else {
      setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    }
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const move = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    e.preventDefault();
    if (!sliderRef.current) return;

    let x;
    if ("touches" in e) {
      x = e.touches[0].pageX - (sliderRef.current.offsetLeft || 0);
    } else {
      x = e.pageX - (sliderRef.current.offsetLeft || 0);
    }

    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box
      sx={{
        background: "#F5F5F5",
        minHeight: "100vh",

        paddingX: { xs: 4, md: 8 },
        paddingY: { xs: 8, md: 20 },
      }}
    >
      <IconButton
        onClick={() => router.back()}
        sx={{
          mb: { xs: 7, md: 10 },
          border: "1px solid #B4B4B4",
          borderRadius: "24px",
          width: { xs: "100px", md: "140px" },

          px: 1,
          py: { xs: 1, md: 2 },
          "&:hover": {
            border: "1px solid #BDBDBD",
            bgcolor: "rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        <ArrowBackIcon sx={{ color: "black", scale: { xs: 0.8, md: 1.2 } }} />{" "}
        <Typography
          sx={{
            ml: 1,
            color: "black",
            fontWeight: 500,
            fontSize: { xs: "15px", md: "20px" },
            fontFamily: "Plus Jakarta Sans",
          }}
        >
          Back
        </Typography>
      </IconButton>

      <Grid
        container
        sx={{
          padding: 0,
          borderRadius: "40px",
          background: "white",
          overflow: "hidden",
        }}
      >
        <Grid
          item
          xs={12}
          md={5.5}
          sx={{
            height: { xs: "auto", md: "100%" },
            display: "flex",
            alignItems: "center",
            paddingY: { xs: 1, md: 5 },
            paddingX: { xs: 2, md: 2 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "300px", md: "525px", lg: "550px", xl: "525px" },
              borderRadius: "40px",
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

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: { xs: "auto", md: "100%" },
            overflow: "auto",
            paddingY: { xs: 1, md: 5 },
            paddingX: { xs: 2, md: 2 },
          }}
        >
          <Box sx={{ display: "flex", gap: 4, marginTop: { xs: 2, md: 2 } }}>
            <Stack spacing={2} sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  color: "black",
                  fontWeight: 600,
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                Medical Suppliers
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  color: "black",
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: "regular",
                }}
              >
                Category: Medical supplies
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 2,
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: "regular",
                  fontSize: { xs: "12px", md: "12px", lg: "16px", xl: "18px" },
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Pellentesque ipsum
                tellus facilisis ultrices ut tempor ultricies amet sit. Massa
                nunc pellentesque a in vitam tempus diam. Viverra nunc tempor
                sed pellentesque. Vel ullamcorper ut blanket amet diam duis a
                non. Faucibus diam augue sem sapien. Amet turpis molestie purus
                amet tortor. Suspendisse sed at ut pharetra facilisis amet sit.
              </Typography>

              <Box sx={{ paddingTop: { xs: 3, md: 5, lg: 8 } }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "black",
                    fontWeight: 500,
                    fontFamily: "Plus Jakarta Sans",
                    fontSize: { xs: "10px", md: "15px" },
                  }}
                >
                  Material Info:
                </Typography>
                <Stack spacing={1} sx={{ color: "text.secondary" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "12px",
                        lg: "14px",
                        xl: "16px",
                      },
                      fontFamily: "Plus Jakarta Sans",
                    }}
                  >
                    Lorem ipsum dolor sit
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "12px",
                        lg: "14px",
                        xl: "16px",
                      },
                      fontFamily: "Plus Jakarta Sans",
                    }}
                  >
                    Size: 34px x 34mm
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "12px",
                        lg: "14px",
                        xl: "16px",
                      },
                      fontFamily: "Plus Jakarta Sans",
                    }}
                  >
                    Country: Munich, Germany
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "12px",
                        lg: "14px",
                        xl: "16px",
                      },
                      fontFamily: "Plus Jakarta Sans",
                    }}
                  >
                    Dimension: 34mm x 34mm
                  </Typography>
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

      <Box sx={{ mt: 8, mb: 4, paddingLeft: { xs: 2, md: 5 } }}>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            fontWeight: 600,
            color: "black",
            fontFamily: "Plus Jakarta Sans",
            fontSize: { xs: "18px", sm: "20px", md: "24px", lg: "40px" },
            overflow: "hidden",
          }}
        >
          Rate and Review
        </Typography>

        {/* Desktop view */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            style={{ padding: "10px" }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review}>
                <ReviewCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Mobile view */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            grabCursor={true}
            style={{ padding: "10px" }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review}>
                <ReviewCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
      <RelatedProducts />
    </Box>
  );
}
