// import React from "react";
// import ConnectWalletButton from "../connect_wallet_button";
// import {
//   useMetamask,
//   useAddress,
//   useCoinbaseWallet,
// } from "@thirdweb-dev/react";

// export interface IProps {
//   isOpened: boolean;
// }

// function WalletOptionsDialog(props: IProps) {
//   const connectWithMetamask = useMetamask();
//   const coinbase = useCoinbaseWallet();
//   const handleMetamaskConnection = async () => {
//     await connectWithMetamask()
//       .then((response) => {
//         console.log(
//           `Response Connecting to Metamask ::: ${JSON.stringify(response)} `
//         );
//       })
//       .catch((err) => {
//         alert(
//           `An error occurred while connecting to metamask, please try again.`
//         );
//         console.log(`Error Connecting to Metamask ::: ${JSON.stringify(err)}`);
//       });
//   };
//   const handleCoinbaseConnection = async () => {
//     await coinbase()
//       .then((response) => {
//         console.log(
//           `Response Connecting to Metamask ::: ${JSON.stringify(response)} `
//         );
//       })
//       .catch((err) => {
//         alert(
//           `An error occurred while connecting to metamask, please try again.`
//         );
//         console.log(`Error Connecting to Metamask ::: ${JSON.stringify(err)}`);
//       });
//   };
//   if (props.isOpened) {
//     return (
//       <div className="h-[320px] w-[320px] md:h-[400px] md:w-[400px] absolute top-1/4 md:left-1/3 left-10 ease-in duration-300 rounded-md bg-white flex flex-col items-center justify-center gap-5">
//         <ConnectWalletButton
//           name="METAMASK"
//           onClick={async () => await connectWithMetamask()}
//         />
//         <ConnectWalletButton
//           name="COINBASE "
//           onClick={async () => await handleCoinbaseConnection()}
//         />
//       </div>
//     );
//   } else {
//     return <div />;
//   }
// }
// export default WalletOptionsDialog;

// /*

//  const connectWithMetamask = useMetamask();
//   const coinbase = useCoinbaseWallet();
//   const handleMetamaskConnection = async () => {
//     await connectWithMetamask()
//       .then((response) => {
//         console.log(
//           `Response Connecting to Metamask ::: ${JSON.stringify(response)} `
//         );
//       })
//       .catch((err) => {
//         alert(
//           `An error occurred while connecting to metamask, please try again.`
//         );
//         console.log(`Error Connecting to Metamask ::: ${JSON.stringify(err)}`);
//       });
//   };
//   const handleCoinbaseConnection = async () => {
//     await coinbase()
//       .then((response) => {
//         console.log(
//           `Response Connecting to Coinbase ::: ${JSON.stringify(response)} `
//         );
//       })
//       .catch((err) => {
//         alert(
//           `An error occurred while connecting to Coinbase, please try again.`
//         );
//         console.log(`Error Connecting to Coinbase ::: ${JSON.stringify(err)}`);
//       });

//     return (
//       <div className="h-[320px] w-[320px] md:h-[400px] md:w-[400px] absolute top-1/4 md:left-1/3 left-10 ease-in duration-300 rounded-md bg-white flex flex-col items-center justify-center gap-5">
//         <ConnectWalletButton
//           name="METAMASK"
//           onClick={() => handleMetamaskConnection()}
//         />
//         <ConnectWalletButton
//           name="COINBASE "
//           onClick={async () => await handleCoinbaseConnection()}
//         />
//       </div>
//     );
//   };
// */

import React from "react";

function WalletOptionsDialog() {
  return <div>WalletOptionsDialog</div>;
}

export default WalletOptionsDialog;
