import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  // useMediaQuery,
  // useTheme,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Home", "About", "Projects", "Contact"];

const debounce = (func: (...args: unknown[]) => void, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const debounceScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debounceScroll);
    return () => window.removeEventListener("scroll", debounceScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.toLowerCase())
      );
      const currentSection = sections.find(
        (section) =>
          section &&
          section.getBoundingClientRect().top <= 100 &&
          section.getBoundingClientRect().bottom >= 100
      );
      setActiveSection(currentSection?.id || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (section: string) => {
    if (section.toLowerCase() === "home") {
      // Scroll to top for Home section
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Existing behavior for other sections
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Close mobile drawer if open
    if (mobileOpen) setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", py: 2 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Button
              fullWidth
              onClick={() => scrollToSection(item)}
              sx={{
                py: 1.5,
                color:
                  activeSection === item.toLowerCase()
                    ? "primary.main"
                    : "inherit",
                fontWeight: "bold",
              }}>
              <ListItemText primary={item} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="default"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "transparent",
          transition: "all 0.3s ease",
        }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" }, mx: "auto" }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color:
                      activeSection === item.toLowerCase()
                        ? "primary.main"
                        : "inherit",
                    mx: 2,
                    fontWeight: "bold",
                  }}
                  onClick={() => scrollToSection(item)}>
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
          anchor="right">
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{ height: { xs: 56, sm: 64 } }} />{" "}
      {/* Spacer for fixed AppBar */}
    </Box>
  );
};

export default Header;
