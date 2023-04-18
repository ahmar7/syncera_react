import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
      <div className="max-width">
        <div className="css-19g42lq ">
          <div
            data-bn-type="text"
            className="governance-landing-header-subtitle css-1b13r3e"
          >
            Participate in ApolloX governance
          </div>
          <div className="governance-landing-header-main-title">
            ApolloX DAO
          </div>
          <div data-bn-type="text" className="css-skkjos">
            Help shape ApolloX future, stake APX to earn voting power and earn
            rewards.
          </div>
          <a
            data-bn-type="link"
            href="https://www.apollox.finance/en/governance/vault"
            target="_blank"
            className="css-1ebs9p"
          >
            <button data-bn-type="button" className=" css-uv48zn">
              Lock APX
            </button>
          </a>
        </div>
      </div>
    );
}

export default Banner;
