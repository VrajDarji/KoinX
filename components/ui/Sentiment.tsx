import { InfoIcon, Newspaper, TrendingUp } from "lucide-react";
import React from "react";

const divs = [
  { icon: <Newspaper color="white" />, bg: "#E8F4FD", iconBg: "#0082FF" },
  { icon: <TrendingUp color="white" />, bg: "#EBF9F4", iconBg: "#0FBA83" },
  { icon: <TrendingUp color="white" />, bg: "#FBE5C0", iconBg: "#FDA10E" },
];
const analystInfo = [
  { tag: "Buy", value: "76%", color: "#00B386" },
  { tag: "Hold", value: "8%", color: "#C7C8CE" },
  { tag: "Sell", value: "16%", color: "#F7324C" },
];

const Sentiment = () => {
  return (
    <div className="w-full p-6 rounded-md bg-white text-black flex flex-col gap-y-6">
      <h1 className="text-2xl font-medium">Sentiment</h1>
      <div className="w-full flex flex-col gap-y-3">
        <h1 className="flex flex-row gap-x-2 text-xl font-medium items-center text-[#44475B]">
          Key Events <InfoIcon size={18} />
        </h1>
        <div className="max-w-[1000px] overflow-x-scroll flex flex-row gap-x-4">
          {divs.map((div, index) => (
            <div
              key={index}
              className="w-[500px] rounded-xl aspect-[2.5/1] shrink-0 p-5 flex flex-row gap-x-2 items-start"
              style={{ background: div.bg }}
            >
              <div
                className="p-2 rounded-full"
                style={{ background: div.iconBg }}
              >
                {div.icon}
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, nobis.
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iure, minima! Illum consequuntur soluta odit blanditiis
                  expedita repellat eligendi, assumenda nisi!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-3">
        <h1 className="flex flex-row gap-x-2 text-xl font-medium items-center text-[#44475B]">
          Analyst Estimates <InfoIcon size={18} />
        </h1>
        <div className="flex flex-row gap-x-6 h-full">
          <div className="h-[112px] aspect-square bg-[#EBF9F4] rounded-full flex items-center justify-center text-3xl font-medium text-emerald-500">
            76%
          </div>
          <div className="flex flex-col gap-y-5 h-full">
            {analystInfo.map((info) => (
              <div
                className="flex flex-row gap-x-6 items-center justify-start"
                key={info.tag}
              >
                <p>{info.tag}</p>
                <div className="min-w-[600px] relative h-2 flex flex-row gap-x-5 items-center">
                  <div
                    className="h-full rounded-sm"
                    style={{ width: info.value, background: info.color }}
                  ></div>
                  <p>{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
