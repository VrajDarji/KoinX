import axios, { AxiosResponse } from "axios";

async function getData(id: string) {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=inr%2Cusd&include_24hr_change=true`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}

export default getData;
