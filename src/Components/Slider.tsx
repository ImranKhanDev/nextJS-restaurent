"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "We deliver your order wherever you are in NJ",
    image: "/slid2.png",
  },
  {
    id: 3,
    title: "The best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() =>
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] md:h-calc[100vh-6rem)] lg:flex-row bg-fuchsia-50">
      {/* Text container */}
      <div className="flex-1 h-1/2 flex flex-col items-center justify-center gap-8 text-red-400 font-bold lg:h-full lg:w-1/2">
        <h1 className="font-5xl text-center uppercase p-4  md:text-4xl lg:text-5xl ">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-400  text-white py-4 px-8">Order now</button>
      </div>
      {/* image container */}
      <div className="flex-1 w-full h-1/2 relative lg:h-full lg:w-1/2">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
