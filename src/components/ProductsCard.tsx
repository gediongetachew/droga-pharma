import Image from "next/image";
import { Card, CardContent, Typography, Box } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  tag?: string;
}

export default function ProductCard({
  image,
  title,
  description,
  tag,
}: ProductCardProps) {
  return (
    <Card
      sx={{
        minWidth: { xs: "280px", sm: "320px", md: "380px" },
        borderRadius: { xs: "12px", sm: "14px", md: "16px" },
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
          height: { xs: "180px", sm: "220px", md: "260px" },
          borderRadius: { xs: "12px", sm: "14px", md: "16px" },
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "5%",
            left: "5%",
            right: "5%",
            bottom: "5%",
            borderRadius: { xs: "8px", sm: "10px", md: "12px" },
            overflow: "hidden",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
        {tag && (
          <Typography
            sx={{
              position: "absolute",
              top: "8%",
              right: "8%",
              bgcolor: "black",
              color: "#FCEE23",
              px: { xs: 1.5, sm: 1.75, md: 2 },
              py: { xs: 0.75, sm: 0.875, md: 1 },
              borderRadius: { xs: "12px", sm: "14px", md: "16px" },
              fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.875rem" },
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "regular",
              zIndex: 1,
            }}
          >
            {tag}
          </Typography>
        )}
      </Box>

      <CardContent
        sx={{
          p: { xs: 1.5, sm: 1.75, md: 2 },
          "&:last-child": { pb: { xs: 1.5, sm: 1.75, md: 2 } },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontFamily: "Plus Jakarta Sans",
            mb: { xs: 0.75, sm: 1, md: 1.25 },
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
            lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#666",
            fontSize: { xs: "0.75rem", sm: "0.8125rem", md: "0.875rem" },
            fontWeight: "regular",
            lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
            fontFamily: "Red Hat Display",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
