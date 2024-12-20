import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from "react"
import axios from "axios"
import Loader from '../components/Loader'
import GalleryElement from '../components/GalleryElement'
import Empty from '../components/Empty'
import Layer_2 from '../assets/Layer_2.png'
import Layer_3 from '../assets/Layer_3.png'
import Thirsty from '../components/Thirsty'
import Footer from '../components/Footer'
export default function Gallery() {
    const [gallery, setGallery] = useState(null)
    useEffect(() =>{
        axios.get("https://67152b2b33bc2bfe40b99db8.mockapi.io/api/city-traveler/cars")
            .then(res => setGallery(res.data))
    }, [])
  return (
    <div>
        {
                gallery ?
                (
                    <div className='page relative overflow-hidden bg-white-dark -z-0'>
                        <img src={Layer_2} alt="" className='img1 absolute top-0 -right-[100px] h-[800px] -z-10 over'/>
                        <img src={Layer_3} alt="" className='img2 absolute top-[750px] -left-[100px] h-[700px] -z-10'/>
                        <Navbar/>
                        
                        <Empty/>
                        <GalleryElement/>
                        {/* <Empty/> */}
                        <Thirsty/>
                        <Footer/>
                    </div>
                )
                :
                Loader
            }
            

    </div>
  )
}
