import React from "react";
import Image from "next/image";
const GetStarted = () => {
  return (
    <div className="w-full rounded-lg bg-[#0052FE] text-white p-8 flex flex-col items-center gap-y-5 lg:mt-10">
      <h1 className="text-xl font-medium text-center tracking-wide">
        Get Started with KoinX <br /> for FREE
      </h1>
      <p className="text-center text-sm tracking-wide">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <Image src={"/Images/getStarted.png"} alt="" width={210} height={100} />
      <button className="px-4 py-2 bg-white text-black rounded-md font-medium">
        Get Started for FREE
      </button>
    </div>
  );
};

export default GetStarted;
