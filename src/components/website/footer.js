import jolevilogo from "../../assets/website/icons/logo/jolevilogo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div class="container-fluid footerBg mt-5 pt-5 px-5">
        {/* <div class="container-fluid footerBg mt-5 pt-5 px-5"> */}
        <footer class="">
          <div className="row d-flex justify-content-between">
            <div class="d-lg-flex">
              <div className="col-lg-6 col-md-12">
                {" "}
                <div class="col-lg-8 mb-3">
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
                  <h5 className="mb-4" style={{ fontSize: "1rem" }}>
                    <b>
                      Lorem ipsum dolor sit amet consectetur adipiscing lorem
                      ipsum dolor sit amet consectetur adipiscing ipsum dolor
                      sit amet consectetur adipiscing
                    </b>
                  </h5>{" "}
                  {/* <a
                    href="mailto:jolevibooks@gmail.com"
                    className="text-decoration-none linkColor"
                  >
                    <p
                      className="paragraphColor textShow m-0 p-0"
                      style={{ fontSize: "0.8rem" }}
                    >
                      <i class="bi bi-envelope me-2"></i>
                      jolevibooks@gmail.com
                    </p>
                  </a>
                  <a
                    href="tel:2349065996599"
                    className="text-decoration-none text-black"
                  >
                    <p
                      className="paragraphColor textShow"
                      style={{ fontSize: "0.8rem" }}
                    >
                      <i class="bi bi-telephone me-2"></i>+2349065996599
                    </p>
                  </a>
                  <p className="" style={{ fontSize: "0.8rem" }}>
                    41 CMD Road, Magodo/Secretariat, Lagos
                  </p> */}
                </div>
              </div>

              {/* <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div> */}
              <div className="col-lg-6 col-md-12 d-flex justify-content-evenly mt-5">
                <div class="col mb-3">
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                      <a
                        href="/services"
                        class="nav-link p-0 text-body-secondary"
                      >
                        Services
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="#" class="nav-link p-0 text-body-secondary">
                        Marketplace
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a href="/about" class="nav-link p-0 text-body-secondary">
                        About
                      </a>
                    </li>
                  </ul>

                  {/* <p>Company Full address</p> */}
                  {/* <p>Copyright 2023 Company Name </p> */}
                  {/* <div className="mt-4 me-3">
                    <a
                      href="https://www.linkedin.com/company/joleving/"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      <i class="bi bi-linkedin mx-2 textShow LinkedIncolor"></i>
                    </a>
                    <a
                      href="https://instagram.com/joleving?igshid=MzRlODBiNWFlZA=="
                      target="_blank"
                      className=""
                    >
                      <i class="bi bi-instagram mx-2 textShow IGcolor"></i>
                    </a>
                    <a href="" target="_blank" className="text-decoration-none">
                      <i class="bi bi-twitter mx-2 textShow Twittercolor"></i>
                    </a>
                  </div>
                  <div className="d-lg-flex justify-content-start mt-3">
                    {" "}
                    <p
                      className="m-0 p-0 me-lg-1"
                      style={{ fontSize: "0.8rem" }}
                    >
                      <Link to="/privacy-policy"> Privacy Policy</Link>
                    </p>
                    <p
                      className="m-0 p-0 mx-lg-1"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Copyright &copy; Jolevi 2023
                    </p>
                  </div> */}
                </div>
                <div class="col mb-3">
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                      <a href="/blog" class="nav-link p-0 text-body-secondary">
                        Blog
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a
                        href="/contact"
                        class="nav-link p-0 text-body-secondary"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2023 Company, Inc. All rights reserved.</p>
           
          </div> */}
          {/* <div className="">
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-5">
            
              <div className="mb-sm-0 mx-3">
                <a
                  href="mailto:jolevibooks@gmail.com"
                  className="text-decoration-none linkColor"
                >
                  <p
                    className="paragraphColor textShow"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <i class="bi bi-envelope me-2"></i>
                    jolevibooks@gmail.com
                  </p>
                </a>
              </div>
              <div className="mb-sm-0 mx-3">
                <a
                  href="tel:2349065996599"
                  className="text-decoration-none text-black"
                >
                  <p
                    className="paragraphColor textShow"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <i class="bi bi-telephone me-2"></i>+2349065996599
                  </p>
                </a>
              </div>
              <div className="mb-3 mx-3">
                <a
                  href="https://www.linkedin.com/company/joleving/"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <i class="bi bi-linkedin mx-2 textShow LinkedIncolor"></i>
                </a>
                <a
                  href="https://instagram.com/joleving?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  className=""
                >
                  <i class="bi bi-instagram mx-2 textShow IGcolor"></i>
                </a>
                <a href="" target="_blank" className="text-decoration-none">
                  <i class="bi bi-twitter mx-2 textShow Twittercolor"></i>
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <a
                href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
                target="_blank"
                className="text-decoration-none text-black"
              >
                <p className="" style={{ fontSize: "0.8rem" }}>
                  41 CMD Road, Magodo/Secretariat, Lagos
                </p>
              </a>
            </div>
            <div className="d-flex justify-content-center">
              {" "}
              <p
                className="text-center m-0 p-0 mx-1"
                style={{ fontSize: "0.8rem" }}
              >
                <Link to="/privacy-policy"> Privacy Policy</Link>
              </p>
              <p
                className="text-center m-0 p-0 mx-1"
                style={{ fontSize: "0.8rem" }}
              >
                Copyright &copy; Jolevi 2023
              </p>
            </div>
          </div> */}
        </footer>
      </div>{" "}
      <div
        className="container-fluid footerTwoBgColor d-flex justify-content-center py-2"
        style={{ backgroundColor: "#FBB03B" }}
      >
        {" "}
        <p class="text-center text-white p-0 m-0 mx-2">&copy; 2023 Jolevi</p>
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
