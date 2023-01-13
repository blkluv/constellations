import React from "react";

const Input = ({ onInputBlur, value, setNewValue, placeholder }) => (
  <input
    value={value}
    onChange={(e) => setNewValue(e.target.value)}
    type="text"
    onBlur={onInputBlur}
    className="w-full h-20 mb-4"
    placeholder={placeholder}
  />
);

export default Input;
