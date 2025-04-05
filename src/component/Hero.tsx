import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" }, // Adjust for different navbar heights
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1976d2",
        color: "white",
        backgroundImage: "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
        padding: { xs: 2, sm: 0 },
      }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              fontWeight: 700,
            }}>
            Ayush Shrestha
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
            }}>
            Front-End Developer & UI/UX Designer
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
            }}>
            Creating intuitive and user-friendly interfaces
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            size={isMobile ? "medium" : "large"}
            sx={{
              borderRadius: "30px",
              px: { xs: 3, md: 4 },
              py: { xs: 1, md: 1.5 },
              borderWidth: "2px",
              "&:hover": {
                borderWidth: "2px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}>
            View My Work
          </Button>
        </Box>
      </Container>
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translateY(0) translateX(-50%)",
            },
            "40%": {
              transform: "translateY(-20px) translateX(-50%)",
            },
            "60%": {
              transform: "translateY(-10px) translateX(-50%)",
            },
          },
        }}>
        <ArrowDownwardIcon fontSize={isMobile ? "medium" : "large"} />
      </Box>
    </Box>
  );
};

export default Hero;
