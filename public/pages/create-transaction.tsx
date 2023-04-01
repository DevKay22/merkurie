import React, { useState, useEffect } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
import { BlockchainService } from "../services/blockchain_service";
import CircularProgress from "@mui/material/CircularProgress";
// import { useA } from "@thirdweb-dev/react";
// import { useAddress } from "@thirdweb-dev/react";
import trimAddress from "../utils/trim_address";
import { useNavigate } from "react-router-dom";

function CreateTransaction() {
  const [busy, setBusy] = useState(false);
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");
  const [userAddress, setUserAddress] = useState<string | null>();
  const blockchainService = new BlockchainService(window.ethereum!);
  const navigate = useNavigate();
  const handleGetAddress = async () => {
    const adr = await blockchainService.getAddress();
    if (adr) {
      setAddress(adr);
    }
  };

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<Inputs>();

  const handleNavigateToHome = () => {
    navigate("/", {
      replace: true,
    });
  };
  const submitForm = async () => {
    if (address.length <= 0 || reference.length <= 0 || amount.length <= 0) {
      alert("Please fill in the fields with valid credentials.");
    } else {
      try {
        setBusy((prev) => true);
        const res = await blockchainService.sendEth({
          amount: amount,
          from: userAddress!,
          reference: reference,
          to: address,
        });
        setBusy(false);
        alert(
          `You have successfully sent ${amount} ethers to ${trimAddress(
            address
          )}`
        );
        handleNavigateToHome();
      } catch (error) {
        alert(error);
      }
    }
  };
  return (
    <div className="h-screen w-screen  md:mx-0 mx-3 md:mt-[10%] mt:[25%] fixed">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
        className="flex flex-col mx-auto gap-5 justify-center max-w-sm"
      >
        <input
          placeholder="Address To"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          className="bg-white pr-32 pl-3 h-14 text-heading-color"
        />

        {/*  */}

        <input
          placeholder="Amount"
          type="number"
          name="amount"
          step={0.0001}
          onChange={(v) => setAmount(v.target.value)}
          className="bg-white pr-32 pl-3 h-14 text-heading-color"
        />

        <input
          placeholder="Reference"
          name="reference"
          onChange={(e) => setReference(e.target.value)}
          className="bg-white pr-32 pl-3 h-14 text-heading-color"
        />
        {!busy ? (
          <input type="submit" className="bg-black text-white py-5" />
        ) : (
          <CircularProgress color="inherit" className="flex mx-auto mt-5" />
        )}
      </form>
    </div>
  );
}

export default CreateTransaction;
