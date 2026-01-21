import jolevilogo from "../../assets/website/icons/logo/jolevilogo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div class="container-fluid footerBg pt-5">
        <div className="text-center">
          <Link to="/" className="">
            {" "}
            <img
              src={jolevilogo}
              className="img-fluid"
              alt="jolevi"
              width="100"
              height="104"
            />
          </Link>
        </div>
        <footer class="pb-3 mb-2">
          <ul class="nav justify-content-center ">
            {/* <ul class="nav justify-content-center border-bottom pb-3 mb-3"> */}
            <li class="nav-item">
              <Link to="/" class="nav-link px-2 footerParagraph">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link px-2 footerParagraph">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/services" class="nav-link px-2 footerParagraph">
                Services
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/cards" class="nav-link px-2 footerParagraph">
                Cards
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/anthology" class="nav-link px-2 footerParagraph">
                Anthology
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/buy-books" class="nav-link px-2 footerParagraph">
               Buy Books
              </Link>
            </li>
            {/* <li class="nav-item">
              <Link to="/marketplace" class="nav-link px-2 footerParagraph">
                Marketplace
              </Link>
            </li> */}
            {/* <li class="nav-item">
              <Link to="/blog" class="nav-link px-2 footerParagraph">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link px-2 footerParagraph">
                Contact
              </Link>
            </li> */}
          </ul>
        </footer>
        <div className="">
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-2">
            {/* <div></div> */}
            <div className="mb-sm-0 mx-3">
              <a
                href="mailto:info@jolevi.com"
                className="text-decoration-none linkColor"
              >
                <p className="paragraphColor textShow">
                  <i class="bi bi-envelope me-2"></i>
                  info@jolevi.com
                </p>
              </a>
            </div>
            <div className="mb-sm-0 mx-3">
              <a
                href="mailto:jolevibooks@gmail.com"
                className="text-decoration-none linkColor"
              >
                <p className="paragraphColor textShow">
                  <i class="bi bi-envelope me-2"></i>
                  jolevibooks@gmail.com
                </p>
              </a>
            </div>
            <div className="mb-sm-0 mx-3">
              <a
                href="tel:2348165769208"
                className="text-decoration-none text-black"
              >
                <p className="paragraphColor textShow">
                  <i class="bi bi-telephone me-2"></i>+2348165769208
                </p>
              </a>
            </div>
            <div className="mb-3 mx-3">
              <a
                href="https://www.linkedin.com/company/joleving/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <i class="bi bi-linkedin mx-2 textShow LinkedIncolor"></i>
              </a>
              <a
                href="https://instagram.com/jolevi_?igshid=ZGUzMzM3NWJiOQ=="
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <i class="bi bi-instagram mx-2 textShow IGcolor"></i>
              </a>
              <a
                href="https://twitter.com/joleving95281?t=OjgIPFBCLzQDc-PVxkjz2A&s=09"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <i class="bi bi-twitter mx-2 textShow Twittercolor"></i>
              </a>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <a
              href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-black"
            >
              <p className="">32, Ikosi Road, Ketu, Lagos</p>
            </a>
          </div>
        </div>
      </div>
      <div
        className="container-fluid footerTwoBgColor d-flex justify-content-center py-2"
        style={{ backgroundColor: "#FBB03B" }}
      >
        {" "}
        <p class="text-center text-white p-0 m-0 mx-2">&copy; 2025 Jolevi</p>
        <p className="text-center m-0 p-0 mx-2" style={{ fontSize: "0.8rem" }}>
          <Link
            to="/privacy-policy"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            {" "}
            Privacy Policy
          </Link>
        </p>
      </div>
    </>
  );
};
