import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SimplePage } from "./pages/website/home";

//Author
import { Author } from "./pages/website/author";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SimplePage />} />
        <Route path="/author" element={<Author />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
