import React, { useState } from "react";

export interface IProps {
  children: any;
  isOpened: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

function Overlay(props: IProps) {
  return (
    <>
      <button onClick={props.onClose} className="px-12 py-48 bg-black">
        Close
      </button>
      {props.isOpened && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">{props.children}</div>
        </div>
      )}
    </>
  );
}

export default Overlay;
