import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  // Divider,
  Stack,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer: React.FC = () => {
  // const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: "#1976d2",
        color: "white",
      }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            // alignContent: "center",
            justifyContent: "space-around",
          }}>
          {/* Contact Information */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Contact Info
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <EmailIcon fontSize="medium" />
                <Link
                  sx={{ fontSize: "1rem", textDecoration: "none" }}
                  href="mailto:shresthaa627@gmail.com"
                  color="inherit">
                  shresthaa627@gmail.com
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <PhoneIcon fontSize="medium" />
                <Link
                  sx={{ fontSize: ".95rem", textDecoration: "none" }}
                  href="tel:+9779860862266"
                  color="inherit">
                  +977 9860862266
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <LocationOnIcon fontSize="medium" />
                <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                  Chhauni, Kathmandu, Nepal
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Social Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Connect With Me
            </Typography>
            <Stack direction="row" spacing={0}>
              <IconButton
                href="https://github.com/yush627"
                target="_blank"
                color="inherit"
                aria-label="GitHub">
                <GitHubIcon fontSize="medium" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/ayushshrestha627890/"
                target="_blank"
                color="inherit"
                aria-label="LinkedIn">
                <LinkedInIcon fontSize="medium" />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        {/* <Divider sx={{ my: 3, backgroundColor: "rgba(255, 255, 255, 0.2)" }} /> */}

        {/* <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ fontSize: ".95rem" }}>
            &copy; {currentYear} Ayush Shrestha. All rights reserved.
          </Typography>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Footer;
