import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-400">
      {/* wrapper */}
      <div className="w-max flex">
        {/* single item */}

        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 text-center hover:bg-fuchsia-50 transition-all duration-300
            md:w-[50vw] xl:w-[33vw] xl:h-[90vh]
            "
          >
            {/* image container */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            <div className="flex flex-col  gap-4 flex-1 items-center justify-center ">
              {/* text container */}
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2x:text-3xl">{item.title}</h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">$ {item.price}</span>
              <button className="bg-red-400 text-white p-2 rounded-md uppercase">
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
