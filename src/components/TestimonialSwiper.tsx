"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Button, Grid, Typography } from "@mui/material";
import "swiper/css";
import Image from 'next/image'
import testimonials from "../data/testimonials";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

export default function TestimonialSwiper() {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        padding: "40px 0",
        background: 'white',
        '& .swiper-pagination': {
          display: { xs: 'flex', sm: 'none' }
        }
      }}
    >
      <Swiper
       modules={[Pagination]}
       pagination={{
         clickable: true,
         el: '.swiper-pagination',
       }}
       slidesPerView={1}
       breakpoints={{
         600: {
           slidesPerView: 2,
           spaceBetween: 20,
         },
         768: {
           slidesPerView: 2,
           spaceBetween: 30,
         }
       }}
       spaceBetween={10}
       centeredSlides={false}
       style={{ paddingBottom: "40px" }}
       className="testimonial-swiper"
       
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            style={{
              width: "100%",
              minWidth: { xs: "100%", sm: "45%" },
            
             
            }}
          >
            <Grid container sx={{
              border: '1px solid',
             
              display: 'flex',
              flexDirection: 'column', 
              justifyContent: 'space-between', 
              height: 'auto', 
              
              borderRadius: '24px',
              margin: {xs: '6px', md: '10px'},
              padding: '20px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
              }
            }}>
                  <Grid item xs={12} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button sx={{background:'#EAEAEA',color: 'black', borderRadius: '24px', width:{xs:'100px', md: '200px', },fontSize: {xs:'8px', md:'18px'}, fontFamily: 'DM Sans', fontWeight:700, textAlign: 'center'}}>Testimonial</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography sx={{fontFamily: 'DM Sans', fontSize: {xs:'20px', md: '36px',}, fontWeight: 700, color: 'black', textAlign: 'left',}}>{testimonial.title}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                  <Typography sx={{fontFamily: 'DM Sans', fontSize: {xs:'10px', md: '24px',}, fontWeight: 700, color: '#737373', textAlign: 'left',}}>{testimonial.text}</Typography>

                  </Grid>
                  <Grid item xs={12}>
                  <Box
                      sx={{
                        display: "flex",
                        gap: "80%",
                        width: {xs: '90%, md:"100%" '},
                        marginTop: { xs: 2, sm: 5, md: 2, lg: 5 },
                        margin:2,
                        borderRadius: '24px'
                      }}
                    
                    >
                      <Box
                        sx={{
                          width: { xs: "40px", sm: "50px", md: "60px" },
                          height: { xs: "30px", sm: "50px", md: "60px" },
                          position: "relative",

                        }}
                      >
                        <Image
                          src={testimonial.img}
                          alt="tropy-img"
                          layout="fill"
          
                          style={{borderRadius: '100px'}}
                        />
                        <Box sx={{ marginLeft: { xs: 7, md: 10 } }}>
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            sx={{ fontSize: { xs: 10, sm: 20, md: 20 }, color: 'black', textWrap:'nowrap' }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: "#475467",
                              fontSize: { xs: 6, sm: 15, md: 20 },
                              textWrap: 'nowrap'
                            }}
                          >
                            {testimonial.discription}
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          width: { xs: "40px", sm: "50px" },
                          height: "auto",
                        }}
                      >
                        <Image
                          src={testimonial.icon}
                          alt="two balls"
                          width={50}
                          height={50}
                          style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "auto",
                            borderRadius: '100px'
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
