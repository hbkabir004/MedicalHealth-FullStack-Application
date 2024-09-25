import React from "react";
import ClinicCard from "./ClinicCard";

const clinicsData = [
  {
    image:
      "/clinic-cards/clinic_1.png",
    title: "Head Quarter",
    phone: "+123 456 78 91",
    email: "hello@luxi.com",
    address: "Lorem ipsum street no 14 Block A",
  },
  {
    image:
      "/clinic-cards/clinic_2.png",
    title: "Head Quarter",
    phone: "+123 456 78 91",
    email: "hello@luxi.com",
    address: "Lorem ipsum street no 14 Block A",
  },
  {
    image:
      "/clinic-cards/clinic_3.png",
    title: "Head Quarter",
    phone: "+123 456 78 91",
    email: "hello@luxi.com",
    address: "Lorem ipsum street no 14 Block A",
  },
  {
    image:
      "/clinic-cards/clinic_4.png",
    title: "Head Quarter",
    phone: "+123 456 78 91",
    email: "hello@luxi.com",
    address: "Lorem ipsum street no 14 Block A",
  },
  {
    image:
      "/clinic-cards/clinic_5.jpg",
    title: "Head Quarter",
    phone: "+123 456 78 91",
    email: "hello@luxi.com",
    address: "Lorem ipsum street no 14 Block A",
  },
  {
    image:
      "/clinic-cards/clinic_6.png",
    title: "Head Quarter",
    phone: "+123 456 78 91",
    email: "hello@luxi.com",
    address: "Lorem ipsum street no 14 Block A",
  },
];

function OurClinics() {
  return (
    <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-[120px]">
      <div className="mt-14 w-full max-md:mt-10">
        <div className="self-start text-black text-opacity-90 mb-10">
          <h1 className="text-5xl font-black max-md:text-4xl">
            Our Clinics
          </h1>
          <p className="mt-6 text-2xl  max-md:max-w-full">
            Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-1">
          {clinicsData.map((clinic, index) => (
            <div key={index} className="">
              <ClinicCard {...clinic} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurClinics;
