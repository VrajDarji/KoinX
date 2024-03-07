import React from "react";

const Takenomics = () => {
  return (
    <div className="w-full p-6 rounded-md bg-white text-black hidden lg:flex flex-col gap-y-4">
      <h1 className="text-2xl font-medium">Takenomics</h1>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-xl font-medium">Intial Distribution</h1>
        <div className="flex flex-row gap-x-4">
          <div className="h-40 aspect-square rounded-full bg-[#0082FF] flex justify-center items-center">
            <div className="h-28 aspect-square rounded-full bg-white"></div>
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <div className="flex flex-row gap-x-2 items-center">
              <div className="p-1 rounded-full bg-[#0082FF]"></div>
              <p className="text-sm">Crowdsale Investor : 100%</p>
            </div>
            <div className="flex flex-row gap-x-2 items-center">
              <div className="p-1 rounded-full bg-[#FAA002]"></div>
              <p className="text-sm">Foundation : 0%</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quo magni
        quis quas molestias distinctio provident aperiam maiores molestiae
        cupiditate officia minus esse, soluta a vel ab sit cumque ullam maxime
        quibusdam porro qui. Recusandae, non? Quisquam voluptate, voluptates
        corrupti eligendi placeat natus amet totam, vel veritatis maxime hic
        doloribus?
      </p>
    </div>
  );
};

export default Takenomics;
