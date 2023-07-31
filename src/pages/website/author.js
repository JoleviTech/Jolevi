import { Link } from "react-router-dom";
import jolevilogo from "../../assets/website/icons/logo/jolevilogo.png";
import authorImg from "../../assets/website/images/authors/authorImg.png";
import BookOne from "../../assets/website/images/authors/BookOne.png";
import BookTwo from "../../assets/website/images/authors/BookTwo.png";
import BookThree from "../../assets/website/images/authors/BookThree.png";
import Icon from "../../assets/website/images/authors/icon.png";
import testimonial from "../../assets/website/images/authors/testimonial.png";

export const Author = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutAuthor />
      <FirstBook />
      <SecondBook />
      {/* <ThirdBook /> */}
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
};

const GetMyBookBtn = () => {
  return (
    <>
      <a href="" target="_blank" className="text-decoration-none">
        <button class="GetMyBookBtn btnText mt-2">
          {" "}
          <b>Get My Book </b>
        </button>
      </a>
    </>
  );
};
const PreorderBtn = () => {
  return (
    <>
      <a href="" target="_blank" className="text-decoration-none">
        <button class="GetMyBookBtn btnText mt-2">
          {" "}
          <b>Preorder</b>
        </button>
      </a>
    </>
  );
};
const GetMyBookBtnTwo = () => {
  return (
    <>
      <a href="" target="_blank" className="text-decoration-none">
        <button class="GetMyBookBtnTwo btnText mt-2">
          {" "}
          <b>Get My Book </b>
        </button>
      </a>
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid px-2">
        <Link to="/" className="navbar-brand ms-lg-5">
          {" "}
          <img
            src={jolevilogo}
            className="img-fluid"
            alt="jolevi"
            width="120"
            height="124"
          />
        </Link>
        <button
          className="navbar-toggler btn"
          type=""
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDarkDropdown"
        ></div>
      </div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <div className="container-fluid AuthorHeroBg d-flex align-items-center">
      <div className="container-fluid AuthorHeroBgg d-flex pt-3 pb-4">
        <div className="row justify-content-start">
          <div className="col-lg-6 col-md-8 col-sm-12 px-lg-5 ms-2">
            <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none textWhite">
              Lorem ipsum dolor sit amet consectetur adipiscing
            </h1>
            <h2 className="d-xs-block d-sm-block d-md-block d-lg-none textWhite">
              Lorem ipsum dolor sit amet consectetur adipiscing
            </h2>
            <p className="mt-2 textWhite">
              Lorem ipsum dolor sit amet consectetur adipiscing lorem ipsum
              dolor sit amet consectetur adipiscing
            </p>
          </div>
          <div className="ms-5">
            <PreorderBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutAuthor = () => {
  return (
    <div className="container-fluid aboutBg">
      <div className="row align-items-center justify-content-center px-4 py-4 g-0">
        <div className="col-lg-10 col-md-7 col-sm-12">
          <h3 className="">
            About Me
            <br />
          </h3>
          <p className="mt-4">
            Titilayo Ekundayo is a dynamic entrepreneur, business strategist,
            and influential figure in the world of entrepreneurship. With a
            strong focus on entrepreneurship, business development, and
            strategy, she has made a significant impact on the success of
            countless businesses.
          </p>
          <p className="mt-4">
            As a successful serial entrepreneur, Titilayo's journey is a
            testament to her expertise and dedication. Her valuable insights
            have led her to serve on various boards, where she passionately
            supports and guides entrepreneurs in building profitable and
            sustainable businesses.
          </p>
          <p className="mt-4">
            A true advocate for emerging entrepreneurs, Titilayo takes great
            pleasure in mentoring and handholding those who are just starting
            their journey. From ideation to growth, she provides the necessary
            guidance and encouragement for their success.
          </p>
          <p className="mt-4">
            Beyond her entrepreneurial pursuits, Titilayo is also the host of{" "}
            <a
              href=" https://podcasters.spotify.com/pod/show/abeg-who-send-me"
              target="_blank"
            >
              The Abegwhosendme podcast
            </a>{" "}
            a popular platform for entrepreneurs and aspiring business owners.
            Through her podcast, she shares inspiring stories, advice, and
            practical tips, motivating listeners to overcome challenges and
            achieve their dreams in the business world.
          </p>
          <p className="mt-4">
            As a lifelong learner and educator, Titilayo finds joy in teaching
            and imparting knowledge. She frequently facilitates entrepreneurship
            classes, where she equips aspiring business minds with the necessary
            tools to thrive in today's competitive landscape.
          </p>
          <p className="mt-4">
            Titilayo's passion for effective communication and leadership is
            evident in her role as the current president of the Ikeja
            Toastmasters Club, an esteemed international organization.
          </p>
          <p className="mt-4">
            Outside her professional life, Titilayo enjoys the pleasures of
            reading books, indulging in epic movies, and engaging in stimulating
            intellectual discussions. With her unwavering commitment to
            entrepreneurship, dedication to nurturing emerging talents, and keen
            sense of leadership, Titilayo Ekundayo continues to be a guiding
            light in the entrepreneurial community, leaving an indelible mark on
            the world of business development and strategy.
          </p>
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={authorImg} className="d-block" alt="" loading="" />
        </div>{" "}
        <div className="mt-5 text-center mb-4">
          <GetMyBookBtn />
        </div>
      </div>
    </div>
  );
};

const FirstBook = () => {
  return (
    <div className="container-fluid booksBg">
      <div className="row align-items-center justify-content-center px-4 py-5">
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={BookOne}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3">
          <h3 className="">
            <b>Abeg who send me</b>
            <br />
          </h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
            tempr incididunt ut labore et dolore magna Lorem ipsum dolor sit
            amet, cse adipiscing elit, sed do eiusmod tempr incididunt ut labore
            et dolore magna Lorem ipsum dolor sit amet, cse
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
            tempr incididunt ut labore et dolore magna Lorem ipsum dolor sit
            amet, cse adipiscing elit, sed do eiusmod tempr incididunt ut labore
            et dolore magna Lorem ipsum dolor sit amet, cse
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
            tempr incididunt ut labore et dolore magna Lorem ipsum dolor sit
            amet, cse adipiscing elit, sed do eiusmod tempr incididunt ut labore
            et dolore magna Lorem ipsum dolor sit amet, cse
          </p>
          <p className="mt-4">
            Books are available at <a href="#">Amazon</a>,{" "}
            <a href="#">Okada books</a>, <a href="#">Audible</a>,{" "}
            <a href="#">Bambooks</a>
          </p>
          <div className="">
            <PreorderBtn />
          </div>
        </div>
      </div>
    </div>
  );
};
const SecondBook = () => {
  return (
    <div className="container-fluid booksBg">
      <div className="row align-items-center justify-content-center px-4 py-5">
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3">
          <h3 className="">
            <b>Tts Random Thoughts</b>
            <br />
          </h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
            tempr incididunt ut labore et dolore magna Lorem ipsum dolor sit
            amet, cse adipiscing elit, sed do eiusmod tempr incididunt ut labore
            et dolore magna Lorem ipsum dolor sit amet, cse
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
            tempr incididunt ut labore et dolore magna Lorem ipsum dolor sit
            amet, cse adipiscing elit, sed do eiusmod tempr incididunt ut labore
            et dolore magna Lorem ipsum dolor sit amet, cse
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
            tempr incididunt ut labore et dolore magna Lorem ipsum dolor sit
            amet, cse adipiscing elit, sed do eiusmod tempr incididunt ut labore
            et dolore magna Lorem ipsum dolor sit amet, cse
          </p>
          <p className="mt-4">
            Books are available at <a href="#">Amazon</a>,{" "}
            <a href="#">Okada books</a>, <a href="#">Audible</a>,{" "}
            <a href="#">Bambooks</a>
          </p>
          <div className="mb-4">
            <PreorderBtn />
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={BookTwo}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
      </div>
    </div>
  );
};

const ThirdBook = () => {
  return (
    <div className="container-fluid booksBg">
      <div className="row align-items-center justify-content-center px-4 py-5">
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={BookThree}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3">
          <h3 className="">
            <b> Book Name</b>
            <br />
          </h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
            tempr incididunt ut labore et dolore magna Lorem ipsum dolor sit
            amet, cse adipiscing elit, sed do eiusmod tempr incididunt ut labore
            et dolore magna Lorem ipsum dolor sit amet, cse
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
            tempr incididunt ut labore et dolore magna Lorem ipsum dolor sit
            amet, cse adipiscing elit, sed do eiusmod tempr incididunt ut labore
            et dolore magna Lorem ipsum dolor sit amet, cse
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
            tempr incididunt ut labore et dolore magna Lorem ipsum dolor sit
            amet, cse adipiscing elit, sed do eiusmod tempr incididunt ut labore
            et dolore magna Lorem ipsum dolor sit amet, cse
          </p>
          <div>
            <GetMyBookBtnTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="container-fluid p-5 aboutBg">
      <div className="">
        {" "}
        <h3 className="pb-4 mx-5">
          <b>Services</b>
        </h3>
        <div className="card-group mx-5">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
            <div className="row d-lg-flex d-md-flex ">
              <div className="col-lg-4 col-md-6 col-sm-12 d-lg-flex d-md-flex py-2 align-items-center">
                <div className="col-lg-3 col-sm-6">
                  <img src={Icon} className="img-fluid" />
                  <h6 className="mt-3">Business Consulting</h6>
                </div>
                <div className="col-lg-9 col-sm-6">
                  {" "}
                  <p className="ms-lg-3 ms-md-3">
                    Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                    eiusmod tempr incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex py-2 align-items-center">
                <div className="col-lg-3 col-sm-6">
                  <img src={Icon} className="img-fluid" />
                  <h6 className="mt-3">Facilitation</h6>
                </div>
                <div className="col-lg-9 col-sm-6">
                  {" "}
                  <p className="ms-lg-3 ms-md-3">
                    Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                    eiusmod tempr incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex py-2 align-items-center">
                <div className="col-lg-3 col-sm-6">
                  <img src={Icon} className="img-fluid" />
                  <h6 className="mt-3">Strategy Development</h6>
                </div>
                <div className="col-lg-9 col-sm-6">
                  {" "}
                  <p className="ms-lg-3 ms-md-3">
                    Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                    eiusmod tempr incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 d-flex py-2 align-items-center">
                <div>
                  <img src={Icon} className="img-fluid" />
                  <h6 className="mt-3">Writing</h6>
                </div>
                <div>
                  {" "}
                  <p className="ms-3">
                    Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                    eiusmod tempr incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex py-2 align-items-center">
                <div>
                  <img src={Icon} className="img-fluid" />
                  <h6 className="mt-3">Writing</h6>
                </div>
                <div>
                  {" "}
                  <p className="ms-3">
                    Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                    eiusmod tempr incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex py-2 align-items-center">
                <div>
                  <img src={Icon} className="img-fluid" />
                  <h6 className="mt-3">Writing</h6>
                </div>
                <div>
                  {" "}
                  <p className="ms-3" style={{ fontSize: "" }}>
                    Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                    eiusmod tempr incididunt ut labore et dolore magna
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Testimonials = () => {
  return (
    <div className="container-fluid p-5 booksBg">
      <div className="">
        {" "}
        <h3 className="pb-4 mx-5">
          <b>Testimonials</b>
        </h3>
        <div className="card-group mx-lg-5">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
            <div className="row d-lg-flex d-md-flex">
              <div className="col-lg-4 col-md-6 d-flex py-2 align-items-center">
                <div className="card testimonialCard">
                  <div className="mt-3">
                    <div className="d-flex align-items-center">
                      <div>
                        <img
                          src={testimonial}
                          alt=""
                          width="90px"
                          height="90px"
                          className="rounded-circle ms-3 border border-light border-5"
                        />
                      </div>

                      <div className="ms-3">
                        <h5>
                          <b>Lorem Ipsum</b>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod temporww incididunt ut labore et dolore
                      magna. Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex py-2 align-items-center">
                <div className="card testimonialCard">
                  <div className="mt-3">
                    <div className="d-flex align-items-center">
                      <div>
                        <img
                          src={testimonial}
                          alt=""
                          width="90px"
                          height="90px"
                          className="rounded-circle ms-3 border border-light border-5"
                        />
                      </div>

                      <div className="ms-3">
                        <h5>
                          <b>Lorem Ipsum</b>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod temporww incididunt ut labore et dolore
                      magna. Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex py-2 align-items-center">
                <div className="card testimonialCard">
                  <div className="mt-3">
                    <div className="d-flex align-items-center">
                      <div>
                        <img
                          src={testimonial}
                          alt=""
                          width="90px"
                          height="90px"
                          className="rounded-circle ms-3 border border-light border-5"
                        />
                      </div>

                      <div className="ms-3">
                        <h5>
                          <b>Lorem Ipsum</b>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod temporww incididunt ut labore et dolore
                      magna. Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div className="aboutBg  py-5">
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
          {/* <div></div> */}
          <div className="mb-sm-0 mx-3">
            <a
              href="mailto:holla@titiekundayo.com"
              className="text-decoration-none linkColor"
            >
              <p className="paragraphColor textShow">
                <i class="bi bi-envelope me-2"></i>
                holla@titiekundayo.com
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
        <div className="d-flex justify-content-center">
          <a
            href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
            target="_blank"
            className="text-decoration-none text-black"
          >
            <p className="">41 CMD Road, Magodo/Secretariat, Lagos</p>
          </a>
        </div>

        <p className="text-center m-0 p-0" style={{ fontSize: "0.8rem" }}>
          Copyright &copy; Titi Ekundayo 2023
        </p>
      </div>
    </>
  );
};
