'use client'
import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';


interface MediaCard {
  tag: string;
  title: string;
  description: string;
  image: string;
}

const MediaContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const MediaGrid = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  &:nth-of-type(2) {
    margin-top: 150px;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const MediaItem = styled.div`
  break-inside: avoid;
  
  img {   
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }
`;

const Media = () => {
  const mediaCards: MediaCard[] = [
    {
      tag: "News",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fringilla consequat lorem cursus in lacus eleifend ut ultrices dolor.",
      image: "/media1.png",
    },
    {
      tag: "blog",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fringilla consequat lorem cursus in lacus eleifend ut ultrices dolor.",
      image: "/media2.png",
    },
    {
      tag: "News",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fringilla consequat lorem cursus in lacus eleifend ut ultrices dolor.",
      image: "/media3.png",
    },
    {
      tag: "blog",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fringilla consequat lorem cursus in lacus eleifend ut ultrices dolor.",
      image: "/media4.png",
    },
    {
      tag: "News",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fringilla consequat lorem cursus in lacus eleifend ut ultrices dolor.",
      image: "/media2.png",
    },
    {
      tag: "blog",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fringilla consequat lorem cursus in lacus eleifend ut ultrices dolor.",
      image: "/media1.png",
    },
  ];

  const [filterValue, setFilterValue] = React.useState('all');

  const handleFilterChange = (event: any) => {
    setFilterValue(event.target.value);
  };

  const filteredCards = React.useMemo(() => {
    if (filterValue === 'all') {
      return mediaCards;
    }
    return mediaCards.filter(card => 
      card.tag.toLowerCase() === filterValue.toLowerCase()
    );
  }, [filterValue, mediaCards]);

  return (
    <Grid 
      container 
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        bgcolor: '#F5F5F5',
      
      }}
    >
      <Grid item>
     
        <Grid container sx={{ paddingX:{xs:2, md:10}, paddingTop:{xs:10, md:20}, paddingBottom:5 }}>
          <Grid item xs={12} md={4} sx={{
            display: 'flex', 
            flexDirection:'column',
            justifyContent: 'center', 
            alignContent: 'center',
           
            
          }}>
            <Box sx={{ mb: 1, display:'flex', justifyContent:'flex-start', gap:3, alignItems:'center'
             }}>
              <Typography
                component="span"
                sx={{
                 
                  fontWeight: "bold",
                  color: "black",
                  fontSize: {xs:'1.5rem', md:"2.2rem"},
              
                }}
              >
                Filter
              </Typography>
              <Typography component="span" sx={{ color: "text.secondary" }}>
                • By Topic
              </Typography>
            </Box>
            <FormControl fullWidth>
              <Select
                value={filterValue}
                onChange={handleFilterChange}
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  bgcolor: "white",
                  borderRadius: "30px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiSelect-icon": {
                    color: "black",
                 
                    transition: "transform 0.2s",
                  },
                  "&.Mui-focused .MuiSelect-icon": {
                    transform: "rotate(180deg)",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      mt: 1,
                      borderRadius: '15px',
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
                      "& .MuiList-root": {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        justifyContent: 'start',
                        pl: 2,
                      },
                      "& .MuiMenuItem-root": {
                        display: 'flex',
                        width: 'auto',
                        minWidth: '120px',
                        minHeight: '38px',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        color: 'black',
                        borderRadius: '30px',
                        border: '1px solid transparent',
                        "&:hover": {
                          bgcolor: 'transparent',
                          border: '1px solid black',
                        },
                        "&.Mui-selected": {
                          bgcolor: 'transparent',
                          color: 'black',
                          border: '1px solid black',
                        },
                        "&.Mui-selected:hover": {
                          bgcolor: 'transparent',
                          border: '1px solid black',
                        }
                      }
                    }
                  },
                  MenuListProps: {
                    sx: {
                   
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }
                  },
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  }
                }}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="news">News</MenuItem>
                <MenuItem value="blog">Blog</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={8} sx={{
          
            display: 'flex',
            justifyContent: {xs:'left', md:'center'}
          }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "4rem", md: "10rem" },
                fontWeight: 300,
                color: "transparent",
                WebkitTextStroke: "1px #000",
                letterSpacing: "0.05em",
                lineHeight: 1,
                pl: { xs: 2, md: 25 },
                pt: { xs: 4, md: 6 },
                mt: { xs: 0, md:0 },
                mb:{xs:0, md:-30}
              }}
            >
              Media
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <MediaContainer>
      <MediaGrid>
        <Column>
          {filteredCards.slice(0, Math.ceil(filteredCards.length / 2)).map((card, index) => (
            <MediaItem key={index}>
              <Card
                sx={{
                  width: "100%",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                  bgcolor: "white",
                  borderRadius: "12px",
                  
                }}
              >
                <CardContent sx={{ p: 2.5 }}>
                  <Chip
                    label={card.tag}
                    size="small"
                    sx={{
                      mb: 1.5,
                      borderRadius: "16px",
                      bgcolor: "#F8F9FB",
                      border: "solid 1px #000",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 1,
                    }}
                  >
                    <Typography variant="h6" sx={{ flex: 1 }}>
                      {card.title}
                    </Typography>
                    <ArrowForwardIcon
                      sx={{
                        transform: "rotate(-45deg)",
                        fontWeight: "bold",
                        fontSize: "24px",
                        cursor: "pointer",
                        color: "#000",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {card.description}
                  </Typography>
                  <Box
                    component="img"
                    src={card.image}
                    alt={card.title}
                    sx={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </CardContent>
              </Card>
            </MediaItem>
          ))}
        </Column>
        <Column>
          {filteredCards.slice(Math.ceil(filteredCards.length / 2)).map((card, index) => (
            <MediaItem key={index}>
              <Card
                sx={{
                  width: "100%",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                  bgcolor: "white",
                  borderRadius: "12px",
                  
                }}
              >
                <CardContent sx={{ p: 2.5 }}>
                  <Chip
                    label={card.tag}
                    size="small"
                    sx={{
                      mb: 1.5,
                      borderRadius: "16px",
                      bgcolor: "#F8F9FB",
                      border: "solid 1px #000",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 1,
                    }}
                  >
                    <Typography variant="h6" sx={{ flex: 1 }}>
                      {card.title}
                    </Typography>
                    <ArrowForwardIcon
                      sx={{
                        transform: "rotate(-45deg)",
                        fontWeight: "bold",
                        fontSize: "24px",
                        cursor: "pointer",
                        color: "#000",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {card.description}
                  </Typography>
                  <Box
                    component="img"
                    src={card.image}
                    alt={card.title}
                    sx={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </CardContent>
              </Card>
            </MediaItem>
          ))}
        </Column>
      </MediaGrid>
    </MediaContainer>
    <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "end", paddingX:{xs:10, md:40}, paddingBottom:{xs:5, md:30}, paddingTop:{xs:2, md:10} }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FFE600",
                  color: "black",
                  borderRadius: "50px",
                  px: 4,
                  py: 2,
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  "&:hover": {
                    bgcolor: "#FFD700",
                  },
                  boxShadow: "none",
                }}
              >
                Load More
              </Button>
            </Grid>
    </Grid>
    
  );
};

export default Media;
