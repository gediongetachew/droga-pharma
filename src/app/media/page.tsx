"use client";

import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

interface MediaCard {
  tag: string;
  title: string;
  description: string;
  image: string;
}

export default function Media() {
  const mediaCards: MediaCard[] = [
    {
      tag: "News",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fringilla consequat lorem cursus in lacus eleifend ut ultrices dolor.",
      image: "/media1.png",
    },
    {
      tag: "News",
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
      tag: "News",
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
      tag: "News",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fringilla consequat lorem cursus in lacus eleifend ut ultrices dolor.",
      image: "/media1.png",
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        pt: "150px",
        pb: 8,
        color: "black",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Typography
                component="span"
                sx={{
                  mr: 1,
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "1.2rem",
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
                value="all"
                sx={{
                  bgcolor: "white",
                  borderRadius: "30px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                }}
              >
                <MenuItem value="all">All stuff</MenuItem>
                <MenuItem value="news">News</MenuItem>
                <MenuItem value="events">Events</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "4rem", md: "8rem" },
                fontWeight: 300,
                textAlign: "left",
                color: "transparent",
                WebkitTextStroke: "1px #000",
                letterSpacing: "0.05em",
                lineHeight: 1,
                pl: { xs: 2, md: 25 },
                pt: { xs: 4, md: 6 },
                mt: { xs: 2, md: -4 },
              }}
            >
              Media
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          <Grid item container xs={12} md={6} sx={{ pr: { md: 3 } }}>
            {mediaCards
              .filter((_, index) => index % 2 === 0)
              .map((card, index) => (
                <Grid item xs={12} key={`left-${index}`} sx={{ mb: 0 }}>
                  <Card
                    sx={{
                      width: "100%",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                      bgcolor: "white",
                      borderRadius: "12px",
                      overflow: "hidden",
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
                </Grid>
              ))}
          </Grid>

          <Grid item container xs={12} md={6} sx={{ pl: { md: 3 } }}>
            {mediaCards
              .filter((_, index) => index % 2 === 1)
              .map((card, index) => (
                <Grid
                  item
                  xs={12}
                  key={`right-${index}`}
                  sx={{
                    mb: 15,
                    ...(index === 0 && {
                      mt: { xs: 0, md: 8 },
                    }),
                  }}
                >
                  <Card
                    sx={{
                      width: "100%",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                      bgcolor: "white",
                      borderRadius: "12px",
                      overflow: "hidden",
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
                </Grid>
              ))}

            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center", mt: 4 }}
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
        </Grid>
      </Container>
    </Box>
  );
}
