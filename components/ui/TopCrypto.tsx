import getTrending from "@/utils/getTrending";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import Link from "next/link";

const TopCrypto = async () => {
  const topCoins = await getTrending();
  console.log(topCoins[0]?.item?.data?.price_change_percentage_24h?.usd);
  return (
    <div className="w-full bg-white rounded-md p-6 flex flex-col gap-y-6">
      <h1 className="font-medium text-lg">Trending Coins (24h) </h1>
      <div className="flex flex-col gap-y-1 w-full">
        {topCoins.map((coin, index) => {
          const a =
            Math.abs(coin?.item?.data?.price_change_percentage_24h?.usd) > 10
              ? (coin?.item?.data?.price_change_percentage_24h?.usd).toFixed(1)
              : (coin?.item?.data?.price_change_percentage_24h?.usd).toFixed(2);
          return (
            <Link key={coin.item?.coin_id} href={`/coin/${coin?.item?.id}`}>
              <div className="flex flex-row items-center justify-between w-full hover:bg-[rgba(0,0,0,0.05)] px-3 py-2 rounded-md">
                <div className="flex flex-row gap-x-2 text-sm">
                  <Image
                    src={coin?.item?.large}
                    alt=""
                    width={25}
                    height={25}
                  />
                  <p className="truncate">{coin?.item?.name}</p>
                </div>
                <div
                  className={`${
                    a > 0
                      ? "text-green-500 bg-[#EBF9F4]"
                      : "text-red-500 bg-[#ffe1e0]"
                  } py-1 px-2 rounded-md text-sm font-[600] flex flex-row gap-x-1 items-center justify-center min-w-16`}
                >
                  {a > 0 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  {a > 0 ? a : -a}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopCrypto;
