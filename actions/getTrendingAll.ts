import axios from "axios";

const getTrendingAll = async () => {
  const res = await axios.get(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  return res.data;
};

export default getTrendingAll;
