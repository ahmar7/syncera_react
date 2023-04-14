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
                  About Syncera
                </h3>
                <p className="advantages-item__text">
                  Syncera is the go-to platform for the zkSync blockchain. Participate in public raises of top tier projects, stake your tokens, trade on our DEX, participate in our governance and join our active and growing community. Our goal is to make zkSync available to everyone, with an emphasis on creating an intuitive user interface and user experience.
                </p>
                <a href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/syncera-overview/defi-solutions" target="_blank" className="advantages-item__text read-more">
                  Read more about our ecosystem
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
