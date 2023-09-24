import { NewNavbar } from "../../components/website/navbar";
import { LandingPageHero } from "../../components/website/hero";
import { WhatWeDoCard } from "../../components/website/cards/homeCards";
import { Footer } from "../../components/website/footer";

import { PreOrderBtn } from "../../components/website/buttons";

//images
import bookone from "../../assets/website/images/books/bookone.png";
import booktwo from "../../assets/website/images/books/booktwo.png";
import bookthree from "../../assets/website/images/books/bookthree.png";
import impact from "../../assets/website/images/home/impactnumbers/impact.png";

const LandingPage = () => {
  return (
    <>
      <NewNavbar />
      <LandingPageHero />
      <WhatWeDoCard />
      <OurProcesses />
      <FirstBook />
      <SecondBook />
      {/* <Books /> */}
      {/* <ImpactNumbers /> */}
      <Footer />
    </>
  );
};

const OurProcesses = () => {
  return (
    <div
      className="container-fluid py-5"
      // style={{ backgroundColor: "#fbb03b" }}
    >
      {" "}
      <h3 className="text-center">
        <b>OUR PROCESSES</b>
      </h3>
      {/* <h4 className="ms-5">Our Processes</h4> */}
      <div className="row justify-content-evenly mt-5 mx-5">
        <div className="col-lg-6 col-md-6 col-sm-10 d-flex align-items-stretch">
          <div className="d-lg-flex align-items-center">
            <div className="mx-3">
              <h1 className="processesNumber">01.</h1>
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title">
                <b> Initiate Contact</b>
              </h4>
              <p className="card-text">
                Feel free to contact us through call, online forms, or email. We
                are here to assist you in achieving your objectives.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 d-flex align-items-stretch mt-5">
          <div className="d-lg-flex align-items-center">
            <div className="mx-3">
              <h1 className="processesNumber">02.</h1>
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title">
                <b> Exploratory Meeting</b>
              </h4>
              <p className="card-text">
                We arrange a physical or virtual meeting to comprehensively
                comprehend your project's scope and appreciate your creative
                vision.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 d-flex align-items-stretch mt-5">
          <div className="d-lg-flex align-items-center">
            <div className="mx-3">
              <h1 className="processesNumber">03.</h1>
            </div>
            <div className="card-body mx-2">
              <h4 className="card-title">
                <b>Agree on Terms</b>
              </h4>
              <p className="card-text">
                Once we've reached a consensus, the agreed-upon terms are
                formalized, setting the stage for project commencement.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 d-flex align-items-stretch mt-5">
          <div className="d-lg-flex align-items-center">
            <div className="mx-3">
              <h1 className="processesNumber">04.</h1>
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title">
                <b>Project Closure</b>
              </h4>
              <p className="card-text">
                Our final meeting is a project closure, during which all
                deliverables are officially transferred and concluded.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FirstBook = () => {
  return (
    <div className="container-fluid WhatWeDoBg">
      <h3 className="text-center pt-5">
        <b>BOOKS</b>
      </h3>
      <div className="row align-items-center justify-content-center px-4 py-5">
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3 ">
          <h4 className="">
            <b>Abeg who send me</b>
            <br />
          </h4>
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
          <p className="m-0 p-0">
            <b>Pre Order Amount</b> - Hardcopy &#8358;<b>4000</b>, Softcopy
            &#8358;
            <b>3000</b>, Audiobook &#8358;<b>3500</b>
          </p>
          {/* <p className="mt-2">
            Books are available at <a href="#">Amazon</a>,{" "}
            <a href="#">Okada books</a>, <a href="#">Audible</a>,{" "}
            <a href="#">Bambooks</a>
          </p> */}

          <div className="">
            <PreOrderBtn />
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 text-center pt-4">
          <img
            src={bookone}
            className="d-block mx-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
      </div>
    </div>
  );
};
const SecondBook = () => {
  return (
    <div className="container-fluid WhatWeDoBg">
      <div className="row align-items-center justify-content-center px-4 py-5 flex-lg-row-reverse">
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3">
          <h4 className="">
            <b>Tts Random Thoughts</b>
            <br />
          </h4>
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
          <p className="m-0 p-0">
            <b>Pre Order Amount</b> - Hardcopy &#8358;<b>4000</b>, Softcopy
            &#8358;
            <b>3000</b>, Audiobook &#8358;<b>3500</b>
          </p>
          {/* <p className="mt-2">
            Books are available at <a href="#">Amazon</a>,{" "}
            <a href="#">Okada books</a>, <a href="#">Audible</a>,{" "}
            <a href="#">Bambooks</a>
          </p> */}
          <div className="mb-4">
            <PreOrderBtn />
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 text-center pt-4">
          <img
            src={booktwo}
            className="d-block mx-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
      </div>
    </div>
  );
};
const OldBooks = () => {
  return (
    <div className="container-fluid p-5 WhatWeDoBg">
      {" "}
      <h3 className="text-center">
        <b>BOOKS</b>
      </h3>
      <div className="card-group row justify-content-center mt-5">
        {" "}
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 m-auto">
          <div className="col d-lg-flex d-md-flex mb-5 align-items-center">
            <div className="col">
              <img src={bookone} />
            </div>
            <div className="col">
              <h4 className="mt-3">Lorem Ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
                tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
              <p>Buy Now</p>
            </div>
          </div>
          <div className="col d-lg-flex d-md-flex mb-5 align-items-center">
            <div className="col">
              <img src={booktwo} />
            </div>
            <div className="col">
              <h4 className="mt-3">Lorem Ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
                tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
          <img src={bookthree} className="card-img-top" alt="..." />
          <h4 className="mt-4">Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
            tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
          </p>
        </div> */}
      </div>
    </div>
  );
};

const ImpactNumbers = () => {
  return (
    //     margin-left: 20px;
    <div
      className="container-fluid justify-content-center p-5"
      // style={{ backgroundColor: "#fbb03b" }}
    >
      {" "}
      <h3 className="text-center">
        <b>IMPACT NUMBERS</b>
      </h3>
      {/* <h4 className="ms-5">Impact Numbers</h4> */}
      <div className="row justify-content-center justify-content-evenly mt-5">
        <div className="col-lg-3 col-md-6 col-sm-10 mx-4 my-3">
          <div
            className="d-flex align-items-center impactCard px-4 "
            style={{ width: "20rem", height: "8rem" }}
          >
            <div className="mx-3">
              <img src={impact} className="img-fluid" width="50" height="50" />
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title impactNumber">
                <b>180</b>
              </h4>
              <p className="card-text">Projects Delivered</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-10 mx-4 my-3">
          <div
            className="d-flex align-items-center impactCard px-4 "
            style={{ width: "20rem", height: "8rem" }}
          >
            <div className="mx-3">
              <img src={impact} className="img-fluid" width="50" height="50" />
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title impactNumber">
                <b>100</b>
              </h4>
              <p className="card-text">Projects Delivered</p>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-3 col-md-6 col-sm-10 mx-4 mt-5">
          <div
            className="d-flex align-items-center impactCard px-4 py-4"
            style={{ width: "20rem", height: "8rem" }}
          >
            <div className="mx-3">
              <img src={impact} className="img-fluid" width="50" height="50" />
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title impactNumber">
                <b>120</b>
              </h4>
              <p className="card-text">Projects Delivered</p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="row justify-content-center justify-content-evenly">
        <div className="col-lg-3 col-md-6 col-sm-10 mx-4 my-3">
          <div
            className="d-flex align-items-center impactCard px-4 "
            style={{ width: "20rem", height: "8rem" }}
          >
            <div className="mx-3">
              <img src={impact} className="img-fluid" width="50" height="50" />
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title impactNumber">
                <b>190</b>
              </h4>
              <p className="card-text">Projects Delivered</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-10 mx-4 my-3">
          <div
            className="d-flex align-items-center impactCard px-4 "
            style={{ width: "20rem", height: "8rem" }}
          >
            <div className="mx-3">
              <img src={impact} className="img-fluid" width="50" height="50" />
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title impactNumber">
                <b>150</b>
              </h4>
              <p className="card-text">Projects Delivered</p>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-3 col-md-6 col-sm-10 mx-4 mt-5">
          <div
            className="d-flex align-items-center impactCard px-4 py-4"
            style={{ width: "20rem", height: "8rem" }}
          >
            <div className="mx-3">
              <img src={impact} className="img-fluid" width="50" height="50" />
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title impactNumber">
                <b>200</b>
              </h4>
              <p className="card-text">Projects Delivered</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LandingPage;
