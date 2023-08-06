import { Link } from "react-router-dom";
import jolevilogo from "../../assets/website/icons/logo/jolevilogo.png";
import authorImg from "../../assets/website/images/authors/authorImg.png";
import BookOne from "../../assets/website/images/authors/BookOne.png";
import BookTwo from "../../assets/website/images/authors/BookTwo.png";
import BookThree from "../../assets/website/images/authors/BookThree.png";
import Icon from "../../assets/website/images/authors/icon.png";
import testimonial from "../../assets/website/images/authors/testimonial.png";
import homehero from "../../assets/website/images/authors/homehero.jpg";
import homeherotwo from "../../assets/website/images/authors/homeherotwo.png";
import homeherothree from "../../assets/website/images/authors/homeherothree.png";
import homeherofour from "../../assets/website/images/authors/homeherofour.png";

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
      {/* <Testimonials /> */}
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
const ContactMeBtn = () => {
  return (
    <>
      <a
        href="mailto:holla@titiekundayo.com"
        target="_blank"
        className="text-decoration-none"
      >
        <button class="GetMyBookBtn btnText mt-2">
          {" "}
          <b>Contact me</b>
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
    <div className="container-fluid newHeroBg ">
      <div className="row align-items-center justify-content-center px-4">
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3">
          <h2 className=" d-none d-lg-block d-md-none d-sm-none d-xs-none">
            Leaving the world better than we met it
            <br />
          </h2>
          <h3 className=" d-xs-block d-sm-block d-md-block d-lg-none">
            Leaving the world better than we met it
            <br />
          </h3>
          <p>
            Pre Order Amount - Hardcopy &#8358;<b>4000</b>, Softcopy &#8358;
            <b>3000</b>, Audiobook &#8358;<b>3500</b>
          </p>
          <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
            <PreorderBtn />
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            // src={homeherothree}
            // src={homeherofour}
            src={homeherotwo}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
      </div>
    </div>
  );
};
// export const Hero = () => {
//   return (
//     <div className="container-fluid AuthorHeroBg d-flex align-items-center">
//       <div className="container-fluid AuthorHeroBgg d-flex pt-3 pb-4">
//         <div className="row justify-content-start">
//           <div className="col-lg-6 col-md-8 col-sm-12 px-lg-5 ms-2">
//             <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none textWhite">
//               Leaving the world better than we met it
//             </h1>
//             <h2 className="d-xs-block d-sm-block d-md-block d-lg-none textWhite">
//               Leaving the world better than we met it
//             </h2>
//             {/* <p className="mt-2 textWhite">
//               Lorem ipsum dolor sit amet consectetur adipiscing lorem ipsum
//               dolor sit amet consectetur adipiscing
//             </p> */}
//           </div>
//           <div className="ms-5">
//             <PreorderBtn />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const AboutAuthor = () => {
  return (
    <>
      <div className="container-fluid aboutBg">
        <div className="row align-items-center justify-content-center px-4 py-5">
          <div className="col-lg-6 col-md-7 col-sm-12 pt-3">
            <h3 className="">
              About Me
              <br />
            </h3>
            <p className="mt-4">
              Titilayo Ekundayo is a dynamic entrepreneur, strategist, and
              influencer in the business world. With a strong focus on
              entrepreneurship, she's had a significant impact on numerous
              businesses. As a serial entrepreneur, her journey showcases
              expertise and dedication. She supports and guides entrepreneurs on
              various boards, aiding in profitable and sustainable businesses.
            </p>
            <p className="mt-4">
              An advocate for emerging entrepreneurs, Titilayo enjoys mentoring,
              guiding from ideation to growth. She hosts{" "}
              <a
                href=" https://podcasters.spotify.com/pod/show/abeg-who-send-me"
                target="_blank"
              >
                The Abegwhosendme podcast
              </a>{" "}
              sharing stories and advice for business success. As an educator,
              she teaches entrepreneurship, equipping aspiring business minds.
              Titilayo is also the president of Ikeja Toastmasters Club,
              showcasing her communication and leadership skills.
            </p>
            <p className="mt-4">
              Amid her professional life, she finds joy in reading, movies, and
              intellectual discussions. Titilayo Ekundayo is a guiding light,
              leaving an indelible mark on business development and strategy.
            </p>
            <div className="mb-4">
              <ContactMeBtn />
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <img
              src={authorImg}
              className="d-block mx-lg-auto img-fluid"
              alt=""
              loading=""
            />
          </div>
        </div>
      </div>
    </>
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
            "Abeg Who Send Me: Embracing Fear and Embracing Growth in
            Entrepreneurship" is a compelling and insightful compilation of
            short stories,chronicling the author's entrepreneurial journey in
            Nigeria. Fueled by a need to share lessons learned, the book
            captures mistakes made, both avoidable and unavoidable, and the
            invaluable insights gained in hindsight. With a candid narrative and
            a "so what" attitude towards failure, the book serves as an
            indispensable guide for aspiring and young entrepreneurs, offering
            them a chance to navigate their ventures more confidently. Even
            seasoned businesspeople can find it a refreshing reminder of the
            fundamentals that drive success.
          </p>
          {/* <p className="mt-4">
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
          </p> */}
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
            "Inspired Reflections: 365 Days of Enlightening Thoughts" is a
            delightful collection of random musings that began with a playful
            WhatsApp status challenge. Evolving into a treasure trove of quotes,
            each page aims to leave readers enriched and inspired. Extracted
            from the author's daily encounters, every thought comes with a
            charming short story, providing context and depth. This fantastic
            read offers 365 days of instructive, educative, and enlightening
            insights, making it a must-have for those seeking daily doses of
            inspiration."
          </p>
          {/* <p className="mt-4">
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
          </p> */}
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
                    Discover the Power of Business Consulting with Titilayo!
                    With a decade of entrepreneurial experience and successful
                    ventures, Titilayo offers expert advice to business owners
                    at all stages – ideation, product-market fit, and growth.
                    Achieve efficiency and sustainable growth for your business
                    with her strategic insights. Unlock your potential today!
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
                    At the heart of every problem lies a knowledge gap, and Titi
                    is on a mission to bridge it! With a passion for guiding
                    entrepreneurs, she finds immense joy in imparting the
                    essential skills of building, growing, and scaling
                    businesses. As a seasoned facilitator, Titi has shared her
                    expertise through entrepreneurship classes at prestigious
                    institutions such as 8thGear Venture Studio, Leap Africa's
                    E-learning bootcamp, and FCMB Agrohack incubation, among
                    others. Join Titi on an empowering journey of learning and
                    watch your entrepreneurial dreams flourish!
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
                    "Unlock Success with Expert Strategy Development! With years
                    of experience in business consulting, our team, led by
                    Titilayo, has helped numerous businesses achieve their
                    goals. From ideation to implementation, we offer tailored
                    strategies for growth and efficiency. Let us guide you
                    through every stage, ensuring your business thrives in
                    today's competitive landscape. Take the first step towards
                    success and partner with our strategy development experts!"
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
