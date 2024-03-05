import getTrending from "@/utils/getTrending";
import React from "react";

const TopCrypto = async () => {
  const topCoins = await getTrending();
  console.log(topCoins);
  return <div></div>;
};

export default TopCrypto;
