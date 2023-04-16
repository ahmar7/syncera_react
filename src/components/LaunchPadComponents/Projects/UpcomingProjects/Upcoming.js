import React from 'react';
import './Upcoming.css'
import ethIcon from "../../../../assets/img/eth-icon.png";
import { Link } from 'react-router-dom';

const UpComingProjects = () => {
    return (
      <>
        <div className="projects-section mt-14 containerer">
          <p className="text-center">
            <span className="uppercase font-semibold text-xl">Upcoming projects</span>
            <br />
            <span className="text-white/60">(Whitelist Required)</span>
          </p>
          <div className="mt-4">
            <div className="g-4 row">
              <div className="col-md-6">
                <div className="w-full max-w-[580px] shadow-md rounded-solaniumDefault hover hover:shadow-xl transition-all duration-500 bg-white project-bg-color">
                  <Link
                    to="/private-sale"
                    className="w-full no-decor card-bg h-full"
                  >
                    <div className="flex absolute flex-row-reverse w-full max-w-[580px]">
                      <div className="rounded-lg bg-[#2047F4] h-10 w-10 flex z-30  lop-mar border-2 border-[#ffffff]">
                        <img
                          src="https://www.solanium.io/socials/shield.svg"
                          className="z-10 h-8 w-8 mx-auto my-auto"
                        />
                      </div>
                    </div>
                    <div className="rounded-t-solaniumDefault bg-con2 h-[180px] bg-center bg-no-repeat bg-cover"></div>
                    <div className="content pet-5 pex-5 sm:pt-30px sm:px-30px">
                      <div className="flex flex-col meb-4 justify-between sm:flex-row sm:mb-8">
                        <span className="projects-pool-header block font-poppins-bold text-xl sm:text-[40px]">
                          Syncera Private
                        </span>
                        <span className="projects-pool-tags block text-[#6376AE] text-sm">
                          DeFi, Launchpad
                        </span>
                      </div>
                      <span className="projects-pool-sub block font-poppins-bold text-sm mb-7 sm:line-clamp-1 leading-6 sm:mb-[10px] sm:text-base">
                        Unlock zkSync's full potential with Syncera
                      </span>
                      <span className="projects-pool-content pb-pool leading-[26px] text-sm hide-para sm:line-clamp-3">
                        Syncera aims to innovate and bring adoption to the
                        zkSync ecosystem by providing an all-in-one DeFi
                        platform that will accommodate projects and new
                        investors entering the space for the first time.
                      </span>
                    </div>
                  </Link>
                  <div className="peb-5 bot-pad pex-5 flex flex-col gaep-5 sm:flex-row-reverse sm:items-center sm:justify-between sm:pb-30px sm:px-30px">
                    <div>
                      <div>
                        <div className="flex gap-[10px]">
                          <a
                            href="#"
                            target="_blank"
                            className="h-full hover:opacity-80"
                          >
                            <img
                              src="https://www.solanium.io/socials/website.svg"
                              alt="Website"
                              className="z-10 h-8 w-8"
                            />
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="h-full hover:opacity-80"
                          >
                            <img
                              src="https://www.solanium.io/socials/twitter.svg"
                              alt="Twitter"
                              className="z-10 h-8 w-8"
                            />
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="h-full hover:opacity-80"
                          >
                            <img
                              src="https://www.solanium.io/socials/discord.svg"
                              alt="Discord"
                              className="z-10 h-8 w-8"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={ethIcon} className="h-6 w-6" alt="" />
                      <span className="projects-pool-amount font-inter-bold block text-3xl">
                        400
                      </span>
                    </div>
                  </div>
                  <div className="w-full rounded-bl-solaniumDefault rounded-br-solaniumDefault inline-flex items-center justify-center h-9 gap-1 text-xs text-black bg-notification">
                    <b className="font-poppins-bold projects-pool-status">
                      Project is preparing whitelist.
                    </b>
                  </div>
                </div>
              </div>
               
            </div>
          </div>
        </div>
      </>
    );
}

export default UpComingProjects;
