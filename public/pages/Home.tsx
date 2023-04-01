import React, { useState, useRef, useEffect } from "react";
import { TbBrandCoinbase } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import WalletOptionsDialog from "../components/Home-Components/WalletOptionsDialog";
import { BlockchainService } from "../services/blockchain_service";

function Home() {
  const blockchainService = new BlockchainService(window.ethereum);
  const [address, setAddress] = useState<string | null>();
  const navigate = useNavigate();
  const value: boolean = false;
  const connectWithMetamask = async () => {
    await blockchainService.connectToWeb3Provider();
  };
  const [showDialog, setShowDialog] = useState<boolean>(false);
  // const isOpenedRef = useRef(false);

  const handleShowDialog = () => {
    console.log("show dialog");
    setShowDialog((prev) => true);
    // setShowDialog((prevState) => {
    //   return !prevState;
    // });
  };
  const handleCloseDialog = () => {
    console.log("handleCloseDialog");
    setShowDialog((prev) => false);
  };

  const handleGetAddress = async () => {
    const adr = await blockchainService.getAddress();
    setAddress(adr);
  };
  useEffect(() => {
    handleGetAddress();
  }, []);

  return (
    <div className="h-screen">
      <div className="flex md:flex-row flex-col justify-center items-center md:mt-[10%]">
        <img
          src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Merkury Logo"
          className="object-cover h-[500px]"
        />
        <div className="md:w-[400px] flex flex-col font-Poppins mx-auto md:mt-0 mt-2 ml-4 mr-2 md:ml-10 md:mr-0">
          <p className="text-4xl font-semibold text-heading-color-color font-sans mb-5">
            UNIFIED PRODUCT, SIMPLIFIED TRADING
          </p>
          <p className="text-[15px] font-light text-body-color font-Poppins mb-5">
            Merkury is a decentralized market place for peer-to-peer transaction. It is fast, safe and free to use.
          </p>
          <button
            className="md:px-24 md:py-4 px-12 py-3 bg-black text-white"
            onClick={
              () =>
                !address
                  ? connectWithMetamask()
                  : navigate("/create-transaction")
              // connectWithMetamask
              // () => {
              //   setShowDialog(!showDialog);
              // }
              // setOpened(false)
              // () =>
              //   address
              //     ? navigate("/create-transaction")
              //     : connectWithMetamask()
              // // blockchainSlice.connectedAccount
              //   ? handleOverlayDisplay
              //   : handleWalletConnection
            }
          >
            {address ? "Create Transaction" : "Connect Wallet"}
          </button>

          {address && (
            <button
              className="mt-5 border md:py-4 py-3 border-gray-600"
              onClick={() => navigate("/transaction-history")}
            >
              Transaction History
            </button>
          )}
          <div className="md:mt-0 md:mb-0 mt-14" />
        </div>
      </div>
    </div>
  );
  /* Big Screens ===>flex  mx-auto items-center justify-center gap-10 max-w-[1400px] h-screen */
}

export default Home;

// {opened.length > 0 ? (
//   <div className="h-[320px] w-[320px] md:h-[400px] md:w-[400px] absolute top-1/4 md:left-1/3 left-10 ease-in duration-300 rounded-md bg-white flex flex-col items-center justify-center gap-5">
//     <ConnectWalletButton
//       name="METAMASK"
//       onClick={() => handleMetamaskConnection()}
//     />
//     <ConnectWalletButton
//       name="COINBASE "
//       onClick={async () => await handleCoinbaseConnection()}
//     />
//   </div>
// ) : (
//   <div />
// )}
