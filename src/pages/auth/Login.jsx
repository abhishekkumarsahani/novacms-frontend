import { Button, TextField, Container, Typography, Box } from "@mui/material";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    try {
      const res = await axiosInstance.post("/auth/login", {
        Email: email.value,
        Password: password.value
      });

      // Save token
      localStorage.setItem("token", res.data.token);

      // Redirect to admin dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={10}>
        <Typography variant="h5" mb={2}>Admin Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth name="email" label="Email" margin="normal" />
          <TextField fullWidth name="password" label="Password" type="password" margin="normal" />
          <Button fullWidth type="submit" variant="contained">Login</Button>
        </form>
      </Box>
    </Container>
  );
}
