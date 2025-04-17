import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Box, Typography } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would verify credentials here
    const role = email.includes("@teacher.com") ? "teacher" : "student";
    localStorage.setItem("userRole", role);
    navigate(role === "teacher" ? "/teacher-grading" : "/student-grades");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h4">Grading System Login</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            Login
          </Button>
          <Button sx={{ mt: 2 }} onClick={() => navigate("/signup")}>
            Don't have an account? Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
