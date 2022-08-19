import React from "react";
import TransactionItem from "./TransactionItem";

const Transaction = ({ account, transaction, text }) => {
  return (
    <div>
      <div
        className={
          account.address || text === "Recent" ? "block xs:w-[550px]" : "hidden"
        }
      >
        <div className="flex justify-center items-center">
          <div
            className={
              text === "Recent"
                ? "card"
                : "your-transaction-card justify-center items-center xs:w-[340px]"
            }
          >
            <div className="card-container">
              <div className="text-[21px]">
                {text === "Recent" ? text : "Your"} Transactions
              </div>
            </div>
          </div>
        </div>
        <div className="xs:w-[550px] flex items-center justify-center">
          <div
            className={`
            ${
              transaction.length === 0
                ? "hidden"
                : `your-transaction-card ${
                    text === "Recent"
                      ? "xs:w-[400px] md:w-[510px]"
                      : "xs:w-[290px] md:w-[350px]"
                  }`
            }
          `}
          >
            <div className="card-container">
              <div className="w-full overflow-scroll xs:overflow-auto gap-5">
                <table>
                  <tbody>
                    <tr className="">
                      <th>Tx Hash</th>
                      <th>Time</th>
                      {text === "Recent" ? <th>Investor</th> : null}
                      <th>Tokens</th>
                    </tr>
                  </tbody>

                  {transaction.length !== 0
                    ? transaction.map((item, index) => {
                        return (
                          <TransactionItem
                            txHash={item.txHash}
                            timestamp={item.timestamp}
                            tokens={item.tokens}
                            investor={text === "Recent" ? item.investor : null}
                            key={index}
                          />
                        );
                      })
                    : null}
                </table>
              </div>
            </div>
          </div>
        </div>

        <div
          className={transaction.length === 0 ? "text-center mb-6" : "hidden"}
        >
          No Records Found
        </div>
      </div>
    </div>
  );
};

export default Transaction;
