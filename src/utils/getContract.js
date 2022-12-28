import ContractAbi from "../artifacts/contracts/VideoConstellations.sol/VideoConstellations.json";
import { ethers } from "ethers";

export default function getContract() {
  // Creating a new provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Getting the signer
  const signer = provider.getSigner();
  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(
    "0xFc842BCD5c984dC39e7FBE92784E5d42DaA022bf",
    ContractAbi.abi,
    signer
  );
  // Returning the contract
  return contract;
}
