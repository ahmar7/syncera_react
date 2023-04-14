import React, { useState } from "react";
import "./Advantages.css";
import InvesterIcon from "../../../assets/img/invester.svg";
import TeamIcon from "../../../assets/img/team-icon.svg";
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
              If you're seeking a safe and adaptable platform that simplifies
              the process of investing and earning from the zkSync ecosystem,
              Syncera is the solution that fits your needs.
            </h2>
          </div>
          <div className="col-lg-5">
            <div className="platform-advantages">
              <div className="advantages-item">
                <h3 className="advantages-item__title">About Syncera</h3>
                <p className="advantages-item__text">
                  Syncera is the go-to platform for the zkSync blockchain.
                  Participate in public raises of top tier projects, stake your
                  tokens, trade on our DEX, participate in our governance and
                  join our active and growing community. Our goal is to make
                  zkSync available to everyone, with an emphasis on creating an
                  intuitive user interface and user experience.
                </p>
                <a
                  href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/syncera-overview/defi-solutions"
                  target="_blank"
                  className="advantages-item__text read-more"
                >
                  Read more about our ecosystem
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* New */}
        <div className="DoubleText-Container">
          <div className="DoubleText  justify-content-between row">
            <div className="DoubleText-Item col-lg-6">
              <div className="DoubleText-Item--Top">
                <img src={InvesterIcon} alt="Investors" loading="lazy" />
                <h4 className="DoubleText-Item--Top--TitleUpper">
                  For Investors
                </h4>
              </div>
              <div className="DoubleText-Item--Top">
                <h4 className="DoubleText-Item--Top--Title">
                  Participate with Confidence
                </h4>
              </div>
              <p className="DoubleText-Item--Top--Para">
                The Avalanche blockchain represents a true step forward for the
                industry, offering highly decentralized applications, new
                financial primitives, and new interoperable blockchains.
              </p>
              <p className="DoubleText-Item--Top--ParaInvestors">
                Designed by investors, for investors.
              </p>
            </div>
            <div className="DoubleText-Item col-lg-5">
              <div className="DoubleText-Item--Top">
                <img src={TeamIcon} alt="Teams" loading="lazy" />
                <h4 className="DoubleText-Item--Top--TitleUpper">For Teams</h4>
              </div>
              <div className="DoubleText-Item--Top">
                <h4 className="DoubleText-Item--Top--Title">
                  Raise Right, Start Right
                </h4>
              </div>
              <p className="DoubleText-Item--Top--Para">
                When it comes to raising funds, a team’s specific needs should
                be front and center--not an afterthought. There’s no step more
                important in a project’s journey. It’s oftentimes the first
                interaction with their future community and can set the tone,
                for better or worse, of what’s to come.
              </p>
              <p className="DoubleText-Item--Top--ParaBold">
                The Avalaunch platform is dedicated to making sure teams receive
                what they need while establishing strong, positive momentum.
              </p>
            </div>
          </div>
        </div>
        <div
          className="PageProtocol-Container"
          style={{ position: "relative" }}
        >
          <div className="PageProtocol">
            <div className="PageProtocol-Item">
              <div className="PageProtocol-Item--Top">
                <svg
                  width={35}
                  height={27}
                  viewBox="0 0 35 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 14.8118L11.8553 22.6671L30.4753 4.04712"
                    stroke="url(#paint0_linear)"
                    strokeWidth={8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="23.81"
                      y1="-2.48124"
                      x2="-3.89946"
                      y2="9.30682"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF6746" />
                      <stop offset={1} stopColor="#FF0546" />
                    </linearGradient>
                  </defs>
                </svg>
                <h2 className="PageProtocol-Item--Top--Title">
                  Fair and Equitable <br /> Fundraising
                </h2>
              </div>
              <p className="PageProtocol-Item--Top--Para">
                Our unique staking and distribution methodology ensures broad
                participation.
              </p>
            </div>
            <div className="PageProtocol-Item">
              <div className="PageProtocol-Item--Top">
                <svg
                  width={35}
                  height={27}
                  viewBox="0 0 35 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 14.8118L11.8553 22.6671L30.4753 4.04712"
                    stroke="url(#paint0_linear)"
                    strokeWidth={8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="23.81"
                      y1="-2.48124"
                      x2="-3.89946"
                      y2="9.30682"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF6746" />
                      <stop offset={1} stopColor="#FF0546" />
                    </linearGradient>
                  </defs>
                </svg>
                <h2 className="PageProtocol-Item--Top--Title">
                  Permissionless <br /> Listings
                </h2>
              </div>
              <p className="PageProtocol-Item--Top--Para">
                Our emphasis on people and teams creates strong starts for new
                projects.
              </p>
            </div>
            <div className="PageProtocol-Item">
              <div className="PageProtocol-Item--Top">
                <svg
                  width={35}
                  height={27}
                  viewBox="0 0 35 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 14.8118L11.8553 22.6671L30.4753 4.04712"
                    stroke="url(#paint0_linear)"
                    strokeWidth={8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="23.81"
                      y1="-2.48124"
                      x2="-3.89946"
                      y2="9.30682"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF6746" />
                      <stop offset={1} stopColor="#FF0546" />
                    </linearGradient>
                  </defs>
                </svg>
                <h2 className="PageProtocol-Item--Top--Title">
                  Vesting and <br /> Distribution
                </h2>
              </div>
              <p className="PageProtocol-Item--Top--Para">
                The first launchpad to allow holders to grow with the network,
                regardless of participation.
              </p>
            </div>
          </div>
        </div>

        {/* New */}
      </div>
    </section>
  );
};

export default Advantages;
