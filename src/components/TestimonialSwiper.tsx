"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Box, Typography, Avatar, Paper } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Add custom styles
const swiperStyles = `
  .swiper-pagination {
    position: relative;
    margin-top: 20px;
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 3px;
    background: #ccc;
    opacity: 1;
    margin: 0 5px;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  
  .swiper-pagination-bullet-active {
    background: #000;
    width: 30px;
  }

  @media (min-width: 768px) {
    .swiper-pagination {
      display: none;
    }
  }
`;

interface TestimonialData {
  company: string;
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  logo: string;
}

const testimonials: TestimonialData[] = [
  {
    company: "Company name",
    content:
      "Lorem ipsum dolor sit amet consectetur. In rhoncus nisl ornare eget in proin dolor integer. Orci magna ipsum ridiculus purus. Ullamcorper volutpat nullam proin malesuada nisl proin cras nisl sed. Nisl suscipit montes id bibendum at. Senectus tincidunt a id felis. Phasellus pulvinar lorem in sollicitudin donec arcu libero erat id. Sagittis aliquet id urna pellentesque amet. Lectus.",
    author: {
      name: "Tesfaye Haile",
      role: "Product Manager",
      image: "/profile.png", // Replace with actual image path
    },
    logo: "/logo.svg", // Replace with actual logo path
  },
  {
    company: "Company name",
    content:
      "Lorem ipsum dolor sit amet consectetur. In rhoncus nisl ornare eget in proin dolor integer. Orci magna ipsum ridiculus purus. Ullamcorper volutpat nullam proin malesuada nisl proin cras nisl sed. Nisl suscipit montes id bibendum at. Senectus tincidunt a id felis. Phasellus pulvinar lorem in sollicitudin donec arcu libero erat id. Sagittis aliquet id urna pellentesque amet. Lectus.",
    author: {
      name: "Tesfaye Haile",
      role: "Product Manager",
      image: "/profile.png", // Replace with actual image path
    },
    logo: "/logo.svg", // Replace with actual logo path
  },
  {
    company: "Company name",
    content:
      "Lorem ipsum dolor sit amet consectetur. In rhoncus nisl ornare eget in proin dolor integer. Orci magna ipsum ridiculus purus. Ullamcorper volutpat nullam proin malesuada nisl proin cras nisl sed. Nisl suscipit montes id bibendum at. Senectus tincidunt a id felis. Phasellus pulvinar lorem in sollicitudin donec arcu libero erat id. Sagittis aliquet id urna pellentesque amet. Lectus.",
    author: {
      name: "Tesfaye Haile",
      role: "Product Manager",
      image: "/profile.png", // Replace with actual image path
    },
    logo: "/logo.svg", // Replace with actual logo path
  },
  {
    company: "Company name",
    content:
      "Lorem ipsum dolor sit amet consectetur. In rhoncus nisl ornare eget in proin dolor integer. Orci magna ipsum ridiculus purus. Ullamcorper volutpat nullam proin malesuada nisl proin cras nisl sed. Nisl suscipit montes id bibendum at. Senectus tincidunt a id felis. Phasellus pulvinar lorem in sollicitudin donec arcu libero erat id. Sagittis aliquet id urna pellentesque amet. Lectus.",
    author: {
      name: "Tesfaye Haile",
      role: "Product Manager",
      image: "/profile.png", // Replace with actual image path
    },
    logo: "/logo.svg", // Replace with actual logo path
  },
  {
    company: "Company name",
    content:
      "Lorem ipsum dolor sit amet consectetur. In rhoncus nisl ornare eget in proin dolor integer. Orci magna ipsum ridiculus purus. Ullamcorper volutpat nullam proin malesuada nisl proin cras nisl sed. Nisl suscipit montes id bibendum at. Senectus tincidunt a id felis. Phasellus pulvinar lorem in sollicitudin donec arcu libero erat id. Sagittis aliquet id urna pellentesque amet. Lectus.",
    author: {
      name: "Tesfaye Haile",
      role: "Product Manager",
      image: "/profile.png", // Replace with actual image path
    },
    logo: "/logo.svg", // Replace with actual logo path
  },
  // Add more testimonials as needed
];

export default function TestimonialSwiper() {
  return (
    <>
      <style>{swiperStyles}</style>
      <Box sx={{ py: { xs: 8, md: 8 }, background: "white" }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            fontWeight: "bold",
           
            px: { xs: 2, md: 10 },
            color:'black'
          }}
        >
          What people say
        </Typography>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ 
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Mobile view: single card with pagination
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // Desktop view: 1.75 cards without pagination
            768: {
              slidesPerView: 1.75,
              spaceBetween: -40,
            },
          }}
          style={{ 
            padding: "60px 28px 60px",
            overflow: "visible"
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: "16px",
                  p: { xs: 3, md: 5 },
                  m: { xs: 0, md: 5 },
                  height: { xs: "auto", md: "500px" }, // Adjusted height for mobile
                  minHeight: { xs: "450px", md: "500px" }, // Added minimum height
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    elevation: 6,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "18px", md: "20px" },
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  {testimonial.company}
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    fontSize: { xs: "14px", md: "25px" },
                    flexGrow: 1,
                    width:'95%'
                  }}
                >
                  {testimonial.content}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingX: 2
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      sx={{ width: 48, height: 48 }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: { xs: "14px", md: "16px" },
                        }}
                      >
                        {testimonial.author.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: { xs: "12px", md: "14px" },
                        }}
                      >
                        {testimonial.author.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Image
                    src={testimonial.logo}
                    alt="Company logo"
                    width={80}
                    height={24}
                    style={{ objectFit: "contain", marginLeft:20 }}
                  />
                </Box>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
