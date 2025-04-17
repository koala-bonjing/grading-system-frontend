import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userRole", formData.role);
    navigate(
      formData.role === "teacher" ? "/teacher-grading" : "/student-grades"
    );
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h4">Create Account</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <RadioGroup
            row
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            sx={{ justifyContent: "center", mt: 2 }}
          >
            <FormControlLabel
              value="student"
              control={<Radio />}
              label="Student"
            />
            <FormControlLabel
              value="teacher"
              control={<Radio />}
              label="Teacher"
            />
          </RadioGroup>
          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
