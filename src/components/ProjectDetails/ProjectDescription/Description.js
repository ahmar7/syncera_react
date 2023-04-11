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
                  <div className="flex flex-col mb-[30px]">
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Whitelist start
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>Saturday, Feb 11, 2023, 7:00 PM</span>
                      </div>
                    </div>
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Sale start
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>Monday, Feb 13, 2023, 9:15 PM</span>
                      </div>
                    </div>
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Distribution start
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>Wednesday, Apr 12, 2023, 5:30 PM</span>
                      </div>
                    </div>
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Chain
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>Solana</span>
                      </div>
                    </div>
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Chain ticker
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>SOL</span>
                      </div>
                    </div>
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Explorer
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <a
                          href="https://solscan.io/tx/"
                          className="underline hover:opacity-70"
                          target="_blank"
                        >
                          View explorer
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Solanium Shield activated
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>Yes</span>
                      </div>
                    </div>
                  </div>
                  <span className="font-poppins-bold text-lg w-full block leading-7 mb-5">
                    A Cyberpunk SRPG Developed by Red Door Digital
                  </span>
                  <span className="block w-full text-sm text-paragraph-text mb-5 leading-[26px]">
                    A cyberpunk SRPG (featuring turn-based tactical combat) with
                    an online persistent world that incorporates our philosophy
                    of ownership into Play and Own as well as supporting
                    multichain.
                  </span>
                  <div
                    id="content-about"
                    className="content-image mb-5 last:mb-0"
                  >
                    <h1 className="font-poppins-bold text-lg leading-9 mb-3">
                      About
                    </h1>
                    <img
                      src="https://static.solanium.com/media/projects/reign_of_terror_about.jpg"
                      alt="Content image"
                      className="w-full mb-30px rounded-solaniumDefault"
                    />
                    <div className="flex flex-col gap-2 mb-30px last:mb-0">
                      <p className="text-paragraph-text text-sm leading-[26px] mb-2 last:mb-0">
                        Reign of Terror ($ROT) - is a unique cyberpunk SRPG
                        (featuring turn-based tactical combat) with an online
                        persistent world developed by Red Door Digital that
                        incorporates our philosophy of ownership into Play and
                        Own as well as supporting multichain. Run various
                        missions with a customizable squad of upgradable Agents,
                        each with their own backstory, multiple rarities,
                        classes and unique skills. Gather materials to craft a
                        variety of weapons, armor and consumables. Manage your
                        growing base and expand your influence with different
                        levels of risk in PvP combat on different levels
                        (individual, guild and alliance PvP). Interact with the
                        in-game NFT assets in different ways (trading,
                        ransoming, burning, and raiding) through our different
                        game systems and mechanics.
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
                  <div className="border flex flex-col bg-opacity-25 rounded-md w-full px-5 py-3 mb-9 text-sm text-center border-orange-500 bg-orange-300 text-orange-600">
                    <span>
                      Please connect your wallet before you can apply or view
                      your whitelist application.
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
                      <span className="hidden lg:block">Select Wallet</span>
                      <span className="lg:hidden">
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