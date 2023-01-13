// styles:
import { ConnectButton } from '@rainbow-me/rainbowkit';

// react:
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// auth:
import { parseJwt, refreshAuthToken } from '../utils/utils'

// app context:
import { AppContext } from '../utils/context'

// ethers:
import { ethers, providers } from 'ethers'

// wagmi:
import { useSigner } from 'wagmi';

import { authenticate as authenticateMutation} from '../api/mutations'
import { createClient, STORAGE_KEY, getChallenge, getDefaultProfile } from '../api/index'

export default function Landing() {

    const [connected, setConnected] = useState(true)
    const [userAddress, setUserAddress] = useState()
    const [userProfile, setUserProfile] = useState()
    const { data: signer} = useSigner({
        onError(error){
            console.log("Error", error);
        }
    })
    
    const connectWallet = async () => {
        
            setConnected(true)
            const account = signer.getAddress();
            console.log(account);
            setUserAddress(account)
       
    }

    async function getUserProfile(address) {
        try {
          const urqlClient = await createClient()
          const response = await urqlClient.query(getDefaultProfile, {
            address
          }).toPromise()
          setUserProfile(response.data.defaultProfile)
        } catch (err) {
          console.log('error fetching user profile...: ', err)
        }
    }
    
    useEffect(() => {
        refreshAuthToken()
        async function checkConnection() {

            const addresses = signer.getAddress();
            console.log(addresses);

            if (addresses) {
                setConnected(true)
                setUserAddress(addresses)
                getUserProfile(addresses)
              } else {
                setConnected(false)
              }
              
        //   const provider = new ethers.providers.Web3Provider(
        //     (window).ethereum
        //   )
        //   const addresses = await provider.listAccounts();
        //   if (addresses.length) {
        //     setConnected(true)
        //     setUserAddress(addresses[0])
        //     getUserProfile(addresses[0])
        //   } else {
        //     setConnected(false)
        //   }
        }
        checkConnection()
      }, [])

    return (
        <>
        <AppContext.Provider value={{
            userAddress,
            profile: userProfile
            }}>            
            {/* Creating a hero component with black background and centering everything in the screen */}
            <section className="relative bg-black flex flex-col h-screen justify-center items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    <div className="text-center pb-12 md:pb-16">
                    <h1
                        className="text-5xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                    >
                        Constellation is for {" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                        content creators
                        </span>
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-400 mb-8">
                        It is a dapp built on top of Polygon network, allowing users
                        to create, share, & monetize their content with out worrying about
                        data ownership & privacy. What you're able to do now is upload a video that
                        will be minted to IPFS & stored on Web 3.0 Storage.
                        </p>
                        <div className='flex row justify-center'>
                            <ConnectButton className="p-4 shadow-lg"></ConnectButton>
                        </div>
                        <button onClick={connectWallet} className="mt-10 bg-white rounded text-black border-black p-4 shadow-lg">
                            <a href="/home" className="">Enter</a>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </AppContext.Provider>
        </>
    );
}
