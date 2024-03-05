import axios from "axios";

async function getData(id: string) {
  const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  return res.data;
}
export default getData;
