import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { FiArrowUpRight } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
// import Logo from '../assets/Logo.png'

export default function Footer() {
  return (
    <div className='footer '>
      {/* <footer className="container mx-auto grid grid-cols-4 gap-3">
        <div className="col">
            <img className='h-[130px]' src={Logo} alt="" />
        </div>
        <div className='col flex flex-col gap-4'>
            <h1 className='text-gray font-medium text-3xl'>Servicii</h1>
            <div className="text text-xl flex flex-col gap-2">
                    <Link to={""} className="flex items-center gap-1 text-white">
                        <p className="font-medium">Bere</p>
                        
                    </Link>
                    <Link to={""} className="flex items-center gap-1 text-white">
                        <p className="font-medium">Events</p>
                        
                    </Link>
                    <Link to={""} className="flex items-center gap-1 text-white">
                        <p className="font-medium">Gallery</p>
                        
                    </Link>
                    <Link to={""} className="flex items-center gap-1 text-white">
                        <p className="font-medium">Blog</p>
                        
                    </Link>
            </div>
        </div>
        <div className='col flex flex-col gap-5'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-gray font-medium text-3xl'>Locatie</h1>
                <div className="text text-xl flex flex-col gap-2">
                        <Link to={""} className="flex items-center gap-1 text-white">
                            <p className="font-medium">Strada Varnita 20/1</p>
                            
                        </Link>
                        <Link to={""} className="flex items-center gap-1 text-white">
                            <p className="font-medium">0698 85 555</p>
                            
                        </Link>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-gray font-medium text-3xl'>Program</h1>
                <div className="text text-xl flex flex-col gap-2">
                        <Link to={""} className="flex items-center gap-1 text-white">
                            <p className="font-medium">L-V: 10:00-16:00</p>
                            
                        </Link>
                        <Link to={""} className="flex items-center gap-1 text-white">
                            <p className="font-medium">Sambata, Duminca: inchis</p>
                            
                        </Link>
                </div>
            </div>
            
            
        </div>
        <div className='col'>

        </div>
      </footer> */}
      <div className="back">
        <div className="over">
            
       
        <div className='main container mx-auto'>
                <div className="part1">
                    <div className="box">
                        <h1>Primește Ultimele Noutăți</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <div className='subscribe'>
                            <p>Subscribe by email</p>
                            <FiArrowUpRight />
                        </div>
                    </div>
                    <div className='col'>
                        <h1>Title</h1>
                        <div className='flex flex-col gap-4'>
                            <Link to={""}>Bere</Link>
                            <Link to={""}>Events</Link>
                            <Link to={""}>Gallery</Link>
                            <Link to={""}>Blog</Link>
                        </div>
                    </div>
                    <div className='col'>
                        <h1>Title</h1>
                        <div className='flex flex-col gap-4'>
                            <Link to={""}>Bere</Link>
                            <Link to={""}>Events</Link>
                            <Link to={""}>Gallery</Link>
                            <Link to={""}>Blog</Link>
                        </div>
                    </div>
                    <div className="links">
                        <div className='more'>
                            <div><IoLogoInstagram /></div>
                            <div><FaFacebook /></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        
                            {/* <img src={Logo} alt="" /> */}
                        
                    </div>
                </div>
        </div>

        
      </div>
      <div className="title">
            <h1>LITRA</h1>
        </div>
      </div>
      
    </div>
  )
}
