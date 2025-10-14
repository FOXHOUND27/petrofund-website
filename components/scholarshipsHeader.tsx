import React from "react";
import Image from "next/image";

const ScholarshipsHeader = () => {
  return (
    <section>
      <div className="bg-[#4F3996] relative bottom-35 md:bottom-20 lg:bottom-0 mb-10 shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] w-full max-w-[95%] mx-auto">
        <Image
          src="/Logo/SecondLogo.png"
          width={300}
          height={300}
          alt="Scholarships Header Logo"
        />

        {/*  */}
        <div className="flex mt-20 relative justify-center items-center">
          <div className="w-[45%]">
            <h1 className="text-white font-semibold text-2xl">
              SCHOLARSHIPS FOR <br />
              THE 2026 ACADEMIC YEAR
            </h1>
            <p className="text-justify text-white mt-4">
              In recognition of multiple oil and gas discoveries in the Orange
              Basin offshore Namibia and continued exploration activities,
              PETROFUND is intensifying efforts to build a skilled workforce for
              the next phases of the upstream petroleum industry. <br />
              <br />
              As part of this drive, scholarships for 2026 are now available to
              equip Namibians with vital skills ahead of the Final Investment
              Decision by petroleum exploration licence holders.
            </p>
          </div>
          {/* Image Div */}
          <div className="w-[50%] overflow-hidden">
            <Image
              src="/SectionImages/scholars.png"
              width={650}
              height={650}
              alt="Scholarships Header Image"
              className="overflow-hidden  absolute bottom-[-48px] right-[-5px]"
            />
          </div>
        </div>
      </div>

      {/* Scholarship Info */}
      <div className="bg-[#4F3996] relative bottom-35 md:bottom-20 lg:bottom-0 mb-10 shadow-2xl flex flex-col  justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] w-full max-w-[95%] mx-auto">
        <h1 className="text-2xl font-semibold text-white">
          Scholarship Opportunities:
        </h1>

        <p className="text-white mt-5">
          The following scholarships are open to high-performing, dedicated
          Namibians eager to join the upstream petroleum industry and pursue
          full-time studies in the following fields:
        </p>

        <p className="text-white mt-4">
          Undergraduate Scholarships in the SADC Region only:
          <ul className="list-disc mt-4 pl-6 space-y-1">
            <li>
              BSc. / B. Engineering in Civil, Marine, Chemical, Electrical,
              Power, Industrial and Mechanical Engineering
            </li>
            <li>BSc. Geosciences</li>
            <li>
              Diploma in Instrumentation Engineering Technology in Oil and Gas
              (Check list of institutions on the website)
            </li>
          </ul>
        </p>

        {/* Postgraduate Section */}
        <div className="mb-8">
          <h2 className=" font-semibold text-white mb-3">
            Postgraduate Scholarships (University of Namibia only)
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>MSc. Petroleum Geology</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsHeader;
