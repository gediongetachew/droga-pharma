'use client'
import { Box, Typography, Pagination } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import Image from "next/image";
import CallMadeIcon from '@mui/icons-material/CallMade';
import newsAndPodcast from "@/data/nesAndPodcast";

export default function Media() {
  const [page, setPage] = React.useState(1);
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = windowWidth < 900 ? 2 : 4;
  
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Calculate displayed items
  const startIndex = (page - 1) * itemsPerPage;
  const displayedItems = newsAndPodcast.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(newsAndPodcast.length / itemsPerPage);

  return (
    <Grid container spacing={2} sx={{ background: 'white', marginTop: 10}}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between", marginX: {xs:2, md:10}, marginTop: {xs:2, md:10} }}
      >
        <Typography
          sx={{
            fontSize: { xs: "40px", md: "48px" },
            fontWeight: 600,
            fontFamily: "Plus Jakarta Sans",
            color: 'black'
          }}
        >
          Media
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "10px", md: "20px" },
            fontWeight: 400,
            fontFamily: "Plus Jakarta Sans",
            color:'#6D6D6D',
            width: '40%'
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Montes habitant enim a
          maecenas mattis phasellus suscipit tellus nisl. Est ac.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "space-between",marginX:{xs:2, md:10}}}
      >
        {displayedItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", md: "48%" },
              height: {xs: '390px', md: item.id === 2 ? '450px' : '390px'},
              position: "relative",
              border: '3px solid',
              borderRadius: "30px",
            
              background: 'white',
              marginTop: { 
                xs: 2,
                md: item.id === 3 ? -3 : 2 
              },
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "2%",
                left:'1%',
                width: "98%",
                height: { 
                  xs: "50%",
                  md: item.id === 2 ? "60%" : "57%" 
                },
                zIndex: 2,
                borderRadius: "30px",
              }}
            >
              <Image
                src={item.src}
                alt="mediaNews"
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "inherit",
                }}
              />
            </Box>
            
            <Box sx={{ 
              marginTop: { 
                xs: '70%',
                md: item.id === 2 ? '40%' : '33%' 
              }, 
              paddingX: 2 
            }}>
              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "24px" },
                  fontWeight: 700,
                  fontFamily: "Red Hat Display",
                  color: "black",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "15px", md: "20px" },
                  fontWeight: 400,
                  fontFamily: "Red Hat Display",
                  color: "#6D6D6D",
                  marginTop: 2,
                }}
              >
                {item.description}
              </Typography>
            </Box>

            <CallMadeIcon sx={{
              position: 'absolute', 
              top: item.id ===2 ?  '64%':  '62%', 
              right: '3%', 
              color: 'black', 
              scale: { xs: 0.8, md: 1 } 
            }} />
          </Box>
        ))}
      </Grid>

      <Grid item xs={12} sx={{ display: "flex", justifyContent: "start", marginLeft: {xs:5, md:10}}}>
        <Pagination 
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          size="large"
        />
      </Grid>
    </Grid>
  );
}
