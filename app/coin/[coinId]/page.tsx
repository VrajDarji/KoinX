import React from "react";
import getData from "@/utils/getData";
import { ChevronsRight } from "lucide-react";
import TradingViewWidget from "@/components/ui/graph";
const page = async ({ params }: { params: { coinId: string } }) => {
  const data = await getData(params.coinId);
  const coin = data[params.coinId];
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-row gap-x-2 text-sm">
        <p className="text-[#96A4AD] font-light">Cryptocurrencies</p>
        <p className="flex flex-row gap-x-1 capitalize items-center">
          <ChevronsRight size={15} />
          {params.coinId}
        </p>
      </div>
      <div className="w-full bg-white rounded-md">
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default page;
