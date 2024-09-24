import React from "react";
import SpecialityContent from "./SpecialityContent";
import SpecialtyImage from "./SpecialtyImage";

const specialties = [
  { name: "Dentist", active: false },
  { name: "Padriatic", active: false },
  { name: "Cardiology", active: false },
  { name: "Traumatologi", active: true },
  { name: "Othopaedi", active: true },
  { name: "Anestesiologi", active: true },
  { name: "Reumatologi", active: false },
  { name: "Andrologi", active: false },
  { name: "Ortodonsia", active: false },
];

function SpecialtySection() {
  return (
    <section className="md:flex justify-between items-center px-10 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <SpecialityContent specialties={specialties} />
      <SpecialtyImage />
    </section>
  );
}

export default SpecialtySection;
