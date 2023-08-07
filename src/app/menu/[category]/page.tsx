import Link from 'next/link'
import React from 'react'
import { pizzas } from "@/data";
import Image from 'next/image';
const CategoryPage = () => {
return (
<div className='flex flex-wrap text-red-400 '>
  {pizzas.map((item)=>(
  <Link className="group w-full h-[60vh] border-red-400 border-b-2 border-r-2  sm:w-1/2 lg:w-1/3 p-4 flex-flex-col justify-between odd:bg-fuchsia-50"
  href={`/product/${item.id}` }key={item.id}
  // image container

  >{item.img && (<div className="relative h-[80%]"> 
  <Image src={item.img} alt="" fill className="object-contain "/>
</div>) }
    {/* text container */}
    <div className='flex items-center justify-between font-bold '>
      <h1 className="text-2xl uppercase p-2">{item.title}</h1>
      <h2 className="group-hover:hidden text-xl">$ {item.price}</h2>
      <button className="hidden group-hover:block uppercase p-2 bg-red-400 text-white rounded-md ">add to cart</button>
    </div>
  </Link>
  ))}
</div>
)
}

export default CategoryPage