import { List, ListItem, ListItemText, ListItemIcon, ListItemButton, Box, Button, InputLabel } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React from 'react'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import positionData from '@/data/positonsData';
import SearchIcon from '@mui/icons-material/Search';
import SvgIcon from '@mui/material/SvgIcon';
import positions from '@/data/filterItem'
export default function OpenPositions() {
  return (
    <Grid container sx={{color:'#F5F5F5'}}>
      <Grid item xs={12} sx={{display:'flex', flexDirection:'row', background:'#F5F5F5', padding:4,  justifyContent:'center'}}>
         <Typography sx={{fontSize:{xs:'20px', md:'48px'}, fontFamily:'Plus Jakarta Sans', fontWeight:600, color:'black'}}>we have 17 open positions now!</Typography>
      </Grid>

    <Grid item xs={12} sx={{background:'#F5F5F5'}}>
         <Grid container sx={{
           display:'flex', 
           justifyContent:'space-between',
           paddingX: { xs: 2, md: 15 }
         }}>

              <Grid item xs={0} md={3} sx={{display:{xs:'none', md:'flex', height:'63vh'}}}>
                <Paper elevation={3} sx={{background:'white', borderRadius:'24px', paddingY:4, paddingX:2,  margin:{
                            xs:1, md:4}, }}>
                    <Typography sx={{display:'flex',alignItems:'center', justifyContent:'left',paddingLeft:4, fontSize: {xs:'36px'}, fontWeight:700}}>
                        Filter <FiberManualRecordRoundedIcon sx={{ scale: 0.5, marginLeft:5}}/> 
                        <span style={{ fontSize: '14px', color: '#777777' }}>By Postion</span>
                    </Typography>
                    <List sx={{display:'flex', flexDirection:'column', gap:2}}>

                       {positions.map((item, index)=>(
                         <ListItemButton key={index} sx={{ 
                             justifyContent: 'space-between',
                             width: '100%',
                             paddingLeft: 4, 
                             borderBottom: '1px solid #B4B4B4' 
                         }}>
                            <ListItemText 
                                primary={item.name} 
                                sx={{
                                    fontSize: {xs: '12px', md: '24px'}, 
                                    fontFamily: 'Plus Jakarta Sans', 
                                    fontWeight: 500, 
                                    color: '#4F4F4F'
                                }}
                            />
                            <Button sx={{
                                minWidth: '34px',
                                width: '34px',
                                height: '34px',
                                padding: 0,
                                borderRadius: '50%',
                                border: '1px solid #DDDDDD',
                                fontFamily: 'Plus Jakarta Sans',
                                fontWeight: 500,
                                fontSize: {xs: '14px', md: '16px'},
                                color:'black'
                            }}>
                                {item.number}
                            </Button>
                         </ListItemButton>
                  
                       ))}
                     
                        
                        
                    </List>
                    <Typography sx={{fontSize:{xs:'8px', md:'16px',padding:4, fontFamily:'Plus Jakarta Sans', fontWeight:400, color:'#53648B'}}}>We are always seeking talented people. In case you cannot find your desired position here, please send us your LinkedIn profile and give us your contact information. We will be in touch. </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={8} sx={{display:'flex', flexDirection:'column', alignContent:'space-between', }}>
                <Box sx={{display:'flex', width:{xs:'100%', md:'93%' }, gap:2,  margin:{
                            xs:1, md:0}, marginTop:{xs:0, md:4}  }}>
                <InputLabel sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 2,
                    background: 'white',
                    border: '#535353',
                    borderRadius: '24px',
                    width: {xs: '75%', md: '100%'},
                    height: {xs: '80%', md: '100%'},
                    fontSize: {xs: '10px', md: '24px'},
                    color: '#535353',
                    padding: 2,
                    marginLeft: {xs: 0, md: 4}
                }}>
                    <SearchIcon sx={{ scale: {xs:1, md:1.5} }} />
                    Search for job here
                </InputLabel>
                <InputLabel  sx={{
                    display: {xs:'flex', md:'none'},
                    alignItems: 'center',
                    justifyContent: 'center',
                   
                    background: 'white',
                    border: '#535353',
                    width: {xs: '25%', md: '0%'},
                    height: {xs: '80%'},
                    borderRadius: '24px',
                    color: 'black'
                }}>
                    <SvgIcon viewBox="0 0 16 16" sx={{scale: .5}}>
                        <path d="M4.66602 14V12" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.334 14V10" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.334 4V2" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.66602 6V2" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.66602 12C4.04476 12 3.73414 12 3.4891 11.8985C3.1624 11.7632 2.90284 11.5036 2.76751 11.1769C2.66602 10.9319 2.66602 10.6213 2.66602 10C2.66602 9.37873 2.66602 9.06813 2.76751 8.82307C2.90284 8.4964 3.1624 8.2368 3.4891 8.10147C3.73414 8 4.04476 8 4.66602 8C5.28727 8 5.5979 8 5.84293 8.10147C6.16963 8.2368 6.4292 8.4964 6.56452 8.82307C6.66602 9.06813 6.66602 9.37873 6.66602 10C6.66602 10.6213 6.66602 10.9319 6.56452 11.1769C6.4292 11.5036 6.16963 11.7632 5.84293 11.8985C5.5979 12 5.28727 12 4.66602 12Z" stroke="black"/>
                        <path d="M11.334 8C10.7127 8 10.4021 8 10.1571 7.89853C9.83038 7.7632 9.57078 7.5036 9.43545 7.17693C9.33398 6.93187 9.33398 6.62125 9.33398 6C9.33398 5.37875 9.33398 5.06812 9.43545 4.82309C9.57078 4.49639 9.83038 4.23682 10.1571 4.10149C10.4021 4 10.7127 4 11.334 4C11.9553 4 12.2659 4 12.5109 4.10149C12.8376 4.23682 13.0972 4.49639 13.2325 4.82309C13.334 5.06812 13.334 5.37875 13.334 6C13.334 6.62125 13.334 6.93187 13.2325 7.17693C13.0972 7.5036 12.8376 7.7632 12.5109 7.89853C12.2659 8 11.9553 8 11.334 8Z" stroke="black"/>
                    </SvgIcon>
                    <Typography sx={{
                        fontSize: {xs: '10  px', md: '12px'},
                        fontFamily: 'Plus Jakarta Sans',
                        fontWeight: 500,
                        color: 'black'
                    }}>
                        Filter
                    </Typography>
                </InputLabel>
                
                </Box>
                  {positionData.map((position)=>(
                    <Paper elevation={3} sx={{
                        display:'flex',
                        flexDirection:'column',
                        gap:2, 
                        margin:{
                            xs:1, md:4}, 
                        width:{xs:'auto', md:'90%'}, 
                        borderRadius:'24px', 
                        padding:{xs:2,md:4}
                    }}>
                        <Typography sx={{fontSize:{xs:'xs:15px', md:'28px'}, fontFamily:'Plus Jakarta Sans', fontWeight:600, color:'#090808'}}>{position.name}</Typography>
                        <Box sx={{display:'flex', width:'100%', gap:1}}>
                            <Button sx={{fontsize:{xs:'5px', md:'10px'}, fontFamily:'Plus Jakarta Sans', fontWeight:500, color:'#090808', paddindX:{xs:4, md:3}, border:'1px solid #E0E0E0', borderRadius:'29px'}}>{position.experience}</Button>
                            <Button sx={{fontsize:{xs:'5px', md:'10px'}, fontFamily:'Plus Jakarta Sans', fontWeight:500, color:'#090808', paddindX:{xs:4, md:3}, border:'1px solid #E0E0E0', borderRadius:'29px'}}>{position.deal}</Button>

                        </Box>
                        <Typography sx={{fontSize:{xs:'10px', md:'16px'}, fontFamily:'Plus Jakarta Sans', fontWeight:400, color:'#090808'}}>{position.description}</Typography>
                        <Button component='a' href='/positions' endIcon={<ArrowForwardRoundedIcon sx={{fontSize:{xs:'12px',md:'16px'}, color:'#FCEE23'}}/>} sx={{
                            fontSize: {xs: '10px', md: '16px'},
                            width: {xs:'120px',md:'160px'},
                            height: {xs:'34px', md:'48px'},
                            background:'#090808',
                            color:'#FCEE23',
                            alignSelf:'flex-end',
                            borderRadius:'29px'
                        }}>
                        See Position</Button>
                    </Paper>
                  ))}


              </Grid>
         </Grid>
    </Grid>
    </Grid>
  )
}
