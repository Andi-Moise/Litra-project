import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Loader from "../components/Loader"
// import Navbar from "../components/Loader"
import { Link } from "react-router-dom"
import { TbLayoutNavbar } from "react-icons/tb"
import Navbar from "../components/Navbar"
import Empty from "../components/Empty"

export default function Details(){
    const [beer, setBeer] = useState(null)

    const { slug } = useParams()


    useEffect(() => {
        axios.get("https://67152b2b33bc2bfe40b99db8.mockapi.io/api/city-traveler/cars")
            .then(res => {
                let element = res.data.find(el => el.slug === slug)
                // console.log(element)
                if (element) {
                    setBeer(element)
                }
            })
    }, [slug])

    return (<div>
        {
            beer ?
            (
                <div className="bg-white-dark h-full">
                    <div>
                        <Navbar />
                        <Empty/>
                    </div>
                    <div className="details">
                        <div className="container">
                            <p className="under">{beer.name}</p>
                            <div className="part flex justify-center items-center">

                                <img src={beer.catalogimg} alt="" />
                            </div>
                            <div className="part">
                                <h1>{beer.name}</h1>
                                <div className="variants">
                                    <div className="box special" >1 x 330 ml - {beer.price} MDL</div>
                                    <div className="box">4 x 330 ml - {beer.price * 4} MDL</div>
                                    <div className="box">6 x 330 ml - {beer.price * 6} MDL</div>
                                    <div className="box">12 x 330 ml - {beer.price * 12} MDL</div>
                                    <div className="box">24 x 330 ml - {beer.price * 24} MDL</div>
                                </div>
                                <p className="description">{beer.description}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            )
            :
            <Loader />
        }
    </div>)
}