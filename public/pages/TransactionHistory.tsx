import { AssetTransfersResponse, AssetTransfersResult } from "alchemy-sdk";
import React, { useEffect, useState } from "react";
import ReceivedTransactionComponent from "../components/Transaction_History_Components/RecievedTransactionComponent";
import SentTransactionComponent from "../components/Transaction_History_Components/SentTransactionComponent";
import TransactionHistoryItem from "../components/Transaction_History_Components/TransactionHistoryItem";
import { BlockchainService } from "../services/blockchain_service";

function TransactionHistory() {
  const blockchainService = new BlockchainService(window.ethereum!);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loadingSent, setLoadingSent] = useState(false);
  const [loadingReceived, setLoadingReceived] = useState(false);
  const activeClass =
    "flex items-center justify-center h-12 w-[170px]  bg-black ease-in duration-300 text-white";
  const inActiveClass =
    "flex items-center justify-center h-12 w-[170px]  border border-black ease-in duration-300";
  const [sentTransactions, setSentTransactions] = useState<
    AssetTransfersResult[]
  >([]);
  const [receivedTransactions, setReceivedTransactions] = useState<
    AssetTransfersResult[]
  >([]);
  const getSentTransactions = async () => {
    setLoadingSent(true);
    const response = await blockchainService.getSentTransactions();
    setLoadingSent(false);
    setSentTransactions(response);
  };
  const getReceivedTransactions = async () => {
    setLoadingReceived(true);
    const response = await blockchainService.getReceivedTransactions();
    setLoadingReceived(false);
    setReceivedTransactions(response);
  };
  const getAllTransactions = async () => {
    await blockchainService.getAllTransactions();
  };
  useEffect(() => {
    getAllTransactions();
    getSentTransactions();
    getReceivedTransactions();
  }, []);
  return (
    <div className="h-screen bg-[#f5f5f5]">
      <div className="flex  md:gap-10  gap-3 items-center justify-center mb-10">
        <div
          className={selectedIndex == 0 ? activeClass : inActiveClass}
          onClick={() => setSelectedIndex(0)}
        >
          <p className=" bg-inherit">SENT</p>
        </div>
        <div
          className={selectedIndex == 1 ? activeClass : inActiveClass}
          onClick={() => setSelectedIndex(1)}
        >
          <p className=" bg-inherit">RECEIVED</p>
        </div>
      </div>
      <div className="flex flex-col bg-white h-2/3 pt-10">
        {selectedIndex === 0 ? (
          <SentTransactionComponent
            busy={loadingSent}
            transactions={sentTransactions}
          />
        ) : (
          <ReceivedTransactionComponent
            busy={loadingReceived}
            transactions={receivedTransactions}
          />
        )}
      </div>
    </div>
  );
}

export default TransactionHistory;

/*
 sentTransactions.length > 0 ? (
            sentTransactions.map((val, index) => (
              <TransactionHistoryItem
                address={val.to!}
                amount={val.value!}
                received={false}
                hash={val.hash}
                count={index + 1}
              />
            ))
          ) : (
            <p>NO SENT TRANSACTION</p>
          )
*/
