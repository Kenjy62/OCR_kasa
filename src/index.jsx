// Required & Style
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Components
import Header from "./components/header";
import Footer from "./components/footer";

// Verify
import Protected from "./pages/Protected";

// Pages
import Home from "./pages/Home";
import House from "./pages/House";
import About from "./pages/About";
import NotFound from "./pages/404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
        <Route path="/*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
