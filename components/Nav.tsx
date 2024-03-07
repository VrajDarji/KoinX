"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const NavLinks = [
  "Crypto Taxes",
  "Free Tools",
  "Resource Center",
  "Get Started",
];

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="bg-white h-16 border-b shadow-md py-2 px-8 flex items-center justify-between text-black sticky top-0 z-10">
      <Image
        src={"https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg"}
        alt="logo"
        width={96}
        height={56}
      />
      <div className="lg:flex flex-row gap-x-3 hidden">
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
      <div className="ml-auto flex lg:hidden relative">
        <button>
          <Menu onClick={() => setIsNavOpen((prev) => !prev)} />
        </button>
        {isNavOpen && (
          <div className="absolute flex flex-col items-center gap-y-2 top-12 -right-5 bg-white p-4 rounded-md shadow-md">
            {NavLinks.map((link, index) => (
              <button
                key={index}
                className={`px-3 py-2 font-medium whitespace-nowrap w-full rounded-md ${
                  index === 3
                    ? "bg-[#286EEB] text-white"
                    : "hover:bg-[rgba(0,0,0,0.05)]"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
