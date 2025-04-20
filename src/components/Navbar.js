import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar({ toggleMode, mode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    setUserRole(storedRole);
  }, [location]);

  const hideOnRoutes = ["/login", "/signup"];
  if (hideOnRoutes.includes(location.pathname)) return null;

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    setUserRole(null);
    navigate("/login");
  };

  const baseItems = [
    { label: "Dashboard", path: "/" },
    {
      label: userRole === "student" ? "My Grades" : "Student Grades",
      path: "/student-grades",
    },
    { label: "Courses", path: "/subject-grades" },
  ];

  if (userRole === "teacher") {
    baseItems.splice(2, 0, {
      label: "Teacher Grading",
      path: "/teacher-grading",
    });
  }

  const navItems = [
    ...baseItems,
    { label: "Log Out", path: "/login", action: handleLogout },
  ];

  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Grade Tracker
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleMenuOpen}
              aria-label="menu"
              size="large"
              sx={{
                transition: "color 0.3s",
                "&:hover": {
                  color: "#f50057",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.label}
                  component={Link}
                  to={item.path}
                  onClick={() => {
                    handleMenuClose();
                    item.action?.();
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
              <MenuItem onClick={toggleMode}>
                {mode === "dark" ? "Light Mode" : "Dark Mode"}
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                component={Link}
                to={item.path}
                onClick={item.action}
              >
                {item.label}
              </Button>
            ))}
            <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
              {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
