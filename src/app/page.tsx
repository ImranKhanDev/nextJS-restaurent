import Featured from "@/Components/Featured";
import Offer from "@/Components/Offer";
import Slider from "@/Components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
