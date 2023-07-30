import writing from "../../assets/website/images/services/writing.png";
import writingicon from "../../assets/website/icons/whatwedo/writing.png";
import pricing from "../../assets/website/images/services/pricing.png";

import { GetStartedBtn } from "../../components/website/buttons";

const Services = () => {
  return (
    <>
      <ServicesSection />
      <Pricing />
    </>
  );
};

const ServicesSection = () => {
  return (
    <>
      <div className="container-fluid p-4 WhatWeDoBg">
        {" "}
        <h4 className="ms-5">Services</h4>
        <div className="card-group row justify-content-center mt-5 px-5">
          {" "}
          <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-4">
                  <img src={writing} />
                </div>
                <div className="col-lg-6 col-md-6">
                  <h4>Writing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                    eiusmod tempr incididunt ut labore et dolore magna aliqua.
                    Ut enim ad
                  </p>
                  <div className="d-flex align-items-center">
                    {" "}
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-4">
                  <img src={writing} />
                </div>
                <div className="col-lg-6 col-md-6">
                  <h4>Writing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                    eiusmod tempr incididunt ut labore et dolore magna aliqua.
                    Ut enim ad
                  </p>
                  <div className="d-flex align-items-center">
                    {" "}
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
            {/* <div className="col d-lg-flex d-md-flex mb-5 align-items-center justify-content-between">
              <div className="col-lg-4 col-md-4">
                <img src={writing} />
              </div>
              <div className="col-lg-6 col-md-6">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                  eiusmod tempr incididunt ut labore et dolore magna aliqua. Ut
                  enim ad
                </p>
              </div>
            </div> */}
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-4">
                  <img src={writing} />
                </div>
                <div className="col-lg-6 col-md-6">
                  <h4>Writing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                    eiusmod tempr incididunt ut labore et dolore magna aliqua.
                    Ut enim ad
                  </p>
                  <div className="d-flex align-items-center">
                    {" "}
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="col mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex align-items-center justify-content-between">
                <div className="col-lg-4 col-md-4">
                  <img src={writing} />
                </div>
                <div className="col-lg-6 col-md-6">
                  <h4>Writing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                    eiusmod tempr incididunt ut labore et dolore magna aliqua.
                    Ut enim ad
                  </p>
                  <div className="d-flex align-items-center">
                    {" "}
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mx-1">
                      <div>
                        <img src={writingicon} width="30" height="30" />
                      </div>
                      <div>
                        <p
                          className="p-0 m-0 ms-1"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Writing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
            {/* <div className="col d-lg-flex d-md-flex mb-5 align-items-center justify-content-between">
              <div className="col-lg-4 col-md-4">
                <img src={writing} />
              </div>
              <div className="col-lg-6 col-md-6">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                  eiusmod tempr incididunt ut labore et dolore magna aliqua. Ut
                  enim ad
                </p>
              </div>
            </div> */}
          </div>
          {/* <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
            <div className="col d-lg-flex d-md-flex mb-5 align-items-center justify-content-between">
              <div className="col-lg-4 col-md-4">
                <img src={writing} />
              </div>
              <div className="col-lg-6 col-md-6">
                <h4>Writing</h4>
                <p>
                  Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                  eiusmod tempr incididunt ut labore et dolore magna aliqua. Ut
                  enim ad
                </p>
              </div>
            </div>
            <div className="col d-lg-flex d-md-flex mb-5 align-items-center justify-content-between">
              <div className="col-lg-4 col-md-4">
                <img src={writing} />
              </div>
              <div className="col-lg-6 col-md-6">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                  eiusmod tempr incididunt ut labore et dolore magna aliqua. Ut
                  enim ad
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
const Pricing = () => {
  return (
    <>
      <div className="container p-5">
        {" "}
        <h4 className="ms-5 mb-4">Pricing</h4>
        {/* <div
          className="col-lg-4 card firstPricingCard"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">Lorem Ipsum</h5>
            <h5 className="card-title">Lorem Ipsum Dolor</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipiscing lorem ipsum
              dolor sit amet consectetur adipiscing Lorem ipsum dolor sit amet
              consectetur adipiscing
            </p>
          </div>{" "}
          <img src={pricing} className="card-img-top" alt="..." />
        </div> */}
        <div class="row">
          <div class="col-lg-4 col-sm-6 mb-3 mb-sm-0">
            <div class="pricingCard p-4">
              <div class="card-body">
                <div className="d-flex align-items-center">
                  <img src={writingicon} />
                  <h5 class="card-title ms-3">
                    <b>Lite</b>
                  </h5>
                </div>
                <h6 class="card-text mt-3">Lorem ipsum dolor sit amet</h6>{" "}
                <div className="d-flex align-items-center justify-content-center py-3">
                  <h2 className="mx-1">N2,000</h2>
                  <h6 className="mt-4 mx-1">per month</h6>
                </div>
                <div className="text-center">
                  <GetStartedBtn />
                </div>
                <h6 className="mt-4">
                  <b>Lite includes:</b>
                </h6>
                {/* <div className="d-flex align-items-center">
                  {" "}
                  <img src={writingicon} className="img-fluid" />
                  <p>Lorem ipsum dolor sit amet </p>
                </div> */}
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-3 mb-sm-0">
            <div class="pricingCard p-4">
              <div class="card-body">
                <div className="d-flex align-items-center">
                  <img src={writingicon} />
                  <h5 class="card-title ms-3">
                    <b>Lite</b>
                  </h5>
                </div>
                <h6 class="card-text mt-3">Lorem ipsum dolor sit amet</h6>{" "}
                <div className="d-flex align-items-center justify-content-center py-3">
                  <h2 className="mx-1">N2,000</h2>
                  <h6 className="mt-4 mx-1">per month</h6>
                </div>
                <div className="text-center">
                  <GetStartedBtn />
                </div>
                <h6 className="mt-4">
                  <b>Lite includes:</b>
                </h6>
                {/* <div className="d-flex align-items-center">
                  {" "}
                  <img src={writingicon} className="img-fluid" />
                  <p>Lorem ipsum dolor sit amet </p>
                </div> */}
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-3 mb-sm-0">
            <div class="pricingCard p-4">
              <div class="card-body">
                <div className="d-flex align-items-center">
                  <img src={writingicon} />
                  <h5 class="card-title ms-3">
                    <b>Lite</b>
                  </h5>
                </div>
                <h6 class="card-text mt-3">Lorem ipsum dolor sit amet</h6>{" "}
                <div className="d-flex align-items-center justify-content-center py-3">
                  <h2 className="mx-1">N2,000</h2>
                  <h6 className="mt-4 mx-1">per month</h6>
                </div>
                <div className="text-center">
                  <GetStartedBtn />
                </div>
                <h6 className="mt-4">
                  <b>Lite includes:</b>
                </h6>
                {/* <div className="d-flex align-items-center">
                  {" "}
                  <img src={writingicon} className="img-fluid" />
                  <p>Lorem ipsum dolor sit amet </p>
                </div> */}
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-4 col-sm-6 mb-3 mb-sm-0">
            <div class="pricingCard p-4">
              <div class="card-body">
                <div className="d-flex align-items-center">
                  <img src={writingicon} />
                  <h5 class="card-title ms-3">
                    <b>Lite</b>
                  </h5>
                </div>
                <h6 class="card-text mt-3">Lorem ipsum dolor sit amet</h6>{" "}
                <div className="d-flex align-items-center justify-content-center py-3">
                  <h2 className="mx-1">N2,000</h2>
                  <h6 className="mt-4 mx-1">per month</h6>
                </div>
                <div className="text-center">
                  <GetStartedBtn />
                </div>
                <h6 className="mt-4">
                  <b>Lite includes:</b>
                </h6>
                {/* <div className="d-flex align-items-center">
                  {" "}
                  <img src={writingicon} className="img-fluid" />
                  <p>Lorem ipsum dolor sit amet </p>
                </div> */}
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-3 mb-sm-0">
            <div class="pricingCard p-4">
              <div class="card-body">
                <div className="d-flex align-items-center">
                  <img src={writingicon} />
                  <h5 class="card-title ms-3">
                    <b>Lite</b>
                  </h5>
                </div>
                <h6 class="card-text mt-3">Lorem ipsum dolor sit amet</h6>{" "}
                <div className="d-flex align-items-center justify-content-center py-3">
                  <h2 className="mx-1">N2,000</h2>
                  <h6 className="mt-4 mx-1">per month</h6>
                </div>
                <div className="text-center">
                  <GetStartedBtn />
                </div>
                <h6 className="mt-4">
                  <b>Lite includes:</b>
                </h6>
                {/* <div className="d-flex align-items-center">
                  {" "}
                  <img src={writingicon} className="img-fluid" />
                  <p>Lorem ipsum dolor sit amet </p>
                </div> */}
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-3 mb-sm-0">
            <div class="pricingCard p-4">
              <div class="card-body">
                <div className="d-flex align-items-center">
                  <img src={writingicon} />
                  <h5 class="card-title ms-3">
                    <b>Lite</b>
                  </h5>
                </div>
                <h6 class="card-text mt-3">Lorem ipsum dolor sit amet</h6>{" "}
                <div className="d-flex align-items-center justify-content-center py-3">
                  <h2 className="mx-1">N2,000</h2>
                  <h6 className="mt-4 mx-1">per month</h6>
                </div>
                <div className="text-center">
                  <GetStartedBtn />
                </div>
                <h6 className="mt-4">
                  <b>Lite includes:</b>
                </h6>
                {/* <div className="d-flex align-items-center">
                  {" "}
                  <img src={writingicon} className="img-fluid" />
                  <p>Lorem ipsum dolor sit amet </p>
                </div> */}
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-1">
                  <div>
                    <img src={writingicon} width="30" height="30" />
                  </div>
                  <div>
                    <p className="p-0 m-0 ms-1" style={{ fontSize: "0.85rem" }}>
                      Writing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
