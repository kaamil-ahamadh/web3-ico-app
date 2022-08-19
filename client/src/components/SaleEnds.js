import React, { useEffect, useState, useContext } from "react";
import millify from "millify";

import getTimeUntil from "../utils/getTimeUntil";
import SaleEndTimer from "./SaleEndTimer";
import GlobalContext from "../context/GlobalContext";

const SaleEnds = () => {
  const { handleConnectWallet, icoState } = useContext(GlobalContext);
  // const tokensAvailableInPerc = (icoState.tokensAvailable / 5000000) * 100;

  const [timer, setTimer] = useState({
    icoEndDate: "Tuesday, 15 August 2023 18:19:48 GMT+00:00",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  useEffect(() => {
    setInterval(() => handleGetTimeUntil(timer.icoEndDate), 1000);
  }, []);

  function handleGetTimeUntil(icoEndDate) {
    if (getTimeUntil(icoEndDate)) {
      const { days, hours, minutes, seconds } = getTimeUntil(icoEndDate);

      setTimer({
        icoEndDate: timer.icoEndDate,
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }

  return (
    <div className="sale-ends-container">
      <div className="card text-center">
        <div className="p-10">
          <div>TOKEN SALE ENDS IN</div>

          {/* Time Limit*/}
          <div className="flex m-4 gap-3 justify-center">
            <SaleEndTimer
              time={timer.days}
              text={timer.days > 1 ? "Days" : "Day"}
            />
            <SaleEndTimer
              time={timer.hours}
              text={timer.hours > 1 ? "Hours" : "Hour"}
            />
            <SaleEndTimer
              time={timer.minutes}
              text={timer.minutes > 1 ? "Minutes" : "Minute"}
            />
            <SaleEndTimer
              time={timer.seconds}
              text={timer.seconds > 1 ? "Seconds" : "Second"}
            />
          </div>

          {/* Tokens Available */}
          {icoState.tokensAvailable ? (
            <div className="w-full">
              <div className="mb-1">
                {millify(icoState.tokensAvailable)} STKN
              </div>
              <div className="h-4 w-full bg-gray-200 mb-6 rounded-xl text-md">
                <div
                  className={`w-${
                    (icoState.tokensAvailable / 5000000) * 100
                  }% h-4 bg-teal-700 rounded-xl text-xs font-bold text-center p-0.5 leading-none`}
                >
                  {(icoState.tokensAvailable / 5000000) * 100} %
                </div>
                Tokens Available
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col mt-10">
              <div className="text-[1rem] mb-2">
                Please Connect Wallet for Buying Tokens
              </div>
              <div className="btn text-[1rem]" onClick={handleConnectWallet}>
                Connect Wallet
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SaleEnds;
