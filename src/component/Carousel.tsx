"use client";
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import cards from "../data/carouselCards";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";



export default function ImageCarousel() {
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  // Optional: Function to toggle direction
  const toggleDirection = () => {
    setDirection(prev => prev === 'forward' ? 'backward' : 'forward');
  };

  return (
    <Grid container>
    
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
         
          height:'150px',
          backgroundColor:  "black",
        }}
      >
        {/* Title Section */}

        {/* Swiper Carousel */}
        <Grid item xs={12} marginTop={2}>
          <Swiper
            spaceBetween={15}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 1, // Set a small delay to avoid freezing
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: direction === "backward",
            }}
            speed={6000}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
            onMouseEnter={() => setDirection('backward')}
            onMouseLeave={() => setDirection('forward')}
          >
            {cards.map((image, index) => (
              <SwiperSlide key={index} style={{ height: "100%" }}>
                <Link href={`/${image.src}`} passHref>
                  <Box
                    sx={{
                      position: 'relative',
                      height: '200px',
                      width: {
                        xs: '100px',
                        sm: '150px',
                        md: '200px',
                        lg: '250px',
                        xl: '150px'
                      }
                    }}
                  > 
                    <Image 
                      src={image.img}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 480px) 100px, 
                             (max-width: 768px) 150px,
                             (max-width: 1024px) 200px,
                             (max-width: 1280px) 250px,
                             300px"
                      style={{
                        objectFit: "contain",
                        width: '100%',
                        maxWidth: '100%'
                      }}
                    />
                  </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Grid>
  );
}
