import getTrendingAll from "@/actions/getTrendingAll";
import Image from "next/image";
import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { formatter } from "@/lib/formatter";
import Link from "next/link";

const YouMayAlsoLike = async () => {
  const data = await getTrendingAll();
  const Trendingcoins = data["coins"];
  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };
  return (
    <div className="px-6 py-8 bg-white text-black flex flex-col gap-y-6 w-full">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-xl font-medium">You May Also Like</h1>
        <div className="flex flex-row gap-x-4 overflow-x-scroll">
          {Trendingcoins.map((singleCoin: any) => {
            const a =
              Math.abs(
                singleCoin?.item?.data?.price_change_percentage_24h?.usd
              ) > 10
                ? (singleCoin?.item?.data?.price_change_percentage_24h?.usd).toFixed(
                    1
                  )
                : (singleCoin?.item?.data?.price_change_percentage_24h?.usd).toFixed(
                    2
                  );
            return (
              <Link key={singleCoin?.item?.coin_id} href={singleCoin?.item?.id}>
                <div className="flex flex-col gap-y-3 w-[350px] rounded-md border-2 aspect-video shrink-0 p-4 relative">
                  <div className="flex flex-row items-center gap-x-2 w-full">
                    <Image
                      src={singleCoin?.item?.large}
                      alt=""
                      height={25}
                      width={25}
                    />
                    <p className="font-medium">{singleCoin?.item?.name}</p>
                    <div
                      className={`${
                        a > 0
                          ? "text-green-500 bg-[#EBF9F4]"
                          : "text-red-500 bg-[#ffe1e0]"
                      } py-1 px-2 rounded-md text-sm font-[600] flex flex-row gap-x-1 items-center justify-center min-w-16 ml-auto`}
                    >
                      {a > 0 ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                      {a > 0 ? a : -a}%
                    </div>
                  </div>
                  <p
                    dangerouslySetInnerHTML={createMarkup(
                      singleCoin?.item?.data?.price
                    )}
                    className="text-2xl font-medium"
                  ></p>
                  <div className="relative w-full aspect-[4.5/1]">
                    <Image
                      src={singleCoin?.item?.data?.sparkline}
                      alt=""
                      fill
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-xl font-medium">Trending Coins</h1>
        <div className="flex flex-row gap-x-4 overflow-x-scroll">
          {Trendingcoins.map((singleCoin: any) => {
            const a =
              Math.abs(
                singleCoin?.item?.data?.price_change_percentage_24h?.usd
              ) > 10
                ? (singleCoin?.item?.data?.price_change_percentage_24h?.usd).toFixed(
                    1
                  )
                : (singleCoin?.item?.data?.price_change_percentage_24h?.usd).toFixed(
                    2
                  );
            return (
              <Link key={singleCoin?.item?.coin_id} href={singleCoin?.item?.id}>
                <div className="flex flex-col gap-y-3 w-[350px] rounded-md border-2 aspect-video shrink-0 p-4 relative">
                  <div className="flex flex-row items-center gap-x-2 w-full">
                    <Image
                      src={singleCoin?.item?.large}
                      alt=""
                      height={25}
                      width={25}
                    />
                    <p className="font-medium">{singleCoin?.item?.name}</p>
                    <div
                      className={`${
                        a > 0
                          ? "text-green-500 bg-[#EBF9F4]"
                          : "text-red-500 bg-[#ffe1e0]"
                      } py-1 px-2 rounded-md text-sm font-[600] flex flex-row gap-x-1 items-center justify-center min-w-16 ml-auto`}
                    >
                      {a > 0 ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                      {a > 0 ? a : -a}%
                    </div>
                  </div>
                  <p
                    dangerouslySetInnerHTML={createMarkup(
                      singleCoin?.item?.data?.price
                    )}
                    className="text-2xl font-medium"
                  ></p>
                  <div className="relative w-full aspect-[4.5/1]">
                    <Image
                      src={singleCoin?.item?.data?.sparkline}
                      alt=""
                      fill
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
