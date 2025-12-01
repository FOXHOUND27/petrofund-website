"use client";

import React from "react";

interface ManagementHeaderProps {
  title: string;
  subtitle?: string;
}

const ManagementHeader: React.FC<ManagementHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <header className="  py-8 px-6 rounded-b-3xl shadow-md">
      <div className="max-w-5xl mx-auto text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">{title}</h1>
        {subtitle && (
          <p className="text-md sm:text-lg text-justify">{subtitle}</p>
        )}
      </div>
    </header>
  );
};

export default ManagementHeader;
