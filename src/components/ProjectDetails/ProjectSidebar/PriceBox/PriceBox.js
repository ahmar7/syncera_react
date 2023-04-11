import React from 'react';

const PriceBox = () => {
    return (
      <div className="bg-[#000B45] w-full top-30px px-5 py-6 text-white rounded-solaniumDefault flex flex-col lg:sticky lg:p-30px">
        <div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <span className="text-sm text-[#11E1CF] font-inter-bold mb-1">
                Hard cap
              </span>
              <span>
                <b className="text-3xl font-inter-bold mr-2">100,000</b>
                <span>USDC</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#11E1CF] font-inter-bold mb-1">
                Token price
              </span>
              <span>
                <b className="text-3xl font-inter-bold mr-2">0.0125</b>
                <span>USDC</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#11E1CF] font-inter-bold mb-1">
                Pool size
              </span>
              <span>
                <b className="text-3xl font-inter-bold mr-2">8,000,000</b>
                <span>ROT</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#11E1CF] font-inter-bold mb-1">
                Type:
              </span>
              <span>
                <b className="text-3xl font-inter-bold mr-2 text-[22px]">
                  Vested
                </b>
              </span>
              <span className="text-[13px] font-inter-extralight">
                33% TGE, 33% Second Month, 34% Third Month
              </span>
            </div>
            <div className="w-full text-center bg-opacity-40 border-[1px] py-3 px-1 rounded-md max-w-[350px] bg-cyan-700 border-cyan-700">
              Distribution starts in: 17 hours and 51 minutes
            </div>
          </div>
        </div>
      </div>
    );
}

export default PriceBox;
