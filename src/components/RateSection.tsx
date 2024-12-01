import { Box, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function ReviewCard() {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "16px",
        p: 3,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
        minWidth: { xs: "300px", md: "auto" },
        flex: { md: 1 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flex: "1 1 auto",
            minWidth: "200px",
          }}
        >
          <Avatar
            src="/Ema.png"
            alt="Fitsum Haile"
            sx={{
              width: 48,
              height: 48,
              border: "2px solid white",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />

          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "medium",
                color: "#333",
                mb: 0.5,
                fontFamily: "Inter",
              }}
            >
              Fitsum Haile
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontSize: "0.675rem",
                fontFamily: "Inter",
              }}
            >
              Fitsumhaile@gmail.com
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexShrink: 0,
          }}
        >
          {[1, 2, 3, 4].map((star) => (
            <StarIcon
              key={star}
              sx={{
                color: "#FF9900",
                fontSize: 18,
                mr: 0.5,
              }}
            />
          ))}
          <StarBorderIcon
            sx={{
              color: "#FF9900",
              fontSize: 18,
            }}
          />
        </Box>
      </Box>

      <Typography
        sx={{
          color: "#666",
          fontSize: "0.675rem",
          lineHeight: 1.6,
          letterSpacing: "0.1px",
          fontFamily: "Inter",
          pl:{xs:0, md:8}
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Pellentesque ipsum tellus
        facilisis ultrices ut tempor ultricies amet sit. Massa nunc pellentesque
        a in vitam tempus diam. Viverra nunc tempor sed pellentesque. Vel
        ullamcorper ut blanket amet diam duis a non.
      </Typography>
    </Box>
  );
}
