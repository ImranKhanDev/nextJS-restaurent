import React from "react";
import Image from "next/image";
import { singleProduct } from "@/data";
import Price from "@/Components/Price";
const SingleProduct = () => {
  return (
    <div className="flex flex-col  justify-around items-center h-screen p-4 lg-px-20 xl-px-40 text-red-400 md:flex-row md:gap-8 md:items-center">
      {/* image container */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h[70%]">
          <Image
            src={singleProduct.img}
            className="object-contain"
            alt=""
            fill
          />
        </div>
      )}
      {/* text container */}
      <div className="h-1/2 flex flex-col gap-4 md:h[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price}id={singleProduct.id} options={singleProduct.options}/>
      </div>
    </div>
  );
};

export default SingleProduct;
