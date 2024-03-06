import Image from "next/image";
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import TradingViewWidget from "@/components/ui/graph";
import { formatter } from "@/lib/formatter";
interface HeroChartProps {
  name: string;
  symbol: string;
  imgUrl: string;
  rank: number;
  currentPriceUsd: number;
  currentPriceInr: number;
  priceChanged: number;
}

const HeroChart: React.FC<HeroChartProps> = ({
  name,
  symbol,
  imgUrl,
  rank,
  currentPriceInr,
  currentPriceUsd,
  priceChanged,
}) => {
  const a =
    Math.abs(priceChanged) > 10
      ? parseFloat(priceChanged.toFixed(1))
      : parseFloat(priceChanged.toFixed(2));

  return (
    <div className="w-full bg-white text-black rounded-md p-6 flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-5 pb-6 border-b-2 px-2">
        <div className="flex flex-row gap-x-8">
          <div className="flex flex-row gap-x-2 items-center">
            <Image src={imgUrl} alt="" height={30} width={30} />
            <p className="text-xl font-medium">{name}</p>
            <p className="uppercase text-sm font-medium text-[#71798B]">
              {symbol}
            </p>
          </div>
          <div className="py-1 px-2 rounded-md text-sm flex items-center bg-[#768396] text-white">
            <p>Rank #{rank}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex flex-row gap-x-9 items-center">
            <p className="text-2xl font-medium">
              {formatter.format(currentPriceUsd)}
            </p>
            <div className="flex flex-row gap-x-2 items-center">
              <div
                className={`${
                  a > 0
                    ? "text-green-500 bg-[#EBF9F4]"
                    : "text-red-500 bg-[#ffe1e0]"
                } py-1 px-2 rounded-md text-xs font-[600] flex flex-row gap-x-1 items-center justify-center max-w-15`}
              >
                {a > 0 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                {a > 0 ? a : -a}%
              </div>
              <p className="text-xs text-[#8792A3]">(24H)</p>
            </div>
          </div>
          <p className="text-sm font-medium">
            ₹ {formatter.format(currentPriceInr).split("$")}
          </p>
        </div>
      </div>
      <div>
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default HeroChart;
