import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SimplePage } from "./pages/website/home";
import { PrivacyPolicy } from "./pages/website/privacyPolicy";
import LandingPage from "./pages/website/newHome";
import Services from "./pages/website/services";
import About from "./pages/website/about";

//Author
import { Author } from "./pages/website/author";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<SimplePage />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/author" element={<Author />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
