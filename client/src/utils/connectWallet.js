import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.REACT_APP_INFURA_ID,
    },
    opera: {
      package: true,
    },
  },
};

async function connectWallet(handleConnectWallet) {
  //Infura ID Check
  if (!process.env.REACT_APP_INFURA_ID) {
    console.log("Missing Infura Id");
    return;
  }
  try {
    // Web3Modal
    const web3modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
      theme: {
        background: "#00256C",
        main: "#FFF",
        secondary: "#FFF",
        border: "#00256C",
        hover: "#00259F",
      },
    });

    const web3modalInstance = await web3modal.connect();

    //Provider and Signer
    const _provider = new ethers.providers.Web3Provider(web3modalInstance);
    const _signer = _provider.getSigner();

    //Account
    let _address = await _provider.getSigner().getAddress();
    let _balance = ethers.utils.formatEther(
      await _provider.getSigner().getBalance()
    );
    const { chainId } = await _provider.getNetwork();
    const _chainId = chainId;

    //Events
    _provider.provider.on("accountsChanged", (accounts) => {
      handleConnectWallet();
    });

    _provider.provider.on("chainChanged", (chainId) => {
      handleConnectWallet();
    });

    // Subscribe to provider disconnection
    _provider.provider.on("disconnect", async (error) => {
      await web3modal.clearCachedProvider();
    });

    return {
      _provider,
      _signer,
      _address,
      _balance,
      _chainId,
    };
  } catch (error) {
    console.log(error);
  }
}

export default connectWallet;
