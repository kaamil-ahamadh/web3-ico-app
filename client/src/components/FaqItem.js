import React, { useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

const FaqItem = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="faqitem-card text-start">
      <div className="w-auto p-2 flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="font-semibold text-xl">{question}</div>
          {!showAnswer ? (
            <IoIosArrowDropdownCircle
              onClick={() => setShowAnswer(!showAnswer)}
            />
          ) : (
            <IoIosArrowDropupCircle
              onClick={() => setShowAnswer(!showAnswer)}
            />
          )}
        </div>
        <div className={showAnswer ? "text-[0.90rem] mt-3" : "hidden"}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
