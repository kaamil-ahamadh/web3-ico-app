import React from "react";
import ErrorImage from "../assets/images/errorpage.jpg";

const ErrorScreen = () => {
  return (
    <img
      src={ErrorImage}
      alt="Error Page"
      className="w-screen h-[98%] bg-cover"
    />
  );
};

export default ErrorScreen;
