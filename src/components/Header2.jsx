import React from 'react'
import Header from '../assets/Header.png'
// import Header2 from '../assets/Header2.png'
import { FaArrowRight } from "react-icons/fa";

export default function Header2() {
  return (
    <div className='header2 h-screen w-full'>
        <img className='absolute z-0' src={Header} alt="" />
      <div className='h-full w-full flex flex-col justify-center items-center gap-[80px]'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-white text-8xl font-onest z-50 text-center tracking-wider font-bold uppercase'>Radical beer</h1>
          <h1 className='text-white text-8xl font-onest z-50 text-center tracking-wider font-bold uppercase'>for radical</h1>
          <h1 className='text-white text-8xl font-onest z-50 text-center tracking-wider font-bold uppercase'>people</h1>
        </div>
        
        {/* <p className='z-10 text-white'>Bere radicală pentru oameni radicali</p> */}
        <p className="button z-10 flex gap-2 items-center">Descopera <FaArrowRight /></p>
      </div>
    </div>
  )
}
