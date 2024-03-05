import Image from "next/image";
import React from "react";

const NavLinks = [
  "Crypto Taxes",
  "Free Tools",
  "Resource Center",
  "Get Started",
];

const Nav = () => {
  return (
    <div className="bg-white h-16 border-b shadow-md py-2 px-8 flex items-center justify-between text-black">
      <Image
        src={"https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg"}
        alt="logo"
        width={96}
        height={56}
      />
      <div className="flex flex-row gap-x-3">
        {NavLinks.map((link, index) => (
          <button
            key={index}
            className={`px-3 py-2 font-medium ${
              index === 3 ? "bg-[#286EEB] text-white rounded-md" : ""
            }`}
          >
            {link}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Nav;
