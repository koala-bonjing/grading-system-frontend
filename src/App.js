import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Dashboard";
import StudentGrades from "./pages/StudentGrades";
import TeacherGrading from "./pages/TeacherGrading";
import Navbar from "./components/Navbar";
import SubjectGrades from "./pages/SubjectGrades";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "@fontsource/poppins"; // Install this with npm install @fontsource/poppins

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1e3a8a", // deep blue
      light: "#3b82f6", // brighter blue
      dark: "#1e40af",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#dc2626", // vibrant red
      light: "#f87171",
      dark: "#991b1b",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff", // white background
      paper: "#f0f4f8", // light paper-style sections
    },
    text: {
      primary: "#1e293b", // dark slate
      secondary: "#475569", // soft gray-blue
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 20px",
        },
      },
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/student-grades" element={<StudentGrades />} />
          <Route path="/teacher-grading" element={<TeacherGrading />} />
          <Route path="/subject-grades" element={<SubjectGrades />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
