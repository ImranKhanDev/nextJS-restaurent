import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 text-red-400 p-4 flex items-center justify-between  uppercase md:h-24 lg:px-20 lx:px-40"'>
      <Link href='/' className='font-bold text-xl'>PIZZAHUT</Link>
      <p>© ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer