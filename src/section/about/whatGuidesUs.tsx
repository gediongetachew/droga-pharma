import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import Image from 'next/image'
import dotedCardImage from '../../../public/dotedCard.png'

export default function whatGuidesUs() {
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
          What Guides Us
        </Typography>
        <Typography sx={{
          fontSize: { xs: '10px', md: '20px' }, 
          fontFamily: 'Plus Jakarta Sans', 
          fontWeight: 600, 
          color: '#777777',
          width: { xs: '100%', md: '50%' }
        }}>
          We are committed to delivering accessible healthcare, sustainable solutions, and professional services that prioritize the well-being of our communities.
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        marginX: {xs:0,md:5},
        marginBottom: 5,
        gap: {xs:5,md:30}
      }}>
        <Box sx={{display:'flex',flexDirection:'column',padding:5, width:{xs:'100%', md:'35%'}, height:'250px', border:'1px solid #737373', borderRadius:'12px'}}>
         
          <Typography sx={{fontSize:{xs:'20px', md:'36px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 600,color:'black',width:'100%'}}>Humanity</Typography>
          <Typography sx={{fontSize:{Xs:'10px', md:'20px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 400, color:'#737373',width:{xs:'100%', md:'90%'}}}>We are committed enough to achieve our target to protect the health of the people through supplying on time delivery of service and products. Our commitment will last long till we achieve our goals as a company as well as individually</Typography>
        </Box>

        <Box sx={{display:'flex',flexDirection:'column',padding:5,  width:{xs:'100%', md:'35%'}, height:'250px', border:'1px solid #737373', borderRadius:'12px'}}>
        
          <Typography sx={{fontSize:{xs:'20px', md:'36px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 600,color:'black',width:'100%'}}>Integrity</Typography>
          <Typography sx={{fontSize:{Xs:'10px', md:'20px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 400, color:'#737373',width:{xs:'100%', md:'90%'}}}>We keep our promise to protect the health of the people. We are honest to ourselves, to our customers and to our society in delivering quality product and service to the healthcare facility of the country.</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        marginX: {xs:0,md:15},
        marginBottom: 5,
        gap: {xs:5,md:30}
      }}>
        
        <Box sx={{display:'flex',flexDirection:'column',padding:5,  width:{xs:'100%', md:'40%'}, height:'250px', border:'1px solid #737373', borderRadius:'12px'}}>
         
         <Typography sx={{fontSize:{xs:'20px', md:'36px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 600,color:'black',width:'100%'}}>Commitment</Typography>
         <Typography sx={{fontSize:{Xs:'10px', md:'20px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 400, color:'#737373',width:{xs:'100%', md:'90%'}}}> We are committed enough to achieve our target to protect the health of the people through supplying on time delivery of service and products. Our commitment will last long till we achieve our goals as a company as well as individually</Typography>
       </Box>
        <Box sx={{display:'flex',flexDirection:'column',padding:5,  width:{xs:'100%', md:'40%'}, height:'250px', border:'1px solid #737373', borderRadius:'12px'}}>
         
          <Typography sx={{fontSize:{xs:'20px', md:'36px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 600,color:'black',width:'100%'}}>Customer Centric</Typography>
          <Typography sx={{fontSize:{Xs:'10px', md:'20px'}, fontFamily:'Plus Jakarta Sans', fontWeight: 400, color:'#737373',width:{xs:'100%', md:'90%'}}}>Our success as a team will be achieved in the fulfillment of the customer demand. We respect human being, honest to ourselves and committed to satisfy our customer needs.</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
