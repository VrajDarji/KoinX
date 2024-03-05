import TradingViewWidget from "@/components/ui/graph";
import { redirect } from "next/navigation";

export default function Home() {
  return redirect("/coin/bitcoin");
}
