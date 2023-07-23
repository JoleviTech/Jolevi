import writing from "../../assets/website/images/services/writing.png";
import vision from "../../assets/website/images/about/vision.png";
import mission from "../../assets/website/images/about/mission.png";

const About = () => {
  return (
    <>
      <VisionAndMission />
    </>
  );
};

const VisionAndMission = () => {
  return (
    <>
      <div className="container-fluid text-center px-5 pt-5 pb-3 mt-5">
        {" "}
        <h4 className="">Vision & Mission</h4>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
            <div className="px-3 mb-5 py-4 visionCard">
              <div className="text-center">
                <img src={vision} />
              </div>
              <div className="card-body">
                <h4 className="card-title">Vision</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                  eiusmod tempr incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, nostrud exercitation ullamco
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
                <h4 className="card-title">Mission</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, cse adipiscing elit, sed do
                  eiusmod tempr incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, nostrud exercitation ullamco
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
