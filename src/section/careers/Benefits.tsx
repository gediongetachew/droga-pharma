import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'


export default function Benefits() {
  return (
    <Grid container sx={{ 
      width: '100%', 
      background: 'white',
      padding: { xs: 2, md: 5 },
     
    }}>
      <Grid item xs={12} sx={{
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
      
        marginBottom:{xs:5, md:5}
      }}>
        <Typography sx={{
          fontSize: { xs: '30px', md: '48px' }, 
          fontFamily: 'Plus Jakarta Sans', 
          fontWeight: 600, 
          color: 'black',
          width: { xs: '100%', md: '50%' }
        }}>
         What benefits are 
         waiting for you?
        </Typography>
        <Typography sx={{
          fontSize: { xs: '10px', md: '20px' }, 
          fontFamily: 'Plus Jakarta Sans', 
          fontWeight: 600, 
          color: '#777777',
          width: { xs: '100%', md: '50%' }
        }}>
Lorem ipsum dolor sit amet consectetur. Tristique dignissim sed diam eros hac risus pharetra quis. Eu sollicitudin ut quis a.         </Typography>
      </Grid>

      <Grid item xs={12} sx={{
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        marginX: {xs:0,md:5},
        marginBottom: 5,
        gap: {xs:5,md:30}
      }}>
        <Box sx={{display:'flex',flexDirection:'column',padding:5, width:{xs:'100%', md:'35%'}, height:'350px', border:'1px solid #737373', borderRadius:'12px'}}>
         
          <Typography sx={{fontSize:{xs:'20px', md:'36px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 600,color:'black',width:'100%'}}>Competitive Salary</Typography>
          <Typography sx={{fontSize:{Xs:'10px', md:'20px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 400, color:'#737373',width:{xs:'100%', md:'90%'}}}>Lorem ipsum dolor sit amet consectetur. Enim quis elit arcu quam fringilla turpis ornare amet. Accumsan tristique neque id molestie phasellus egestas. Lectus suspendisse elit massa viverra adipiscing faucibus donec est. Arcu purus donec morbi amet est vivamus magna.
          Odio at neque fermentum faucibus at amet justo.</Typography>
        </Box>

        <Box sx={{display:'flex',flexDirection:'column',padding:5,  width:{xs:'100%', md:'35%'}, height:'350px', border:'1px solid #737373', borderRadius:'12px'}}>
        
          <Typography sx={{fontSize:{xs:'20px', md:'36px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 600,color:'black',width:'100%'}}>Professional Growth</Typography>
          <Typography sx={{fontSize:{Xs:'10px', md:'20px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 400, color:'#737373',width:{xs:'100%', md:'90%'}}}>Lorem ipsum dolor sit amet consectetur. Varius quis pretium in sed ultrices aliquam. Tellus id nibh et amet mattis. Mi id neque rhoncus sit adipiscing est dui interdum ac. Nulla velit ut elementum ac sed at pretium dui. </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        marginX: {xs:0,md:15},
        marginBottom: 5,
        gap: {xs:5,md:30}
      }}>
        
        <Box sx={{display:'flex',flexDirection:'column',padding:5,  width:{xs:'100%', md:'40%'}, height:'350px', border:'1px solid #737373', borderRadius:'12px'}}>
         
         <Typography sx={{fontSize:{xs:'20px', md:'36px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 600,color:'black',width:'100%'}}>Health Care Insurace</Typography>
         <Typography sx={{fontSize:{Xs:'10px', md:'20px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 400, color:'#737373',width:{xs:'100%', md:'90%'}}}>Lorem ipsum dolor sit amet consectetur. Enim quis elit arcu quam fringilla turpis ornare amet. Accumsan tristique neque id molestie phasellus egestas. Lectus suspendisse </Typography>
       </Box>
        <Box sx={{display:'flex',flexDirection:'column',padding:5,  width:{xs:'100%', md:'40%'}, height:'350px', border:'1px solid #737373', borderRadius:'12px'}}>
         
          <Typography sx={{fontSize:{xs:'20px', md:'36px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 600,color:'black',width:'100%'}}>Fun Team Events</Typography>
          <Typography sx={{fontSize:{Xs:'10px', md:'20px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 400, color:'#737373',width:{xs:'100%', md:'90%'}}}>Lorem ipsum dolor sit amet consectetur. Enim quis elit arcu quam fringilla turpis ornare amet. Accumsan tristique neque id molestie phasellus egestas. Lectus suspendisse elit massa viverra adipiscing faucibus donec est. </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
