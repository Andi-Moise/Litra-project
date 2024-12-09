import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from "react"
import axios from "axios"
import Loader from '../components/Loader'
import GalleryElement from '../components/GalleryElement'

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
                    <div >
                        <Navbar/>
                        <GalleryElement/>
                    </div>
                )
                :
                Loader
            }
            

    </div>
  )
}
