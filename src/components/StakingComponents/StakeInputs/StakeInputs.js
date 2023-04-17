import React, { useState, useEffect } from "react";
import "./StakeInput.css";
const StakeInputs = () => {
  const [slimInput, setslimInput] = useState("");
  const [slimLp, setslimLp] = useState("");
  const [slimLp2, setslimLp2] = useState("");
  const [slimInput2, setslimInput2] = useState("0.00");
  const [DateTime, setDateTime] = useState("");
  const [xSlim, setxSlim] = useState("");
  const [xSlimLp, setxSlimLp] = useState("");
  const [finalSlim, setfinalSlim] = useState("");
  const [days, setdays] = useState(365);
  const [requirement, setRequirement] = useState(false);
  const [activeTier1, setactiveTier1] = useState(false);
  const [activeTier2, setactiveTier2] = useState(false);
  const [activeTier3, setactiveTier3] = useState(false);
  const [activeTier4, setactiveTier4] = useState(false);
  const [activeTier5, setactiveTier5] = useState(false);

  let updateTier1 = () => {
    setslimInput(100);
    setdays(365);
setslimLp(0)
    setactiveTier1(true);
    setactiveTier2(false);
    setactiveTier3(false);
    setactiveTier4(false);
    setactiveTier5(false);
    setRequirement(true);
  };
  let updateTier2 = () => {
    setdays(365);
setslimLp(0)
    setslimInput(1000);
    setactiveTier1(false);
    setactiveTier2(true);
    setRequirement(true);
    setactiveTier3(false);
    setactiveTier4(false);
    setactiveTier5(false);
  };
  let updateTier3 = () => {
setslimLp(0)
    setdays(365);

    setslimInput(5000);
    setactiveTier1(false);
    setRequirement(true);
    setactiveTier2(false);
    setactiveTier3(true);
    setactiveTier4(false);
    setactiveTier5(false);
  };
  let updateTier4 = () => {
    setdays(365);
setslimLp(0);

    setslimInput(10000);
    setactiveTier1(false);
    setactiveTier2(false);
    setactiveTier3(false);
    setRequirement(true);
    setactiveTier4(true);
    setactiveTier5(false);
  };
  let updateTier5 = () => {
setslimLp(0)
    setdays(365);

    setslimInput(50000);
    setactiveTier1(false);
    setactiveTier2(false);
    setactiveTier3(false);
    setRequirement(true);
    setactiveTier4(false);
    setactiveTier5(true);
  };

  let changeSlim = (e) => {
    let val = e.target.value;
    setslimInput(val);
    setslimInput2(Number(val).toFixed(2));
    if (val > 100000000) {
      setslimInput(100000000.0);
      setslimInput2(100000000.0);
    } else {
      setslimInput(val);
      setslimInput2(Number(val).toFixed(2));
    }
  };
  let changeSlimLp = (e) => {
    let val = e.target.value;
    setslimLp2(Number(val).toFixed(2));
    if (val > 100000000) {
      setslimLp(100000000.0);
      setslimLp2(100000000.0);
    } else {
      setslimLp(val);
      setslimLp2(Number(val).toFixed(2));
    }
  };
  let changeDays = (e) => {
    let val = e.target.value;
    if (val > 365) {
      setdays(365);
    } else {
      setdays(val);
    }
  };
  let resetVal = () => {
    setslimInput(0);
    setdays(365);
    setslimLp(0)
  };
  useEffect(() => {
    let xSlims = (slimInput * days) / 365;
    let xSlimsLp = (slimLp * days) / 365 *2.5;
    setxSlim(xSlims.toFixed(2));
    setxSlimLp(xSlimsLp.toFixed(2));
 
    const date = new Date();

    date.setDate(date.getDate() + parseInt(days === "" ? 0 : days));
    setDateTime(date.toLocaleDateString("en-GB"));

    setslimInput2(Number(slimInput).toFixed(2));
    setslimLp2(Number(slimLp).toFixed(2));
    setfinalSlim(Math.round(xSlim) + Math.round(xSlimsLp));
       if (finalSlim > 99 && finalSlim < 1000) {
         setactiveTier1(true);
         setactiveTier2(false);
         setactiveTier3(false);
         setactiveTier4(false);
         setactiveTier5(false);
         setRequirement(true);
       } else if (finalSlim > 999 && finalSlim < 5000) {
         setactiveTier2(true);
         setactiveTier1(false);
         setactiveTier3(false);
         setactiveTier4(false);
         setactiveTier5(false);
         setRequirement(true);
       } else if (finalSlim > 4999 && finalSlim < 10000) {
         setRequirement(true);
         setactiveTier2(false);
         setactiveTier1(false);
         setactiveTier4(false);
         setactiveTier5(false);
         setactiveTier3(true);
       } else if (finalSlim > 9999 && finalSlim < 50000) {
         setactiveTier4(true);
         setactiveTier1(false);
         setactiveTier3(false);
         setactiveTier2(false);
         setactiveTier5(false);
         setRequirement(true);
       } else if (finalSlim > 49999) {
         setactiveTier5(true);
         setactiveTier2(false);
         setactiveTier3(false);
         setactiveTier4(false);
         setactiveTier1(false);
         setRequirement(true);
       } else {
         setRequirement(false);
         setactiveTier1(false);
         setactiveTier2(false);
         setactiveTier3(false);
         setactiveTier4(false);
         setactiveTier5(false);
       }
  }, [slimInput][days]);
  return (
    <div className="grid grid-cols-1 pe-3 ps-3 md:gap-4 items-start lg:grid-cols-6 lg:gap-8 mt-5">
      <div className="grid col-span-4 grid-cols-1 gap-4 h-full">
        <section
          className="staking-box rounded-3xl"
          aria-labelledby="section-2-title"
        >
          <h2 className="sr-only" id="section-2-title">
            Your Stake
          </h2>
          <div className="mt-2 h-full">
            <div className="rounded-3xl p-7">
              <div className="w-full  lg:col-span-2 lg:pr-0 xl:px-0">
                <div className="bg-slate-100 p-1 rounded-[50px] flex gap-2 bg-theme">
                  <button type="button" className="w-1/2 border-round ">
                    <span className="px-3 block btn-activated rounded-[50px] py-3 text-xs font-poppins-bold uppercase bg-solanium-bright-blue text-white">
                      Stake
                    </span>
                  </button>
                  <button
                    disabled
                    type="button"
                    className="w-1/2 disabled:opacity-50 border-round"
                  >
                    <span className="px-3 block rounded-[50px] py-3 text-xs font-poppins-bold uppercase text-solanium-bright-blue">
                      Unstake
                    </span>
                  </button>
                </div>
                <div>
                  <div>
                    <div className="mt-5">
                      <p className="text-2xl font-poppins-bold mb-2">
                        Your stake
                      </p>
                      <p className="font-poppins text-sm mb-5">
                        Calculate your xSLIM depending on the amount of staked
                        tokens and your lock time.
                      </p>
                      <div className="flex flex-col h-full">
                        <div className="my-2 lg:w-[60%]">
                          <label className="block flex justify-between text-[12px] font-poppins-regular mb-1 text-solanium-blue">
                            SLIM stake:
                            <span className="font-poppins-italic italic opacity-50">
                              Your total amount of slim: 0
                            </span>
                          </label>
                          <div className="relative flex h-[60px] border-[1px] rounded-xl border-slate-300">
                            <input
                              onChange={changeSlim}
                              value={slimInput}
                              type="number"
                              placeholder="0"
                              className="bg-white no-border focus:outline-none p-5 rounded-2xl focus:border-none focus-visible:border-none w-full h-full font-inter-black active:border-none text-solanium-bright-blue text-2xl"
                            />
                          </div>
                        </div>
                        <div className="my-2 lg:w-[60%]">
                          <label className="block flex justify-between text-[12px] font-poppins-regular mb-1 text-solanium-blue">
                            SLIM-LP STAKE:
                            <span className="font-poppins-italic italic opacity-50">
                              Your total amount of slim: 0
                            </span>
                          </label>
                          <div className="relative flex h-[60px] border-[1px] rounded-xl border-slate-300">
                            <input
                              onChange={changeSlimLp}
                              value={slimLp}
                              placeholder="0"
                              type="number"
                              className="bg-white no-border focus:outline-none p-5 rounded-2xl focus:border-none focus-visible:border-none w-full h-full font-inter-black active:border-none text-solanium-bright-blue text-2xl"
                            />
                          </div>
                        </div>
                        <div className="my-2 lg:w-[60%]">
                          <label className="block text-sm text-[12px] mb-1 text-solanium-blue">
                            Locked for:
                          </label>
                          <div className="relative flex h-[60px] border-[1px] rounded-xl border-slate-300">
                            <input
                              placeholder="0"
                              type="number"
                              value={days}
                              onChange={changeDays}
                              className="bg-white no-border focus:outline-none p-5 rounded-2xl focus:border-none focus-visible:border-none w-full h-full font-inter-black active:border-none text-solanium-bright-blue text-2xl"
                            />
                            <span className="f-black font-inter-black">
                              days
                            </span>
                          </div>
                        </div>

                        <div className="my-3 text-center"></div>
                        <div
                          className="my-4"
                          by="function It(s,l){return s===l}"
                          id="headlessui-radiogroup-4"
                          role="radiogroup"
                          aria-labelledby="headlessui-label-5"
                        >
                          <label
                            id="headlessui-label-5"
                            className="sr-only"
                            role="none"
                          >
                            Choose a memory option
                          </label>
                          <div
                            className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 grid-cols-1"
                            role="none"
                          >
                            <div
                              className={
                                activeTier1
                                  ? "font-poppins-bold active-tier cursor-pointer focus:outline-none bg-white border-solanium-bright-blue text-solanium-bright-blue border py-6 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 new-tier"
                                  : "font-poppins-bold cursor-pointer focus:outline-none bg-white border-solanium-bright-blue text-solanium-bright-blue border py-6 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 new-tier"
                              }
                              onClick={updateTier1}
                            >
                              <span
                                id="headlessui-label-7"
                                className="font-poppins-bold text-center"
                              >
                                <div className="text-center">
                                  <p className="text-xl font-inter-black text-solanium-bright-blue">
                                    Tier 1
                                  </p>
                                  <p className="text-[#4E3E7D] font-poppins-bold">
                                    100 xSLIM
                                  </p>
                                  <p className="text-xs text-[#4E3E7D]">
                                    1 Ticket
                                  </p>
                                </div>
                              </span>
                            </div>
                            <div
                              className={
                                activeTier2
                                  ? "font-poppins-bold active-tier cursor-pointer focus:outline-none bg-white border-solanium-bright-blue text-solanium-bright-blue border py-6 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 new-tier"
                                  : "font-poppins-bold cursor-pointer focus:outline-none bg-white border-solanium-bright-blue text-solanium-bright-blue border py-6 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 new-tier"
                              }
                              onClick={updateTier2}
                            >
                              <span
                                id="headlessui-label-9"
                                className="font-poppins-bold text-center"
                              >
                                <div className="text-center">
                                  <p className="text-xl font-inter-black text-solanium-bright-blue">
                                    Tier 2
                                  </p>
                                  <p className="text-[#4E3E7D] font-poppins-bold">
                                    1000 xSLIM
                                  </p>
                                  <p className="text-xs text-[#4E3E7D]">
                                    12 Tickets
                                  </p>
                                </div>
                              </span>
                            </div>
                            <div
                              className={
                                activeTier3
                                  ? "font-poppins-bold cursor-pointer active-tier focus:outline-none bg-white border-solanium-bright-blue text-solanium-bright-blue border py-6 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 new-tier"
                                  : "font-poppins-bold cursor-pointer focus:outline-none bg-white border-solanium-bright-blue text-solanium-bright-blue border py-6 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 new-tier"
                              }
                              onClick={updateTier3}
                            >
                              <span
                                id="headlessui-label-11"
                                className="font-poppins-bold text-center"
                              >
                                <div className="text-center">
                                  <p className="text-xl font-inter-black text-solanium-bright-blue">
                                    Tier 3
                                  </p>
                                  <p className="text-[#4E3E7D] font-poppins-bold">
                                    5000 xSLIM
                                  </p>
                                  <p className="text-xs text-[#4E3E7D]">
                                    100 Tickets
                                  </p>
                                </div>
                              </span>
                            </div>
                            <div
                              className={
                                activeTier4
                                  ? "font-poppins-bold cursor-pointer active-tier focus:outline-none bg-white border-solanium-bright-blue text-solanium-bright-blue border py-6 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 new-tier"
                                  : "font-poppins-bold cursor-pointer focus:outline-none bg-white border-solanium-bright-blue text-solanium-bright-blue border py-6 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 new-tier"
                              }
                              onClick={updateTier4}
                            >
                              <span
                                id="headlessui-label-13"
                                className="font-poppins-bold text-center"
                              >
                                <div className="text-center">
                                  <p className="text-xl font-inter-black text-solanium-bright-blue">
                                    Tier 4
                                  </p>
                                  <p className="text-[#4E3E7D] font-poppins-bold">
                                    10000 xSLIM
                                  </p>
                                  <p className="text-xs text-[#4E3E7D]">
                                    Guaranteed
                                  </p>
                                </div>
                              </span>
                            </div>
                            <div
                              className={
                                activeTier5
                                  ? "font-poppins-bold active-tier cursor-pointer focus:outline-none bg-white border-solanium-bright-blue text-solanium-bright-blue border py-6 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 new-tier"
                                  : "font-poppins-bold cursor-pointer focus:outline-none bg-white border-solanium-bright-blue text-solanium-bright-blue border py-6 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 new-tier"
                              }
                              onClick={updateTier5}
                            >
                              <span
                                id="headlessui-label-15"
                                className="font-poppins-bold text-center"
                              >
                                <div className="text-center">
                                  <p className="text-xl font-inter-black text-solanium-bright-blue">
                                    Tier 5
                                  </p>
                                  <p className="text-[#4E3E7D] font-poppins-bold">
                                    50000 xSLIM
                                  </p>
                                  <p className="text-xs text-[#4E3E7D]">
                                    Guaranteed
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row items-center">
                          <div className="flex justify-between w-full items-center">
                            <div className="w-1/5 flex-shrink">
                              <span
                                onClick={resetVal}
                                type="button"
                                className="text-solanium-bright-blue underline cursor-pointer"
                              >
                                Reset
                              </span>
                            </div>
                            {!requirement && (
                              <div className="w-1/2 flex-grow mx-3 text-sm text-red-500">
                                <div className="text-right sm:text-left">
                                  Minimum requirement of Tier 1 to stake
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="w-full sm:w-1/2">
                            <button
                              className="solanium-button-primary"
                              disabled
                            >
                              <b className="font-inter-bold">Stake</b> SLIM
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="new-tier stake-details grid grid-cols-1 my-5 md:my-0 gap-4 md:col-span-2 rounded-solaniumDefault overflow-hidden  h-full bg-[#000B45] p-8 ">
        <section className="no-shadow">
          <h2 className="sr-only">Stake Details</h2>
          <div className="rounded-lg overflow-hidden  flex flex-col h-full">
            <div className="h-full">
              <h2 className="text-white font-poppins-bold"> Stake details </h2>
              <div className="text-white p-1 h-full">
                <div className="flex flex-col h-full">
                  <div className="grow">
                    <div className="my-5">
                      <p className="label">Your xSLIM</p>
                      <p className="value">
                        <span className="mr-2 font-inter-black">
                          {finalSlim === "" ? "0.00" : finalSlim}
                        </span>
                        <span className="small-label">xSLIM</span>
                        <span className="add-label">
                          +{finalSlim === "" ? "0.00" : finalSlim} xSLIM
                        </span>
                      </p>
                    </div>
                    <div className="my-5">
                      <p className="label">Your Tier:</p>
                      <div className="value">
                        <span className="text-3xl mr-2 font-inter-black">
                          Tier{" "}
                          {activeTier1
                            ? "1"
                            : "0" && activeTier2
                            ? "2"
                            : "0" && activeTier3
                            ? "3"
                            : "0" && activeTier4
                            ? "4"
                            : "0" && activeTier5
                            ? "5"
                            : "0"}
                        </span>
                        <div className="small-label">
                          <span>
                            {activeTier1
                              ? "100 Tickets"
                              : "0 Tickets" && activeTier2
                              ? "1000 Tickets"
                              : "0 Tickets" && activeTier3
                              ? "5000 Tickets"
                              : "0 Tickets" && activeTier4
                              ? "Guaranteed allocation"
                              : "0 Tickets" && activeTier5
                              ? "Guaranteed allocation"
                              : "0 Tickets"}
                          </span>
                        </div>
                        <span className="add-label">
                          +
                          {activeTier1
                            ? "1"
                            : "0" && activeTier2
                            ? "2"
                            : "0" && activeTier3
                            ? "3"
                            : "0" && activeTier4
                            ? "4"
                            : "0" && activeTier5
                            ? "5"
                            : "0"}{" "}
                          Tiers
                        </span>
                      </div>
                    </div>
                    <div className="my-5">
                      <p className="label-">Staked SLIM</p>
                      <p className="value">
                        <span className="mr-2 font-inter-black">
                          {slimInput2}
                        </span>
                        <span className="small-label">SLIM</span>
                        <span className="add-label">+{slimInput2}{" "}SLIM</span>
                      </p>
                    </div>
                    <div className="my-5">
                      <p className="label-">Staked SLIM-LP</p>
                      <p className="value">
                        <span className="mr-2 font-inter-black">{slimLp2}</span>
                        <span className="small-label">SLIM</span>
                        <span className="add-label">+{slimLp2}{" "}SLIM</span>
                      </p>
                    </div>
                    {/**/}
                    <div className="my-5">
                      <p className="label">Locked until</p>
                      <p className="value">
                        <span className="mr-2 md:text-2xl lg:text-3xl">
                          {/* 5/23/2023 */}
                          {DateTime}
                        </span>
                        <span className="small-label">
                          ({days === "" ? 0 : days} days){" "}
                        </span>
                        <span className="add-label">
                          +{days === "" ? 0 : days} days
                        </span>
                      </p>
                    </div>
                    {/**/}
                  </div>
                  <div className=" ">
                    <p className="my-5 text-xs font-poppins">
                      Stake SLIM to participate in whitelists for upcoming IDOs.
                      <a
                        className="text-[#11E1CF]"
                        href="https://solanium.medium.com/introducing-solanium-tiers-d5b92bfb1778"
                      >
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StakeInputs;
