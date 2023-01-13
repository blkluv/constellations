import React from "react";

const BackButton = ({ reset }) => {
  return (
    <div
      onClick={reset}
      className="flex w-10 h-10 font-extrabold back-chevron justify-center"
    >
      &#8249;
    </div>
  );
};

export default BackButton;
