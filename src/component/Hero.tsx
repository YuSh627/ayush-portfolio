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
        height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" },
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
            Hi, I'm Ayush Shrestha
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
              px: { xs: 4, md: 5 },
              py: { xs: 1.5, md: 2 },
              borderWidth: 2,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              textTransform: "none",
              letterSpacing: 1,
              transition: "all 0.3s ease",
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              "&:hover": {
                borderWidth: 2,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-3px)",
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              },
              "&:active": {
                transform: "translateY(0)",
              },
            }}
            onClick={() => {
              const projectSection = document.getElementById("projects");
              if (projectSection) {
                projectSection.scrollIntoView({ behavior: "smooth" });
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
