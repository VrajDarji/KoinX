import Nav from "@/components/Nav";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";
import TopCrypto from "@/components/ui/TopCrypto";
import GetStarted from "@/components/ui/getStarted";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Nav />
      <div className="bg-[#EFF2F5] text-black w-full py-4 px-6 pb-12 flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:[calc(100%-450px)]">{children}</div>
        <div className="flex flex-col w-full lg:w-[500px] gap-y-4">
          <GetStarted />
          <TopCrypto />
        </div>
      </div>
      <YouMayAlsoLike />
    </div>
  );
};

export default layout;
