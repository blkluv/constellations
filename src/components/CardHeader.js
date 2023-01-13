import React from "react";

const CardHeader = ({ setIsNewMsg }) => {
  return (
    <div className="flex justify-between align-center">
      <div>
        <h4 className="text-2xl text-black font-semibold mb-4">Conversations</h4>
      </div>
      <div>
        <button onClick={() => setIsNewMsg(true)} className="bg-black shadow-lg p-2 font-semibold text-sm text-green-300">
          + New message
        </button>
      </div>
    </div>
  );
};

export default CardHeader;
