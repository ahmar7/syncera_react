import React from 'react';

const SocialIcons = () => {
    return (
      <div className="flex flex-col justify-center mb-10 lg:justify-end lg:flex-row px-5 lg:px-0">
        <div className="mb-8 flex items-center gap-5 lg:hidden">
          <div className="h-20 w-20 sale-bg bg-contain bg-no-repeat" />
          <div>
            <h1 className="font-poppins-bold text-3xl">Reign of Terror</h1>
            <span className="text-[#6376AE] text-sm">
              Gaming, NFT, Metaverse
            </span>
          </div>
        </div>
        <div>
          <div>
            <div className="flex gap-[10px] gap-[20px]">
              <a href="#" target="_blank" className="h-full hover:opacity-80">
                <img
                  src="https://www.solanium.io/socials/website.svg"
                  alt="Website"
                  className="z-10 h-8 w-8 h-10 w-10"
                />
              </a>
              <a href="#" target="_blank" className="h-full hover:opacity-80">
                <img
                  src="https://www.solanium.io/socials/medium.svg"
                  alt="Medium"
                  className="z-10 h-8 w-8 h-10 w-10"
                />
              </a>
              <a href="#" target="_blank" className="h-full hover:opacity-80">
                <img
                  src="https://www.solanium.io/socials/twitter.svg"
                  alt="Twitter"
                  className="z-10 h-8 w-8 h-10 w-10"
                />
              </a>
              <a href="#" target="_blank" className="h-full hover:opacity-80">
                <img
                  src="https://www.solanium.io/socials/telegram_announcement.svg"
                  alt="Telegram channel"
                  className="z-10 h-8 w-8 h-10 w-10"
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
                  className="z-10 h-8 w-8 h-10 w-10"
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
                  className="z-10 h-8 w-8 h-10 w-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SocialIcons;
