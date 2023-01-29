import { Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../components/Navbar";
import GoogleIcon from "@mui/icons-material/Google";
import api from "../api";

const Signin = () => {
  const signUpwithGoogle = () => {
    window.open(`${api}/auth/google`, "_self");
  };
  const signUpwithFacebook = () => {
    window.open(`${api}/auth/facebook`, "_self");
  };
  const signUpwithGithub = () => {
    window.open(`${api}/auth/github`, "_self");
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="xs" sx={{ mt: 15 }}>
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{ width: "100%" }}
          onClick={signUpwithGoogle}
        >
          Continue with google
        </Button>
        <Button
          variant="outlined"
          // startIcon={<GoogleIcon />}
          sx={{ width: "100%", mt: "5px" }}
          onClick={signUpwithFacebook}
        >
          Continue with facebook
        </Button>

        <Button
          variant="outlined"
          // startIcon={<GoogleIcon />}
          sx={{ width: "100%", mt: "5px" }}
          onClick={signUpwithGithub}
        >
          Continue with Github
        </Button>
      </Container>
    </>
  );
};

export default Signin;
