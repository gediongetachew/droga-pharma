// 'use client'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Box, Grid, Typography } from '@mui/material';
// import 'swiper/css';
// import icon from 'next/icon';

// const testimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     role: "Patient",
//     text: "Lorem ipsum dolor sit amet consectetur. Commodo sollicitudin ultrices mauris bibendum pulvinar pellentesque.",
//     icon: "../../"
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     role: "Customer",
//     text: "Lorem ipsum dolor sit amet consectetur. Commodo sollicitudin ultrices mauris bibendum pulvinar pellentesque.",
//     icon: "/path-to-avatar.jpg"
//   },
//   {
//     id: 3,
//     name: "Mike Johnson",
//     role: "Patient",
//     text: "Lorem ipsum dolor sit amet consectetur. Commodo sollicitudin ultrices mauris bibendum pulvinar pellentesque.",
//     icon: "/path-to-avatar.jpg"
//   },
//   {
//     id: 4,
//     name: "Mike Johnson",
//     role: "Patient",
//     text: "Lorem ipsum dolor sit amet consectetur. Commodo sollicitudin ultrices mauris bibendum pulvinar pellentesque.",
//     icon: "/path-to-avatar.jpg"
//   },
//   {
//     id: 5,
//     name: "Mike Johnson",
//     role: "Patient",
//     text: "Lorem ipsum dolor sit amet consectetur. Commodo sollicitudin ultrices mauris bibendum pulvinar pellentesque.",
//     icon: "/path-to-avatar.jpg"
//   },
//   {
//     id: 5,
//     name: "Mike Johnson",
//     role: "Patient",
//     text: "Lorem ipsum dolor sit amet consectetur. Commodo sollicitudin ultrices mauris bibendum pulvinar pellentesque.",
//     icon: "/path-to-avatar.jpg"
//   },
  
//   // Add more testimonials as needed
// ];

// export default function TestimonialSwiper() {
//   return (
//     <Box sx={{ 
//       width: '100%', 
//       overflow: 'hidden',
//       padding: '40px 0'
//     }}>
//       <Swiper
//         slidesPerView={'auto'}
//         spaceBetween={30}
//         centeredSlides={false}
//         style={{ paddingLeft: '65px' }}
//         className="testimonial-swiper"
//       >
//         {testimonials.map((testimonial) => (
//           <SwiperSlide 
//             key={testimonial.id}
//             style={{
//               width: '50%',
//               minWidth: '300px'
//             }}
//           >
//             <Grid item xs={12}>
                 
//                     <Typography
//                       variant="body1"
//                       color="#000000"
//                       marginTop={3}
//                       sx={{
//                         width: "100%",
//                         marginTop: 3,
//                         whiteSpace: "wrap",
//                         overflow: "hidden",
//                         textOverflow: "ellipsis",
//                         fontFamily: "Plus Jakarta Sans",
//                         fontSize: { xs: 10, sm: 18, md: 18, lg: 28, xl: 25 },
//                       }}
//                     >
//                       {testimonial.text}
//                     </Typography>

//                     <Box
//                       sx={{
//                         display: "flex",
//                         gap: "80%",
//                         width: "100%",
//                         marginTop: { xs: 2, sm: 5, md: 2, lg: 4 },
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           width: { xs: "40px", sm: "50px", md: "60px" },
//                           height: { xs: "30px", sm: "50px", md: "60px" },
//                           position: "relative",
//                         }}
//                       >
//                         <icon
//                           src={testimonial.icon}
//                           alt="tropy-img"
//                           layout="fill"
//                           objectFit="contain"
//                         />
//                         <Box sx={{ marginLeft: { xs: 7, md: 10 } }}>
//                           <Typography
//                             variant="h6"
//                             fontWeight="bold"
//                             sx={{ fontSize: { xs: 10, sm: 20, md: 20 } }}
//                           >
//                             {testimonial.title}
//                           </Typography>
//                           <Typography
//                             variant="subtitle2"
//                             sx={{
//                               color: "#475467",
//                               fontSize: { xs: 6, sm: 15, md: 20 },
//                             }}
//                           >
//                             {testimonial.discription}
//                           </Typography>
//                         </Box>
//                       </Box>

//                       <Box
//                         sx={{
//                           width: { xs: "40px", sm: "50px" },
//                           height: "auto",
//                         }}
//                       >
//                         <icon
//                           src={testimonial.img}
//                           alt="two balls"
//                           layout="intrinsic"
//                           objectFit="contain"
//                         />
//                       </Box>
//                     </Box>
//                   </Grid>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// } 