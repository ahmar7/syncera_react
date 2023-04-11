import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
      <div className="w-full">
        <div className="relative h-[200px] sm:h-[520px] overflow-hidden">
          <img
            src="https://www.solanium.io/media/projects/reign_of_terror_header.png"
            className="object-cover object-center w-full h-full blur-lg opacity-30"
            alt=""
          />
          <div className="max-w-[1400px] mx-auto bg-no-repeat bg-cover bg-center bg-log rounded-solaniumDefault absolute inset-x-5 inset-y-5 sm:inset-y-12" />
        </div>
      </div>
    );
}

export default Banner;
