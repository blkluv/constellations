// react:
import React, { useContext } from "react";

// context:
import { XmtpContext } from "../utils/XMTPContext";
import { WalletContext } from "../utils/WalletContext";

// utils
import { shortAddress } from "../utils/utils";

const Header = () => {
  const { connectWallet, walletAddress, signer } = useContext(WalletContext);
  const [providerState] = useContext(XmtpContext);

  return (
    <div className="text-green-300 font-semibold flex align-center justify-between">
      {walletAddress ? (
        <div className="flex align-center">
          <h3 className="text-lg font-semibold mb-3 mr-5">{shortAddress(walletAddress)}</h3>
          {!providerState.client && (
            <button
              className="border-2 border-black bg-black shadow-lg px-3 py-2"
              onClick={() => providerState.initClient(signer)}
            >
              Connect to XMTP
            </button>
          )}
        </div>
      ) : (
        <button className="border-2 border-black bg-black shadow-lg px-3 py-2" onClick={connectWallet}>
          {!window.ethereum || !window.ethereum.isMetaMask
            ? "Install MetaMask"
            : "Connect wallet"}
        </button>
      )}
    </div>
  );
};

export default Header;
