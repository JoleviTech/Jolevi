import simplepagehero from "../assets/images/hero/homehero/simplepagehero.png";
import { Navbar } from "../components/navbar";
import {
  WorkWithUsBtn,
  CreativesLink,
  AuthorsLink,
} from "../components/buttons";

export const SimplePage = () => {
  return (
    <div className="container-fluid HeroBg">
      <Navbar />
      <div className="row align-items-center justify-content-center px-4">
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3">
          <h2 className=" d-none d-lg-block d-md-none d-sm-none d-xs-none">
            Lorem ipsum dolor sit amet consectetur adipiscing
            <br />
          </h2>
          <h3 className=" d-xs-block d-sm-block d-md-block d-lg-none">
            Lorem ipsum dolor sit amet consectetur adipiscing
            <br />
          </h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing lorem ipsum dolor
            sit amet consectetur adipiscing
          </p>
          <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
            <CreativesLink /> <AuthorsLink />
          </div>
          <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
            <WorkWithUsBtn />
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={simplepagehero}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
          <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            <CreativesLink /> <AuthorsLink />
          </div>
          <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            <WorkWithUsBtn />
          </div>
        </div>
      </div>
      {/* <div className="row align-items-center justify-content-center px-4 py-5">
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3"></div>
        <div className="col-lg-5 col-md-5 col-sm-12"></div>
      </div> */}
      <div className="">
        <div className="d-flex justify-content-center">
          <a
            href="mailto:info@jolevi.com"
            className="text-decoration-none text-black"
          >
            <p className="paragraphColor mx-3 textShow m-0 p-1">
              info@jolevi.com
            </p>
          </a>
        </div>{" "}
        <div className="d-flex justify-content-center">
          <a
            href="tel:2348056009272"
            className="text-decoration-none text-black"
          >
            <p className="paragraphColor mx-3 textShow m-0 p-1">
              +2348056009272
            </p>
          </a>
        </div>{" "}
        <div className="d-flex justify-content-center">
          <a
            href=""
            target="_blank"
            className="text-decoration-none text-black my-2"
          >
            <i class="bi bi-linkedin mx-2 paragraphColor textShow"></i>
          </a>
          <a
            href=""
            target="_blank"
            className="text-decoration-none text-black my-2"
          >
            <i class="bi bi-instagram mx-2 paragraphColor textShow"></i>
          </a>
          <a
            href=""
            target="_blank"
            className="text-decoration-none text-black my-2"
          >
            <i class="bi bi-twitter mx-2 paragraphColor textShow"></i>
          </a>
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
        {/* <div className="d-flex justify-content-center"> */}
        <p className="text-center">Copyright &copy; Jolevi 2023</p>
        {/* </div> */}
      </div>
    </div>
  );
};
