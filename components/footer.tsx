import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-white py-15 px-5 rounded-tl-[85px] mt-[1000px] flex  shadow-[inset_0_4px_6px_rgba(0,0,0,0.1)] gap-x-10">
      {/* Logo Column */}
      <div>
        <Image
          src="/Logo/SecondLogo.png"
          width={300}
          height={300}
          alt="Second Petrofund Logo"
        />
      </div>

      {/* Contact us Column */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Contact us</h3>
        <h2 className="text-xl font-semibold">Elizabeth N Shimwafeni</h2>
        <h2 className="text-xl">Telephone: +264 61 400 443</h2>
        <h2 className="text-xl">Fax Number: 0886510721</h2>
        <h2 className="text-xl">Email: eshimwafeni@namcor.com.na</h2>
        <h2 className="text-xl">Website: www.petrofund.org</h2>
      </div>

      {/* QuickLinks Column */}

      <div>
        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
        <h2 className="text-xl font-semibold">Our History</h2>
        <h2 className="text-xl font-semibold">About Us</h2>
        <h2 className="text-xl font-semibold">Scholarships</h2>
      </div>

      {/* Media Column */}
    </footer>
  );
};

export default Footer;
