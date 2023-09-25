import publish from "../../../assets/website/icons/home/publish.png";
import publishnow from "../../../assets/website/icons/home/publishnow.png";
import sales from "../../../assets/website/icons/home/sales.png";
import { WorkWithUsBtnn } from "../buttons";

// import writing from "../../../assets/website/icons/whatwedo/writing.png";
export const WhatWeDoCard = () => {
  return (
    <div className="container-fluid px-5 py-5 WhatWeDoBg">
      {" "}
      <h3 className="text-center">
        <b>WHAT WE DO</b>
      </h3>
      {/* <p className="col-lg-7 ms-5"> */}
      <div className="text-center">
        {" "}
        <p className="d-lg-inline-block col-lg-7">
          We are a distinguished book publishing firm and a thriving marketplace
          for creative professionals. Our unwavering commitment lies in
          supporting self-published authors throughout their journey towards
          achieving best-seller status.
        </p>
      </div>
      <div className="row justify-content-evenly mt-5 mx-5">
        <div className="col-lg-4 col-md-6 col-sm-10 d-flex align-items-stretch">
          <div className="mb-5 py-4 WhatWeDoCard">
            <div className="ms-3">
              <img src={publish} className="img-fluid" />
            </div>
            <div className="card-body">
              <h4 className="card-title ms-3 mt-3">Publishing</h4>
              <p className="card-text ms-3 mt-3">
                Craft your masterpiece; we'll take care of the rest. Our
                expertise ensures your book shines in various formats, ready for
                the world.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10 d-flex align-items-stretch">
          <div className="mb-5 py-4 WhatWeDoCard">
            <div className="ms-3">
              <img src={publishnow} className="img-fluid" />
            </div>
            <div className="card-body">
              <h4 className="card-title ms-3 mt-3">Publish now, pay later</h4>
              <p className="card-text ms-3 mt-3">
                Write fearlessly; we'll handle publishing. Embrace "publish now,
                pay later" for financial ease. Your book deserves creation
                without financial stress.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10 d-flex align-items-stretch">
          <div className="mb-5 py-4 WhatWeDoCard">
            <div className="ms-3">
              <img src={sales} className="img-fluid" />
            </div>
            <div className="card-body">
              <h4 className="card-title ms-3 mt-3">Sales and Marketing</h4>
              <p className="card-text ms-3 mt-3">
                Your remarkable book deserves a global audience. Say farewell to
                obscurity with our all-encompassing sales and marketing
                strategy. Plus a bonus perk: Get your personalized page at
                yourname.jolevi.com.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <WorkWithUsBtnn />
      </div>
    </div>
  );
};
