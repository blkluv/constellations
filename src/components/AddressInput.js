import React, { useState } from "react";
import { shortAddress } from "../utils/utils";
import Input from "./Input";

const AddressInput = ({
  isNewMsg,
  onInputBlur,
  errorMsg,
  selectedConvo,
}) => {
  const [newAddress, setNewAddress] = useState("");
  return (
    <div className={`flex w-full ${isNewMsg ? "flex-1" : ""}`}>
      {isNewMsg ? (
        <>
          <Input
            setNewValue={setNewAddress}
            placeholder="Enter a wallet address"
            value={newAddress}
            onInputBlur={() => onInputBlur(newAddress)}
          />
          {errorMsg && (
            <span className="">{errorMsg}</span>
          )}
        </>
      ) : (
        <b>{shortAddress(selectedConvo)}</b>
      )}
    </div>
  );
};

export default AddressInput;
