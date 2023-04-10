import React from 'react';
import './Upcoming.css'
const UpComingProjects = () => {
    return (
      <section className="projects-live">
        <div className="containerer">
          <h2 className="title mb-5">Upcoming Projects</h2>
          <div className="g-4 row">
            <div className="col-md-6">
              <div className="w-full max-w-[580px] shadow-md rounded-solaniumDefault hover hover:shadow-xl transition-all duration-500 bg-white">
                <a href="#" className="w-full no-decor card-bg h-full">
                  <div className="flex absolute flex-row-reverse w-full max-w-[580px]">
                    <div className="rounded-lg bg-[#2047F4] h-10 w-10 flex z-30  lop-mar border-2 border-[#ffffff]">
                      <img
                        src="https://www.solanium.io/socials/shield.svg"
                        className="z-10 h-8 w-8 mx-auto my-auto"
                      />
                    </div>
                  </div>
                  <div className="rounded-t-solaniumDefault bg-con2 h-[180px] bg-center bg-no-repeat bg-cover"></div>
                  <div className="content card-bg pet-5 pex-5 sm:pt-30px sm:px-30px">
                    <div className="flex flex-col meb-4 justify-between sm:flex-row sm:mb-8">
                      <span className="block font-poppins-bold text-xl sm:text-[40px]">
                        Reign of Terror
                      </span>
                      <span className="block text-[#6376AE] text-sm">
                        Gaming, NFT, Metaverse
                      </span>
                    </div>
                    <span className="block font-poppins-bold text-sm mb-7 sm:line-clamp-1 leading-6 sm:mb-[10px] sm:text-base">
                      A Cyberpunk SRPG Developed by Red Door Digital
                    </span>
                    <span className="pb-30px leading-[26px] text-sm text-paragraph-text hide-para sm:line-clamp-3">
                      A cyberpunk SRPG (featuring turn-based tactical combat)
                      with an online persistent world that incorporates our
                      philosophy of ownership into Play and Own as well as
                      supporting multichain.
                    </span>
                  </div>
                </a>
                <div className="peb-5 card-bg bot-pad pex-5 flex flex-col gaep-5 sm:flex-row-reverse sm:items-center sm:justify-between sm:pb-30px sm:px-30px">
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
                            src="https://www.solanium.io/socials/medium.svg"
                            alt="Medium"
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
                            src="https://www.solanium.io/socials/telegram_announcement.svg"
                            alt="Telegram channel"
                            className="z-10 h-8 w-8"
                          />
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          className="h-full hover:opacity-80"
                        >
                          <img
                            src="https://www.solanium.io/socials/telegram.svg"
                            alt="Telegram chat"
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
                    <img
                      src="https://static.solanium.com/media/usdc_icon.png"
                      className="h-6 w-6"
                      alt=""
                    />
                    <span className="font-inter-bold block text-3xl">
                      100,000
                    </span>
                  </div>
                </div>
                <div className="w-full rounded-bl-solaniumDefault rounded-br-solaniumDefault inline-flex items-center justify-center h-9 gap-1 text-xs text-black bg-new">
                  Distribution starts in:{" "}
                  <b className="font-poppins-bold">02:15:40:05</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default UpComingProjects;
