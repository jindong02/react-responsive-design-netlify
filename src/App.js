import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

import "./styles.css";

const AzureTableStorate = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/ideas/1234" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AzureTableStorate;
