"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import Image from "next/image";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = [-22.5609, 17.0658];

const ContactSection = () => {
  return (
    <section className="h-auto">
      <div className="bg-[#4F3996] relative bottom-35 md:bottom-20 lg:bottom-0 mb-10 shadow-2xl flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] w-full max-w-[95%] mx-auto">
        {" "}
        <div></div>
      </div>

      {/* Second Div */}
      <div className="bg-[#F47C20] top-20  lg:h-[600px]  bottom-35 md:bottom-20 lg:bottom-30 mb-10 shadow-2xl flex items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 rounded-tl-[45px] sm:rounded-tl-[65px] md:rounded-tl-[75px] lg:rounded-tl-[85px] rounded-br-[45px] sm:rounded-br-[65px] md:rounded-br-[75px] lg:rounded-br-[85px] w-full max-w-[95%] mx-auto">
        {/* Shoki Image */}
        <Image
          src="/SectionImages/shoki.png"
          height={500}
          width={500}
          alt="Shoki Image"
          className="bottom-[81px] relative"
        />

        {/* Text Content */}
        <div>
          <h1 className="text-white text-2xl">
            For Communications and <br />
            Stakeholder Engagement Enquiries
          </h1>
          <h1>
            Mr. Shoki Kandjimi Communications and Stakeholder Engagement Lead
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
