import writing from "../../assets/website/images/services/writing.png";
import vision from "../../assets/website/images/about/vision.png";
import mission from "../../assets/website/images/about/mission.png";
import advisory from "../../assets/website/images/about/advisory.png";
import jolevi from "../../assets/website/images/about/jolevi.png";
import eightgear from "../../assets/website/images/about/eightgear.png";
import freshchow from "../../assets/website/images/about/freshchow.png";
import seda from "../../assets/website/images/about/seda.png";
import solakat from "../../assets/website/images/about/solakat.png";
import vouch from "../../assets/website/images/about/vouch.png";
import { JoinTheTeamBtn } from "../../components/website/buttons";
import ife from "../../assets/website/images/about/advisory/ife.png";
import adeniran from "../../assets/website/images/about/advisory/adeniran.png";

const About = () => {
  return (
    <>
      <VisionAndMission />
      <Team />
      <AdvisoryCouncil />
      <Partners />
      <JoinTheTeam />
    </>
  );
};

const VisionAndMission = () => {
  return (
    <>
      <div className="container-fluid px-5 pt-5 pb-3 mt-5">
        {" "}
        <h4 className="">Vision & Mission</h4>
        <div className="row justify-content-center text-center mt-5">
          <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
            <div className="px-3 mb-5 py-4 visionCard">
              <div className="text-center">
                <img src={vision} />
              </div>
              <div className="card-body">
                <h4 className="card-title mt-3">Vision</h4>
                <p className="card-text">
                  Forging indelible imprints on the tapestry of time, empowered
                  by impactful words that inspire generations to create lasting
                  change and progress.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
            {" "}
            <div className="px-3 mb-5 py-4 visionCard">
              <div className="text-center">
                <img src={mission} />
              </div>
              <div className="card-body">
                <h4 className="card-title mt-3">Mission</h4>
                <p className="card-text">
                  To facilitate meaningful contributions from individuals and
                  organizations to the existing body of knowledge, utilizing the
                  power of both written and spoken words.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Team = () => {
  return (
    <>
      <div className="container-fluid px-5 pt-5 pb-3 SectionTwoBg mt-5">
        {" "}
        <h4 className="">Team</h4>
        <div className="row justify-content-center mt-5 text-center">
          <div className="col-lg-4 col-md-4 col-sm-10 d-flex align-items-stretch">
            <div className="card w-75 mx-auto teamCard">
              <img src={advisory} className="card-img-top" alt="Teamimage" />
              <div className="card-body teamcardbody">
                <figure className="text-center">
                  <figcaption className="card-text mt-1">
                    Titilayo Ekundayo
                  </figcaption>
                  <p className="Text mb-3 mt-3"> Lead Orchestrator</p>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 d-flex align-items-stretch">
            <div className="card w-75 mx-auto teamCard">
              <img src={advisory} className="card-img-top" alt="Teamimage" />
              <div className="card-body teamcardbody">
                <figure className="text-center">
                  <figcaption className="card-text mt-1">
                    Victor Ekundayo
                  </figcaption>
                  <p className="Text mb-3 mt-3">Developer</p>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 d-flex align-items-stretch">
            <div className="card w-75 mx-auto teamCard">
              <img src={advisory} className="card-img-top" alt="Teamimage" />
              <div className="card-body teamcardbody">
                <figure className="text-center">
                  <figcaption className="card-text mt-1">
                    Opeyemi Bioku
                  </figcaption>
                  <p className="Text mb-3 mt-3">Developer</p>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AdvisoryCouncil = () => {
  return (
    <>
      <div className="container-fluid px-5 pt-5 pb-3 SectionTwoBg mt-5">
        {" "}
        <h4 className="">Advisory Council</h4>
        <div className="row justify-content-center mt-5 ">
          <div className="col-lg-4 col-md-4 col-sm-10 d-flex align-items-stretch">
            <div className=" w-75 mx-auto">
              <img src={ife} className="card-img-top" alt="Teamimage" />
              <div className="card-body teamcardbody">
                <figure className="">
                  <figcaption className="card-text mt-3">
                    Ife Olujuyigbe
                  </figcaption>
                  <p className="Text mb-3">Role</p>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 d-flex align-items-stretch">
            <div className="w-75 mx-auto">
              <img src={advisory} className="card-img-top" alt="Teamimage" />
              <div className="card-body teamcardbody">
                <figure className="">
                  <figcaption className="card-text mt-3">
                    Damilola Obidairo
                  </figcaption>
                  <p className="Text mb-3">Role</p>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 d-flex align-items-stretch">
            <div className=" w-75 mx-auto">
              <img src={adeniran} className="card-img-top" alt="Teamimage" />
              <div className="card-body teamcardbody">
                <figure className="">
                  <figcaption className="card-text mt-3">
                    Adeniran Akinboyewa
                  </figcaption>
                  <p className="Text mb-3">Role</p>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Partners = () => {
  return (
    <>
      <div className="container-fluid px-5 pt-5 pb-3 mt-5 WhatWeDoBg">
        {" "}
        <h4 className="">Partners</h4>
        <div className="row justify-content-center text-center mt-5">
          <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex">
            <div className="px-4 mb-5 py-2 visionCard">
              <div className="text-center">
                <img src={eightgear} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex">
            <div className="px-4 mb-5 py-2 visionCard">
              <div className="text-center">
                <img src={freshchow} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex">
            <div className="px-4 mb-5 py-2 visionCard">
              <div className="text-center">
                <img src={seda} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex">
            <div className="px-4 mb-5 py-2 visionCard">
              <div className="text-center">
                <img src={solakat} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex">
            <div className="px-4 mb-5 py-2 visionCard">
              <div className="text-center">
                <img src={vouch} />
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex">
            <div className="px-4 mb-5 py-2 visionCard">
              <div className="text-center">
                <img src={jolevi} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex">
            <div className="px-4 mb-5 py-2 visionCard">
              <div className="text-center">
                <img src={jolevi} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex">
            <div className="px-4 mb-5 py-2 visionCard">
              <div className="text-center">
                <img src={jolevi} />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
const JoinTheTeam = () => {
  return (
    <>
      <div className="container-fluid px-5 pb-3 mt-5 text-center">
        {" "}
        <h4 className="">Interested in joining our team?</h4>
        <p>
          We are a group of young people who embrace challenging endeavors,
          transforming the seemingly impossible into achievable realities. We
          firmly believe in the infinite power of words, as everything was
          created through the word. Embarking on a journey to shape our world
          with words, we invite you to join us if you resonate with our mission
        </p>
        <JoinTheTeamBtn />
      </div>
    </>
  );
};
export default About;
