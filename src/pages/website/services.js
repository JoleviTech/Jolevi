import writing from "../../assets/website/images/services/writing.png";

const Services = () => {
  return (
    <>
      <ServicesSection />
    </>
  );
};

const ServicesSection = () => {
  return (
    <>
      <div className="container-fluid p-5 WhatWeDoBg">
        {" "}
        <h4 className="ms-5">Services</h4>
        <div className="card-group row justify-content-center mt-5 px-5">
          {" "}
          <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
            <div className="col  mb-5 align-items-center">
              <div className="d-lg-flex d-md-flex">
                <div className="col">
                  <img src={writing} />
                </div>
                <div className="col">
                  <h4>Writing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                    eiusmod tempr incididunt ut labore et dolore magna aliqua.
                    Ut enim ad
                  </p>
                </div>{" "}
                <div className="d-flex">
                  {" "}
                  <p>Writing</p>
                  <p>Writing</p>
                  <p>Writing</p>
                </div>
              </div>{" "}
            </div>
            <div className="col d-lg-flex d-md-flex mb-5 align-items-center">
              <div className="col">
                <img src={writing} />
              </div>
              <div className="col">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                  eiusmod tempr incididunt ut labore et dolore magna aliqua. Ut
                  enim ad
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto">
            <div className="col d-lg-flex d-md-flex mb-5 align-items-center">
              <div className="col">
                <img src={writing} />
              </div>
              <div className="col">
                <h4>Writing</h4>
                <p>
                  Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                  eiusmod tempr incididunt ut labore et dolore magna aliqua. Ut
                  enim ad
                </p>
              </div>
            </div>
            <div className="col d-lg-flex d-md-flex mb-5 align-items-center">
              <div className="col">
                <img src={writing} />
              </div>
              <div className="col">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                  eiusmod tempr incididunt ut labore et dolore magna aliqua. Ut
                  enim ad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
