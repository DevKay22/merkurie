import { AssetTransfersResult } from "alchemy-sdk";
import React from "react";
import TransactionHistoryItem from "./TransactionHistoryItem";
import TransactionItemList from "./TransactionItemList";

export interface IProps {
  transactions: AssetTransfersResult[];
  busy: boolean;
}

function SentTransactionComponent(props: IProps) {
  if (props.busy) {
    return (
      <p className="flex items-center justify-center bg-inherit mt-10 text-2xl">
        LOADING...
      </p>
    );
  }
  if (props.transactions.length > 0) {
    return <div className = 'bg-inherit'>
      {
        props.transactions.map((e,i)=><TransactionHistoryItem address={e.to!} amount={e.value!} count={(i+1)} hash={e.hash} received={false} key ={e.uniqueId} />)
      }
    </div>
    //  <TransactionItemList transactions={props.transactions} received={false}/>
  }

  if (!props.busy && props.transactions.length === 0) {
    return (
      <p className="flex items-center justify-center bg-inherit mt-10 text-2xl">
        NO TRANSACTIONS.
      </p>
    );
  } else {
    return (
      <p className="flex items-center justify-center bg-inherit mt-10 text-2xl">
        NO TRANSACTIONS.
      </p>
    );
  }
}

export default SentTransactionComponent;
