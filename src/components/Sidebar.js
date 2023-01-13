import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homeLogo from "../home.png"

export default function Sidebar() {
  
  return (
    <div className="h-full flex flex-col p-5 w-1/6 shadow-lg bg-white border-2 border-black">
      {/* <div className="items-center bg-white flex h-10 mb-4 rounded-md justify-center">
        <Link to="/home">
          <img alt="home" className="w-10 " src={homeLogo}></img>
        </Link>
      </div> */}
      <div className="h-15">
        <div className="items-center border-2 border-black shadow-md bg-green-100 flex h-10 mb-4 justify-center">
          <Link to="/home" className="text-black font-semibold">
            home
          </Link>
        </div>
        <div className="items-center border-2 border-black shadow-md bg-green-100 flex h-10 mb-4 justify-center">
          <Link to="/explore" className="text-black font-semibold">
            explore
          </Link>
        </div>
        <div className="items-center border-2 border-black shadow-md bg-green-100 flex h-10 mb-4 justify-center">
          <Link to="/chat" className="text-black font-semibold">
            chat
          </Link>
        </div>
        <div className="items-center border-2 border-black shadow-md bg-green-100 flex h-10 mb-4 justify-center">
          <Link to="/upload" className="text-black font-semibold">
            upload
          </Link>
        </div>
        <div className="items-center border-2 border-black shadow-md bg-green-100 flex h-10 mb-4 justify-center">
          <Link to="/profile" className="text-black font-semibold">
            profile
          </Link>
        </div>
      </div>
    </div>
  );
};