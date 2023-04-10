import React, { useState } from "react";
import "./Advantages.css";
const Advantages = () => {
  const [drop, setDrop] = useState(false);
  let toggleDrop = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };
  return (
    <section className="advantages-section">
      <div className="containerer">
        <div className="justify-content-between row">
          <div className="col-lg-6">
            <h2 className="title gradient-text gradient-text--purple">
              If you're seeking a safe and adaptable platform that simplifies the process of investing and earning from the zkSync ecosystem, Syncera is the solution that fits your needs.
            </h2>
          </div>
          <div className="col-lg-5">
            <div className="platform-advantages">
              <div className="advantages-item">
                <h3 className="advantages-item__title">
                  Long Term Focus
                </h3>
                <p className="advantages-item__text">
                  Syncera aims to offer a DeFi platform that is all-encompassing, user-friendly, secure, and accessible to everyone for investing in the zkSync ecosystem, thus promoting its growth and adoption. We are excited to make you part of our road to success: Syncera is founded for the people and governed by the people!
                </p>
              </div>
              <div className="advantages-item">
                <h3 className="advantages-item__title">
                  Equal Opportunities
                </h3>
                <p className="advantages-item__text">
                  Syncera's mission for its launchpad is to provide a decentralized platform for Initial DEX Offerings (IDO) on the zkSync blockchain, enabling upcoming projects to raise funds in a fair and equitable manner. Our goal is to build a strong community where all participants have a voice and can benefit from the growth of the zkSync ecosystem. Syncera executes a thorough due diligence process on all chosen projects for certification.
                </p>
              </div>
              <div className="advantages-item">
                <h3 className="advantages-item__title">
                  Protecting Investors
                </h3>
                <p className="advantages-item__text">
                  Syncera aims to strengthen its due diligence procedure and platform reliability by adding several types of security measures and a refund policy. We are pleased to announce the inclusion of <i>Syncera Shield</i>, which comes with a refund policy, in our pipeline process, in addition to our forthcoming governance program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
