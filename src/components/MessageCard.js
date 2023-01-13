import React from "react";
import { shortAddress } from "../utils/utils";

const MessageCard = ({ msg }) => {
  return (
    <>
      <div className="border border-2 border-white p-3 flex justify-start">
        <div className="" />
          <div className="align-start flex justify-start">
            <div>
              <b>{shortAddress(msg.senderAddress)}</b>
            </div>
            <div className="ml-4">{msg.content}</div>
        </div>
      </div>
    </>
  );
};

export default MessageCard;
