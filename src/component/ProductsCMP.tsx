"use client";

import { useState } from "react";
import { Box, Container, Paper, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
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
    category: "Equipment",
    imageUrl: "/suply1.jpeg",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Medicine",
    imageUrl: "/suply1.jpeg",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Medicine",
    imageUrl: "/suply1.jpeg",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Medicine",
    imageUrl: "/suply1.jpeg",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Supplies",
    imageUrl: "/suply1.jpeg",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Medicine",
    imageUrl: "/suply1.jpeg",
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Devices",
    imageUrl: "/suply1.jpeg",
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Supplies",
    imageUrl: "/suply1.jpeg",
  },
];

const categories = ["All", "Medicine", "Supplies", "Devices", "Equipment"];

export default function ProductsCMP() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const productsPerPage = 6;
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All" || selectedCategory === null
      ? products // Show all products when "All" is selected or no category is selected
      : products.filter((product) => product.category === selectedCategory);

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
    if (selectedCategory === category && category !== "All") {
      // Don't deselect if "All" is clicked
      setSelectedCategory(null);
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
        pt: "100px",
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          color="text.primary"
          variant="h4"
          sx={{
            mb: 4,
            mt: { xs: 0, md: 10 },
            fontWeight: "bold",
            px: { xs: 2, md: 48 },
          }}
        >
          Featured Products
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 10,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: 300 },
              px: { xs: 2, md: 0 },
            }}
          >
            <Paper 
              sx={{ 
                p: 2, 
                borderRadius: "5%", 
                marginTop: {xs:0, md:-8},
                cursor: { xs: 'pointer', md: 'default' }
              }}
              onClick={() => {
                if (window.innerWidth < 900) { // md breakpoint
                  setIsFilterOpen(!isFilterOpen);
                }
              }}
            >
              <Box display="flex" alignItems="center" justifyContent="space-between" gap={2}>
                <Box display="flex" alignItems="center" gap={2}>
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
                <Box 
                  sx={{ 
                    display: { xs: 'block', md: 'none' },
                    transform: isFilterOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <HiOutlineChevronUpDown />
                </Box>
              </Box>

              {/* Filter Categories - Collapsible on mobile */}
              <Box
                sx={{
                  display: { 
                    xs: isFilterOpen ? 'block' : 'none', 
                    md: 'block' 
                  },
                  mt: 2
                }}
              >
                <Divider />
                {categories.map((category, index) => (
                  <Box key={index}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="start"
                      sx={{
                        py: 2,
                        cursor: "pointer",
                        "&:hover": { bgcolor: "grey.100" },
                      }}
                      onClick={() => {
                        handleCategoryClick(category);
                        if (window.innerWidth < 900) {
                          setIsFilterOpen(false);
                        }
                      }}
                    >
                      {category}
                      <Box
                        sx={{
                          p: 0.2,
                          border: "1px solid #E0E0E0",
                          borderRadius: "50%",
                        }}
                      >
                        <HiOutlineChevronUpDown />
                      </Box>
                    </Box>
                    {index < categories.length - 1 && <Divider />}
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
          <Box
            sx={{
              flex: 1,
              px: { xs: 2, md: 0 },
            }}
          >
            <Box
              display="grid"
              gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
              gap={5}
            >
              {currentProducts.map((product) => (
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
                        aspectRatio: "4/3",
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
                    <Box p={3}>
                      <Typography
                        variant="h6"
                        sx={{ mb: 1, fontWeight: "bold" }}
                      >
                        {product.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {product.description}
                      </Typography>
                    </Box>
                  </Paper>
                </Link>
              ))}
            </Box>

            <CustomPagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
            />
          </Box>
        </Box>
      </Container>
      <Products />
    </Box>
  );
}
