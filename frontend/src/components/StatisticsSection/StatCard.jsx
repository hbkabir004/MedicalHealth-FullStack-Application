import React from "react";

function StatCard({ icon, count, label, description }) {
  return (
    <section className="flex flex-col pb-1.5 max-w-[318px] my-10">
      <div className="flex z-10 gap-5 justify-evenly items-start self-center -mt-3 w-full whitespace-nowrap max-w-[280px]">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 self-center max-w-full aspect-[1.45] w-[115px]"
        />
        <div className="flex flex-col self-start">
          <div className="text-5xl font-bold leading-none text-green-700">
            {count}
          </div>
          <div className="text-4xl font-bold leading-loose text-black text-opacity-90">
            {label}
          </div>
        </div>
      </div>
      <p className="w-full text-lg leading-7 text-center text-black text-opacity-90">
        {description}
      </p>
    </section>
  );
}

export default StatCard;
