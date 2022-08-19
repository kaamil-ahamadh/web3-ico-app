import React from "react";

const SaleEndTimer = ({ time, text }) => {
  return (
    <div>
      <div className="countdown">{time}</div>
      <div className="text-sm mt-1">{text}</div>
    </div>
  );
};

export default SaleEndTimer;
