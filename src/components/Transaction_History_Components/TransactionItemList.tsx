import { AssetTransfersResult } from "alchemy-sdk";
import React from "react";
import TransactionHistoryItem from "./TransactionHistoryItem";

export interface IProps {
  transactions: AssetTransfersResult[];
  received: boolean;
}

function TransactionItemList(props: IProps) {
  return props.transactions.map((val, index) => (
    <TransactionHistoryItem
      address={val.to!}
      amount={val.value!}
      received={props.received}
      hash={val.hash}
      count={index + 1}
    />
  ));
}

export default TransactionItemList;
