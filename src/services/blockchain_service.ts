import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils/constants";
import { Alchemy, AssetTransfersCategory, Network } from "alchemy-sdk";

const PRIVATE_KEY = "MZ2jmU8-zo_Gdqk5NcEDLvP2Yx1fyeS7";

const settings = {
  apiKey: PRIVATE_KEY, // Replace with your Alchemy API key.
  network: Network.ETH_GOERLI, // Replace with your network.
};

const alchemy = new Alchemy(settings);
// let wallet = new Wallet(PRIVATE_KEY);
export type SendETHDto = {
  from: string;
  to: string;
  reference: string;
  amount: string;
};

// const ethereum = window.ethereum;
export class BlockchainService {
  ethereum: any;
  constructor(ethereum: any) {
    this.ethereum = ethereum;
  }
  createEthereumContract = async () => {
    const provider = new ethers.providers.Web3Provider(this.ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    return transactionContract;
  };

  sendEth = async (dto: SendETHDto) => {
    try {
      const transactionContract = await this.createEthereumContract();
      const parsedAmount = ethers.utils.parseEther(dto.amount);
      const transactionHash = await transactionContract.addToBlockchain(
        dto.to,
        parsedAmount,
        dto.reference,
        "keyword"
      );
      console.log(`transactionHash::: ${transactionHash}
      `);
    } catch (error) {
      console.log(`Error Making Transaction: ${error}`);
    }
  };

  connectToWeb3Provider = async () => {
    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        window.location.reload();
        console.log(`Connected Account`, account);
      } catch (error) {}
    } else {
      alert("Please Install Metamask on your browser ");
    }
  };

  async getSentTransactions() {
    const addr = await this.getAddress();
    if (!addr) {
      return [];
    }
    const data = await alchemy.core.getAssetTransfers({
      fromBlock: "0x0",
      fromAddress: addr,
      category: [
        AssetTransfersCategory.EXTERNAL,
        AssetTransfersCategory.INTERNAL,
        AssetTransfersCategory.ERC20,
        AssetTransfersCategory.ERC721,
        AssetTransfersCategory.ERC1155,
      ],
    });
    // console.log(`Sent Transactions:${JSON.stringify(data)}`);
    return data.transfers;
  }

  async getReceivedTransactions() {
    const addr = await this.getAddress();
    if (!addr) {
      return [];
    }
    const data = await alchemy.core.getAssetTransfers({
      fromBlock: "0x0",
      toAddress: addr,
      category: [
        AssetTransfersCategory.EXTERNAL,
        AssetTransfersCategory.INTERNAL,
        AssetTransfersCategory.ERC20,
        AssetTransfersCategory.ERC721,
        AssetTransfersCategory.ERC1155,
      ],
    });
    // console.log(`Received Transactions:${JSON.stringify(data)}`);
    return data.transfers;
  }
  getAllTransactions = async () => {
    // const contract = await this.createEthereumContract();
    // const count = await contract.getTransactionCount();
    // console.log(`All Transactions Count: ${count}}`);
  };
  connectWallet = async () => {
    // try {
    //   if (!ethereum) return alert("Please install MetaMask.");
    //   const accounts = await ethereum.request({
    //     method: "eth_requestAccounts",
    //   });
    //   window.location.reload();
    //   console.log(`accounts: ${accounts}`);
    //   return accounts[0] as string;
    // } catch (error) {
    //   console.log(error);
    //   throw new Error("An unknown error occurred, please try again.");
    // }
  };
  checkIfWalletIsConnect = async () => {
    // try {
    //   if (!ethereum) return alert("Please install MetaMask.");
    //   const accounts = await ethereum.request({ method: "eth_accounts" });
    //   // const r =  ethers.getDefaultProvider({});
    //   // console.log(`Provider ==> ${JSON.stringify(r)}`);
    //   if (accounts.length) {
    //     console.log(accounts);
    //     return accounts;
    //   } else {
    //     console.log("No accounts found");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  disconnectWallet = async () => {};

  getBalance = async (address: string) => {
    console.log(`address to get balance from : ${address}`);
    const balance = await alchemy.core.getBalance(address.toString());
    console.log(`ETH balance : ${balance}`);
    const etherString = ethers.utils.formatEther(balance);
    console.log(etherString);
    return etherString;
  };

  getAddress = async () => {
    const eth = this.ethereum;
    if (typeof eth === "undefined") {
      return null;
    }
    const provider = new ethers.providers.Web3Provider(this.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    return addr;
  };
}

// 0xB965ad25Ccbd6A1e63aE5e98AAe93FAb37Bc5DE4
