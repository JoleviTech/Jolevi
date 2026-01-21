import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { PrivacyPolicy } from "./pages/website/privacyPolicy";
import LandingPage from "./pages/website/newHome";
import Services from "./pages/website/services";
import About from "./pages/website/about";
// import { Blog } from "./pages/website/blog";
import { BlogReadMore } from "./pages/website/blogReadMore";
import { Contact } from "./pages/website/contact";
import InspoPage from "./pages/website/inspoCards";
import BuyBooks from "./pages/website/books/buybooks";
//Author
import { Author } from "./pages/website/books/author";
import Anthology, { VirtualLaunchModal } from "./pages/website/books/anthology";

function App() {
  return (
    <BrowserRouter>
     <VirtualLaunchModal />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/" element={<SimplePage />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/blogarticle" element={<BlogReadMore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/author" element={<Author />} />
        <Route path="/cards" element={<InspoPage />} />
        <Route path="/buy-books" element={<BuyBooks />} />
<Route path="/pre-order" element={<Navigate to="/buy-books" replace />} />
        <Route path="/anthology" element={<Anthology/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
