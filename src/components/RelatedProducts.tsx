import { Box, Typography, Button, IconButton } from "@mui/material";
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
    <Box sx={{ mt: 8, mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "black" }}>
          Related Products
        </Typography>
        <IconButton
          sx={{
            mb: 4,
            border: "1px solid #E0E0E0",
            borderRadius: "24px",
            px: 2,
            py: 1,
            "&:hover": {
              border: "1px solid #BDBDBD",
              bgcolor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          <Typography sx={{ ml: 1, color: "black", fontWeight: "bold" }}>
            See All
          </Typography>
        </IconButton>
      </Box>

      {/* Desktop View */}
      <Box
        sx={{
          display: { xs: "none", md: "grid" },
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 3,
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Box>

      {/* Mobile View - Swipeable */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
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
            const cardWidth = 280 + 16; // card width + gap
            const newStep = Math.round(scrollPosition / cardWidth);
            setActiveStep(newStep);
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
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
          {products.map((_, index) => (
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
