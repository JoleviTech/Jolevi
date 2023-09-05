import { NewNavbar } from "../../components/website/navbar";
import { LandingPageHero } from "../../components/website/hero";
import { WhatWeDoCard } from "../../components/website/cards/homeCards";
import { Footer } from "../../components/website/footer";

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
      <Books />
      <ImpactNumbers />
      <Footer />
    </>
  );
};

const OurProcesses = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#fbb03b" }}
    >
      {" "}
      <h3 className="text-center">
        <b>OUR PROCESSES</b>
      </h3>
      {/* <h4 className="ms-5">Our Processes</h4> */}
      <div className="row justify-content-evenly mt-5 mx-5">
        <div className="col-lg-6 col-md-6 col-sm-10 d-flex align-items-stretch">
          <div className="d-flex align-items-center">
            <div className="mx-3">
              <h1 className="processesNumber">01.</h1>
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title">
                <b>Writing</b>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
                tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 d-flex align-items-stretch mt-5">
          <div className="d-flex align-items-center">
            <div className="mx-3">
              <h1 className="processesNumber">02.</h1>
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title">
                <b>Writing</b>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
                tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 d-flex align-items-stretch mt-5">
          <div className="d-flex align-items-center">
            <div className="mx-3">
              <h1 className="processesNumber">03.</h1>
            </div>
            <div className="card-body mx-2">
              <h4 className="card-title">
                <b>Writing</b>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
                tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 d-flex align-items-stretch mt-5">
          <div className="d-flex align-items-center">
            <div className="mx-3">
              <h1 className="processesNumber">04.</h1>
            </div>
            <div className="card-body mx-3">
              <h4 className="card-title">
                <b>Writing</b>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
                tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Books = () => {
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
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
          <img src={bookthree} className="card-img-top" alt="..." />
          <h4 className="mt-4">Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
            tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
          </p>
        </div>
      </div>
    </div>
  );
};

const ImpactNumbers = () => {
  return (
    //     margin-left: 20px;
    <div className="container-fluid p-5" style={{ backgroundColor: "#fbb03b" }}>
      {" "}
      <h3 className="text-center">
        <b>IMPACT NUMBERS</b>
      </h3>
      {/* <h4 className="ms-5">Impact Numbers</h4> */}
      <div className="row justify-content-center justify-content-evenly mt-5">
        <div className="col-lg-3 col-md-6 col-sm-10 mx-4">
          <div
            className="d-flex align-items-center impactCard px-4 py-4"
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
        <div className="col-lg-3 col-md-6 col-sm-10 mx-4">
          <div
            className="d-flex align-items-center impactCard px-4 py-4"
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
      <div className="row justify-content-center justify-content-evenly mt-5">
        <div className="col-lg-3 col-md-6 col-sm-10 mx-4">
          <div
            className="d-flex align-items-center impactCard px-4 py-4"
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
        <div className="col-lg-3 col-md-6 col-sm-10 mx-4">
          <div
            className="d-flex align-items-center impactCard px-4 py-4"
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
