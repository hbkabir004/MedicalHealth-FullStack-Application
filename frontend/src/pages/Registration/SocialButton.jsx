import React from "react";

function SocialButton({ name, bgColor, icon }) {
  return (
    <button
      className={`flex flex-1 gap-5 px-6 py-2.5 ${bgColor} rounded-lg shadow-2xl max-md:px-5`}
    >
      <img
        loading="lazy"
        src={icon}
        alt={`${name} icon`}
        className="object-contain shrink-0 aspect-square w-[21px]"
      />
      <span>{name}</span>
    </button>
  );
}

export default SocialButton;
