"use client";

import { useState } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import CustomPagination from "@/components/CustomePagination";
import Products from "@/section/landing/products";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Medicine",
    imageUrl: "/mometop.png",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Medicine",
    imageUrl: "/dorzy.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Devices",
    imageUrl: "/optifreesh.png",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Equipment",
    imageUrl: "/Smi.png",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Supplies",
    imageUrl: "/mometop.png",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Medicine",
    imageUrl: "/optifreesh.png",
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Devices",
    imageUrl: "/dorzy.png",
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Medicine",
    imageUrl: "/Smi.png",
  },
];

const categories = [
  "Medicine",
  "Supplies",
  "Devices",
  "Supplies",
  "Equipment",
];

export default function ProductsCMP() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const productsPerPage = 6;

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  // Calculate pagination with filtered products
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Deselect if clicking the same category
    } else {
      setSelectedCategory(category);
    }
    setPage(1); // Reset to first page when changing category
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        bgcolor: "#F8F9FB",
        pt: "150px",
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          color="text.primary"
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: "bold",
            px: { xs: 2, md: 38 },
          }}
        >
          Featured Products
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: 250 },
              px: { xs: 2, md: 0 },
            }}
          >
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <Typography
                color="text.primary"
                variant="h6"
                sx={{ fontWeight: "bold" }}
              >
                Filter
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "black",
                  }}
                />
                <Typography color="text.secondary">By Category</Typography>
              </Box>
            </Box>

            {categories.map((category, index) => (
              <Paper
                key={index}
                sx={{
                  width: "100%",
                  p: 2,
                  mb: 1,
                  cursor: "pointer",
                  bgcolor: selectedCategory === category ? 'grey.200' : 'white',
                  "&:hover": { bgcolor: "grey.100" },
                }}
                onClick={() => handleCategoryClick(category)}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  gap={1}
                >
                  {category}
                  <ExpandCircleDownIcon 
                    sx={{ 
                      fontSize: 20,
                      transform: selectedCategory === category ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.3s ease'
                    }} 
                  />
                </Box>
              </Paper>
            ))}
          </Box>
          <Box
            sx={{
              flex: 1,
              px: { xs: 2, md: 0 },
            }}
          >
            <Box
              sx={{
                minHeight: '800px',
                display: "flex",
                flexDirection: "column",
                gap: 3
              }}
            >
              <Box
                display="grid"
                gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
                gap={3}
              >
                {currentProducts.length === 0 ? (
                  <Box 
                    sx={{ 
                      width: '100%', 
                      textAlign: 'center', 
                      py: 4,
                      gridColumn: '1 / -1'
                    }}
                  >
                    <Typography color="text.secondary">
                      No products found in this category
                    </Typography>
                  </Box>
                ) : (
                  currentProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/detailproducts`}
                      style={{ textDecoration: "none" }}
                    >
                      <Paper
                        sx={{
                          overflow: "hidden",
                          borderRadius: "16px",
                          maxWidth: { xs: "100%", md: "500px" },
                          bgcolor: "white",
                          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                          cursor: "pointer",
                          transition: "transform 0.2s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.02)",
                          },
                        }}
                      >
                        <Box
                          position="relative"
                          sx={{
                            aspectRatio: "16/10",
                            width: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              top: 16,
                              left: 16,
                              right: 16,
                              bottom: 16,
                              borderRadius: "12px",
                              overflow: "hidden",
                              bgcolor: "#F8F9FB",
                            }}
                          >
                            <Image
                              src={product.imageUrl}
                              alt={product.title}
                              fill
                              className="object-contain p-4"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </Box>
                          <Box
                            sx={{
                              position: "absolute",
                              top: 30,
                              right: 26,
                              bgcolor: "black",
                              color: "white",
                              px: 2,
                              py: 1,
                              borderRadius: "16px",
                              fontSize: "0.875rem",
                              zIndex: 1,
                            }}
                          >
                            {product.category}
                          </Box>
                        </Box>
                        <Box p={2}>
                          <Typography
                            variant="h6"
                            sx={{ 
                              mb: 0.5,
                              fontWeight: "bold",
                              fontSize: { xs: '1rem', md: '1.1rem' }
                            }}
                          >
                            {product.title}
                          </Typography>
                          <Typography 
                            color="text.secondary"
                            sx={{
                              fontSize: { xs: '0.875rem', md: '0.9rem' },
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}
                          >
                            {product.description}
                          </Typography>
                        </Box>
                      </Paper>
                    </Link>
                  ))
                )}
              </Box>

              <Box sx={{ mt: 'auto', pt: 4 }}>
                <CustomPagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Products />
    </Box>
  );
}
