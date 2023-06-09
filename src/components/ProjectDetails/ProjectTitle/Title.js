import React from 'react';
import './Title.css'
const Title = () => {
    return (
      <div className="mb-8 smflex  items-center gap-5 lg:flex ">
        <div className="w-20 h-20 token-bg bg-contain bg-no-repeat" />
        <div>
          <h1 className="font-poppins-bold text-3xl">Syncera Private</h1>
          <span className="text-[#6376AE] text-sm">DeFi, Launchpad</span>
        </div>
      </div>
    );
}

export default Title;
