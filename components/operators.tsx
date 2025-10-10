import React from "react";
import Image from "next/image";

const Operators = () => {
  return (
    <>
      {" "}
      <div className="bg-[#4F3996] relative bottom-35 md:bottom-20 lg:bottom-0 mb-10 shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] w-full max-w-[95%] mx-auto">
        <Image
          src="/Logo/SecondLogo.png"
          alt="Second Logo"
          width={300}
          height={300}
        />
        <h1 className="text-2xl mt-5 sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5 sm:mb-6 md:mb-7 text-center font-semibold">
          PETROLEUM EXPLORATION COMPANIES
        </h1>

        <p className="text-white text-justify text-sm sm:text-base md:text-lg leading-relaxed">
          The Government of the Republic of Namibia through the Petroleum
          (Exploration and Production) Act of 1991 empowered the Minister of
          Industries, Mines and Energy to enter into agreements with individual
          oil exploration companies granted exploration licenses in Namibia
          requiring them to contribute an agreed amount of money to PETROFUND.
          As a result, PETROFUND's funding is sourced from petroleum exploration
          license holders. Clause 22 of the Petroleum Agreement outlines the key
          provisions regarding the employment and training of Namibians.
        </p>

        <Image
          src="/SectionImages/operators.png"
          width={1000}
          height={1000}
          alt="Operators Map"
          className="mt-6 rounded-tl-[85px] hidden md:block rounded-br-[85px]"
        />
      </div>
      {/* Second Info Section */}
      <div className="bg-[#F47C20] relative bottom-35 md:bottom-20 lg:bottom-0 mb-10 shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] w-full max-w-[95%] mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-5 sm:mb-6 md:mb-7 text-center font-semibold">
          Employment and Training
        </h1>

        <p className="text-white text-left text-sm sm:text-base md:text-lg leading-relaxed">
          22.3 (a) During each year of the Exploration Licence or any renewal
          thereof, the Company shall spend a sum which is not less than a sum
          equal to (agreed amount) United States Dollars for the purpose of the
          training and education of Namibians.
          <br />
          <br />
          (b) Of the said sum, 70 per cent shall be paid on the date of
          signature and thereafter on each anniversary of such date into the
          Petroleum Training and Education Fund.
          <br />
          <br />
          (c) Of the said sum, 30 per cent shall be expended by the Company on
          attachments and in-house training of Namibian citizens in the field of
          natural science, engineering, technology, accounting, economics and
          law as related to oil and gas exploration and production to expose
          them to petroleum industry practice and operations. 22.4 The sum
          referred to in clause 22.3 shall be adjusted annually by dividing such
          sum by the Inflation Factor. 22.5 If the Price Index ceases to be
          published the Price Index contemplated in clause. 22.6 Shall for the
          purposes of this Agreement be such price index as may be determined by
          mutual agreement between the parties to this Agreement.
        </p>
      </div>
    </>
  );
};

export default Operators;
