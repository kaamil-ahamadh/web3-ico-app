import React from "react";
import { format, register } from "timeago.js";
import localeFunc from "../utils/timeAgoLocale";

register("my-locale", localeFunc);

const TransactionItem = ({ txHash, timestamp, tokens, investor, text }) => {
  return (
    <tbody>
      <tr>
        <td className="grid justify-center items-center h-[5rem] w-[7rem] md:w-[9.5rem]">
          <a
            href={`https://goerli.etherscan.io/tx/${txHash}`}
            target="_blank"
            rel="noreferrer noopener"
            title="View on Block Explorer"
            className="transaction-item"
          >
            {txHash.substring(0, 4)}......{txHash.substring(63, 67)}
          </a>
        </td>
        <td className="">
          <div className="transaction-item">
            {format(new Date(timestamp * 1000), "my-locale")}
          </div>
        </td>
        {investor ? (
          <td
            className={
              text === "Your"
                ? "hidden"
                : "grid justify-center items-center h-[5rem] w-[8rem] md:w-[12rem] "
            }
            title={investor}
          >
            <div className="transaction-item">
              <a
                href={`https://goerli.etherscan.io/address/${investor}`}
                target="_blank"
                rel="noreferrer noopener"
                title={investor}
                className="transaction-item"
              >
                {investor.substring(0, 4)}......{investor.substring(38, 42)}
              </a>
            </div>
          </td>
        ) : null}

        <td>
          <div className="transaction-item">{tokens}</div>
        </td>
      </tr>
    </tbody>
  );
};

export default TransactionItem;
