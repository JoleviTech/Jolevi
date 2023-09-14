//LandingPageHero
//ServicesHero
//AboutHero

//images, footer, sales and marketing

import { WorkWithUsBtn, WorkWithUsBtnn } from "./buttons";

export const LandingPageHero = () => {
  return (
    <div className="container-fluid LandingPageHeroBg d-flex align-items-center">
      <div className="container-fluid LandingPageHeroBgg d-flex pt-3 pb-4">
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
          <div className="ms-lg-5">
            {/* <WorkWithUsBtn /> */}
            <WorkWithUsBtnn />
          </div>
        </div>
      </div>
    </div>
  );
};
export const AboutPageHero = () => {
  return (
    <div className="container-fluid AboutPageHeroBg d-flex align-items-center">
      <div className="container-fluid AboutPageHeroBgg d-flex pt-3 pb-4">
        <div className="row justify-content-start">
          <div className="col-lg-9 col-md-8 col-sm-12 px-lg-5 ms-2">
            <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none textWhite bigFont">
              Creating a world of hope
            </h1>
            <h2 className="d-xs-block d-sm-block d-md-block d-lg-none textWhite">
              Creating a world of hope
            </h2>
            <p className="mt-2 textWhite">
              Jolevi: Empowering Creativity to Forge Limitless Possibilities.
            </p>
          </div>
          <div className="ms-lg-5">
            <WorkWithUsBtnn />
          </div>
        </div>
      </div>
    </div>
  );
};
export const ServicesPageHero = () => {
  return (
    <div className="container-fluid AboutPageHeroBg d-flex align-items-center">
      <div className="container-fluid AboutPageHeroBgg d-flex pt-3 pb-4">
        <div className="row justify-content-start">
          <div className="col-lg-9 col-md-8 col-sm-12 px-lg-5 ms-2">
            <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none textWhite bigFont">
              Ignite Your Creativity!
            </h1>
            <h2 className="d-none d-xs-none d-sm-none d-md-block d-lg-none textWhite">
              Ignite Your Creativity!
            </h2>
            <h3
              className="d-xs-block d-sm-block d-md-none d-lg-none textWhite"
              style={{ fontSize: "1.7rem", fontWeight: "600" }}
            >
              Ignite Your Creativity!
            </h3>
            <p className="mt-2 textWhite">
              Jolevi - Your Self-Publishing Partner and Creative Marketplace.
            </p>
          </div>
          <div className="ms-lg-5">
            <WorkWithUsBtnn />
          </div>
        </div>
      </div>
    </div>
  );
};
