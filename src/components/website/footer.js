// import jolevilogo from "../../assets/website/icons/logo/jolevilogo.png";
// import { Link } from "react-router-dom";

// export const Footer = () => {
//   return (
//     <>
//       <div class="container-fluid footerBg pt-5">
//         <div className="text-center">
//           <Link to="/" className="">
//             {" "}
//             <img
//               src={jolevilogo}
//               className="img-fluid"
//               alt="jolevi"
//               width="100"
//               height="104"
//             />
//           </Link>
//         </div>
//         <footer class="pb-3 mb-2">
//           <ul class="nav justify-content-center ">
//             {/* <ul class="nav justify-content-center border-bottom pb-3 mb-3"> */}
//             <li class="nav-item">
//               <Link to="/" class="nav-link px-2 footerParagraph">
//                 Home
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link to="/about" class="nav-link px-2 footerParagraph">
//                 About
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link to="/services" class="nav-link px-2 footerParagraph">
//                 Services
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link to="/cards" class="nav-link px-2 footerParagraph">
//                 Cards
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link to="/anthology" class="nav-link px-2 footerParagraph">
//                 Anthology
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link to="/buy-book" class="nav-link px-2 footerParagraph">
//                Buy Book
//               </Link>
//             </li>
//             {/* <li class="nav-item">
//               <Link to="/marketplace" class="nav-link px-2 footerParagraph">
//                 Marketplace
//               </Link>
//             </li> */}
//             {/* <li class="nav-item">
//               <Link to="/blog" class="nav-link px-2 footerParagraph">
//                 Blog
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link to="/contact" class="nav-link px-2 footerParagraph">
//                 Contact
//               </Link>
//             </li> */}
//           </ul>
//         </footer>
//         <div className="">
//           <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-2">
//             {/* <div></div> */}
//             <div className="mb-sm-0 mx-3">
//               <a
//                 href="mailto:info@jolevi.com"
//                 className="text-decoration-none linkColor"
//               >
//                 <p className="paragraphColor textShow">
//                   <i class="bi bi-envelope me-2"></i>
//                   info@jolevi.com
//                 </p>
//               </a>
//             </div>
//             <div className="mb-sm-0 mx-3">
//               <a
//                 href="mailto:jolevibooks@gmail.com"
//                 className="text-decoration-none linkColor"
//               >
//                 <p className="paragraphColor textShow">
//                   <i class="bi bi-envelope me-2"></i>
//                   jolevibooks@gmail.com
//                 </p>
//               </a>
//             </div>
//             <div className="mb-sm-0 mx-3">
//               <a
//                 href="tel:2348165769208"
//                 className="text-decoration-none text-black"
//               >
//                 <p className="paragraphColor textShow">
//                   <i class="bi bi-telephone me-2"></i>+2348165769208
//                 </p>
//               </a>
//             </div>
//             <div className="mb-3 mx-3">
//               <a
//                 href="https://www.linkedin.com/company/joleving/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-decoration-none"
//               >
//                 <i class="bi bi-linkedin mx-2 textShow LinkedIncolor"></i>
//               </a>
//               <a
//                 href="https://instagram.com/jolevi_?igshid=ZGUzMzM3NWJiOQ=="
//                 target="_blank"
//                 rel="noreferrer"
//                 className=""
//               >
//                 <i class="bi bi-instagram mx-2 textShow IGcolor"></i>
//               </a>
//               <a
//                 href="https://twitter.com/joleving95281?t=OjgIPFBCLzQDc-PVxkjz2A&s=09"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-decoration-none"
//               >
//                 <i class="bi bi-twitter mx-2 textShow Twittercolor"></i>
//               </a>
//             </div>
//           </div>

//           <div className="d-flex justify-content-center">
//             <a
//               href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
//               target="_blank"
//               rel="noreferrer"
//               className="text-decoration-none text-black"
//             >
//               <p className="">32, Ikosi Road, Ketu, Lagos</p>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div
//         className="container-fluid footerTwoBgColor d-flex justify-content-center py-2"
//         style={{ backgroundColor: "#FBB03B" }}
//       >
//         {" "}
//         <p class="text-center text-white p-0 m-0 mx-2">&copy; 2025 Jolevi</p>
//         <p className="text-center m-0 p-0 mx-2" style={{ fontSize: "0.8rem" }}>
//           <Link
//             to="/privacy-policy"
//             style={{ color: "#fff", textDecoration: "none" }}
//           >
//             {" "}
//             Privacy Policy
//           </Link>
//         </p>
//       </div>
//     </>
//   );
// };


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
                <li><Link to="/anthology/lagos">Lagos</Link></li>
                <li><Link to="/anthology/kaduna">Kaduna</Link></li>
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