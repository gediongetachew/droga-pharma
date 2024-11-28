"use client";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import React from "react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const [playVideo, setPlayVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && playVideo) {
          setPlayVideo(false);
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup function
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [playVideo]);

  const handlePlayVideo = () => {
    setIsLoading(true);
    setPlayVideo(true);
  };

  return (
    <Grid
      container
      sx={{
        background: "#FFFFFF",
        paddingTop: { xs: 8, sm: 10, md: 12 },
        position: "relative",
        width: "100%",
        minHeight: "100%",
      }}
    >
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            paddingX: { xs: 2, sm: 4, md: 6, lg: 8 },
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              gap: { xs: 4, sm: 4, md: 0 },
              paddingX: { xs: 2, sm: 2, md: 6, lg: 8 },
              paddingTop: { xs: 3, sm: 4, md: 6 },
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              marginBottom: { xs: 4, sm: 6, md: 8 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: { xs: 2, sm: 3, md: 3 },
                paddingTop: { xs: 2, sm: 4, md: 8 },
                alignItems: "flex-start",
                paddingLeft: { xs: 0, sm: "5%", md: "5%" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1, sm: 2, md: 2 },
                  justifyContent: "flex-start",
                }}
              >
                <CircleIcon
                  sx={{
                    scale: { xs: 0.5, sm: 0.8, md: 0.8, lg: 1 },
                    color: "black",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      xs: "16px",
                      sm: "24px",
                      md: "24px",
                      lg: "28px",
                    },
                    fontFamily: "Segoe Ui",
                    fontWeight: 400,
                    color: "#010202",
                    whiteSpace: "nowrap",
                  }}
                >
                  Contact Us
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "36px", md: "36px", lg: "42px" },
                  fontFamily: "Segoe Ui",
                  fontWeight: 400,
                  color: "#010202",
                  textAlign: "left",
                }}
              >
                It's Nice Meet You
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "36px", md: "36px", lg: "42px" },
                  fontFamily: "Segoe Ui",
                  fontWeight: 400,
                  color: "#010202",
                  textAlign: "left",
                }}
              >
                Feel Free to Contact Us
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                mt: { xs: 0, sm: 4, md: 4 },
                marginLeft: { xs: 0, sm: "60px", md: "80px" },
              }}
            >
              <SouthEastIcon
                sx={{
                  scale: { xs: 2, sm: 3.5, md: 3.5 },
                  color: "#FCEE23",
                  background: "black",
                  borderRadius: "100%",
                  padding: { xs: 0.3, sm: 0.4, md: 0.4 },
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingX: { xs: 2, sm: 2, md: 2 },
              paddingTop: { xs: 4, sm: 6, md: 8 },
              width: "100%",
            }}
          >
            <Box
              ref={videoRef}
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "100%", md: "90%" },
                height: { xs: "40vh", sm: "60vh", md: "70vh" },
                borderRadius: "20px",
                zIndex: 1,
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: playVideo ? 0 : 1,
                  transition: "opacity 0.5s ease-in-out",
                  zIndex: 1,
                }}
              >
                <img
                  src="/aboutus.png"
                  alt="about us"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: playVideo ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                  zIndex: playVideo ? 1 : 0,
                }}
              >
                {playVideo && (
                  <iframe
                    src="https://www.youtube.com/embed/5D8TBicNIb8?si=x658Sysm10QHsnof&amp;controls=0&autoplay=1"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    onLoad={() => setIsLoading(false)}
                  />
                )}
              </Box>

              {!playVideo && (
                <Box
                  onClick={handlePlayVideo}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    borderRadius: "50%",
                    width: { xs: "50px", md: "70px" },
                    height: { xs: "50px", md: "70px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    zIndex: 2,
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.8)",
                      transform: "translate(-50%, -50%) scale(1.1)",
                    },
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      color: "#FCEE23",
                      fontSize: { xs: "30px", md: "40px" },
                    }}
                  />
                </Box>
              )}

              <Box
                sx={{
                  position: "absolute",
                  top: "0%",
                  right: "0%",
                  width: { xs: "50%", md: "40%" },
                  height: { xs: "20%", md: "10%" },
                  zIndex: 3,
                  background: "white",
                  borderBottomLeftRadius: "20px",
                }}
              >
                <img
                  src="/logo.png"
                  alt="about us"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          background: "#D1D1D1",
          marginTop: { xs: 4, sm: 5, md: 6 },
          marginX: { xs: 2, sm: 4, md: 8, lg: 13 },
        }}
      ></Box>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          paddingX: { xs: 2, sm: 4, md: 8, lg: 10 },
          paddingY: { xs: 6, sm: 8, md: 10 },
          gap: { xs: 4, sm: 6, md: 0 },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            display: "flex",
            alignItems: "end",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "24px" },
              fontFamily: "Segoe Ui",
              fontWeight: 400,
              color: "#878787",
              lineHeight: { xs: 1.5, md: 1.7 },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Viverra facilisis ipsum
            varius interdum. Augue ipsum venenatis egestas nunc elit venenatis
            pharetra turpis. Laoreet iaculis mauris in sapien ornare amet.
            Feugiat diam sit posuere purus.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            marginTop: { xs: 2, sm: 0 },
          }}
        >
          <ContactForm />
        </Box>
      </Grid>
    </Grid>
  );
}
