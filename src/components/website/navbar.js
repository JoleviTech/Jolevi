import { Link, NavLink } from "react-router-dom";
import jolevilogo from "../../assets/website/icons/logo/jolevilogo.png";

export const NewNavvbar = () => {
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? "#ff0000" : "#000000",
    };
  };
  return (
    <nav>
      <NavLink style={navActive} to="/about">
        About
      </NavLink>
      <NavLink style={navActive} to="/services">
        Services
      </NavLink>
      <NavLink style={navActive} to="/cards">
        Cards
      </NavLink>
      <NavLink style={navActive} to="/contact">
        Contact
      </NavLink>
      <NavLink style={navActive} to="/blog">
        Blog
      </NavLink>
    </nav>
  );
};
export const NewNavbar = () => {
  const navActive = ({ isActive }) => {
    return {
      // color: isActive ? "#FBB03B" : "#000000",
      color: isActive ? "#0087cb" : "#000000",
    };
  };
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-white py-0 justify-content-center">
      <div className="container ">
        <a className="navbar-brand" href="/">
          <img
            src={jolevilogo}
            alt=""
            className="d-inline-block align-text-top"
            style={{ maxWidth: "6rem", maxHeight: "6rem" }}
          />
        </a>
        {/* <Link to="/" className="navbar-brand ms-2 ">
          {" "}
          <img src={havenfavico} className="w-200 h-200" alt="" />
        </Link> */}
        <div
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </div>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <div className="navbar-nav NavUL py-2 d-flex">
            <li className="nav-item mx-3 d-flex justify-content-center">
              <NavLink
                style={navActive}
                to="/"
                className="nav-link navText"
                // style={{ color: "#000000" }}
                aria-current="page"
              >
                <div className="Navitemmobile Navitemlarge ">
                  <b>Home</b>
                </div>{" "}
              </NavLink>
            </li>

            <li className="nav-item mx-3 d-flex justify-content-center">
              <NavLink
                style={navActive}
                to="/about"
                // style={{ color: "#000000" }}
                className="nav-link navText"
              >
                <div className="Navitemmobile Navitemlarge">
                  <b>About</b>
                </div>
              </NavLink>
            </li>

            <li className="nav-item mx-3 d-flex justify-content-center">
              <NavLink
                style={navActive}
                to="/services"
                // style={{ color: "#000000" }}
                className="nav-link navText"
              >
                <div className="Navitemmobile Navitemlarge">
                  <b>Services</b>
                </div>
              </NavLink>
            </li>
            <li className="nav-item mx-3 d-flex justify-content-center">
              <NavLink
                style={navActive}
                to="/cards"
                // style={{ color: "#000000" }}
                className="nav-link navText"
              >
                <div className="Navitemmobile Navitemlarge">
                  <b>Cards</b>
                </div>
              </NavLink>
            </li>
            <li className="nav-item mx-3 d-flex justify-content-center">
              <NavLink
                style={navActive}
                to="/pre-order"
                // style={{ color: "#000000" }}
                className="nav-link navText"
              >
                <div className="Navitemmobile Navitemlarge">
                  <b>Preorder</b>
                </div>
              </NavLink>
            </li>
            {/* <li className="nav-item mx-3 d-flex justify-content-center">
              <NavLink
                style={navActive}
                to="/marketplace"
                // style={{ color: "#000000" }}
                className="nav-link navText"
              >
                <div className="Navitemmobile">
                  <b>Marketplace</b>
                </div>
              </NavLink>
            </li> */}
            {/* <li className="nav-item mx-3 d-flex justify-content-center">
              <NavLink
                style={navActive}
                to="/blog"
                // style={{ color: "#000000" }}
                className="nav-link navText"
              >
                <div className="Navitemmobile Navitemlarge">
                  <b>Blog</b>
                </div>
              </NavLink>
            </li> */}

            <li className="nav-item mx-3 d-flex justify-content-center">
              <NavLink
                style={navActive}
                to="/contact"
                // style={{ color: "#000000" }}
                className="nav-link navText"
              >
                <div className="Navitemmobile Navitemlarge">
                  <b>Contact</b>
                </div>
              </NavLink>
            </li>
          </div>{" "}
          {/* <Navicons className="d-flex">
            <Link
              to="https://m.facebook.com/haveneduservices/"
              className="mx-2"
              style={{ color: "#2D25E1" }}
            >
              <FacebookIcon />
            </Link>
            <Link
              to="https://instagram.com/haveneduservices?igshid=1fyt565z18d4u"
              className="mx-2"
              style={{ color: "#E1116C" }}
            >
              <InstagramIcon />
            </Link>
            <Link to="/about" className="mx-2" style={{ color: "#37A7CF" }}>
              <LinkedInIcon />
            </Link>
          </Navicons> */}
        </div>
      </div>
    </div>
  );
};

export const NewNavbarr = () => {
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
