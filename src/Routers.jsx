import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { AuthContext } from "./context/AuthContext";
import Signin from "./pages/Signin";
import { authCheck } from "./pages/helper";

const Routers = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    authCheck().then((response) => {
      if (!response.data) {
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(response.data);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e/signin" element={<Signin />} />
      </Routes>
    </AuthContext.Provider>
  );
};

export default Routers;
