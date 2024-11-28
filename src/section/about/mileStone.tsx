import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image'
import milestoneImage from '../../../public/mileStone.png'

const milestones = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'Droga Pharma was established ',
    
  },
  {
    year: '2015',
    title: 'First Milestone Achieved',
    description: 'Expanded to 5 cities,',
   
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Started operations ',
   
  },
];

export default function JourneySection() {
  return (
    <Box sx={{ 
      padding: '30px 10px',
      position: 'relative',
      minHeight: '100vh',
      background: 'white',
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
        opacity: 2,
        zIndex: 1,
      }
    }}>

     
      {/* Optional overlay for better text readability */}
      <Box sx={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap:20
      }}>
         <Typography
          variant="h4"
          align="center"
          sx={{ 
            
            fontFamily: 'Plus Jakarta Sans', 
            fontWeight: 600,
            fontSize: {xs:'32px', md:'64px'},
            color: 'black', // Adjust text color for visibility
            textAlign:'left',
            zIndex:3,
            paddingLeft: {xs:2, md:0}
          }}
        >
          Our Journey
        </Typography>
         
         <Grid container sx={{display:{xs:'block', md:'none'}}}>
         {milestones.map((milestone, index) => (
           <Grid item xs={12} key={index} sx={{display: 'flex', flexDirection:'column'}}>
             <Box sx={{display:'flex',flexDirection:'column', padding:5}}>
             <Box
                sx={{
                  width: { xs: '50px', md: '50px' },
                  height: { xs: '100px', md: '50px' },
                  borderRadius: '50%',
                  position: 'relative',
                  marginRight:{xs:0, md:20} 
                }}
              >
                
                <Image
                  src="/milestone.svg"
                  width={100}
                  height={100}
                  alt={milestone.title}
                  style={{ width: '100%', height: '100%', zIndex: 3 }}
                />
              </Box>
              <Box sx={{ 
                width: { xs: '100%', md: '250px' },
                maxWidth: '100%',
                padding: { xs: 2, md: 0 },
                marginRight:{xs:0, md:30}
              }}>
                <Typography
                  variant="h6"
                  sx={{ 
                    fontFamily: 'Plus Jakarta Sans', 
                    fontWeight: 'bold', 
                    color: 'black',
                    fontSize: { xs: '18px', md: '24px' },
                  }}
                >
                  {milestone.year}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ 
                    fontFamily: 'Plus Jakarta Sans', 
                    fontWeight: 500, 
                    color: 'black',
                    fontSize: { xs: '16px', md: '20px' },
                  }}
                >
                  {milestone.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ 
                    fontFamily: 'Plus Jakarta Sans', 
                    fontWeight: 400, 
                    color: 'black',
                    fontSize: { xs: '14px', md: '16px' },
                  }}
                >
                  {milestone.description}
                </Typography>
              </Box>
             </Box>
              <Box sx={{display:'flex',marginLeft:{xs:'auto'} }}>
              <Box
                sx={{
                  width: { xs: '80px', md: '50px' },
                  height: { xs: '100px', md: '50px' },
                  borderRadius: '50%',
                  position: 'relative',
                  marginRight:{xs:0, md:20} ,
                  
                }}
              >
                
                <Image
                  src="/milestone.svg"
                  width={100}
                  height={100}
                  alt={milestone.title}
                  style={{ width: '100%', height: '100%', zIndex: 3 }}
                />
              </Box>
              <Box sx={{ 
                width: { xs: '100%', md: '250px' },
                maxWidth: '100%',
                padding: { xs: 2, md: 0 },
                marginRight:{xs:0, md:20}
              }}>
                <Typography
                  variant="h6"
                  sx={{ 
                    fontFamily: 'Plus Jakarta Sans', 
                    fontWeight: 'bold', 
                    color: 'black',
                    fontSize: { xs: '18px', md: '24px' },
                  }}
                >
                  {milestone.year}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ 
                    fontFamily: 'Plus Jakarta Sans', 
                    fontWeight: 500, 
                    color: 'black',
                    fontSize: { xs: '16px', md: '20px' },
                  }}
                >
                  {milestone.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ 
                    fontFamily: 'Plus Jakarta Sans', 
                    fontWeight: 400, 
                    color: 'black',
                    fontSize: { xs: '14px', md: '16px' },
                  }}
                >
                  {milestone.description}
                </Typography>
              </Box>
              </Box>
              
           </Grid>
           
          ))}
         </Grid>


        <Grid container spacing={3} justifyContent="center" sx={{display:{xs:'none', md:'flex', padding:{xs:0, md:10, lg:0}}}}>
          {milestones.map((milestone, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              sx={{
                display: 'flex',
                
                flexDirection: { xs: 'column', md: 'column' },
                alignItems: 'center',
                gap: 3,
              
              }}
            >
              

              <Box sx={{ 
                width: { xs: '100%', md: '250px' },
                maxWidth: '100%',
                padding: { xs: 2, md: 0 },
                marginRight:{xs:0, md:10, lg:20}
              }}>
                <Typography
                  variant="h6"
                  sx={{ 
                    fontFamily: 'Plus Jakarta Sans', 
                    fontWeight: 'bold', 
                    color: 'black',
                    fontSize: { xs: '18px', md: '20px', lg:'24px' },
                  }}
                >
                  {milestone.year}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ 
                    fontFamily: 'Plus Jakarta Sans', 
                    fontWeight: 500, 
                    color: 'black',
                    fontSize: { xs: '16px', md: '18px', lg:'20px' },
                  }}
                >
                  {milestone.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ 
                    fontFamily: 'Plus Jakarta Sans', 
                    fontWeight: 400, 
                    color: 'black',
                    fontSize: { xs: '14px', md: '14px', lg:'16px' },
                  }}
                >
                  {milestone.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: '100px', md: '50px' },
                  height: { xs: '100px', md: '50px' },
                  borderRadius: '50%',
                  position: 'relative',
                  marginRight:{xs:0, md:30, lg:20} 
                }}
              >
                
                <Image
                  src="/milestone.svg"
                  width={100}
                  height={100}
                  alt={milestone.title}
                  style={{ width: '100%', height: '100%', zIndex: 3 }}
                />
                
                {index <=milestones.length - 1 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      width: { xs: '0px', md: '300px' },
                      height: { xs: '50px', md: '2px' },
                      background: 'black',
                      transform: {
                        xs: 'rotate(45deg)',
                        md: index % 2 === 0 ? 'rotate(-144deg)' : 'rotate(-144deg)'
                      },
                      top: '260%',
                      left:  '40%' ,
                      right: '100%' ,
                      zIndex: 2,
                      marginLeft:  'auto',
                      marginRight:  'auto',
                    }}
                  />
                )}
              </Box>
            </Grid>
            
          ))}
        </Grid>
        <Grid container spacing={3} justifyContent="center" sx={{display:{xs:'none', md:'flex'}}}>
          {milestones.map((milestone, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              sx={{
                display: 'flex',
                
                flexDirection: { xs: 'column', md: 'column' },
                alignItems: 'right',
                
                
              }}
            >
              

              <Box
                sx={{
                  width: { xs: '100px', md: '50px' },
                  height: { xs: '100px', md: '50px' },
                  borderRadius: '50%',
                  marginLeft: { xs: 0, md: 56 },
                  position: 'relative',
                }}
              >
                {index < milestones.length - 1 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      width: { xs: '0px', md: '295px' },
                      height: { xs: '50px', md: '2px' },
                      background: 'black',
                      transform: {
                        xs: 'rotate(45deg)',
                        md: 'rotate(-38deg)'
                      },
                      top: '30%',
                      left: '80%',
                      transformOrigin: '0 0',
                      zIndex: 2,
                    }}
                  />
                )}
                <Image
                  src="/milestone.svg"
                  width={50}
                  height={80}
                  alt={milestone.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    zIndex: 3,
                    position: 'relative'
                  }}
                />
              </Box>

              <Box sx={{ 
                width: { xs: '100%', md: '100%' },
                maxWidth: '100%',
                padding: { xs: 2, md: 0 },
                marginLeft: { xs: 0, md: 35 },
              }}>
                <Typography
                  variant="h6"
                  sx={{ 
                    fontFamily: 'Plus Jakarta Sans', 
                    fontWeight: 'bold', 
                    color: 'black',
                    fontSize: { xs: '18px', md: '24px' },
                  }}
                >
                  {milestone.year}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ 
                    fontFamily: 'Plus Jakarta Sans', 
                    fontWeight: 500, 
                    color: 'black',
                    fontSize: { xs: '16px', md: '20px' },
                  }}
                >
                  {milestone.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ 
                    fontFamily: 'Plus Jakarta Sans', 
                    fontWeight: 400, 
                    color: 'black',
                    fontSize: { xs: '14px', md: '16px' },
                  }}
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