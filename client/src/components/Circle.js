import React, { useContext } from "react";

import GlobalContext from "../context/GlobalContext";

const Circle = () => {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="circle-text mb-3">Price</div>
          <div className="circle border-yellow-500">
            <div className="text-center">0.0001 Ether</div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className="flex flex-col">
          <div className="circle border-orange-500">
            <div className="text-center">0.001 Ether</div>
          </div>
          <div className="circle-text mt-3">Min</div>
          <div className="circle-text">Investment</div>
        </div>

        <div className="flex flex-col">
          <div className="circle border-green-500">
            <div className="text-center">3.0 Ether</div>
          </div>
          <div className="circle-text mt-3">Max</div>
          <div className="circle-text">Investment</div>
        </div>
      </div>
    </>
  );
};

export default Circle;
