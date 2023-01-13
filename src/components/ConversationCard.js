import React from "react";
import { shortAddress, truncate } from "../utils/utils";

const ConversationCard = ({ setSelectedConvo, address, latestMessage }) => {
  return (
    <div
      onClick={() => setSelectedConvo(address)}
      className="border border-2 border-black flex shadow-lg justify-start p-2"
    >
      <div className="" />
      <div className="flex align-start justify-start">
        <div>
          <b>{shortAddress(address)}</b>
        </div>
        <div className="ml-3">{latestMessage && truncate(latestMessage.content, 75)}</div>
      </div>
    </div>
  );
};

export default ConversationCard;
