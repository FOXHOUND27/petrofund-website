import React from "react";
import ValueCard from "./valuesCard";

const Values = () => {
  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative bottom-40 sm:bottom-20 md:bottom-40 lg:bottom-40">
      <div
        className="bg-[#4F3996] p-5 sm:p-8 md:p-10 lg:p-12 relative h-auto shadow-2xl 
                      rounded-tl-[55px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] 
                      rounded-br-[55px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] 
                      flex flex-col items-center justify-center"
      >
        {/* Title */}
        <h1 className="text-white font-semibold text-4xl text-center mb-8 sm:mb-10 mt-6">
          Our Values
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 place-items-center w-full max-w-6xl mx-auto">
          <ValueCard
            imageSrc="/Icons/Scales.svg"
            title="Integrity"
            description="Acting with transparency and accountability in all engagements."
          />

          <ValueCard
            imageSrc="/Icons/Handshake.svg"
            title="Collaboration"
            description="Building strong partnerships across sectors."
          />

          <ValueCard
            imageSrc="/Icons/Sustainability.svg"
            title="Sustainability"
            description="Building strong partnerships across sectors."
          />

          <ValueCard
            imageSrc="/Icons/Graduation Cap.svg"
            title="Excellence"
            description="Upholding high standards in training, funding, and governance."
          />

          <ValueCard
            imageSrc="/Icons/People.svg"
            title="Patriotism"
            description="Serving Namibia’s development with pride and commitment."
          />
        </div>
      </div>
    </section>
  );
};

export default Values;
