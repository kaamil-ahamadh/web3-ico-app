import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import loadContract from "./utils/loadContract";
import {
  HomeScreen,
  TokenScreen,
  FaqScreen,
  ContactScreen,
  LoadingScreen,
  ErrorScreen,
  TokenDistScreen,
  FaucetScreen,
  TransactionScreen,
} from "./screens";
import Header from "./components/Header";
import GlobalContext from "./context/GlobalContext";
import connectWallet from "./utils/connectWallet";
import Footer from "./components/Footer";

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState({
    address: null,
    balance: null,
    chainID: null,
  });

  const [contract, setContract] = useState(null);
  const [icoState, setIcoState] = useState({
    tokensAvailable: null,
    investorBalance: null,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER")) {
      handleConnectWallet();
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleConnectWallet = async () => {
    const { _provider, _signer, _address, _balance, _chainId } =
      await connectWallet(handleConnectWallet);

    const { tokensAvailable, investorBalance } = await loadContract(
      _signer,
      _chainId,
      setContract,
      _address
    );

    setProvider(_provider);
    setSigner(_signer);
    setAccount({
      address: _address,
      balance: _balance,
      chainID: _chainId,
    });

    setIcoState({
      tokensAvailable,
      investorBalance,
    });
  };
  return (
    <div className="app-wrapper">
      <GlobalContext.Provider
        value={{
          provider,
          setProvider,
          signer,
          setSigner,
          account,
          setAccount,
          handleConnectWallet,
          contract,
          setContract,
          icoState,
          setIcoState,
          loading,
          setLoading,
        }}
      >
        {!loading ? (
          <div className="">
            <Header />
            <ToastContainer
              position="top-center"
              theme="dark"
              toastStyle={{
                backgroundColor: "#1e40af",
                fontWeight: "bold",
                fontFamily: "poppins",
                borderRadius: "5rem",
              }}
            />
            <div className="screen-wrapper">
              <Routes>
                <>
                  <Route path="/" element={<HomeScreen />} />
                  <Route path="/home" element={<HomeScreen />} />
                  <Route path="/token" element={<TokenScreen />} />
                  <Route path="/transaction" element={<TransactionScreen />} />
                  <Route
                    path="/tokenDistribution"
                    element={<TokenDistScreen />}
                  />
                  <Route path="/faucet" element={<FaucetScreen />} />
                  <Route path="/faq" element={<FaqScreen />} />
                  <Route path="/contact" element={<ContactScreen />} />

                  <Route path="*" element={<ErrorScreen />} />
                </>
              </Routes>
            </div>
            <div className="flex justify-center items-end">
              <Footer />
            </div>
          </div>
        ) : (
          <LoadingScreen />
        )}
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
