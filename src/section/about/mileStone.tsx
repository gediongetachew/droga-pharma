import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image'
import milestoneImage from '../../../public/mileStone.png'
import milestone from '../../../public/milestone.svg'
const milestones = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'Droga Pharma was established with the goal of revolutionizing healthcare.',
    
  },
  {
    year: '2015',
    title: 'First Milestone Achieved',
    description: 'Expanded to 5 cities, making healthcare accessible to more communities.',
   
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Started operations in international markets.',
   
  },
];

export default function JourneySection() {
  return (
    <Box sx={{ 
      padding: '40px 20px',
      position: 'relative',
      minHeight: '100vh', // or any specific height you want
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${milestoneImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.8, // Adjust opacity as needed
        zIndex: 0,
      }
    }}>
      {/* Optional overlay for better text readability */}
      <Box sx={{
        position: 'relative',
        zIndex: 1,
      }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ 
            marginBottom: '20px', 
            fontFamily: 'Plus Jakarta Sans', 
            fontWeight: 500,
            color: 'black', // Adjust text color for visibility
            textAlign:'left'
          }}
        >
          Our Journey
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {milestones.map((milestone, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: 3,
              }}
            >
              <Box
                sx={{
                  width: { xs: '100px', md: '150px' },
                  height: { xs: '100px', md: '150px' },
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={milestone.src}
                  alt={milestone.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 'bold', color: 'black' }}
                >
                  {milestone.year}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 500, color: 'black' }}
                >
                  {milestone.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 400, color: 'black' }}
                >
                  {milestone.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
