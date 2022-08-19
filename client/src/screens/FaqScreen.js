import React from "react";
import FaqItem from "../components/FaqItem";
import faq from "../data/faq";

const FaqScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="faqitem-card">
        <div className="">
          <div className="text-2xl">Frequently Asked Questions (FAQ)</div>
        </div>
      </div>
      {faq.map((item, index) => {
        return (
          <div key={index}>
            <FaqItem question={item.question} answer={item.answer} />
          </div>
        );
      })}

      <div className="text-red-500">
        Note:
        <br /> This is just a demo ICO site and we will be selling tokens for
        test ether (from goerli network) not for real ether (means not having
        any real value).
      </div>
      <br className="md:hidden" />
      <div className="text-red-500">
        Since this is a demo ICO we don’t like to lock tokens in ICO Contract
        for any amount of time and Running ICO for very long time i.e 1 yr.
      </div>
    </div>
  );
};

export default FaqScreen;
