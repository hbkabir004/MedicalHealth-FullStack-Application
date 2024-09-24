import React from "react";

const LanguageSelector = () => {
  return (
    <div className="flex gap-5 justify-between px-4 py-2.5 mt-10 bg-white rounded-md border border-sky-500 border-solid shadow-2xl">
      <div className="flex gap-2.5">
        <img
          loading="lazy"
          src="/icons/globe.png"
          alt=""
          className="object-contain shrink-0 self-start w-5 aspect-[1.05]"
        />
        <div>English - En</div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0c4ebb0a0552fbf0590d7bf579cc2b61f1d888a3a3dc25905b410c7525f42f8?placeholderIfAbsent=true&apiKey=38d956dfb74d41e68ea15b3be9162920"
        alt=""
        className="object-contain shrink-0 my-auto aspect-[1.88] w-[15px]"
      />
    </div>
  );
};

export default LanguageSelector;
