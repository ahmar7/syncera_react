import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [drop, setDrop] = useState(false);
  const [nav, setNav] = useState(false);
  const [sticky, setSticky] = useState(false);
  let toggleDrop = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };
  let navToggle = () => {
    if (nav === true) {
      setNav(false);
    } else {
      setNav(true);
    }
  };
  
   window.addEventListener("scroll", function () { 

     if (window.scrollY > 150) {
       setSticky(true)
     } else if (window.scrollY === 0) {
       setSticky(false);
     }
   });
  return (
    <div>
      <div onClick={toggleDrop} className={drop ? "overlay-active" : ""}></div>
      <header
        className={
          sticky
            ? "header sticky-head container-fluid home-background-section"
            : "header container-fluid home-background-section"
        }
      >
        <nav className="navbar navbar-expand navbar-light">
          <span className="navbar-brand">
            <Link to="/">
              <img
                src="https://firestarter.fi/static/media/logo.fcbc44c0.svg"
                alt="Logo"
                className="d-inline-block align-top header-logo"
              />
            </Link>
          </span>
          <div
            className={
              nav
                ? "justify-content-end navbar-collapse collapse show-nav  full-height"
                : "justify-content-end navbar-collapse collapse show-nav"
            }
          >
            <a href="#" className="nav-link nav-txt">
              FAQs
            </a>
            <Link to="/projects" className="nav-link btn-one">
              <span className="btn-nav-txt">Projects</span>
            </Link>
            {/*
            <div
              role="group"
              className="network-switcher__dropdown dropdown btn-group"
            >
              <button
                id="network-switcher-split"
                type="button"
                className="round-button dark network-switcher__toggle disabled dropdown-toggle dropdown-toggle-split btn btn-main"
              >
                --
              </button>
              <button
                type="button"
                className="round-button dark header__connect-wallet btn btn-main"
              >
                <span>CONNECT</span>
              </button>
            </div>
            */}
          </div>
          <div className="hamburger-ico hide-desk">
            <i className="fa-solid fa-bars" onClick={navToggle}></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
