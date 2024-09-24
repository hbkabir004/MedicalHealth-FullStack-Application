import React from "react";

function ReadyToStart() {
  return (
    <section className="flex justify-center items-center mt-4 mb-32">
      <div style={{ background: "linear-gradient(118deg, #03ACF2 6.86%, #C8E6C9 103.41%)" }} className="px-20 py-11 rounded-3xl shadow-2xl max-md:px-5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-white max-md:mt-10 max-md:max-w-full">
              <h2 className="self-start text-4xl font-black">
                Ready to get started ?
              </h2>
              <p className="mt-3 text-xl font-semibold max-md:max-w-full">
                Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
              </p>
            </div>
          </div>

          <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
            <button className="self-stretch px-7 py-6 my-auto w-full text-lg font-semibold text-center text-sky-500 uppercase bg-white border border-white border-solid shadow-2xl rounded-[35px] max-md:px-5 max-md:mt-10">
              Create Appointment Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReadyToStart;
