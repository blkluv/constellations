import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../constellationslogo.jpeg"

export default function Navbar() {
  
  return (
    <div className="rounded-lg border-2 border-black flex h-20 shadow-lg w-full bg-gray-200">
      <div className="ml-4 container flex flex-col items-center justify-between mx-auto flex-row sm:flex-row md:flex-row">
        <div className="flex items-center space-x-2">
          
            <a href="#_" className="text-black font-bold flex text-xl items-center">
                <img alt="logo" src={logo} className="w-12 h-auto text-black mr-3 border-4 shadow-lg border-black rounded-lg"></img>
                <span class="">constellations</span>
            </a>
        </div>
        <div className=" items-center text-m mr-4 font-medium text-white">
            <a href="#_" className="shadow-xl rounded rounded-md bg-black px-5 py-4 text-white">connect lens</a>
        </div>
      </div>
    </div>
  );
};