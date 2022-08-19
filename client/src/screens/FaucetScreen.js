import React from "react";

const FaucetScreen = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="faucet-card">
        <div className="card-container">
          <div className="mb-2">Faucet</div>
          <li className="faucet-text">
            Testnet Faucet is Used for getting free ether for testing.
          </li>
          <li className="faucet-text">
            This ICO Smart Contract is deployed on Goerli Test Network since
            Rinkeby, Ropsten and Kovan networks are to be deprecated soon.
          </li>
          <li className="faucet-text">
            Here are the working faucets for getting free Goerli Ether for
            testing this ICO Website:
          </li>
          <li className="mb-3">
            <a
              href="https://goerlifaucet.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="faucet-text text-blue-300 underline hover:text-blue-500"
            >
              Goerlifaucet from Alchemy
            </a>
          </li>
        </div>
      </div>
      <div className="text-red-500">
        I Will Update the list if i find anyother working goerli faucet sites.
      </div>
    </div>
  );
};

export default FaucetScreen;
