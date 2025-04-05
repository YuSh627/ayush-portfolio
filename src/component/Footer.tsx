import React from "react";
import {
  Box,
  Container,
  Typography,
  //   Link,
  IconButton,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: "#1976d2",
        color: "white",
      }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: { xs: 2, md: 0 } }}>
            Ayush Shrestha
          </Typography>

          <Box>
            <IconButton color="inherit" aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ my: 3, backgroundColor: "rgba(255, 255, 255, 0.2)" }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="inherit">
            &copy; {currentYear} Ayush Shrestha. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            color="inherit"
            sx={{ mt: 1, opacity: 0.8 }}>
            Front-End Developer & UI/UX Designer
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
