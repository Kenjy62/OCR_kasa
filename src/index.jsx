// Required & Style
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Components
import Header from "./components/header";
import Footer from "./components/footer";

import Protected from "./pages/Protected";

// pages
import Home from "./pages/Home";
import House from "./pages/House";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/house/:id"
          element={
            <Protected>
              <House />
            </Protected>
          }
        />
        <Route path="/*" element={<h1>404</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
