// react:
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ethers: 
import { ethers, providers } from 'ethers'

// logo: 
import logo from "../constellationslogo.jpeg"
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  
  return (
    <div className="flex h-20 shadow-lg w-full bg-black">
      <div className="ml-4 container flex flex-col items-center justify-between mx-auto flex-row sm:flex-row md:flex-row">
        <div className="flex items-center space-x-2">
          
            <a href="#_" className="text-black font-bold flex text-xl items-center">
                <img alt="logo" src={logo} className="w-12 h-auto text-black mr-3 border-5 shadow-lg border-black rounded-lg"></img>
                <span className="text-white">constellations</span>
            </a>
        </div>
        <div className=" items-center text-m font-medium text-white mr-4">
            <ConnectButton className=""></ConnectButton>
  
        </div>
      </div>
    </div>
  );
};