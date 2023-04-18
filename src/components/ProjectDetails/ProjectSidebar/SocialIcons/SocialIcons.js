import React from 'react';
import Title from '../../ProjectTitle/Title';
import './socialIcons.css'
const SocialIcons = () => {
    return (
      <div className="flex s-align flex-col sm-pad mb-10 lg:justify-end lg:flex-row px-5 lg:px-0">
        <div className="shom">
          <Title  />
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
                  src="https://www.solanium.io/socials/twitter.svg"
                  alt="Twitter"
                  className="z-10 h-8 w-8 h-10 w-10"
                />
              </a>
              <a href="#" target="_blank" className="h-full hover:opacity-80">
                <img
                  src="https://www.solanium.io/socials/discord.svg"
                  alt="Discord"
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
              <a href="#" target="_blank" className="h-full hover:opacity-80">
                <img
                  src="https://www.solanium.io/socials/medium.svg"
                  alt="Medium"
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
