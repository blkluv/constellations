// react:
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

// components:
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CardHeader from "../components/CardHeader";
import MessageComposer from "../components/MessageComposer";
import AddressInput from "../components/AddressInput"
import BackButton from "../components/BackButton";
import MessageList from "../components/MessageList";
import ConversationList from "../components/ConversationsList";
import { shortAddress } from "../utils/utils";

// contexts:
import { XmtpContext } from "../utils/XMTPContext";
import { WalletContext } from "../utils/WalletContext";

// hooks: 
import useSendMessage from "../hooks/useSendMessage";
import useStreamConversations from "../hooks/useStreamConversations";

// buffer:
import { Buffer } from "buffer";
import Header from "../components/Header";

export default function Chat() {

    // @ts-ignore
    window.Buffer = Buffer;

    const [providerState] = useContext(XmtpContext);
    const { convoMessages, client } = providerState;
    const [selectedConvo, setSelectedConvo] = useState(null);
    const [msgTxt, setMsgTxt] = useState("");
    const { sendMessage } = useSendMessage(selectedConvo);
    useStreamConversations();
    const [isNewMsg, setIsNewMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
  
    const reset = () => {
      setSelectedConvo(null);
      setIsNewMsg(false);
      setErrorMsg("");
      setMsgTxt("");
    };
  
    const checkIfOnNetwork = async (address) => {
      return (await client?.canMessage(address)) || false;
    };
  
    const onInputBlur = async (newAddress) => {
      if (!newAddress.startsWith("0x") || newAddress.length !== 42) {
        setErrorMsg("Invalid address");
      } else {
        const isOnNetwork = await checkIfOnNetwork(newAddress)
        if (!isOnNetwork) {
          setErrorMsg("Address not on XMTP network");
        } else {
          setSelectedConvo(newAddress);
          setErrorMsg("");
        }
      }
    };
  
    const sendNewMessage = () => {
      sendMessage(msgTxt);
      setMsgTxt("");
    };
  
    return (
        <div className="h-screen bg-white">
            <div className="px-10 flex flex-col w-full h-screen items-center justify-center mx-auto">
                {/* Navbar */}
                <Navbar/>

                {/* Sidebar & Videos */}
                <div className="py-8 flex h-4/5 w-full rounded-md">
                    <div className="flex space-x-5 w-full h-full items-center justify-center mx-auto">
                        
                        {/* Sidebar */}
                        <Sidebar/>
                        
                        {/* Video section */}
                        <div className="flex-row h-full w-5/6 rounded-md">
                          <Header/>
                          <div className="flex align-center">
                                {client && (
                                    <div className="border border-black border-2 shadow-lg p-4 w-full">
                                    {!selectedConvo && !isNewMsg ? (
                                        <>
                                        <CardHeader setIsNewMsg={setIsNewMsg} />
                                        <div className="">
                                            <ConversationList
                                            convoMessages={convoMessages}
                                            setSelectedConvo={setSelectedConvo}
                                            />
                                        </div>
                                        </>
                                    ) : (
                                        <>
                                        <div className="align-center flex justify-start">
                                            <BackButton reset={reset} />
                                            <div className=""></div>
                                            <AddressInput
                                            isNewMsg={isNewMsg}
                                            onInputBlur={onInputBlur}
                                            errorMsg={errorMsg}
                                            selectedConvo={selectedConvo}
                                            />
                                        </div>
                                        <MessageList
                                            isNewMsg={isNewMsg}
                                            convoMessages={convoMessages.get(selectedConvo) ?? []}
                                            selectedConvo={selectedConvo}
                                        />
                                        <hr />
                                        <MessageComposer
                                            msgTxt={msgTxt}
                                            setMsgTxt={setMsgTxt}
                                            sendNewMessage={sendNewMessage}
                                        />
                                        </>
                                    )}
                                    </div>
                                )}
                                </div>

                            {/* End of section */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
