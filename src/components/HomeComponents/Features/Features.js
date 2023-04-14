import React from "react";
import "./Features.css";
import SyncSwapIcon from "../../../assets/img/sync-swap-icon.jpeg";

const Features = () => {
return(
     <section className="features-section">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="features-item features-item--buy">
            <div className="features-item__content">
              <h4 className="features-item__title">Buy SERA</h4>
              <a
                href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/private-sale"
                target="_blank"
                rel="noreferrer noopener"
                className="round-button dark btn btn-main"
              >
                <img
                  src={SyncSwapIcon}
                  className="rounded-circle"
                />
                <span>TBA</span>
              </a>
              <a
                href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/private-sale"
                target="_blank"
                rel="noreferrer noopener"
                className="round-button dark btn btn-main"
              >
              <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADeUExURUdwTCOtjySvjyOvkiOvkSKvkSCvjyOvkSCvjyKvkSKvkiKtjyKujyOujyOvjyOvkiKtjyOvkiKxkySvjyKvkyKvkCOujySvjyKvjyOukSKvkCCrjyOvkCSrjyOujyOvkCStjyKxkyCvjyOsjyCsjyOvkCOvjyCvjyG1lCOvkf///5HXyK3h1j65n0y+peP18uT18vL6+PH6+FrDrDC0mD65nnXNuq3h1dbw61rDrbrm3Ey+pnbNuoPSwcjr45/cz57cz2jIs+P18TG0mMjr5Kzh1j+5nmjItOT18brm3bFIgwEAAAApdFJOUwBgcJ/fzxDvIN+PgJCQYK9wv2+Af9+gQICgz0CvQLC/gH9AUFCfUFAfb6gjEQAAAoNJREFUWMOtl2d7mzAQgMHGRuDVNMNpkjbdrWzcEg8aO3t1/P8/VDMlne4kSHvf4OF90TydHIcI5oajTsC3EXRGvY/MaRTHYYbK4bWP69LdPZ+j4bnsX/A0/NCqeGnA81YYcbbDreGx5/++6McLig95zdjD+TavHW2M7/AG0Wn4//Wvla0N7wz47PtkMpmClyEYfxuvG5S5YL6V1wy+vB7E1rnabC5xXjPsCN6tXp6nH/7Aec1QdYJVDbjMP1zgPDT4XW0FRuA7wENDTxtBINB4YCiaIEYACAR/doMbemAKVIHEf+PTyiAPsZ/y7zkuUHhOGF6DTSAJAC8bbgTQV3sgCTReNixFetrOAccECC8ZxDrhX50PmADlheFCvHKdHiKIcL40/ObyIIwQwYTgc8OjnFzeqJkswvnZNCq36HLxE+S2gBaU/N18+3C/xE8Jh5OCkn/AM1IRtKDq/zp/vm8qmJeCu/z5vKmgMjycZY9PhMAwiKUhyRqwIgbRNI2lYXYbXRWTsFxfgGk0LqQ5tpA26kLqI4KnmDDkS/layUkuuplwA7KZvlDbGTNg25mRCUU3iISykhOKMghySoOGKZaYP20FYyqpqgaUz5Kq41NpXTbgvJedC4fkwSIMEX6wDPPalD7aYsvRVpQIh/ThGhsP10FZHldNSLTjPTbwomZtVe+u089u5QIjpguMoShRRImcPP5J1BInpnivbpEV1yiypE6QBphUW2qhOLAZIP8WlqqvTKXuIoGnwsH/L7YtbbD+P43duvyAurK06l15WoZLV2DnT803v2Hw/N8XjRiYLp673Rp3V0a1oh6exfhAc+z3x80u8Oxz7+RoP0OPTvr0tfsvqm4F7TgnytkAAAAASUVORK5CYII="
                  className="rounded-circle"
                />
                <span>TBA</span>  
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="features-item features-item--lock">
            <div className="features-item__content">
              <h4 className="features-item__title">Stake SERA</h4>
              <p className="features-item__text">
                Lock SERA <span className="secondary-glow fw-bold">
                  to participate in our upcoming IDOs
                </span> on Syncera!
              </p>
               <button
                type="button"
                className="btn-two btn-disabled"
              >
                <i className="fas fa-external-link-alt icon-distance"></i> TO STAKE
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="features-item features-item--earn">
            <div className="features-item__content">
              <h4 className="features-item__title">Earn Passively</h4>
              <p className="features-item__text">
                Explore different <span className="secondary-glow fw-bold"> highly lucrative </span> methods for making a daily income in our farm.
              </p>

              <button
                type="button"
                className="btn-two btn-disabled"
              >
                <i className="fas fa-external-link-alt icon-distance"></i> TO FARM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
};

export default Features;
