// import { useAddress, useBalance, useDisconnect } from "@thirdweb-dev/react";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { BiCopy } from "react-icons/bi";
import { BlockchainService } from "../services/blockchain_service";
import trimAddress from "../utils/trim_address";

function Nav() {
  const blockchainService = new BlockchainService(window.ethereum);
  const [showOptions, setShowOptions] = useState(false);
  // const disconnect = useDisconnect();
  const [balance, setBalance] = useState("");
  // const address = useAddress();
  const [address, setAddress] = useState<string | null>();
  const getBalance = async () => {
    if (address) {
      const bln = await blockchainService.getBalance(address);
      if (bln.length > 0) {
        setBalance(bln);
      }
    }
    return;
  };
  const handleGetAddress = async () => {
    const addr = await blockchainService.getAddress();
    if (addr) {
      setAddress(addr);
      getBalance();
    }
  };
  useEffect(() => {
    handleGetAddress();
  }, []);

  return (
    <div className="flex items-center pt-2 md:justify-between justify-between top-0 sticky md:px-8 px-2 pb-3 ">
      <div className="flex gap-2 items-center">
        <p className="font-bold md:text-4xl text-xl font-Poppins">MERKURY</p>
        <img
          alt="Logo"
          src="https://imgs.search.brave.com/_CCUKp4SLvCZK3ly18uvEi4VEuUCiuSeng_O0I01xas/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cmQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzA4L1do/YXQtSXMtTWVyY3Vy/eS1pbi1SZXRyb2dy/YWRlLTUyMjI1MzMz/MC1OQVNBLWltYWdl/cy1zaHV0dGVyc3Rv/Y2suanBn"
          className="h-7 w-7 rounded-full "
        />
      </div>

      {address && (
        <div
          className="flex relative group items-center gap-5 border px-7 py-2 cursor-pointer hover:bg-slate-200"
          onClick={async () => {
            if (navigator.clipboard) {
              await navigator.clipboard.writeText(address!).then(() => {
                toast.success("Copied", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              });
            }
            return;
          }}
        >
          <img
            alt="Coin Logo"
            src="https://imgs.search.brave.com/KipouglOHjGVnkWW0BO3h1twdmVAjvoiRL6yA-xcxFA/rs:fit:500:281:1/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA1/L01ldGFNYXNrLVN5/bWJvbC01MDB4Mjgx/LnBuZw"
            className="md:h-10 md:w-10 md:inline hidden rounded-full"
          />
          <div className="flex flex-col  bg-inherit">
            <p className="text-xl font-semibold text-heading-color bg-inherit">
              {balance.length >= 0 && balance.substring(0, 9)}
            </p>
            <div className="flex gap-2 bg-inherit">
              <p className="text-sm font-light bg-inherit">
                {trimAddress(address)}
              </p>
              <BiCopy className="bg-inherit" />
            </div>
          </div>
        </div>
      )}
      {/* <div>
        <button className=" px-12 py-3 bg-black text-white text-xl">
          LOGIN
        </button>
        <button className="px-12 py-3 ml-3 border text-heading-color text-xl border-body-color">REGISTER</button>
      </div> */}
    </div>
  );
}

export default Nav;
