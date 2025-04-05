import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    // Reset error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {
      name: formValues.name.trim() === "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email),
      message: formValues.message.trim() === "",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      // Form is valid, you would normally submit the form here
      console.log("Form submitted:", formValues);

      // Show success message
      setSnackbar({
        open: true,
        message: "Thank you for your message! I will get back to you soon.",
        severity: "success",
      });

      // Reset form
      setFormValues({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields correctly.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          sx={{ mb: 5 }}>
          Get In Touch
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            mt: 2,
            justifyContent: "center",
          }}>
          <Box
            sx={{
              flex: "1 1 300px",
              minWidth: "280px",
              maxWidth: "400px",
            }}>
            <Paper elevation={3} sx={{ p: 4, height: "100%", borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Box sx={{ display: "flex", mb: 3, alignItems: "center" }}>
                  <PhoneIcon color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body2">+977-9860862266</Typography>
                </Box>
                <Box sx={{ display: "flex", mb: 3, alignItems: "center" }}>
                  <EmailIcon color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body2">
                    shresthaa627@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", mb: 3, alignItems: "center" }}>
                  <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body2">
                    Chhauni, Kathmandu, Nepal
                  </Typography>
                </Box>
              </Box>

              <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                Social Profiles
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {/* You can add social icons here */}
              </Box>
            </Paper>
          </Box>

          <Box
            sx={{
              flex: "1 1 400px",
              minWidth: "280px",
              maxWidth: "600px",
            }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Send Me a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    error={errors.name}
                    helperText={errors.name ? "Name is required" : ""}
                    required
                    sx={{
                      "& .MuiInputBase-input": { fontSize: "0.98rem" },
                      "& .MuiInputLabel-root": { fontSize: "0.98rem" },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    error={errors.email}
                    helperText={
                      errors.email ? "Please enter a valid email address" : ""
                    }
                    required
                    sx={{
                      "& .MuiInputBase-input": { fontSize: "0.98rem" },
                      "& .MuiInputLabel-root": { fontSize: "0.98rem" },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formValues.message}
                    onChange={handleChange}
                    error={errors.message}
                    helperText={errors.message ? "Message is required" : ""}
                    required
                    sx={{
                      "& .MuiInputBase-input": { fontSize: "0.98rem" },
                      "& .MuiInputLabel-root": { fontSize: "0.98rem" },
                    }}
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ mt: 3, px: 4 }}>
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            variant="filled">
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
