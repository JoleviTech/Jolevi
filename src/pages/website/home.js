import { Link } from "react-router-dom";
import simplepagehero from "../../assets/website/images/hero/homehero/simplepagehero.png";
import { Navbar } from "../../components/website/navbar";
import {
  WorkWithUsBtn,
  CreativesLink,
  AuthorsLink,
  ChallengeBtn,
  PublishNowPayLaterBtn,
} from "../../components/website/buttons";

export const SimplePage = () => {
  return (
    <div className="container-fluid HeroBg">
      <Navbar />
      <div className="row align-items-center justify-content-center px-3">
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3">
          <h1 className=" d-none d-lg-block d-md-none d-sm-none d-xs-none">
            Unlock your writing potential and connect with the creative economy
            <br />
          </h1>
          <h2 className=" d-xs-block d-sm-block d-md-block d-lg-none">
            Unlock your writing potential and connect with the creative economy
            <br />
          </h2>
          <p className="mt-2">
            Your Ultimate Writing Companion for Book Writing, Launching, and
            Selling. Explore our Creative Marketplace for Authors and MSMEs!
          </p>
          {/* <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-2">
            <CreativesLink /> <AuthorsLink />
          </div> */}
          <div className="d-flex">
            <p className="me-2 d-none d-lg-block d-md-block d-sm-none d-xs-none">
              Talk to us:
            </p>
            <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none">
              <CreativesLink />
            </div>
            <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none ms-3">
              <AuthorsLink />
            </div>
          </div>

          <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none">
            <WorkWithUsBtn />
            <PublishNowPayLaterBtn />
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={simplepagehero}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
          {/* <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            <CreativesLink />
          </div>
          <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center ms-4">
            <AuthorsLink />
          </div> */}
          <div>
            {" "}
            <p className="d-xs-block d-sm-block d-md-none d-lg-none mt-5 text-center m-0 p-0">
              Talk to us:
            </p>
            <div className="d-flex justify-content-center">
              <div className="d-xs-block d-sm-block d-md-none d-lg-none text-center">
                <CreativesLink />
              </div>
              <div className="d-xs-block d-sm-block d-md-none d-lg-none text-center ms-3">
                <AuthorsLink />
              </div>
            </div>
          </div>
          <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-3 text-center">
            <WorkWithUsBtn />
            <PublishNowPayLaterBtn />
          </div>
        </div>
      </div>
      {/* <div className="row align-items-center justify-content-center px-4 py-5">
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3"></div>
        <div className="col-lg-5 col-md-5 col-sm-12"></div>
      </div> */}
      <div className="">
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-5">
          {/* <div></div> */}
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
              href="tel:2349065996599"
              className="text-decoration-none text-black"
            >
              <p className="paragraphColor textShow">
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

        {/* <div className="d-flex justify-content-center mt-5">
          <div className="mx-3">
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
          <div className="mx-3">
            <a
              href="tel:2349065996599"
              className="text-decoration-none text-black"
            >
              <p className="paragraphColor textShow">
                <i class="bi bi-telephone me-2"></i>+2349065996599
              </p>
            </a>
          </div>{" "}
          <div className="mt-1 mx-3">
            <a
              href="https://www.linkedin.com/company/joleving/"
              target="_blank"
              className="text-decoration-none  "
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
            <a href="" target="_blank" className="text-decoration-none ">
              <i class="bi bi-twitter mx-2 textShow Twittercolor"></i>
            </a>
          </div>
        </div> */}
        {/* <div className="d-flex justify-content-center mt-3">
          <a
            href="mailto:info@jolevi.com"
            className="text-decoration-none linkColor"
          >
            <p className="paragraphColor textShow m-0 p-1">
              <i class="bi bi-envelope me-2"></i>
              info@jolevi.com
            </p>
          </a>
          <a
            href="tel:2349065996599"
            className="text-decoration-none text-black"
          >
            <p className="paragraphColor textShow m-0 p-1">
              <i class="bi bi-telephone me-2"></i>+2349065996599
            </p>
          </a>
        </div>{" "}
        <div className="d-flex justify-content-center">
          <a
            href="https://www.linkedin.com/company/joleving/"
            target="_blank"
            className="text-decoration-none my-2"
          >
            <i class="bi bi-linkedin mx-2 textShow LinkedIncolor"></i>
          </a>
          <a
            href="https://instagram.com/joleving?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            className=" my-2"
          >
            <i class="bi bi-instagram mx-2 textShow IGcolor"></i>
          </a>
          <a href="" target="_blank" className="text-decoration-none my-2">
            <i class="bi bi-twitter mx-2 textShow Twittercolor"></i>
          </a>
        </div> */}
        <div className="d-flex justify-content-center">
          <a
            href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
            target="_blank"
            className="text-decoration-none text-black"
          >
            <p className="">41 CMD Road, Magodo/Secretariat, Lagos</p>
          </a>
        </div>
        {/* <div className="d-flex justify-content-center"> */}
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

        {/* </div> */}
      </div>
    </div>
  );
};
