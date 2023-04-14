import React from "react";
import "./Description.css";
import Feature1 from "../../../assets/img/feature1.webp";
import Feature2 from "../../../assets/img/feature4.webp";
import Feature3 from "../../../assets/img/feature3.webp";
const Description = () => {
  return (
    <section className="description-section">
      <div className="bZBINf">
        <div className=" liREcv  iYGvXj  dkXQFz">
          <div className=" gCcOPY  hJcZlk  cYolYl">
            <div className=" fYUrZj  lhAFlZ  gVhNTd">
              <h2 className=" cfrnQw  bHSmrD">Learn about Polkastarter</h2>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              className=" jrSOwh  ilpxpx"
              href="#"
            >
              <div className=" fYUrZj  jzbFXV  bOBYPs baseline-align">
                <p fontWeight="medium" className=" eDuPKI  bTkfpF">
                  Explore our Blog
                </p>
                <div width="10px" className="jpChDs jOEXnC">
                  <div width="6px" height="6px" className="lmROce  jwYeKU" />
                  <div className=" fivcqv  fUa-dVJ" />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div display="grid" className=" gwGqFO  djjlrX">
          <button type="button" className=" no-border leEJeg">
            <div className=" frFRbQ">
              <h2 className=" dGTfCo  jfRZuw">
                <div className=" jYEhWf  iYGvXj  bPzHKd">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" ffRWyw"
                  >
                    <path
                      d="M8 .333A7.667 7.667 0 1015.667 8 7.675 7.675 0 008 .333zm3.502 7.954l-5.666 3.334a.335.335 0 01-.503-.288V4.667a.333.333 0 01.503-.288l5.666 3.334a.333.333 0 010 .574z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                How to Participate in a Polkastarter IDO?
              </h2>
              <p className=" ergcSf hOLKbL">
                <span>
                  <span>
                    <span>
                      A good place to start is: what is Polkastarter? (We’ll
                      give you the brief version). Polkastarter is a platform
                      that connects young projects with early community members
                      through initial…{" "}
                    </span>
                  </span>
                </span>
              </p>
            </div>
            <span className="rotate-bg">
              <img
                alt="How to buy the Polkastarter $POLS token cover image"
                src={Feature1}
                className=" tGjYN how-to-buy"
              />
              <noscript />
            </span>
          </button>
          <div className=" fYUrZj  ykcDz 0 cJebuI">
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="#"
              className=" guNyXw"
            >
              <h2 className=" kSxSwY  kFGeBv">
                How to buy the Polkastarter $POLS token?
              </h2>
              <span className="rotate-bg">
                <img
                  alt="How to buy the Polkastarter $POLS token? image"
                  src={Feature2}
                  className="how-to-buy cfFUvJ"
                />
                <noscript />
              </span>
            </a>
            <button
              target="_blank"
              rel="noopener noreferrer nofollow"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-2"
              data-state="closed"
              className=" guNyXw no-border"
            >
              <h2 className=" kSxSwY   kFGeBv">
                <div className=" jYEhWf  iYGvXj  bPzHKd">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" ffRWyw"
                  >
                    <path
                      d="M8 .333A7.667 7.667 0 1015.667 8 7.675 7.675 0 008 .333zm3.502 7.954l-5.666 3.334a.335.335 0 01-.503-.288V4.667a.333.333 0 01.503-.288l5.666 3.334a.333.333 0 010 .574z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                What is an IDO (Initial Decentralized Offering)?
              </h2>
              <span className="rotate-bg">
                <img
                  alt="What is an IDO (Initial Decentralized Offering)? image"
                  src={Feature3}
                  className="how-to-buy cfFUvJ"
                />
                <noscript />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="cvDLAX">
        <div className="dPaxIe ykcDz lglmHD">
          <div className="cgQZeg faFXTz dOwoXE">
            <p className="kmtZwL cwNaQj">Never want to miss a sale?</p>
            <h2 className="cTTTua cDqZXm">
              Sign up for our newsletter and get the latest news and updates.
            </h2>
          </div>
          <form className="gVoQB fTdEJq ">
            <div className="dHJHIB">
              <div className="idiTLw">
                <input
                  required
                  placeholder="Email Address"
                  type="email"
                  className="hXCqXZ daBJUU"
                /> 
              </div>
              <p className="bAkqOa bIYjMb" />
            </div>
            <div className="lboMJD bISvNz">
              <button
                disabled
                value="Subscribe"
                type="submit"
                className="gvIMFB fobaUy  bPwuUC"
              >
                <div>Subscribe</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Description;
