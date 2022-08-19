import React from "react";
import { useNavigate } from "react-router-dom";

import Circle from "../components/Circle";
import SaleEnds from "../components/SaleEnds";

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="md:ml-6 md:flex md:h-[80vh] md:items-center">
      <div className="flex justify-center items-center w-full">
        <SaleEnds />
      </div>

      <div className="flex justify-center items-center w-full">
        {/* ICO Details */}

        <div className="flex flex-col w-full items-center md:mr-5">
          <div className="card mt-4">
            <div className="text-2xl text-center p-4">ICO Details</div>
          </div>
          <Circle />
          <div className="btn m-4" onClick={() => navigate("/token")}>
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
