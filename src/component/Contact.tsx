import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs library
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
  const [isLoading, setIsLoading] = useState(false); // Add loading state

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Basic validation
      const newErrors = {
        name: formValues.name.trim() === "",
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email),
        message: formValues.message.trim() === "",
      };

      setErrors(newErrors);

      if (!Object.values(newErrors).some(Boolean)) {
        const result = await emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          e.target as HTMLFormElement,
          import.meta.env.VITE_PUBLIC_KEY
        );

        console.log("Email sent:", result.text);
        setSnackbar({
          open: true,
          message: "Email sent successfully!",
          severity: "success",
        });
        setFormValues({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Email error:", error);
      setSnackbar({
        open: true,
        message: "Failed to send email. Please try again later.",
        severity: "error",
      });
    } finally {
      setIsLoading(false);
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

        <Box sx={{ maxWidth: 600, mx: "auto" }}>
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
                disabled={isLoading}
                sx={{ mt: 3, px: 4 }}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </Box>
          </Paper>
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
