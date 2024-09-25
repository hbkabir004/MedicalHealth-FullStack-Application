import React from "react";

function RightSide() {
  return (
    <section className="flex flex-col text-4xl font-bold leading-10 text-center text-sky-700 max-w-[449px]">
      <div className="z-10 -mt-1.5 w-full">
        <h1 className="text-sky-700">Lorem ipsum dolor sit amet</h1>
      </div>
      <div className="text-2xl leading-9 text-black mt-8">
        <p>
          consectetur adipiscing elit. Suspendisse sed urna in justo euismod
          condimentum.
        </p>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f74499f4c8b6207d8e6cfa2f56837909eaecbda2608410cefef442db1728281?placeholderIfAbsent=true&apiKey=38d956dfb74d41e68ea15b3be9162920"
        className="object-contain mt-14 w-full aspect-[1.18]"
        alt="Descriptive image"
      />
    </section>
  );
}

export default RightSide;
