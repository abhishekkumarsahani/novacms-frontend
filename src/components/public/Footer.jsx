import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#111", color: "#fff", py: 3 }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} NovaCMS. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
