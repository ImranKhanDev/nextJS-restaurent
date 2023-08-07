import React from 'react'
import Image from 'next/image'
import { singleProduct } from '@/data'
const SingleProduct = () => {
  return (
    <div className="flex flex-col  justify-around items-center h-screen p-4 lg-px-20 xl-px-40 text-red-400 md:flex-row"> 
    {/* image container */}
    {singleProduct.img && <div className="relative">
      <Image src={singleProduct.img} className="object-container" alt="" fill/>
    </div>}
     {/* text container */}
     <div className="">
 <h1>{singleProduct.title}</h1>
 <p>{singleProduct.price}</p>
     </div>
     </div>
  )
}

export default SingleProduct