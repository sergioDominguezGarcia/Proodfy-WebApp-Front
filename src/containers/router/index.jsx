import React from "react";
import { memo } from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Login from "../../views/auth/login";
import SignUp from "../../views/auth/signup";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(Router);