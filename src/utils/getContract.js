import ContractAbi from "../artifacts/contracts/Constellations.sol/Constellations.json";
import { ethers } from "ethers";

export default function getContract() {
  // Creating a new provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  console.log("Provider",provider);

  // Getting the signer
  const signer = provider.getSigner();

  console.log("Signer",signer);

  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(
    "0x933dE8495B17C468565C1334a407Dc7C19daf299",
    ContractAbi.abi,
    signer
  );

  console.log("Contract",contract);

  // Returning the contract
  return contract;
}
