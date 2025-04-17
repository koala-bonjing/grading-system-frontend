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

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5", // soft gray background color
    },
  },
});
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <CssBaseline />
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
