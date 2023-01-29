import { Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../components/Navbar";
import GoogleIcon from "@mui/icons-material/Google";
import api from "../api";

const Signup = () => {
  const signUpwithGoogle = () => {
    window.open(`${api}/auth/google`, "_self");
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
          Signup with google
        </Button>
      </Container>
    </>
  );
};

export default Signup;
