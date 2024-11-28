import { Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import ProductCard from "./ProductsCard";

export default function RelatedProducts() {
  const [activeStep, setActiveStep] = useState(0);

  const products = [
    {
      id: 1,
      image: "/suply1.jpeg",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam accusam nget ut tellus non porttitor ut. Odio nec auctor habitasse sed vel consectetur vel faucibus.",
      tag: "Medicine",
    },
    {
      id: 2,
      image: "/suply2.jpeg",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam accusam nget ut tellus non porttitor ut. Odio nec auctor habitasse sed vel consectetur vel faucibus.",
      tag: "Medicine",
    },
    {
      id: 3,
      image: "/suply3.jpeg",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam accusam nget ut tellus non porttitor ut. Odio nec auctor habitasse sed vel consectetur vel faucibus.",
      tag: "Medicine",
    },
    {
      id: 4,
      image: "/suply1.jpeg",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam accusam nget ut tellus non porttitor ut. Odio nec auctor habitasse sed vel consectetur vel faucibus.",
      tag: "Medicine",
    },
  ];

  return (
    <Box sx={{ mt: 8, mb: 4, paddingLeft: { xs: 0, md: 5 } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "black",
            fontFamily: "Plus Jakarta Sans",
            fontSize: {
              xs: "18px",
              sm: "20px",
              md: "24px",
              lg: "40px",
            },
          }}
        >
          Related Products
        </Typography>
        <IconButton
          sx={{
            mb: { xs: 2, sm: 3, md: 4 },
            border: "1px solid #E0E0E0",
            background: "white",
            borderRadius: { xs: "16px", sm: "20px", md: "24px" },
            px: { xs: 2, sm: 3, md: 5 },
            py: { xs: 1.5, sm: 1.75, md: 3.5 },
            minWidth: { xs: "80px", sm: "100px", md: "120px", lg: "140px" },
            height: { xs: "36px", sm: "40px", md: "48px" },
            "&:hover": {
              border: "1px solid #BDBDBD",
              bgcolor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          <Typography
            sx={{
              ml: { xs: 0.5, sm: 0.75, md: 1 },
              color: "black",
              fontWeight: 500,
              fontFamily: "Plus Jakarta Sans",
              fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "20px" },
            }}
          >
            See All
          </Typography>
        </IconButton>
      </Box>

      {/* Desktop View - 3 items */}
      <Box
        sx={{
          display: { xs: "none", xl: "grid" },
          gridTemplateColumns: "repeat(3, minmax(380px, 1fr))",
          gap: 4,
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Box>

      {/* Mobile View - Swipeable with 3 items per view */}
      <Box
        sx={{
          display: { xs: "block", xl: "none" },
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            px: 2,
            pb: 2,
          }}
          onScroll={(e) => {
            const element = e.target as HTMLElement;
            const scrollPosition = element.scrollLeft;
            const cardWidth = 340 + 24;
            const newStep = Math.round(scrollPosition / cardWidth);
            setActiveStep(newStep);
          }}
        >
          {products.slice(0, 3).map((product) => (
            <Box
              key={product.id}
              sx={{
                flex: "0 0 auto",
                width: {
                  xs: "320px",
                  sm: "340px",
                  md: "400px",
                },
              }}
            >
              <ProductCard {...product} />
            </Box>
          ))}
        </Box>

        {/* Pagination Dots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mt: 2,
          }}
        >
          {products.slice(0, 3).map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 24,
                height: 4,
                borderRadius: "2px",
                bgcolor: index === activeStep ? "#333" : "#E0E0E0",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
