// styles
import { ConnectButton } from '@rainbow-me/rainbowkit';

// react
import React from "react";

export default function Landing() {

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
                    data ownership & privacy. 
                    </p>
                    <div className='flex row justify-center'>
                        <ConnectButton className="p-4 shadow-lg"></ConnectButton>
                    </div>
                    <button className="mt-10 bg-white rounded text-black border-black p-4 shadow-lg">
                        <a href="/upload" className="">Upload A Video</a>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
}
