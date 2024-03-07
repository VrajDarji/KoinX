import { link } from "fs";
import React from "react";

const links = [
  "overview",
  "fundamental",
  "news insights",
  "sentiments",
  "team",
  "technicals",
  "takenomics",
];

const InfoLinks = () => {
  return (
    <div className="flex flex-row px-3 border-b-2 items-center lg:gap-x-6 gap-x-2 w-full overflow-hidden">
      {links.map((link, index) => (
        <button
          key={index}
          className={`capitalize text-sm font-medium px-2 py-2 h-full ${
            index === 0
              ? "text-[#1E66FD] border-b-2 border-[#1E66FD]"
              : "text-[#494D54]"
          }`}
        >
          {link}
        </button>
      ))}
    </div>
  );
};

export default InfoLinks;
