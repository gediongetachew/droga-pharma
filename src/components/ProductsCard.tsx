import Image from "next/image";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  tag?: string;
}

export default function ProductCard({ image, title, description, tag }: ProductCardProps) {
  return (
    <Card
      sx={{
        minWidth: { xs: "280px", md: "auto" },
        borderRadius: "16px",
        boxShadow: "none",
        bgcolor: "#F8F9FA",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "200px",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
        {tag && (
          <Typography
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              bgcolor: "black",
              color: "white",
              px: 2,
              py: 0.5,
              borderRadius: "16px",
              fontSize: "0.75rem",
            }}
          >
            {tag}
          </Typography>
        )}
      </Box>

      <CardContent sx={{ p: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 1,
            fontSize: "1rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#666",
            fontSize: "0.875rem",
            lineHeight: 1.5,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
