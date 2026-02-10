import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";

import Navbar from "../../components/public/Navbar";
import Footer from "../../components/public/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1976d2, #42a5f5)",
          color: "#fff",
          py: 10
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            Modern Content Management System
          </Typography>

          <Typography variant="h6" sx={{ mb: 4, maxWidth: 600 }}>
            NovaCMS helps you manage pages, posts, and users effortlessly
            with a fast, secure, and scalable platform.
          </Typography>

          <Button variant="contained" size="large" color="secondary">
            Get Started
          </Button>
        </Container>
      </Box>

      {/* FEATURES */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose NovaCMS?
        </Typography>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <DescriptionIcon color="primary" fontSize="large" />
                <Typography variant="h6" gutterBottom>
                  Easy Content Management
                </Typography>
                <Typography variant="body2">
                  Create, edit, and publish content with a clean admin interface.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <SpeedIcon color="primary" fontSize="large" />
                <Typography variant="h6" gutterBottom>
                  Fast & Scalable
                </Typography>
                <Typography variant="body2">
                  Built with React and ASP.NET Core for top performance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <SecurityIcon color="primary" fontSize="large" />
                <Typography variant="h6" gutterBottom>
                  Secure by Design
                </Typography>
                <Typography variant="body2">
                  Role-based access and JWT authentication.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* CALL TO ACTION */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Ready to manage your content?
          </Typography>

          <Button
            component="a"
            href="/login"
            variant="contained"
            size="large"
          >
            Go to Admin Dashboard
          </Button>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
