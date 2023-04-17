import React from 'react';
import './Boxes.css'
import './Boxes.css'
const Boxes = () => {
    return (
      <div>
        <div>
          <dl className="rounded-lg grid grid-cols-1 sm:grid-cols-4 pe-3 ps-3 gap-4 lg:gap-8">
            <div className="flex flex-col solanium-box">
              <dt className="stat-label">Your total stake:</dt>
              <dd className="stat-value">
                <span className="mr-2">0</span>
                <span className="font-poppins d-inline text-xl inline-block md:block lg:inline-block">
                  xSLIM
                </span>
                <p className="mt-2 text-xs text-[#4E3E7D] opacity-40 font-poppins">
                  {" "}
                  0 SLIM staked{" "}
                </p>
              </dd>
            </div>
            <div className="flex flex-col solanium-box">
              <dt className="stat-label">Your Tier:</dt>
              <dd className="stat-value">
                <span>Tier 0</span>
                <div className="mt-2 text-xs text-[#4E3E7D] opacity-40 font-poppins">
                  0 Tickets
                </div>
              </dd>
            </div>
            <div className="flex flex-col solanium-box">
              <dt className="stat-label">Remaining days:</dt>
              <dd className="stat-value">
                <div className="flex justify-between flex-col lg:flex-row">
                  <div>
                    <div className="flex items-end">
                      <span>0</span>
                      <span className="font-poppins text-xl ml-1 inline-block md:block lg:inline-block">
                        days
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-[#4E3E7D] opacity-40 font-poppins">
                      {" "}
                      No unlock date{" "}
                    </div>
                  </div>
                  <div className="flex items-end">{/**/}</div>
                </div>
              </dd>
            </div>
            <div className="flex flex-col solanium-box">
              <dt className="stat-label">Remaining days:</dt>
              <dd className="stat-value">
                <div className="flex justify-between flex-col lg:flex-row">
                  <div>
                    <div className="flex items-end">
                      <span>0</span>
                      <span className="font-poppins text-xl ml-1 inline-block md:block lg:inline-block">
                        days
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-[#4E3E7D] opacity-40 font-poppins">
                      {" "}
                      No unlock date{" "}
                    </div>
                  </div>
                  <div className="flex items-end">{/**/}</div>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    );
}

export default Boxes;
