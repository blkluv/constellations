// styles
import { ConnectButton } from '@rainbow-me/rainbowkit';

// react
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {

      let navigate = useNavigate();

    const connectWallet = async () => {
        try {
          const { ethereum } = window;
    
          if (!ethereum) {
            alert("Get MetaMask!");
            return;
          }
    
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log("Connected", accounts[0]);
          localStorage.setItem("walletAddress", accounts[0]);
          navigate("/home");
        } catch (error) {
          console.log(error);
        }
    }

    return (
        <>
        {/* Creating a hero component with black background and centering everything in the screen */}
        <section className="relative bg-black flex flex-col h-screen justify-center items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="text-center pb-12 md:pb-16">
                <h1
                    className="text-5xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                    data-aos="zoom-y-out"
                >
                    Constellation is for {" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                    content creators
                    </span>
                </h1>
                <div className="max-w-3xl mx-auto">
                    <p
                    className="text-xl text-gray-400 mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                    >
                    It is a dapp built on top of Polygon network, allowing users
                    to create, share, & monetize their content with out worrying about
                    data ownership & privacy. What you're able to do now is upload a video that
                    will be minted to IPFS & stored on Web 3.0 Storage.
                    </p>
                    <div className='flex row justify-center'>
                        <ConnectButton onClick={connectWallet} className="p-4 shadow-lg"></ConnectButton>
                    </div>
                    <button onClick={connectWallet} className="mt-10 bg-white rounded text-black border-black p-4 shadow-lg">
                        <a href="/home" className="">Enter</a>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
}
