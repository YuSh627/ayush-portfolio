import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer: React.FC = () => {
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
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: 4, md: 8 },
          }}>
          {/* Contact Information */}
          <Box sx={{ width: { xs: "100%", md: "auto" } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1.5,
                textAlign: { xs: "center", md: "left" },
              }}>
              Contact Info
            </Typography>
            <Stack
              spacing={2.5}
              sx={{
                alignItems: { xs: "center", md: "flex-start" },
              }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                  width: "100%",
                }}>
                <EmailIcon fontSize="medium" />
                <Link
                  sx={{ fontSize: "1rem", textDecoration: "none" }}
                  href="mailto:shresthaa627@gmail.com"
                  color="inherit">
                  shresthaa627@gmail.com
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                  width: "100%",
                }}>
                <PhoneIcon fontSize="medium" />
                <Link
                  sx={{ fontSize: "1rem", textDecoration: "none" }}
                  href="tel:+9779860862266"
                  color="inherit">
                  +977 9860862266
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                  width: "100%",
                }}>
                <LocationOnIcon fontSize="medium" />
                <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                  Chhauni, Kathmandu, Nepal
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Social Links */}
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1.5,
                textAlign: { xs: "center", md: "left" },
              }}>
              Connect With Me
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: { xs: "center", md: "flex-start" },
                width: "100%",
              }}>
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
      </Container>
    </Box>
  );
};

export default Footer;
