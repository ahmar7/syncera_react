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
                <h3 className="advantages-item__title">Advancing the Industry with zkSync</h3>
                <p className="advantages-item__text">
                  The technological capabilities of the zkSync Era blockchain will serve our investors exceptionally well. With its highly scalable and secure infrastructure, it will enable faster transactions and reduce gas fees, making it more cost-effective for our investors to participate in IDOs. Additionally, its advanced privacy features and compatibility with Ethereum-based tokens will provide our investors with a greater level of security and flexibility in their investments. Welcome to the end-game for scaling Ethereum!
                </p>
                <a
                  href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/syncera-overview/about-zksync-era"
                  target="_blank"
                  className="advantages-item__text read-more"
                >
                  Read more about our blockchain  
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
                  Invest with Peace of Mind
                </h4>
              </div>
              <p className="DoubleText-Item--Top--Para">
                  Syncera's IDO launchpad is a fundraising platform that operates on the zkSync Era blockchain, providing SERA holders with an equitable opportunity to engage in the most sought-after presales in a rapidly expanding ecosystem. You can stake your tokens, trade on our DEX, participate in our governance, and become part of our dynamic and thriving community. Our objective is to make zkSync accessible to everyone, with a particular emphasis on creating a user-friendly interface and experience.
              </p>
              <p className="DoubleText-Item--Top--Para">    
                  <i>We will provide all the necessary tools to make investing in the zkSync ecosystem more accessible, user-friendly, and inclusive while keeping security intact.</i>
              </p>    
              <p className="DoubleText-Item--Top--ParaInvestors">
                Invest like a pro, designed for investors.
              </p>
            </div>
            <div className="DoubleText-Item col-lg-5">
              <div className="DoubleText-Item--Top">
                <img src={TeamIcon} alt="Teams" loading="lazy" />
                <h4 className="DoubleText-Item--Top--TitleUpper">For Teams</h4>
              </div>
              <div className="DoubleText-Item--Top">
                <h4 className="DoubleText-Item--Top--Title">
                  Setting the Stage for Success
                </h4>
              </div>
              <p className="DoubleText-Item--Top--Para">
                As a launchpad platform for zkSync Era, the team's unique requirements should be prioritized during the fundraising process, rather than being an afterthought. This is a crucial aspect of a project's journey as it sets the tone for their relationship with the community.
              </p>
              <p className="DoubleText-Item--Top--ParaBold">
                Syncera is committed to ensuring that teams receive the necessary support, creating a positive and fair environment that fosters strong momentum for the project.
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
                  Community-Driven
                </h2>
              </div>
              <p className="PageProtocol-Item--Top--Para">
                Our goal is to build a strong community where all participants have a voice and can benefit from the growth of the zkSync ecosystem. 
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
                  Equal Opportunities
                </h2>
              </div>
              <p className="PageProtocol-Item--Top--Para">
                Our staking mechanism is designed to ensure fairness for everyone, whereby a smaller holder with a more extended lock-up period can receive the same rewards as a larger holder with a shorter lock-up period.
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
                  Investor Protection
                </h2>
              </div>
              <p className="PageProtocol-Item--Top--Para">
                The community is given the freedom to vote on the projects that should be launched on Syncera, and the funds are allocated according to the performance of the project token.
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
