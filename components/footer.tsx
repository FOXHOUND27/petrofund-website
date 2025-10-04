import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div>
        <Image
          src="/Logo/SecondLogo.png"
          width={400}
          height={400}
          alt="Second Petrofund Logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
