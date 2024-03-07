import React from "react";
import getData from "@/actions/getData";
import { ChevronsRight } from "lucide-react";
import HeroChart from "@/components/ui/HeroChart";
import getPrice from "@/actions/getData";
import InfoLinks from "@/components/InfoGraphics";
import Overview from "@/components/ui/Overview";
import Sentiment from "@/components/ui/Sentiment";
import About from "@/components/ui/About";
import Takenomics from "@/components/ui/Takenomics";
import Team from "@/components/ui/Team";

const Page = async ({ params }: { params: { coinId: string } }) => {
  const data = await getData(params.coinId);
  const price = await getPrice(params.coinId);
  const coin = price[params.coinId];

  return (
    <div className="flex flex-col gap-y-4 p-2">
      <div className="flex flex-row gap-x-2 text-sm">
        <p className="text-[#96A4AD] font-light">Cryptocurrencies</p>
        <p className="flex flex-row gap-x-1 capitalize items-center">
          <ChevronsRight size={15} />
          {params.coinId}
        </p>
      </div>
      <div className="w-full bg-white rounded-md">
        {data?.msg ? (
          <p className="w-full text-center py-2 text-red-400 capitalize">
            {data?.msg}
          </p>
        ) : (
          ""
        )}
        <HeroChart
          name={data?.name}
          symbol={data?.symbol}
          imgUrl={data?.image?.large}
          rank={data?.market_data?.market_cap_rank}
          currentPriceInr={data?.market_data?.current_price?.inr}
          currentPriceUsd={data?.market_data?.current_price?.usd}
          priceChanged={data?.market_data?.price_change_percentage_24h}
        />
      </div>
      <InfoLinks />
      <Overview
        TodaysHigh={data?.market_data?.high_24h?.usd}
        TodaysLow={data?.market_data?.low_24h?.usd}
        currentPrice={data?.market_data?.current_price?.usd}
        marketCap={data?.market_data?.market_cap?.usd}
        rank={data?.market_data?.market_cap_rank}
        volume={data?.market_data?.total_volume?.usd}
      />
      <Sentiment />
      <About
        name={data?.localization?.en}
        description={data?.description?.en}
      />
      <Takenomics />
      <Team />
    </div>
  );
};

export default Page;
