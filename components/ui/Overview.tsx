import React from "react";
import { formatter } from "@/lib/formatter";
import { ChevronUp, InfoIcon } from "lucide-react";
interface OverviewProps {
  TodaysHigh: number;
  TodaysLow: number;
  currentPrice: number;
  marketCap: number;
  rank: number;
  volume: number;
}

const Overview: React.FC<OverviewProps> = ({
  TodaysHigh,
  TodaysLow,
  currentPrice,
  marketCap,
  rank,
  volume,
}) => {
  const Total = TodaysHigh - TodaysLow;
  const current = currentPrice - TodaysLow;
  const left = (current * 100) / Total - 4.5;

  const data = [
    { tag: "Bitcoin Price", value: formatter.format(currentPrice) },
    { tag: "Market Cap", value: formatter.format(marketCap) },
    {
      tag: "24h Low / 24h High",
      value: `${formatter.format(TodaysLow)} / ${formatter.format(TodaysHigh)}`,
    },
    { tag: "Market Cap Dominance", value: 0 },
    { tag: "7d Low / 7d High", value: 0 },
    {
      tag: "Volume / Market Cap",
      value: (volume / marketCap).toFixed(3),
    },
    { tag: "Trading Volume", value: formatter.format(volume) },
    { tag: "All-Time High", value: 0 },
    { tag: "Market Cap Rank", value: `#${rank}` },
    { tag: "All-Time Low", value: 0 },
  ];

  return (
    <div className="p-6 bg-white rounded-md w-full flex flex-col gap-y-8">
      <h1 className="text-2xl font-medium">Performance</h1>
      <div className="flex flex-col gap-y-4 w-full">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <p className="text-sm font-light">Today&apos;s Low</p>
            <p className="font-medium text-sm">{formatter.format(TodaysLow)}</p>
          </div>
          <div className="w-[75%] h-1 rounded-sm bg-gradient-to-r from-red-400 via-orange-400 to-emerald-400 relative">
            <div
              className="absolute top-1 flex flex-col items-center"
              style={{ left: `${left}%` }}
            >
              <ChevronUp size={12} fill="black" />
              <p className="text-xs">{formatter.format(currentPrice)}</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-sm font-light">Today&apos;s High</p>
            <p className="font-medium text-sm">
              {formatter.format(TodaysHigh)}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <p className="text-sm font-light">Today&apos;s Low</p>
            <p className="font-medium text-sm">{formatter.format(TodaysLow)}</p>
          </div>
          <div className="w-[75%] h-1 rounded-sm bg-gradient-to-r from-red-400 via-orange-400 to-emerald-400 "></div>
          <div className="flex flex-col gap-y-1">
            <p className="text-sm font-light">Today&apos;s High</p>
            <p className="font-medium text-sm">
              {formatter.format(TodaysHigh)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-3">
        <h1 className="flex flex-row gap-x-2 text-xl font-medium items-center">
          Fundamentals <InfoIcon size={18} />
        </h1>
        <div className="grid grid-cols-2 gap-x-16">
          {data.map((values, index) => (
            <div
              key={index}
              className="px-2 py-3 border-b flex w-full justify-between items-center"
            >
              <p className="text-[#768396] font-medium text-sm tracking-wide">
                {values.tag}
              </p>
              <p className="font-medium text-sm">{values.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
