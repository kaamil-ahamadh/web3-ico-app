import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import millify from "millify";

import tokenDistribution from "../data/tokenDistribution";

const TokenDistScreen = () => {
  return (
    <div className="flex justify-center flex-col items-center text-center bg-[#000D26]">
      <div className="card">Token Distribution</div>
      <div className="w-[320px] h-[320px] xxs:w-[380px] xxs:h-[400px] xs:w-[450px] xs:h-[450px]">
        <Doughnut
          data={{
            labels: tokenDistribution.map((item) => item.name),
            datasets: [
              {
                label: "Tokens",
                data: tokenDistribution.map((item) => {
                  return `${item.tokens}`;
                }),
                backgroundColor: [
                  "green",
                  "orange",
                  "blue",
                  "cyan",
                  "brown",
                  "purple",
                ],
                hoverOffset: 30,
              },
            ],
          }}
          options={{
            animation: { duration: 1500 },
            plugins: {
              tooltip: {
                callbacks: {
                  label: function (context) {
                    var label = context.label,
                      currentValue = context.raw,
                      total =
                        context.chart._metasets[context.datasetIndex].total;

                    var percentage = parseFloat(
                      ((currentValue / total) * 100).toFixed(1)
                    );

                    return (
                      label +
                      ": " +
                      millify(currentValue) +
                      " (" +
                      percentage +
                      "%)"
                    );
                  },
                },
              },
              legend: {
                labels: {
                  font: { size: 15, family: "poppins" },
                  color: "white",
                  padding: 17,
                },
              },
            },
            layout: {
              padding: {
                bottom: 30,
              },
            },
          }}
        />
      </div>
      <div>Total Tokens: {millify(10000000)}</div>
    </div>
  );
};

export default TokenDistScreen;
