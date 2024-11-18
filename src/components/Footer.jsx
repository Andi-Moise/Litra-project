import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'

export default function Footer() {
  return (
    <div className='w-full py-6 bg-dark-blue'>
      <footer className="container mx-auto grid grid-cols-4 gap-3">
        <div className="col">
            <img className='h-[130px]' src={Logo} alt="" />
        </div>
        <div className='col flex flex-col gap-4'>
            <h1 className='text-gray font-medium text-3xl'>Servicii</h1>
            <div className="text text-xl flex flex-col gap-2">
                    <Link to={""} className="flex items-center gap-1 text-white">
                        <p className="font-medium">Bere</p>
                        {/* <FaPlus className="text-sm text-yellow" /> */}
                    </Link>
                    <Link to={""} className="flex items-center gap-1 text-white">
                        <p className="font-medium">Events</p>
                        {/* <FaPlus className="text-sm text-yellow" /> */}
                    </Link>
                    <Link to={""} className="flex items-center gap-1 text-white">
                        <p className="font-medium">Gallery</p>
                        {/* <FaPlus className="text-sm text-yellow" /> */}
                    </Link>
                    <Link to={""} className="flex items-center gap-1 text-white">
                        <p className="font-medium">Blog</p>
                        {/* <FaPlus className="text-sm text-yellow" /> */}
                    </Link>
            </div>
        </div>
        <div className='col flex flex-col gap-5'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-gray font-medium text-3xl'>Locatie</h1>
                <div className="text text-xl flex flex-col gap-2">
                        <Link to={""} className="flex items-center gap-1 text-white">
                            <p className="font-medium">Strada Varnita 20/1</p>
                            {/* <FaPlus className="text-sm text-yellow" /> */}
                        </Link>
                        <Link to={""} className="flex items-center gap-1 text-white">
                            <p className="font-medium">0698 85 555</p>
                            {/* <FaPlus className="text-sm text-yellow" /> */}
                        </Link>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-gray font-medium text-3xl'>Program</h1>
                <div className="text text-xl flex flex-col gap-2">
                        <Link to={""} className="flex items-center gap-1 text-white">
                            <p className="font-medium">L-V: 10:00-16:00</p>
                            {/* <FaPlus className="text-sm text-yellow" /> */}
                        </Link>
                        <Link to={""} className="flex items-center gap-1 text-white">
                            <p className="font-medium">Sambata, Duminca: inchis</p>
                            {/* <FaPlus className="text-sm text-yellow" /> */}
                        </Link>
                </div>
            </div>
            
            
        </div>
        <div className='col'>

        </div>
      </footer>
    </div>
  )
}
