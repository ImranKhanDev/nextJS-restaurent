import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-400">
      {/* wrapper */}
      <div className="w-max flex">
        {/* single item */}

        <div className="w-screen h-[60vh] flex flex-col items-center justify-around p-4">
          {/* image container */}
          <div className="relative flex-1 w-full ">
            <Image src="/temporary/p1.png" alt="" fill className="object-contain" />
          </div>
          <div className="flex flex-col  gap-4 flex-1">
            {/* text container */}
            <h1 className="text-xl font-bold uppercase">Title</h1>
            <p className="">Desc</p>
            <span className="text-xl font-bold">$ 141</span>
            <button className="bg-red-400 text-white p-2 rounded-md">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
