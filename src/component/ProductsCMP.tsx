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
    category: "Medicine",
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
    category: "Medicine",
    imageUrl: "/suply1.jpeg",
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam aliquam eget id tellus nisi porttitor id. Odio nec auctor volutpat sed vel scelerisque nel faucibus.",
    category: "Medicine",
    imageUrl: "/suply1.jpeg",
  },
];

const categories = [
  "Medicine",
  "Medical Supplies",
  "Medical Devices",
  "Laboratory Supplies",
  "Surgical Equipment",
];

export default function ProductsCMP() {
  const [page, setPage] = useState(1);
  const productsPerPage = 6;

  // Calculate pagination
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
                  "&:hover": { bgcolor: "grey.100" },
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  gap={1}
                >
                  {category}
                  <ExpandCircleDownIcon sx={{ fontSize: 20 }} />
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
              display="grid"
              gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
              gap={3}
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
