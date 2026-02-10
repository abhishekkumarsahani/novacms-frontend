import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: "#fff", color: "#000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* LOGO */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "primary.main", fontWeight: 700 }}
        >
          NovaCMS
        </Typography>

        {/* MENU */}
        <Box>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">Contact</Button>

          <Button
            component={Link}
            to="/login"
            variant="contained"
            sx={{ ml: 2 }}
          >
            Admin Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
