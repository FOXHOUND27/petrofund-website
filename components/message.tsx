import React from "react";
import Image from "next/image";

const Message = () => {
  return (
    <section className="relative bottom-40 p-4 md:p-8 lg:p-10 xl:p-12">
      <div className="bg-[#4F3996] shadow-2xl rounded-tl-[85px] flex flex-col md:flex-row overflow-hidden">
        {/* CEO Image */}
        <div className="w-full md:w-[35%] flex-shrink-0">
          <Image
            src="/SectionImages/CEO.png"
            alt="CEO Image"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-[65%] p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl text-white font-semibold mb-5">
              Message from the <br />
              Chief Executive Officer
            </h1>
            <p className="text-white text-justify text-sm md:text-base">
              Since our establishment in 1993 as the Petroleum Training and
              Education Fund, our mission has been clear: to build national
              capacity for Namibia’s upstream petroleum industry. Over the past
              three decades, we have evolved into a trusted partner in
              developing the skills and knowledge that empower Namibians to
              participate meaningfully in this vital sector.
              <br />
              <br />
              Our enduring commitment is to be Your partner in Building Skills
              through Training and Innovation Technology. This mission drives
              our work in advancing education and training through strategic
              partnerships, scholarships, and institutional support. By
              investing in our people, we are not only preparing individuals for
              fulfilling careers in the energy value chain, but also directly
              contributing to the sustainable growth of Namibia’s economy. At
              the core of every decision are our guiding values: Integrity,
              Accountability, Sustainability, Equity, and Duty of Care.
              <br />
              <br />
              The energy landscape is continually being reshaped by
              technological change and the global shift toward sustainability.
              Petrofund’s role has never been more crucial. We are dedicated to
              equipping Namibians with the skills needed to thrive in this
              evolving environment, ensuring our nation remains competitive and
              future-ready. Our new identity, with its central infinite loop,
              symbolizes our core purpose—that training and skills development
              are continuous and ever-evolving and central to Petrofund’s
              purpose. Looking ahead, we will continue to strengthen our
              scholarship opportunities, foster collaboration with our industry
              partners, and expand our outreach to nurture the next generation
              of energy leaders. I invite you to join us in this new
              chapter—whether you are a student, educator, industry partner, or
              policymaker. Together, we are not simply building knowledge; we
              are sustaining momentum for Namibia’s energy future and unlocking
              prosperity for generations to come. We look forward to achieving
              this vision with you.
            </p>
          </div>

          {/* Footer with CEO name and Logo */}
          <div className="flex flex-col md:flex-row justify-between mt-5 items-center md:items-start">
            <p className="text-white font-semibold text-center md:text-left">
              Ms. Nillian N. Mulemi,
              <br /> Chief Executive Officer,
              <br /> Petrofund Namibia
            </p>
            <Image
              src="/Logo/SecondLogo.png"
              width={300}
              height={300}
              alt="Petrofund Logo"
              className="mt-4 md:mt-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
