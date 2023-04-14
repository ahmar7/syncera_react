import React, { useState } from "react";
import DetailSwitch from "../DetailSwitch/DetailSwitch";
import walletIco from '../../../assets/img/wallet.svg'
import './Description.css'
const Description = () => {
  const [activeInfo, setactiveInfo] = useState(true);
  const [activeWhitlist, setactiveWhitlist] = useState(false);
  const [activeSale, setactiveSale] = useState(false);
  let InfoTrue = () => {
    setactiveInfo(true);
    setactiveWhitlist(false);
    setactiveSale(false);
  };
  let whiteListTrue = () => {
    setactiveInfo(false);
    setactiveWhitlist(true);
    setactiveSale(false);
  };
  let SaleTrue = () => {
    setactiveInfo(false);
    setactiveWhitlist(false);
    setactiveSale(true);
  };
  return (
    <>
      <DetailSwitch
        InfoTrue={InfoTrue}
        activeInfo={activeInfo}
        activeWhitlist={activeWhitlist}
        activeSale={activeSale}
        whiteListTrue={whiteListTrue}
        SaleTrue={SaleTrue}
      />
      {activeInfo && (
        <div>
          <div
            id="headlessui-tabs-panel-4"
            role="tabpanel"
            tabIndex={0}
            data-headlessui-state="selected"
            aria-labelledby="headlessui-tabs-tab-1"
          >
            <div>
              <div>
                <div>
                  <div className="flex flex-col mb-[30px] project-info">
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Whitelist start
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>Monday, 17 April 2023 at 07:00 UTC</span>
                      </div>
                    </div>
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Sale start
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>TBD</span>
                      </div>
                    </div>
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Distribution start
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>TBD</span>
                      </div>
                    </div>
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Chain
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>zkSnyc</span>
                      </div>
                    </div>
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Explorer
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <a
                          href="#"
                          className="underline hover:opacity-70 emphasize-link enlarged-link"
                          target="_blank"
                        >
                          View explorer
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Syncera Shield
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>Yes</span>
                      </div>
                    </div>
                  </div>
                  <span className="font-poppins-bold text-lg w-full block leading-7 mb-5 secondary-glow font-weight-bold whitelist-instructions-heading">
                    Unlock zkSync's full potential with Syncera
                  </span>
                  <span className="block w-full text-sm text-paragraph-text mb-5 leading-[26px] project-content">
                    Syncera aims to innovate and bring adoption to the zkSync ecosystem by providing an all-in-one DeFi platform that will accommodate projects and new investors entering the space for the first time.
                  </span>
                  <div
                    id="content-about"
                    className="content-image mb-5 last:mb-0"
                  >
                    <h1 className="font-poppins-bold text-lg leading-9 mb-3 secondary-glow font-weight-bold whitelist-instructions-heading">
                      About
                    </h1>
                    <img
                      src="https://static.solanium.com/media/projects/reign_of_terror_header.png"
                      alt="Content image"
                      className="w-full mb-30px rounded-solaniumDefault"
                    />
                    <div className="flex flex-col gap-2 mb-30px last:mb-0">
                      <p className="text-paragraph-text text-sm leading-[26px] mb-2 last:mb-0 project-content">
                        Introducing Syncera.io, a decentralized platform for Initial DEX Offerings (IDO) that aims to promote and expand the adoption of the zkSync ecosystem. The project's goal is to make DeFi accessible to both existing and new investors by providing a user-friendly platform with a focus on UI/UX.
                      </p>
                      <p className="text-paragraph-text text-sm leading-[26px] mb-2 last:mb-0 project-content">
                        Syncera aims to become an all-in-one DeFi platform, providing tools for secure launch and management of decentralized finances. The project's vision is to create a strong DeFi community on zkSync and other chains, offering a go-to launchpad for hot projects while rewarding its holders.
                        The platform will offer necessary tools to make investing in the zkSync ecosystem accessible and secure, with a focus on improving UX, expanding launchpad utility, streamlining token sale flow, and providing customer support. The IDO launchpad will enable investors to participate in the hottest presales of a growing ecosystem, with equal opportunities.
                      </p>
                      <p className="text-paragraph-text text-sm leading-[26px] mb-2 last:mb-0 project-content">   
                        Built on zkSync Era, Syncera's platform will offer complementary services such as token swap (AMM), time-weighted token staking, token vesting, and a farm. Some of these services will be available soon after the TGE, while others will be provided later to meet the requirements of the users. The project aims to ensure the quality of services and avoid unrealistic claims to ensure long-term success.
                      </p>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            id="headlessui-tabs-panel-5"
            role="tabpanel"
            tabIndex={-1}
            aria-labelledby="headlessui-tabs-tab-2"
            style={{
              position: "fixed",
              height: "0px",
              padding: "0px",
              overflow: "hidden",
              clip: "rect(0px, 0px, 0px, 0px)",
              whiteSpace: "nowrap",
              borderWidth: "0px",
            }}
          />
          <span
            id="headlessui-tabs-panel-6"
            role="tabpanel"
            tabIndex={-1}
            aria-labelledby="headlessui-tabs-tab-3"
            style={{
              position: "fixed",
              height: "0px",
              padding: "0px",
              overflow: "hidden",
              clip: "rect(0px, 0px, 0px, 0px)",
              whiteSpace: "nowrap",
              borderWidth: "0px",
            }}
          />
        </div>
      )}
      {activeWhitlist && (
        <div>
          <span id="headlessui-tabs-panel-4" />
          <div id="headlessui-tabs-panel-5">
            <div>
              <div>
                <div className="flex justify-center items-center flex-col">
                  <span className="font-poppins-bold text-lg w-full block leading-7 mb-5 secondary-glow font-weight-bold whitelist-instructions-heading">
                    Access to Syncera Private
                  </span>
                  <span className="block w-full text-sm text-paragraph-text mb-5 leading-[26px] whitelist-instructions">
                    We are excited to announce the launch of Syncera on our platform! By signing up for the whitelist, you can receive an allocation in the Syncera private Initial Dex Offering (IDO) and purchase tokens at the cheapest price.
                  </span>
                  <span className="block w-full text-sm text-paragraph-text mb-5 leading-[26px] whitelist-instructions">
                    <b>To secure your spot on the whitelist, you must <a href="https://zealy.io/c/syncera/questboard/57740b31-e4d3-45f1-8798-b893d472c578c" target="_blank" className="emphasize-link">attain</a> level 2 (OG role) by completing quests on Zealy and <a href="https://zealy.io/c/syncera/questboard/5e8e9de1-8a27-4ef5-9f5b-ebae68d7cc13" target="_blank" className="emphasize-link">register</a> your wallet address there.</b> Once you've successfully registered for the whitelist on Zealy, you can <i>increase</i> your allocation by continuing to level up and claim higher Discord roles.
                  </span>  
                  <span className="block w-full text-sm text-paragraph-text mb-5 leading-[26px] whitelist-instructions">
                    The deadline for claiming your whitelist position will be announced in advance. Prior to the sale, you can connect your wallet and confirm your eligibility for the IDO.
                  </span>  
                  <div className="w-60">
                    <a href="https://zealy.io/c/syncera/questboard" target="_blank" className="w-60 btn-one swv-button swv-button-trigger">
                      Complete Quests
                    </a>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <span className="font-poppins-bold text-lg w-full block leading-7 mb-5 secondary-glow font-weight-bold whitelist-instructions-heading">
                    Attention Alert
                  </span>
                  <span className="block w-full text-sm text-paragraph-text mb-5 leading-[26px] whitelist-instructions">
                    Every whitelist submission will undergo screening and verification. The following list of potential violations will result in automatic disqualification from the whitelist:
                    <br /> <br />
                    <ul>
                      <li>Any submissions made by bots or other forms of automated processes will not be taken into consideration.</li>
                      <li>Any submissions that have incomplete steps in the application process will not be taken into consideration.</li>
                      <li>While this sale <i>does not</i> require KYC, our policy may change in the future to comply with regulations.</li>
                    </ul>  
                  </span>
                </div>
              </div>
            </div>
            {/**/}
          </div>
        </div>
      )}
      {activeSale && (
        <div>
          <span id="headlessui-tabs-panel-4" />
          <div id="headlessui-tabs-panel-5">
            <div>
              <div className="text-center">
                <div className="flex justify-center items-center flex-col">
                  <div className="border flex flex-col bg-opacity-25 rounded-md w-full px-5 py-3 mb-9 text-sm text-center border-orange-500 bg-orange-300 text-orange-600">
                    <span>
                      {" "}
                      Please connect your wallet before you can view the project
                      sale.{" "}
                    </span>
                  </div>
                  <div className="w-60">
                    <button className="w-60 swv-button swv-button-trigger">
                      <span className=" maxi lg:block">Select Wallet</span>
                      <span className="mini lg:hidden">
                        <img src={walletIco} />
                      </span>
                    </button>
                  </div>
                </div>
                {/**/}
              </div>
            </div>
            {/**/}
          </div>
        </div>
      )}
    </>
  );
};

export default Description;
