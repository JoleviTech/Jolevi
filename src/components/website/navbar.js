import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import jolevilogo from "../../assets/website/icons/logo/jolevilogo.png";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  {
    label: "Anthology",
    dropdown: [
      { label: "Kaduna", to: "/anthology-kaduna" },
      { label: "Lagos", to: "/anthology-lagos" },
    ],
  },
  {
    label: "Store",
    dropdown: [
      { label: "Books", to: "/books" },
      { label: "Cards", to: "/cards" },
    ],
  },
  { label: "Authors", to: "/authors" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];

export const NewNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Check if any dropdown child matches the current path
  const isDropdownActive = (dropdown) =>
    dropdown.some(
      (sub) =>
        location.pathname === sub.to ||
        location.pathname.startsWith(sub.to)
    );

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
          <img src={jolevilogo} alt="JOLEVI" />
        </a>

        {/* Desktop links */}
        <ul className="navbar-links">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <li key={item.label} className="nav-dropdown">
                <button
                  className={`nav-dropdown-btn${
                    openDropdown === item.label ? " open" : ""
                  }${isDropdownActive(item.dropdown) ? " active" : ""}`}
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
                  className={`nav-dropdown-panel${
                    openDropdown === item.label ? " open" : ""
                  }`}
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
                className={`mobile-nav-link${
                  openDropdown === item.label ? " open" : ""
                }${isDropdownActive(item.dropdown) ? " active" : ""}`}
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
                className={`mobile-nav-sub${
                  openDropdown === item.label ? " open" : ""
                }`}
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

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid px-2 py-2">
        <Link to="/" className="navbar-brand ms-lg-5">
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