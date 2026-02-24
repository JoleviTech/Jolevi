import jolevilogo from "../../assets/website/icons/logo/jolevilogo.png";
import { Link } from "react-router-dom";
// import "./Footer.scss"; // adjust path as needed

export const Footer = () => {
  return (
    <>
      <footer className="footer-main">
        <div className="footer-inner">

          {/* Logo */}
          <div className="footer-logo-wrap">
            <Link to="/">
              <img src={jolevilogo} alt="Jolevi" className="footer-logo-img" />
            </Link>
            <p className="footer-tagline">
              Inspiring stories, one page at a time.
            </p>
          </div>

          {/* Nav columns */}
          <div className="footer-nav-grid">

            <div className="footer-nav-col">
              <h6 className="footer-col-heading">Explore</h6>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/author">Author</Link></li>
                <li><Link to="/events">Events</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h6 className="footer-col-heading">Anthology</h6>
              <ul>
                <li><Link to="/anthology-lagos">Lagos</Link></li>
                <li><Link to="/anthology-kaduna">Kaduna</Link></li>
              </ul>

              <h6 className="footer-col-heading mt-col">Store</h6>
              <ul>
                <li><Link to="/buy-book">Books</Link></li>
                <li><Link to="/cards">Cards</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h6 className="footer-col-heading">Contact</h6>
              <ul>
                <li>
                  <a href="mailto:info@jolevi.com">
                    <i className="bi bi-envelope me-2"></i>info@jolevi.com
                  </a>
                </li>
                <li>
                  <a href="mailto:jolevibooks@gmail.com">
                    <i className="bi bi-envelope me-2"></i>jolevibooks@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:2348165769208">
                    <i className="bi bi-telephone me-2"></i>+2348165769208
                  </a>
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7" target="_blank" rel="noreferrer">
                    <i className="bi bi-geo-alt me-2"></i>32, Ikosi Road, Ketu, Lagos
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">&copy; {new Date().getFullYear()} Jolevi. All rights reserved.</p>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/joleving/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://instagram.com/jolevi_?igshid=ZGUzMzM3NWJiOQ==" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://twitter.com/joleving95281?t=OjgIPFBCLzQDc-PVxkjz2A&s=09" target="_blank" rel="noreferrer" aria-label="Twitter">
              <i className="bi bi-twitter"></i>
            </a>
          </div>

          <Link to="/privacy-policy" className="footer-policy">Privacy Policy</Link>
        </div>
      </footer>
    </>
  );
};