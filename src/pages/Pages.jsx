import React from "react"
import Home from "./Home"
import Cuisine from "./Cuisine";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
function Pages() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"exact components={<Home />} />
      <Route path="/cuisine" components={<Cuisine />} />
    </Routes>
    </BrowserRouter>
  );
}

export default Pages;