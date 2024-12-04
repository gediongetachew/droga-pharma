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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Contact() {
  const [playVideo, setPlayVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
    subscribe: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const validateForm = () => {
    let formErrors = {
      name: "",
      subject: "",
      email: "",
      phone: "",
      message: "",
    };
    let isValid = true;

    // Name validation
    if (!formData.name) {
      formErrors.name = "Name is required.";
      isValid = false;
    }

    // Subject validation
    if (!formData.subject) {
      formErrors.subject = "Subject is required.";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Email is not valid.";
      isValid = false;
    }

    // Phone validation (optional)
    const phonePattern = /^[0-9]{10}$/; // Adjust pattern as needed
    if (formData.phone && !phonePattern.test(formData.phone)) {
      formErrors.phone = "Phone number must be 10 digits.";
      isValid = false;
    }

    // Message validation
    if (!formData.message) {
      formErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(`${BASE_URL}/api/contacts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log("Form submitted successfully:", result);
        // Optionally reset the form or show a success message
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <Grid container sx={{ background: "#FFFFFF" }}>
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
           
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              gap: { xs: 2, md: 0 },
              paddingX: { xs: 1, md: 2 },
              paddingTop: { xs: 10, md: 8 },
              flexDirection: { xs: "column", md: "row" },
            
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "100%", md: "100%", xl:'60%' },
                gap: { xs: 1, md: 2 },
                paddingTop: { xs: 0, md: 10 },
               
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent:{xs: "start", md:'start'},
                  alignItems: { xs: "center", md: "center" },
                  flexDirection: { xs: "row", md: "row" },
                  gap: { xs: 2, md: 2},
                  textAlign: "center",
               
                  width:'100%',
                  paddingLeft:{xs:0,lg:10, xl:10}
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "18px",sm:'24px', md: "24px", lg:'28px' },
                    fontFamily: "Segoe Ui",
                    fontWeight: 400,
                    color: "#010202",
                    display: "flex",
                    alignItems: "center",
                    textAlign:'left',
                    gap:{xs:2}
                  }}
                >
                  <CircleIcon
                    sx={{ scale: { xs: 0.3, md: 1 }, color: "black" }}
                  />{" "}
                  Contact Us
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "25px",sm:'30px', md: "42px" },
                    fontFamily: "Segoe Ui",
                    fontWeight: 400,
                    color: "#010202",
                    textAlign: { xs: "center", md: "right" },
                    paddingLeft:{xs:0, md:2, lg:5 }
                  }}
                >
                  It's Nice
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "25px",sm:'30px', md: "42px" },
                  fontFamily: "Segoe Ui",
                  fontWeight: 400,
                  color: "#010202",
                  textAlign: { xs: "left", md: "right" },
                  paddingLeft:{xs:8, md:0, lg:0}
                }}
              >
                Meet You, Feel
              </Typography>
              <Typography
                sx={{
                 fontSize: { xs: "25px",sm:'30px', md: "42px" },
                  fontFamily: "Segoe Ui",
                  fontWeight: 400,
                  color: "#010202",
                  textAlign: { xs: "left", md: "right" },
                  paddingLeft:{xs:0, md:0, lg:0}
                }}
              >
                Free to Contact Us
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "100%", md: "20%" },
                justifyContent: "center",
                alignItems: { xs: "flex-end", md: "flex-end" },
                mt: { xs:0, md: 30 },
                paddingRight:{xs:5, md:0},
                paddingBottom:{xs:4}
              }}
            >
              <SouthEastIcon
                sx={{
                  scale: { xs: 3,sm:3, md: 4.5 },
                  color: "#FCEE23",
                  background: "black",
                  borderRadius: "100%",
                  padding: 0.3,
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "end",
              paddingRight: { xs: 0, md: 5, xl:15 },
              paddingTop: { xs: 2, md: 15, xl:20 },
              width: "100%",
              
            }}
          >
            <Box
              ref={videoRef}
              sx={{
                position: "relative",
                width: { xs: "100%", md: "70%", xl:'50%' },
                height: { xs: "40vh", md: "50vh", xl:'45vh' },
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
          marginTop: { xs: 0, md: 4 },
          marginX: { xs: 2, md: 13 },
        }}
      ></Box>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          paddingX: { xs: 2, md: 10 },
          paddingY: 10,
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "40%",
              display: "flex",
              alignItems: "end",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "12px",
                md: "24px",
                fontFamily: "Segoe Ui",
                fontWeight: 400,
                color: "#878787",
              },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Viverra facilisis ipsum
            varius interdum. Augue ipsum venenatis egestas nunc elit venenatis
            pharetra turpis. Laoreet iaculis mauris in sapien ornare amet.
            Feugiat diam sit posuere purus.
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <form onSubmit={handleSubmit}>
            <ContactForm
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
        
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
