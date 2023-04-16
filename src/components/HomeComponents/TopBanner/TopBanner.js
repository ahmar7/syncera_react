import React, { useState } from "react";
import "./TopBanner.css";
import BannerVideo from '../../../assets/img/banner-video.mp4'
import TrushIcon from "../../../assets/img/trush-icon.png";
import ZealyIcon from "../../../assets/img/Zealy.png";
const TopBanner = () => {
  const [drop, setDrop] = useState(false);
  let toggleDrop = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };
  return (
    <section className="top-banner">
      <video className="video-bg" src={BannerVideo} autoPlay muted loop playsInline></video>
      {/* <div className="background">
        <div className="top-banner__shadow-top" />
        <div className="top-banner__space" />
       
        <img
          src="https://firestarter.fi/static/media/spaceman.9782e999.png"
          className="top-banner__spaceman"
          style={{ transform: "translate3d(1e-5px, -25px, 1e-5px)" }}
        />
        <img
          src="https://firestarter.fi/static/media/cards-left.6452247d.png"
          className="top-banner__cards-left"
          style={{ transform: "translate3d(1e-5px, 47px, 1e-5px)" }}
        />
        <img
          src="https://firestarter.fi/static/media/cards-right.37f515ba.png"
          className="top-banner__cards-right"
          style={{ transform: "translate3d(1e-5px, -37px, 1e-5px)" }}
        />
       
        <div className="top-banner__shadow-bottom" />
      </div> */}
      <div className="container abs-content">
        <div className="hero-row row">
          <div className="hero-row__main text-center">
            <h1 className="title">
              Unlock the Full Potential of{" "}
              <span className="secondary-glow">zkSync Era</span>
            </h1>
            <p className="subtitle">
              <span className="secondary-glow">Syncera</span> is the first
              community-driven IDO platform with all-in-one solutions for{" "}
              <i>a growing ecosystem.</i>
            </p>
            <p className="sub-subtitle">
              IDO LAUNCHPAD | DECENTRALIZED EXCHANGE | TOKEN SWAP | FARM | AND
              MORE !
            </p>
            <div className="hero-buttons">
              <a href="#" type="button" className="btn-one">
                Buy $SERA
              </a>
              <a
                href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/"
                target="_blank"
                className="btn-two"
              >
                <i class="fas fa-file-image icon-distance"></i>PITCH DECK
              </a>
            </div>
            <br />
            <div>
              <span className="below-banner__powered-by__title powered-by-size">
                <a href="https://twitter.com/Syncera_io" target="_blank"><i class="fab fa-twitter fa-2x icon-distance secondary-glow icon-link"></i></a>
                <a href="https://discord.com/invite/e2XcjF5zX8" target="_blank"><i class="fab fa-discord fa-2x icon-distance secondary-glow icon-link"></i></a>
              </span>
              
              <div className="icons mt-5 below-banner__powered-by__icons justify-center">
                <div className="align-items-stretch justify-content-center row">
                  <div className="partnerships-col col-lg-3 col-md-4 col-sm-6">
                    <img
                      src={TrushIcon}
                      alt="Polygon"
                      className="partnerships-item"
                    />
                  </div>
                  <div className="partnerships-col col-lg-3 col-md-4 col-sm-6">
                    <img
                      src="https://firestarter.fi/static/media/parsiq.6e983b84.svg"
                      alt="Parsiq"
                      className="partnerships-item"
                    />
                  </div>
                  <div className="partnerships-col col-lg-3 col-md-4 col-sm-6">
                    <img
                      src="https://firestarter.fi/static/media/blockpass.4c155887.svg"
                      alt="BlockPass"
                      className="partnerships-item"
                    />
                  </div>
                  <div className="partnerships-col col-lg-3 col-md-4 col-sm-6">
                    <img
                      src="https://firestarter.fi/static/media/quantstamp.38ac7019.svg"
                      alt="Quantstamp"
                      className="partnerships-item"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
