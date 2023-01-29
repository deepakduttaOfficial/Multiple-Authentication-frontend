import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const louOut = () => {
    // window.open("http://localhost:8000/api/v1/logout", "_self");
  };
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Multiple Authentication
          </Typography>
          <Button component={NavLink} to="/" color="inherit">
            Home
          </Button>
          {isAuthenticated ? (
            <Button
              onClick={() => {
                louOut();
              }}
              color="inherit"
            >
              Log out
            </Button>
          ) : (
            <>
              <Button component={NavLink} to="/e/signin" color="inherit">
                Sign in/Sign up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
