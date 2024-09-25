import React from "react";
import FooterColumn from "./FooterColumn";
import LanguageInput from "./LanguageInput";

function MainFooter() {
  const companyLinks = [
    "Donec dignissim",
    "Curabitur egestas",
    "Nam posuere",
    "Aenean facilisis",
  ];
  const servicesLinks = [
    "Cras convallis",
    "Vestibulum faucibus",
    "Quisque lacinia purus",
    "Aliquam nec ex",
  ];
  const resourcesLinks = [
    "Suspendisse porttitor",
    "Nam posuere",
    "Curabitur egestas",
  ];

  return (
    <footer className="py-5 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start w-full max-md:mt-9">
                  <div className="flex flex-1">
                    <img
                      loading="lazy"
                      src="/footer.png"
                      alt=""
                      className="object-contain shrink-0 aspect-[0.98] w-[54px]"
                    />
                    <div className="my-auto basis-auto text-3xl ml-2">Medical</div>
                  </div>
                  <p className="self-stretch mt-6 text-base leading-6 text-black text-opacity-50">
                    Nam posuere accumsan porta. Integer id tincidunt sit amet
                    sed libero.
                  </p>
                  <p className="mt-12 text-base text-black text-opacity-50 max-md:mt-10">
                    © Skyrev Theme 2021
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                <FooterColumn title="COMPANY" links={companyLinks} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
                <FooterColumn title="SERVICES" links={servicesLinks} />
              </div>
              <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                <FooterColumn title="RESOURCES" links={resourcesLinks} />
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto w-full text-lg font-medium text-black max-md:mt-10">
                  <img
                    loading="lazy"
                    src="/icons/socmed.png"
                    alt=""
                    className="object-contain aspect-[5.38] w-[204px] max-md:mr-1"
                  />
                  <LanguageInput />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
