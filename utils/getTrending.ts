import axios from "axios";
import React from "react";

const getTrending = async () => {
  const res = await axios.get(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  const a = [];
  for (let i = 0; i < 3; i++) {
    a.push(res.data?.coins[i]);
  }
  return a;
};

export default getTrending;
