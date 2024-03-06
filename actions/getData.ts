import { data } from "@/data";
import axios, { AxiosResponse } from "axios";

async function getData(id: string) {
  try {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return data;
  }
}

export default getData;
