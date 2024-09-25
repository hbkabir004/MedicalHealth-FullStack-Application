import React from "react";

function InputField({ label, isHighlighted = false }) {
  const labelClass = isHighlighted
    ? "text-xs text-sky-500"
    : "text-base text-black text-opacity-50";
  return (
    <div className="mt-12 max-md:mt-10">
      <label
        htmlFor={label.toLowerCase()}
        className={`relative self-start ${labelClass}`}
      >
        {label}
      </label>
      <input
        type={label.toLowerCase() === "email" ? "email" : "text"}
        id={label.toLowerCase()}
        name={label.toLowerCase()}
        className="mt-2 w-full border-b border-gray-300 focus:border-sky-500 outline-none"
        required
      />
    </div>
  );
}

export default InputField;
