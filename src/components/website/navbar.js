import { Link } from "react-router-dom";
import jolevilogo from "../../assets/website/icons/logo/jolevilogo.png";

export const NewNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container-fluid">
        <Link to="/" className="navbar-brand ms-lg-5">
          {" "}
          <img
            src={jolevilogo}
            className="img-fluid"
            alt="jolevi"
            width="120"
            height="124"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <Link to="/" className="text-decoration-none text-black my-auto">
              {" "}
              <li class="nav-item mx-2">
                {/* <a class="nav-link active" aria-current="page" href="#"> */}
                Home
                {/* </a> */}
              </li>
            </Link>
            <Link
              to="/about"
              className="text-decoration-none text-black my-auto"
            >
              <li class="nav-item mx-2">
                {/* <a class="nav-link" href="#"> */}
                About
                {/* </a> */}
              </li>
            </Link>
            <Link
              to="/services"
              className="text-decoration-none text-black my-auto"
            >
              <li class="nav-item mx-2">Services</li>
            </Link>
            <Link to="/" className="text-decoration-none text-black my-auto">
              {" "}
              <li class="nav-item mx-2">Marketplace</li>
            </Link>

            <Link
              to="/blog"
              className="text-decoration-none text-black my-auto"
            >
              {" "}
              <li class="nav-item mx-2">Blog</li>
            </Link>
            <Link
              to="/contact"
              className="text-decoration-none text-black my-auto"
            >
              {" "}
              <li class="nav-item mx-2">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid px-2 py-2">
        <Link to="/" className="navbar-brand ms-lg-5">
          {" "}
          <img
            src={jolevilogo}
            className="img-fluid"
            alt="jolevi"
            width="120"
            height="124"
          />
        </Link>
        <button
          className="navbar-toggler btn"
          type=""
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDarkDropdown"
        ></div>
      </div>
    </nav>
  );
};
