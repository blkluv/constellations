import React from "react";
import Input from "./Input";

const MessageComposer = ({ msgTxt, setMsgTxt, sendNewMessage }) => {
  return (
    <div className="text-black text-m ml-2 p-4">
      <Input
        setNewValue={setMsgTxt}
        placeholder="Write a message"
        value={msgTxt}
      />
      <button className="border-2 border-black shadow-lg bg-black text-green-300 font-semibold px-8 py-2 p-2 mr-4" onClick={sendNewMessage}>
        send message
      </button>
    </div>
  );
};

export default MessageComposer;
