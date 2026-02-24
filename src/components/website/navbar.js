// import { Link, NavLink } from "react-router-dom";
import jolevilogo from "../../assets/website/icons/logo/jolevilogo.png";


import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// import jolevilogo from "../../assets/jolevilogo.png"; // uncomment & adjust path

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  {
    label: "Anthology",
    dropdown: [
      { label: "Lagos", to: "/anthology-lagos" },
      { label: "Kaduna", to: "/anthology-kaduna" },
    ],
  },
  {
    label: "Store",
    dropdown: [
      { label: "Books", to: "/books" },
      { label: "Cards", to: "/cards" },
    ],
  },
  { label: "Events", to: "/events" },
  { label: "Authors", to: "/authors" },
  { label: "Contact", to: "/contact" },
];

export const NewNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label) =>
    setOpenDropdown((prev) => (prev === label ? null : label));

  return (
    <nav
      ref={navRef}
      className={`navbar-main${scrolled ? " navbar-scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-inner">

        {/* Logo */}
        <a href="/" className="navbar-logo" aria-label="JOLEVI Home">
          {/* Replace src with {jolevilogo} once imported */}
          <img src={jolevilogo} alt="JOLEVI" />
        </a>

        {/* Desktop links */}
        <ul className="navbar-links" role="list">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <li key={item.label} className="nav-dropdown">
                <button
                  className={`nav-dropdown-btn${openDropdown === item.label ? " open" : ""}`}
                  onClick={() => toggleDropdown(item.label)}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg
                    className="nav-chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className={`nav-dropdown-panel${openDropdown === item.label ? " open" : ""}`}
                  role="menu"
                >
                  {item.dropdown.map((sub) => (
                    <NavLink
                      key={sub.to}
                      to={sub.to}
                      role="menuitem"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </li>
            ) : (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `nav-item-link${isActive ? " active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar-hamburger${mobileOpen ? " open" : ""}`}
          onClick={() => setMobileOpen((p) => !p)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Hairline accent */}
      <div className="navbar-accent" aria-hidden="true" />

      {/* Mobile drawer */}
      <div
        className={`navbar-mobile${mobileOpen ? " open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        {NAV_ITEMS.map((item) =>
          item.dropdown ? (
            <div key={item.label} className="mobile-nav-item">
              <button
                className={`mobile-nav-link${openDropdown === item.label ? " active" : ""}`}
                onClick={() => toggleDropdown(item.label)}
                aria-expanded={openDropdown === item.label}
              >
                {item.label}
                <svg
                  style={{
                    width: 15,
                    height: 15,
                    opacity: 0.45,
                    transition: "transform 0.22s",
                    transform:
                      openDropdown === item.label
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`mobile-nav-sub${openDropdown === item.label ? " open" : ""}`}
              >
                {item.dropdown.map((sub) => (
                  <NavLink
                    key={sub.to}
                    to={sub.to}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {sub.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <div key={item.label} className="mobile-nav-item">
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `mobile-nav-link${isActive ? " active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </div>
          )
        )}
      </div>
    </nav>
  );
};

// export const NewNavvbar = () => {
//   const navActive = ({ isActive }) => {
//     return {
//       color: isActive ? "#ff0000" : "#000000",
//     };
//   };
//   return (
//     <nav>
//       <NavLink style={navActive} to="/about">
//         About
//       </NavLink>
//       <NavLink style={navActive} to="/services">
//         Services
//       </NavLink>
//       <NavLink style={navActive} to="/cards">
//         Cards
//       </NavLink>
//       <NavLink style={navActive} to="/contact">
//         Contact
//       </NavLink>
//       <NavLink style={navActive} to="/blog">
//         Blog
//       </NavLink>
//     </nav>
//   );
// };

// import { useState, useEffect, useRef } from "react";
// import { NavLink, useLocation } from "react-router-dom";

// Replace with your actual logo import:
// import jolevilogo from "./path/to/logo";




// export const NewNavbar = () => {
//   const navActive = ({ isActive }) => {
//     return {
//       // color: isActive ? "#FBB03B" : "#000000",
//       color: isActive ? "#0087cb" : "#000000",
//     };
//   };
//   return (
//     <div className="navbar navbar-expand-lg navbar-light bg-white py-0 justify-content-center">
//       <div className="container ">
//         <a className="navbar-brand" href="/">
//           <img
//             src={jolevilogo}
//             alt=""
//             className="d-inline-block align-text-top"
//             style={{ maxWidth: "6rem", maxHeight: "6rem" }}
//           />
//         </a>
    
//         <div
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </div>

//         <div
//           className="collapse navbar-collapse justify-content-center"
//           id="navbarNav"
//         >
//           <div className="navbar-nav NavUL py-2 d-flex">
//             <li className="nav-item mx-3 d-flex justify-content-center">
//               <NavLink
//                 style={navActive}
//                 to="/"
//                 className="nav-link navText"
//                 // style={{ color: "#000000" }}
//                 aria-current="page"
//               >
//                 <div className="Navitemmobile Navitemlarge ">
//                   <b>Home</b>
//                 </div>{" "}
//               </NavLink>
//             </li>

//             <li className="nav-item mx-3 d-flex justify-content-center">
//               <NavLink
//                 style={navActive}
//                 to="/about"
//                 // style={{ color: "#000000" }}
//                 className="nav-link navText"
//               >
//                 <div className="Navitemmobile Navitemlarge">
//                   <b>About</b>
//                 </div>
//               </NavLink>
//             </li>

//             <li className="nav-item mx-3 d-flex justify-content-center">
//               <NavLink
//                 style={navActive}
//                 to="/services"
//                 // style={{ color: "#000000" }}
//                 className="nav-link navText"
//               >
//                 <div className="Navitemmobile Navitemlarge">
//                   <b>Services</b>
//                 </div>
//               </NavLink>
//             </li>
//             <li className="nav-item mx-3 d-flex justify-content-center">
//               <NavLink
//                 style={navActive}
//                 to="/cards"
//                 // style={{ color: "#000000" }}
//                 className="nav-link navText"
//               >
//                 <div className="Navitemmobile Navitemlarge">
//                   <b>Cards</b>
//                 </div>
//               </NavLink>
//             </li>
//             <li className="nav-item mx-3 d-flex justify-content-center">
//               <NavLink
//                 style={navActive}
//                 to="/anthology"
//                 // style={{ color: "#000000" }}
//                 className="nav-link navText"
//               >
//                 <div className="Navitemmobile Navitemlarge">
//                   <b>Anthology</b>
//                 </div>
//               </NavLink>
//             </li>
          
//             <li className="nav-item mx-3 d-flex justify-content-center">
//               <NavLink
//                 style={navActive}
//                 to="/buy-book"
//                 // style={{ color: "#000000" }}
//                 className="nav-link navText"
//               >
//                 <div className="Navitemmobile Navitemlarge">
//                   <b>Store</b>
//                 </div>
//               </NavLink>
//             </li>
//             <li className="nav-item mx-3 d-flex justify-content-center">
//               <NavLink
//                 style={navActive}
//                 to="/contact"
//                 // style={{ color: "#000000" }}
//                 className="nav-link navText"
//               >
//                 <div className="Navitemmobile Navitemlarge">
//                   <b>Contact</b>
//                 </div>
//               </NavLink>
//             </li>
//           </div>{" "}
//         </div>
//       </div>
//     </div>
//   );
// };

// export const NewNavbarr = () => {
//   return (
//     <nav class="navbar navbar-expand-lg bg-white">
//       <div class="container-fluid">
//         <Link to="/" className="navbar-brand ms-lg-5">
//           {" "}
//           <img
//             src={jolevilogo}
//             className="img-fluid"
//             alt="jolevi"
//             width="120"
//             height="124"
//           />
//         </Link>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div
//           class="collapse navbar-collapse justify-content-center"
//           id="navbarNav"
//         >
//           <ul class="navbar-nav">
//             <Link to="/" className="text-decoration-none text-black my-auto">
//               {" "}
//               <li class="nav-item mx-2">
//                 {/* <a class="nav-link active" aria-current="page" href="#"> */}
//                 Home
//                 {/* </a> */}
//               </li>
//             </Link>
//             <Link
//               to="/about"
//               className="text-decoration-none text-black my-auto"
//             >
//               <li class="nav-item mx-2">
//                 {/* <a class="nav-link" href="#"> */}
//                 About
//                 {/* </a> */}
//               </li>
//             </Link>
//             <Link
//               to="/services"
//               className="text-decoration-none text-black my-auto"
//             >
//               <li class="nav-item mx-2">Services</li>
//             </Link>
//             <Link to="/" className="text-decoration-none text-black my-auto">
//               {" "}
//               <li class="nav-item mx-2">Marketplace</li>
//             </Link>

//             <Link
//               to="/blog"
//               className="text-decoration-none text-black my-auto"
//             >
//               {" "}
//               <li class="nav-item mx-2">Blog</li>
//             </Link>
//             <Link
//               to="/contact"
//               className="text-decoration-none text-black my-auto"
//             >
//               {" "}
//               <li class="nav-item mx-2">Contact</li>
//             </Link>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };
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
