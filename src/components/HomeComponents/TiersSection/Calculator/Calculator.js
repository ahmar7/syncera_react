import React, { useState, useEffect } from "react";

import AnimatedNumber from "animated-number-react";
import './Calculator.css'

const Calculator = () => {
    const [inputTop, setinputTop] = useState("5000");
    const [inputBelow, setinputBelow] = useState("");
    const [topNewVal, settopNewVal] = useState("");
    const [belowNewVal, setbelowNewVal] = useState("");
    const [totalSlim, setTotalSlim] = useState("");
    const [days, setDays] = useState("365");
    const [dayWarn, setdayWarn] = useState(false);
    const [slimWarn, setslimWarn] = useState(false);
    let changeDays = (event) => {
      const val = event.target.value.replace(/\D/g, "");
      if (val > 365) {
        setDays(365);
      } else {
        setDays(val);
      }
      let newVal = (inputTop / 365) * days;
      settopNewVal(newVal);
    };
    let handleChange = (event) => {
      setinputTop(event.target.value.replace(/\D/g, ""));
    };
    let handleChange2 = (event) => {
      setinputBelow(event.target.value.replace(/\D/g, ""));
    };

    useEffect(
      () => {
        setDays(days);
        let newVal = (inputTop / 365) * days;
        settopNewVal(newVal);
        let newVal2 = (inputBelow / 365) * days * 2.5;
        setbelowNewVal(newVal2);
        let up = (Math.round((topNewVal + belowNewVal) * 100) / 100).toFixed(2);
        setTotalSlim(up);
        if (days < 14) {
          setdayWarn(true);
        } else {
          setdayWarn(false);
        }
        if (totalSlim < 100) {
          setslimWarn(true);
          setdayWarn(false);
        } else {
          setslimWarn(false);
        }
      },
      [days][inputTop],
      [topNewVal]
    );
    
  let  formatValue = (totalSlim) => totalSlim.toFixed(2);
  return (
    <div
      data-v-18811a9f
      className="new-calc below-viewport in-viewport"
      data-in-viewport="i0"
    >
      <span data-v-18811a9f className="new-calc-header">
        xSERA Calculator
      </span>

      <span data-v-18811a9f className="new-calc-sub-header">
        Calculate your xSERA depending on the amount of staked tokens and your
        lock time.
      </span>
      <div data-v-18811a9f className="calc-container inputs">
        <div data-v-18811a9f className="input-block">
          <div data-v-18811a9f className="symbol">
            SERA
          </div>
          <input
            onChange={handleChange}
            data-v-18811a9f
            type="text"
            inputMode="decimal"
            title="Token Amount"
            autoComplete="off"
            autoCorrect="off"
            value={inputTop}
            pattern="^[0-9]*[.,]?[0-9]*$"
            placeholder={0}
            min={0}
            minLength={1}
            spellCheck="false"
          />
        </div>
        <div data-v-18811a9f>
          <div data-v-18811a9f className="divider">
            and / or
          </div>

          <div data-v-18811a9f className="input-block">
            <div data-v-18811a9f className="symbol">
              SERA-LP
            </div>
            <input
              data-v-18811a9f
              type="number"
              inputMode="decimal"
              title="Token Amount"
              autoComplete="off"
              autoCorrect="off"
              pattern="^[0-9]*[.,]?[0-9]*$"
              placeholder={0}
              min={0}
              onChange={handleChange2}
              value={inputBelow}
              minLength={1}
              spellCheck="false"
            />
          </div>
        </div>
      </div>
      <div data-v-18811a9f className="sep-icon">
        <i
          data-v-18811a9f
          aria-label="icon: plus"
          className="anticon anticon-plus"
        >
          <svg
            viewBox="64 64 896 896"
            data-icon="plus"
            width="1em"
            height="1em"
            fill="white"
            aria-hidden="true"
            focusable="false"
            className="helper-icon"
          >
            <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
            <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
          </svg>
        </i>
      </div>
      <div data-v-18811a9f className="calc-container lock-time">
        <div data-v-18811a9f className="input-block">
          <div data-v-18811a9f className="pre-symbol">
            Lock tokens for
          </div>
          <input
            data-v-18811a9f
            type="text"
            inputMode="decimal"
            title="Token Amount"
            autoComplete="off"
            autoCorrect="off"
            pattern="^[0-9]*[.,]?[0-9]*$"
            placeholder={0}
            maxLength={365}
            onChange={changeDays}
            value={days}
            minLength={1}
            spellCheck="false"
          />
          <div data-v-18811a9f className="post-symbol">
            days
          </div>
        </div>
      </div>
      <div data-v-18811a9f className="sep-icon arrow-down">
        <i
          data-v-18811a9f
          aria-label="icon: arrow-down"
          className="anticon anticon-arrow-down"
        >
          <svg
            viewBox="64 64 896 896"
            data-icon="arrow-down"
            width="1em"
            height="1em"
            fill="white"
            aria-hidden="true"
            focusable="false"
            className="helper-icon"
          >
            <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" />
          </svg>
        </i>
      </div>

      <div
        data-v-07524f04
        data-v-18811a9f
        className="statistic ant-row-flex"
        style={{ margin: "-5px" }}
      >
        <div
          data-v-07524f04
          className="ant-col ant-col-24"
          style={{ padding: "5px" }}
        >
          <div
            data-v-07524f04
            className="value ant-row-flex ant-row-flex-middle text-purple"
            style={{ margin: "-5px -2.5px" }}
          >
            <div
              data-v-07524f04
              className="ant-col"
              style={{ padding: "5px 2.5px" }}
            >
              <span data-v-0abbdf5a data-v-07524f04>
                {/* {totalSlim} */}
                <AnimatedNumber
                  value={totalSlim}
                  formatValue={formatValue}
                />
              </span>
            </div>
            <div
              data-v-07524f04
              className="ant-col"
              style={{ padding: "5px 2.5px" }}
            >
              <span data-v-07524f04 className="suffix">
                xSERA
              </span>
            </div>
          </div>
        </div>
      </div>

      <span data-v-18811a9f className="tier-number">
        {/* locked until */}
        <span data-v-18811a9f className="num">
          {/* 3/10/2023 */}
        </span>
      </span>
      <div data-v-18811a9f className={dayWarn ? "error " : "error hidden"}>
        <i
          data-v-18811a9f
          aria-label="icon: warning"
          className="anticon anticon-warning"
        >
          <svg
            viewBox="64 64 896 896"
            data-icon="warning"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className
          >
            <path d="M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z" />
          </svg>
        </i>
        You need to lock for a minimum of 14 days.
      </div>
      <div data-v-18811a9f className={slimWarn ? "error " : "error hidden"}>
        <i
          data-v-18811a9f
          aria-label="icon: warning"
          className="anticon anticon-warning"
        >
          <svg
            viewBox="64 64 896 896"
            data-icon="warning"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className
          >
            <path d="M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z" />
          </svg>
        </i>
        You need at least 100 xSERA.
      </div>
      <button
        data-v-18811a9f
        size="large"
        className="btn-one is-fullwidth calc-go-stake btn-disabled"
      >
        <i className="fas fa-external-link-alt icon-distance"></i> To stake
      </button>
    </div>
  );
};

export default Calculator;
