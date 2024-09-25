import React from "react";

function ClinicCard({ image, title, phone, email, address }) {
  return (
    <div className="px-3.5 py-5 bg-white rounded-3xl shadow-2xl max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={image}
            alt={`${title} clinic`}
            className="object-contain grow shrink-0 max-w-full rounded-xl aspect-[0.97] w-[146px] max-md:mt-9"
          />
        </div>
        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto w-full text-base text-black text-opacity-90 max-md:mt-10">
            <div className="flex gap-9 max-w-full w-[300px]">
              <div className="flex flex-col flex-1">
                <h2 className="self-start font-black">{title}</h2>
                <div className="flex gap-2 mt-4">
                  <img
                    loading="lazy"
                    src="/clinic-cards/call.png"
                    alt=""
                    className="object-contain shrink-0 my-auto w-3 aspect-square"
                  />
                  <div className="grow shrink w-[113px]">{phone}</div>
                </div>
              </div>
              <div className="flex flex-1 gap-3 self-end mt-9 whitespace-nowrap">
                <img
                  loading="lazy"
                  src="/clinic-cards/msg.png"
                  alt=""
                  className="object-contain shrink-0 my-auto w-3 aspect-[1.2]"
                />
                <div className="basis-auto">{email}</div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <img
                loading="lazy"
                src="/clinic-cards/pin.png"
                alt=""
                className="object-contain shrink-0 self-start w-3 aspect-[0.71]"
              />
              <div className="basis-auto">{address}</div>
            </div>
            <button className="self-stretch px-16 py-3 mt-4 text-xs font-bold text-center text-green-500 uppercase whitespace-nowrap rounded-3xl border border-green-500 border-solid shadow-2xl max-md:px-5 transition duration-200 hover:bg-green-500 hover:text-white">
              contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicCard;
