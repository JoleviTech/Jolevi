import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PrivacyPolicy } from "./pages/website/privacyPolicy";
import LandingPage from "./pages/website/newHome";
import Services from "./pages/website/services";
import About from "./pages/website/about";
// import { Blog } from "./pages/website/blog";
import { BlogReadMore } from "./pages/website/blogReadMore";
import { Contact } from "./pages/website/contact";
import InspoPage from "./pages/website/store/inspoCards";
import Books from "./pages/website/store/books";
//Author
import { Authors } from "./pages/website/authors";
import AnthologyLagos from "./pages/website/anthology/anthology-lagos";
import { AnthologyKaduna } from "./pages/website/anthology/anthology-kaduna";
import EventsPage from "./pages/website/events/events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/" element={<SimplePage />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/blogarticle" element={<BlogReadMore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/:authorId" element={<Authors />} />
        <Route path="/cards" element={<InspoPage />} />
        <Route path="/books" element={<Books />} />
        <Route
          path="/pre-order"
          element={<Navigate to="/buy-book" replace />}
        />
        <Route path="/anthology-lagos" element={<AnthologyLagos />} />
        <Route path="/anthology-kaduna" element={<AnthologyKaduna />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventId" element={<EventsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
