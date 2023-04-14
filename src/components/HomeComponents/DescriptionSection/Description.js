import React from "react";
import "./Description.css";
const Description = () => {
  return (
    <section className="description-section">
      <div className="containerer">
        <div className="justify-content-between align-items-center row">
          <div className="col-lg-6">
            <h2 className="title secondary-glow">
              Learn more about us
            </h2>
            <div className="description-section__text">
              <p>
                Syncera is the go-to platform for the zkSync blockchain. Participate in public raises of top tier projects, stake your tokens, trade on our DEX, participate in our governance and join our active and growing community.
Our goal is to make zkSync available to everyone, with an emphasis on creating an intuitive user interface and user experience.
              </p>
              <p>
                To start, you can stake your SERA or SERA-LP tokens for xSERA and obtain exclusive pool benefits based on your Tier, earn fees, receive airdrops, vote in governance matters, and more. Our staking mechanism is designed to ensure fairness for everyone, whereby a smaller holder with a more extended lock-up period can receive the same rewards as a larger holder with a shorter lock-up period.
              </p>
            </div>

            <div className="advantages-section__buttons">
              <a className="ight large btn btn-main btn-two" href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/syncera-overview/key-vision-and-focus" target="_blank">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
