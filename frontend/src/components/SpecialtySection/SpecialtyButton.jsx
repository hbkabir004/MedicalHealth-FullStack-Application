import React from "react";

function SpecialtyButton({ name, active }) {
  const baseClasses = "px-5 py-2 rounded-2xl text-center whitespace-nowrap";
  const activeClasses = "bg-sky-500 text-white";
  const inactiveClasses =
    "border border-solid border-black border-opacity-10 text-black text-opacity-50";

  return (
    <button
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
      aria-pressed={active}
    >
      {name}
    </button>
  );
}

export default SpecialtyButton;
