import React from 'react';

const PriceBox = () => {
    return (
      <div className="bg-[#000B45] w-full top-30px px-5 py-6 text-white rounded-solaniumDefault flex flex-col lg:sticky lg:p-30px pool-bg-color">
        <div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <span className="text-sm text-[#11E1CF] font-inter-bold mb-1 font-weight-bold">
                Hard Cap
              </span>
              <span>
                <b className="text-3xl font-inter-bold mr-2">400</b>
                <span>ETH</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#11E1CF] font-inter-bold mb-1 font-weight-bold">
                Token price
              </span>
              <span>
                <b className="text-3xl font-inter-bold mr-2">$0.05</b>
                <span>ETH</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#11E1CF] font-inter-bold mb-1 font-weight-bold">
                Pool size
              </span>
              <span>
                <b className="text-3xl font-inter-bold mr-2">14,400,000</b>
                <span>SERA</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#11E1CF] font-inter-bold mb-1 font-weight-bold">
                Vesting
              </span>
              <span>
                <b className="text-3xl font-inter-bold mr-2 unlock-text">25% TGE and 18.75% Monthly</b>
              </span>
            </div>
            <div className="w-full text-center bg-opacity-40 border-[1px] py-3 px-1 rounded-md max-w-[350px] bg-cyan-700 border-cyan-700 bg-pool-notification">
              <b>The deadline for having <a href="https://zealy.io/c/syncera/questboard/57740b31-e4d3-45f1-8798-b893d472c578c" target="_blank" className="pool-whitelist-link">claimed</a> your <i>OG role</i> and <a href="https://zealy.io/c/syncera/questboard/5e8e9de1-8a27-4ef5-9f5b-ebae68d7cc13" target="_blank" className="pool-whitelist-link">enrolling</a> in the <i>whitelist</i> will be revealed beforehand.</b>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PriceBox;
