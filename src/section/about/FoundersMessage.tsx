'use client'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import Image from 'next/image';
import vector from '../../../public/Vector.svg';
import founder from '../../../public/founder.png';
import InvertedBorder from '@/component/InvertedBorder';

export default function FoundersMessage({ reverse }: { reverse?: boolean }) {
  return (
    <Grid container sx={{ background: '#F5F5F5' }}>
      <Grid item xs={12} sx={{ background: 'gray', margin: 5, borderRadius: '24px', overflow: 'hidden' }}>
        <Grid container sx={{ background: 'white' }}>
          {reverse ? (
            <>
              <Grid item xs={12} md={6}>
                <InvertedBorder name='aboutus' />
              </Grid>
              <Grid
                item
                xs={12}
                md={5.5}
                sx={{ display: 'flex', flexDirection: 'column', padding: {xs:2, md:10} }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '20px', md: '32px' },
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    width: '90%',
                    color: 'black',
                  }}
                >
                  Founders Message
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '10px', md: '20px' },
                    fontFamily: 'Sego Ui',
                    fontWeight: 400,
                    width: '100%',
                    color: '#686868',
                  }}
                >
                  Welcome to Droga Pharma, where our journey began with a simple yet profound vision: to
                  make healthcare accessible, sustainable, and reliable for everyone. As the founder of
                  this organization, my mission has always been to bridge the gap between professional
                  care and the communities we serve, ensuring quality healthcare is within everyone's
                  reach.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '10px', md: '20px' },
                    fontFamily: 'Sego Ui',
                    fontWeight: 400,
                    width: '100%',
                    color: '#686868',
                  }}
                >
                  Thank you for trusting us with your health and well-being. Together, we are building a
                  brighter and healthier future.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                    justifyItems: 'center',
                    marginTop: 5,
                  }}
                >
                  <Image src={vector} alt="quotation" style={{ marginBottom: '-2rem' }} />
                  <Typography
                    sx={{
                      fontSize: { xs: '15px', md: '24px' },
                      fontFamily: 'Sego Ui',
                      fontWeight: 400,
                      color: 'black',
                      marginLeft: 5,
                    }}
                  >
                    The heart of Droga Pharma lies in our unwavering commitment to making healthcare
                    accessible{' '}
                  </Typography>
                  <Box
                    sx={{
                      width: { xs: '40px', sm: '50px', md: '60px' },
                      height: { xs: '30px', sm: '50px', md: '60px' },
                      position: 'relative',
                      marginLeft: 5,
                      marginTop: 5,
                    }}
                  >
                    <Image
                      src={founder}
                      alt="tropy-img"
                      layout="fill"
                      style={{ borderRadius: '100px' }}
                    />
                    <Box sx={{ marginLeft: { xs: 7, md: 10 } }}>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          fontSize: { xs: 10, sm: 20, md: 20 },
                          color: 'black',
                          textWrap: 'nowrap',
                        }}
                      >
                        Philimon Mehari
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: '#475467',
                          fontSize: { xs: 6, sm: 15, md: 20 },
                          textWrap: 'nowrap',
                        }}
                      >
                        CEO
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                item
                xs={12}
                md={5.5}
                sx={{ display: 'flex', flexDirection: 'column', padding: {xs:2, md:10} }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '20px', md: '32px' },
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    width: '90%',
                    color: 'black',
                  }}
                >
                  Founders Message
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '10px', md: '20px' },
                    fontFamily: 'Sego Ui',
                    fontWeight: 400,
                    width: '100%',
                    color: '#686868',
                  }}
                >
                  Welcome to Droga Pharma, where our journey began with a simple yet profound vision: to
                  make healthcare accessible, sustainable, and reliable for everyone. As the founder of
                  this organization, my mission has always been to bridge the gap between professional
                  care and the communities we serve, ensuring quality healthcare is within everyone's
                  reach.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '10px', md: '20px' },
                    fontFamily: 'Sego Ui',
                    fontWeight: 400,
                    width: '100%',
                    color: '#686868',
                  }}
                >
                  Thank you for trusting us with your health and well-being. Together, we are building a
                  brighter and healthier future.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                    justifyItems: 'center',
                    marginTop: 5,
                  }}
                >
                  <Image src={vector} alt="quotation" style={{ marginBottom: '-2rem' }} />
                  <Typography
                    sx={{
                      fontSize: { xs: '15px', md: '24px' },
                      fontFamily: 'Sego Ui',
                      fontWeight: 400,
                      color: 'black',
                      marginLeft: 5,
                    }}
                  >
                    The heart of Droga Pharma lies in our unwavering commitment to making healthcare
                    accessible{' '}
                  </Typography>
                  <Box
                    sx={{
                      width: { xs: '40px', sm: '50px', md: '60px' },
                      height: { xs: '30px', sm: '50px', md: '60px' },
                      position: 'relative',
                      marginLeft: 5,
                      marginTop: 5,
                    }}
                  >
                    <Image
                      src={founder}
                      alt="tropy-img"
                      layout="fill"
                      style={{ borderRadius: '100px' }}
                    />
                    <Box sx={{ marginLeft: { xs: 7, md: 10 } }}>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          fontSize: { xs: 10, sm: 20, md: 20 },
                          color: 'black',
                          textWrap: 'nowrap',
                        }}
                      >
                        Philimon Mehari
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: '#475467',
                          fontSize: { xs: 6, sm: 15, md: 20 },
                          textWrap: 'nowrap',
                        }}
                      >
                        CEO
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <InvertedBorder />
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
