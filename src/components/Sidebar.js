import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homeLogo from "../home.png"

export default function Sidebar() {
  
  return (
    <div className="flex flex-col p-5 h-full w-1/6 rounded-lg shadow-lg bg-white border-2 border-black">
      {/* <div class="items-center bg-white flex h-10 mb-4 rounded-md justify-center">
        <Link to="/home">
          <img alt="home" className="w-10 " src={homeLogo}></img>
        </Link>
      </div> */}
      <div class="items-center border-2 border-black shadow-md bg-green-100 flex h-10 mb-4 rounded-md justify-center">
        <Link to="/home" className="text-black font-semibold">
          home
        </Link>
      </div>
      <div class="items-center border-2 border-black shadow-md bg-green-100 flex h-10 mb-4 rounded-md justify-center">
        <Link to="/explore" className="text-black font-semibold">
          explore
        </Link>
      </div>
      <div class="items-center border-2 border-black shadow-md bg-green-100 flex h-10 mb-4 rounded-md justify-center">
        <Link to="/messages" className="text-black font-semibold">
          chat
        </Link>
      </div>
      <div class="items-center border-2 border-black shadow-md bg-green-100 flex h-10 mb-4 rounded-md justify-center">
        <Link to="/upload" className="text-black font-semibold">
          upload
        </Link>
      </div>
      <div class="items-center border-2 border-black shadow-md bg-green-100 flex h-10 mb-4 rounded-md justify-center">
        <Link to="/profile" className="text-black font-semibold">
          profile
        </Link>
      </div>
      <div class="flex h-10 mb-3 rounded-md"></div>
      <div class="flex h-10 mb-3 rounded-md"></div>
      <div class="flex h-10 mb-3 rounded-md"></div>
      <div class="flex h-10 mb-3 rounded-md"></div>
    </div>
  );
};