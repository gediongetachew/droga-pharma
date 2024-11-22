import ImageCarousel from '@/component/Carousel'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import partnersCard1 from '@/data/partnersCard1'
import partnersCard2 from '@/data/partnersCard2'

export default function OurPartners() {
  return (
   <Grid container sx={{}}>
    <Grid item xs={12}>
       <Typography sx={{fontSize:{xs:'40px', md:'64px'}, fontWeight:600, fontFamily:'Plus Jakarta Sans', color:'black'}}>
        Our Partners
       </Typography>
    </Grid>
   
    <ImageCarousel cards={partnersCard1.map(card => ({...card, img: card.img.src}))} />
    <ImageCarousel cards={partnersCard2.map(card => ({...card, img: card.img.src}))} />

   
   </Grid>
  )
}
                        