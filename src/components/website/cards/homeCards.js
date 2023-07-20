//WhatWeDoCard

import writing from "../../../assets/website/icons/whatwedo/writing.png";
export const WhatWeDoCard = () => {
  return (
    <div className="container-fluid px-5 py-5 WhatWeDoBg">
      {" "}
      <h4 className=" ms-5">What We Do</h4>
      <p className="col-lg-7 ms-5">
        Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod tempr
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        nostrud exercitation ullamco
      </p>
      <div className="row justify-content-evenly mt-5 mx-5">
        <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
          <div className="card mb-5 py-4 WhatWeDoCard">
            <div className="ms-3">
              <img src={writing} className="img-fluid" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Writing</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
                tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, nostrud exercitation ullamco
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
          <div className="card mb-5 py-4 cardBg">
            <div className="ms-3">
              <img src={writing} className="img-fluid" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Writing</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
                tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, nostrud exercitation ullamco
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
          <div className="card mb-5 py-4 cardBg">
            <div className="ms-3">
              <img src={writing} className="img-fluid" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Writing</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, cse adipiscing elit, sed do eiusmod
                tempr incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, nostrud exercitation ullamco
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
