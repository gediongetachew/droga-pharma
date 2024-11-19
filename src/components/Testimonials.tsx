// "use client";
// import { useState } from "react";
// import { Box, Typography, Grid, Button } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// import testimonials from "@/data/testimonial";
// import Image from "next/image";
// import quoteImg from "../../../public/assets/quotation.png";

// export default function TestimonialCard() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [page, setPage] = useState(1);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
//     if (page === 5) {
//       setPage(1);
//     } else setPage(page + 1);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length
//     );
//     if (page === 1) {
//       setPage(1);
//     } else setPage(page - 1);
//   };

//   return (
//     <Grid
//       container
//       position={"relative"}
//       sx={{
//         marginTop: { xs: 8, sm: 6, md: 10 },
//         marginBottom: 5,
//         paddingX: { xs: 2, sm: 4, md: 10 },
//         background: "#F7F7F7",
//         height: { xs: "400px", sm: "600px", md: "700px" },
//       }}
//     >
//       <Typography
//         variant="h5"
//         sx={{
//           color: "red",
//           marginTop: 5,
//           fontSize: { xs: 15, sm: 20, md: 25, lg: 25 },
//         }}
//       >
//         TESTIMONIALS
//       </Typography>

//       <Grid item xs={12} sx={{ marginTop: { xs: 5, sx: 0, md: 10 } }}>
//         <Grid
//           container
//           spacing={2}
//           sx={{
//             gap: "55px",
//             display: "flex",
//             flexWrap: "nowrap",
//             overflowX: "auto",
//             whiteSpace: "nowrap",
//             alignItems: "flex-end",
//             scrollbarWidth: "none",
//             "-ms-overflow-style": "none",
//             "&::-webkit-scrollbar": {
//               display: "none",
//             },
//           }}
//         >
//           {testimonials
//             .slice(currentIndex, currentIndex + 2)
//             .map((testimonial, index) => (
//               <Grid
//               item
//               xs={12}
//               sm={12}
//               md={12}
//               lg={5.8}
//               xl={5.8}
//               key={index}
//               sx={{
//                 height: "auto",
//                 width: { xs: "100%", sm: "360px", md: "360px" },
//                 flexShrink: 0,
//                 backgroundColor: "white",
//                 borderRadius: "20px",
//                 borderLeft: "1px solid rgba(0,0,0,0.1)",
//                 borderBottom: "1px solid rgba(0,0,0,0.1)",
//                 position: "relative",
//                 overflow: "hidden",
//                 transition: "width 0.3s ease",
//               }}
//             >
//               {/* Cutout on the top right */}
//               <Grid
//                 xs={12}
//                 sm={6}
//                 md={6}
//                 sx={{
//                   position: "absolute",
//                   top: 0,
//                   right: 0,
//                   width: "150px",
//                   height: "32px",
//                   borderBottomLeftRadius: "10px",
//                   borderLeft: "1px solid rgba(0,0,0,0.1)",
//                   zIndex: 1,
//                   background: "#F7F7F7",
//                   "::before": {
//                     content: '""',
//                     position: "absolute",
//                     top: 0,
//                     left: -16,
//                     width: 18,
//                     height: 8,
//                     background: "#F7F7F7",
//                   },
//                 }}
//               />

//               <Grid
//                 sx={{
//                   position: "absolute",
//                   top: "30px", // Position it right below the cutout
//                   right: 0,
//                   width: "146px", // Match the width of the cutout
//                   height: "90%", // Adjust the height as desired
//                   borderTop: "1px solid rgba(0,0,0,0.1)", // Top border
//                   borderRight: "1px solid rgba(0,0,0,0.1)", // Right border
//                   backgroundColor: "white",
//                   borderTopRightRadius: "10px", // Only top right corner rounded
//                   zIndex: 1, // Keep zIndex lower than the image
//                 }}
//               />

//               {/* Top box next to the cutout */}
//               <Grid
//                 sx={{
//                   position: "absolute",
//                   top: 0,
//                   right: "150px",
//                   height: "32px",
//                   width: "calc(100% - 150px)",
//                   backgroundColor: "white",
//                   borderTop: "1px solid rgba(0,0,0,0.1)",
//                   borderTopLeftRadius: "10px",
//                   borderTopRightRadius: "10px",
//                   zIndex: 2,
//                 }}
//               />

//               {/* Card Content */}
//               <Grid
//                   container
//                   item
//                   xs={12}
//                   p={3}
//                   sx={{
//                     position: "relative",
//                     zIndex: 2,
//                     marginTop: 0,
//                   }}
//                 >
//                   <Grid item xs={12}>
//                     <Image
//                       src={quoteImg}
//                       alt="quotation"
//                       width={60}
//                       height={60}
//                       layout="intrinsic" // Makes the quote image responsive
//                       objectFit="contain" // Keeps the aspect ratio
//                     />
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
//                         <Image
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
//                         <Image
//                           src={testimonial.img}
//                           alt="two balls"
//                           layout="intrinsic"
//                           objectFit="contain"
//                         />
//                       </Box>
//                     </Box>
//                   </Grid>
//                 </Grid>
//             </Grid>
//             ))}
//         </Grid>
//       </Grid>

//       {/* Fixed Arrows on Each Side */}

//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           position: "absolute",
//           top: { xs: "15%", sm: "10%", md: "10%" },
//           left: { xs: "75%", sm: "85%" },
//           transform: "translate(-50%, -50%)", // Centers the container horizontally
//         }}
//       >
//         <Button
//           onClick={prevTestimonial}
//           disabled={page === 1} // Disable if on the first page
//           sx={{
//             width: { xs: "40px", md: "60px" },
//             height: { xs: "39px", md: "50px" },
//             borderRadius: "20px",
//             border: "solid 1px",
//             bgcolor: "white",
//             color: page === 1 ? "#D3D3D3" : "#9E9E9E", // Change color if disabled
//             cursor: page === 1 ? "not-allowed" : "pointer",
//             "&:hover": {
//               color: page === 1 ? "#D3D3D3" : "#9E9E9E",
//             },
//           }}
//         >
//           <ChevronLeft
//             sx={{
//               color: page === 1 ? "#D3D3D3" : "black",
//               "&:hover": { color: page === 1 ? "#D3D3D3" : "#9E9E9E" },
//             }}
//           />
//         </Button>

//         <Typography
//           variant="h6"
//           sx={{
//             mx: 1, // Adds horizontal margin between the text and icon buttons
//             color: "#00000",
//             fontWeight: "bold",
//           }}
//         >
//           {page}/5
//         </Typography>

//         <Button
//           onClick={nextTestimonial}
//           disabled={page === 5} // Disable if on the last page
//           sx={{
//             width: { xs: "40px", md: "60px" },
//             height: { xs: "39px", md: "50px" },
//             borderRadius: "20px",
//             border: "solid 1px",
//             bgcolor: "white",
//             color: page === 5 ? "#D3D3D3" : "#9E9E9E", // Change color if disabled
//             cursor: page === 5 ? "not-allowed" : "pointer",
//             "&:hover": {
//               bgcolor: page === 5 ? "white" : "gray",
//             },
//           }}
//         >
//           <ChevronRight
//             sx={{
//               color: page === 5 ? "#D3D3D3" : "black",
//               "&:hover": { color: page === 5 ? "#D3D3D3" : "#9E9E9E" },
//             }}
//           />
//         </Button>
//       </Box>
//     </Grid>
//   );
// }










