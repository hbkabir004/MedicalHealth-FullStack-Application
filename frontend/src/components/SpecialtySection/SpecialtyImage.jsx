import React from "react";

function SpecialtyImage() {
  return (
    <div className="flex flex-col ml-5 w-5/12 max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="/speciality.png"
        alt="Medical specialty illustration"
        className="object-contain aspect-[0.95] max-md:mt-10 max-md:max-w-full"
      />
    </div>
  );
}

export default SpecialtyImage;
