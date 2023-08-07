import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col  md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* text container */}
      <div className=" flex-1 flex flex-col  justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:6xl">Delicious Burger & French Fry</h1>
        <p className="text-white">Progressively simplify effective e-toilers and processcentric methods of empowerment.Quickly Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <CountDown/>
        <button className="bg-red-400 text-white rounded py-3 px-6">Order Now</button>
      </div>
      {/* image container */}
      <div className="flex-1 w-full  relative md:h-full" >
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
