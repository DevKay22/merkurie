import React from "react";
import trimAddress from "../../utils/trim_address";


export interface IProps {
  address: string;
  hash: string;
  received: boolean;
  amount: number;
  count:number;
}

function TransactionHistoryItem(props: IProps) {
  return (
    <div className="flex justify-between mx-4 bg-white border-b mb-4">
      <div className="flex gap-3 bg-inherit">
        <span className="bg-inherit">{props.count})</span>
        <p className="bg-inherit">{trimAddress(props.address)}</p>
      </div>
      <p className={props.received? "text-green-600 bg-inherit":"text-[#C64949] bg-inherit"}>{props.amount}ETH</p>
      <p className="hidden md:inline bg-inherit">{trimAddress(props.hash)}</p>
    </div>
  );
}

export default TransactionHistoryItem;
