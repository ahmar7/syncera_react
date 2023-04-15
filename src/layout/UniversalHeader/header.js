import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [mblFull, setmblFull] = useState(false);

  let toggleMbl = () => {
    if (mblFull === false) {
      setmblFull(true);
    } else {
      setmblFull(false);
    }
  };
  return (
    <div>
      <div className={mblFull ? "side-bar mbl-open pt-10" : "side-bar pt-10"}>
        <Link to="/" className="logo-side">
          <img
            src="https://gamefi.org/_next/static/media/gamefi.5bb5d999.svg"
            alt=""
          />
        </Link>
        <div className="side-links">
          <Link to="/launchpad" className="individual-link  side-active">
            <div className="link-ico">
              <svg
                className="w-6 h-6"
                width="30"
                height="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#spaceship-mask)" fill="currentColor">
                  <path d="M23.58.424a1 1 0 0 0-.761-.294C8.79.862 3.609 13.358 3.559 13.484a1 1 0 0 0 .22 1.08l5.657 5.657a1 1 0 0 0 1.085.218c.125-.051 12.554-5.291 13.348-19.253a1 1 0 0 0-.29-.762Zm-8.166 10.99a2 2 0 1 1-2.829-2.828 2 2 0 0 1 2.829 2.828ZM1.113 18.844a2.843 2.843 0 1 1 4.022 4.022C4.024 23.977 0 24 0 24s0-4.046 1.113-5.156ZM10.357 2.341a8.91 8.91 0 0 0-7.835 2.484c-.534.54-1 1.144-1.384 1.8a1 1 0 0 0 .155 1.215l1.99 1.99a26.623 26.623 0 0 1 7.074-7.489ZM21.659 13.643a8.91 8.91 0 0 1-2.484 7.835c-.54.535-1.145 1-1.8 1.384a1 1 0 0 1-1.215-.155l-1.99-1.989a26.621 26.621 0 0 0 7.489-7.075Z"></path>
                  <circle fill="currentColor"></circle>
                  <polygon
                    points="371.3,338.6 355.7,344.7 363.1,329.7"
                    fill="currentColor"
                  ></polygon>
                </g>
                <defs>
                  <clipPath>
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="link-title">Launchpad</p>
          </Link>
        </div>
        <Link to="" className="individual-link">
          <div className="link-ico">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path
                fillRule="evenodd"
                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="link-title">Party</p>
        </Link>
        <Link to="" className="individual-link">
          <div className="link-ico">
            <svg
              fill="currentColor"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.5,12h-4a.5.5,0,0,0-.5.5V20H7V12.5A.5.5,0,0,0,6.5,12Z"></path>
              <path d="M14,4H10a.5.5,0,0,0-.5.5V20h5V4.5A.5.5,0,0,0,14,4Z"></path>
              <path d="M21.5,8h-4a.5.5,0,0,0-.5.5V20h5V8.5A.5.5,0,0,0,21.5,8Z"></path>
            </svg>
          </div>
          <p className="link-title">Ranking</p>
        </Link>
        <Link to="" className="individual-link">
          <div className="link-ico">
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 8H7c-3.86 0-7 3.14-7 7s3.14 7 7 7h10c3.86 0 7-3.14 7-7s-3.14-7-7-7Zm-7 8H8v2H6v-2H4v-2h2v-2h2v2h2v2Zm5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM13 2a1 1 0 0 0-2 0v4h2V2Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <p className="link-title">Ranking</p>
        </Link>
        <Link to="" className="individual-link">
          <div className="link-ico">
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4v4c0 1.657 2.686 3 6 3s6-1.343 6-3V4"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M1 8v4c0 1.657 2.686 3 6 3 1.537 0 2.938-.29 4-.765"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M1 12v4c0 1.657 2.686 3 6 3 1.537 0 2.939-.289 4-.764"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M7 7c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
              <path
                d="M11 12v4c0 1.657 2.686 3 6 3s6-1.343 6-3v-4"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M11 16v4c0 1.657 2.686 3 6 3s6-1.343 6-3v-4"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M17 15c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
            </svg>
          </div>
          <p className="link-title">Ranking</p>
        </Link>
        <Link to="" className="individual-link">
          <div className="link-ico">
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 0H5C3.346 0 2 1.346 2 3v17.5C2 22.43 3.57 24 5.5 24H21a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM11 2h6v9l-3-2-3 2V2Zm9 20H5.5c-.827 0-1.5-.673-1.5-1.5S4.673 19 5.5 19H20v3Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <p className="link-title">Ranking</p>
        </Link>
        <Link to="" className="individual-link">
          <div className="link-ico">
            <svg
              className="w-6"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="currentColor">
                <rect className="st0" width="128" height="128"></rect>
                <rect x="192" className="st0" width="128" height="128"></rect>
                <rect x="384" className="st0" width="128" height="128"></rect>
                <rect y="192" className="st0" width="128" height="128"></rect>
                <rect
                  x="192"
                  y="192"
                  className="st0"
                  width="128"
                  height="128"
                ></rect>
                <rect
                  x="384"
                  y="192"
                  className="st0"
                  width="128"
                  height="128"
                ></rect>
                <rect y="384" className="st0" width="128" height="128"></rect>
                <rect
                  x="192"
                  y="384"
                  className="st0"
                  width="128"
                  height="128"
                ></rect>
                <rect
                  x="384"
                  y="384"
                  className="st0"
                  width="128"
                  height="128"
                ></rect>
              </g>
            </svg>
          </div>
        </Link>
      </div>
      <div className="mobile-belowBar">
        <div className="flex-mbl">
          <Link to="" className="mbl-individual mbl-active">
            <span className="active-underline"></span>
            <div className="mbl-icon">
              <svg
                className="w-6 h-6"
                width="30"
                height="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#spaceship-mask)" fill="currentColor">
                  <path d="M23.58.424a1 1 0 0 0-.761-.294C8.79.862 3.609 13.358 3.559 13.484a1 1 0 0 0 .22 1.08l5.657 5.657a1 1 0 0 0 1.085.218c.125-.051 12.554-5.291 13.348-19.253a1 1 0 0 0-.29-.762Zm-8.166 10.99a2 2 0 1 1-2.829-2.828 2 2 0 0 1 2.829 2.828ZM1.113 18.844a2.843 2.843 0 1 1 4.022 4.022C4.024 23.977 0 24 0 24s0-4.046 1.113-5.156ZM10.357 2.341a8.91 8.91 0 0 0-7.835 2.484c-.534.54-1 1.144-1.384 1.8a1 1 0 0 0 .155 1.215l1.99 1.99a26.623 26.623 0 0 1 7.074-7.489ZM21.659 13.643a8.91 8.91 0 0 1-2.484 7.835c-.54.535-1.145 1-1.8 1.384a1 1 0 0 1-1.215-.155l-1.99-1.989a26.621 26.621 0 0 0 7.489-7.075Z"></path>
                  <circle fill="currentColor"></circle>
                  <polygon
                    points="371.3,338.6 355.7,344.7 363.1,329.7"
                    fill="currentColor"
                  ></polygon>
                </g>
                <defs>
                  <clipPath>
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>
          <Link to="" className="mbl-individual ">
            <span className="active-underline"></span>
            <div className="mbl-icon">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 8H7c-3.86 0-7 3.14-7 7s3.14 7 7 7h10c3.86 0 7-3.14 7-7s-3.14-7-7-7Zm-7 8H8v2H6v-2H4v-2h2v-2h2v2h2v2Zm5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM13 2a1 1 0 0 0-2 0v4h2V2Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </Link>
          <Link to="" className="mbl-individual ">
            <span className="active-underline"></span>
            <div className="mbl-icon">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
          <Link to="" className="mbl-individual ">
            <span className="active-underline"></span>
            <div className="mbl-icon">
              <svg
                fill="currentColor"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.5,12h-4a.5.5,0,0,0-.5.5V20H7V12.5A.5.5,0,0,0,6.5,12Z"></path>
                <path d="M14,4H10a.5.5,0,0,0-.5.5V20h5V4.5A.5.5,0,0,0,14,4Z"></path>
                <path d="M21.5,8h-4a.5.5,0,0,0-.5.5V20h5V8.5A.5.5,0,0,0,21.5,8Z"></path>
              </svg>
            </div>
          </Link>
          <div onClick={toggleMbl} className="mbl-individual ">
            <span className="active-underline"></span>
            <div className="mbl-icon">
              <img
                src={
                  mblFull
                    ? "https://gamefi.org/_next/static/media/x.f956a27b.svg"
                    : "https://gamefi.org/_next/static/media/menuToggler.7ea29bb4.svg"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <button className="nav-link btn-wallet">
        <i className="fas fa-wallet"></i> Connect
      </button>
    </div>
  );
};

export default Header;
