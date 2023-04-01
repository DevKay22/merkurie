import React from "react";
import { TbBrandCoinbase } from "react-icons/tb";

export interface IProps {
  name: string;
  // icon: any;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function ConnectWalletButton(props: IProps) {
  return (
    <div
      className="px-16 py-4 border bg-white border-black border-spacing-1 flex items-center justify-center gap-3 cursor-pointer hover:bg-black hover:text-white ease-in duration-300"
      onClick={props.onClick}
    >
      {/* <TbBrandCoinbase className="bg-inherit text-white" size={25} /> */}
      <p className="bg-inherit  font-Poppins font-medium  text-[15px]">
        {props.name}
      </p>
    </div>
  );
}

export default ConnectWalletButton;
