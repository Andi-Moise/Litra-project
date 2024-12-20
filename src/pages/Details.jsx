import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Loader from "../components/Loader"
// import Navbar from "../components/Loader"
import { Link } from "react-router-dom"
import { TbLayoutNavbar } from "react-icons/tb"
import Navbar from "../components/Navbar"
import Empty from "../components/Empty"
import Footer from "../components/Footer"

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
                <div className="bg-white-dark h-full w-full">
                    <div>
                        <Navbar />
                        <Empty/>
                    </div>
                    <div className="details bg-white-dark ">
                        <div className="type1 container ">
                            <p className="under">{beer.name}</p>
                            <div className="part flex  items-center">

                                <img src={beer.catalogimg} alt="" />
                            </div>
                            <div className="part">
                                <h1 className=" text-dark-blue">{beer.name}</h1>
                                <div className="variants">
                                    <div className="box special" >1 x 330 ml - {beer.price} MDL</div>
                                    <div className="box">4 x 330 ml - {beer.price * 4} MDL</div>
                                    <div className="box">6 x 330 ml - {beer.price * 6} MDL</div>
                                    <div className="box">12 x 330 ml - {beer.price * 12} MDL</div>
                                    <div className="box">24 x 330 ml - {beer.price * 24} MDL</div>
                                </div>
                                <p className="description">{beer.description}</p>
                                <div className="aux">
                                <button
              onClick={() => addItem(test)} // Fixed here
              className="w-1/2 item-cart-btn card-button card-button-primary"
            >
              Add to Cart
            </button>
                                </div>
                               
                            </div>
                        </div>
                        {/* <div className="gap"></div> */}
                        <div className="info">
                            <h1>Note de degustare</h1>
                            <div className="bento">
                                <div className="box">
                                <h2>sweetness</h2>
                                <p>{beer.sweetness}</p>
                                </div>
                                <div className="box">
                                    <h2>aroma</h2>
                                    <p>{beer.aroma}</p>
                                </div>
                                <div className="box">
                                <h2>taste</h2>
                                <p className="text-center">{beer.taste}</p>
                                </div>
                                <div className="box">
                                <h2>bitterness</h2>
                                <p>{beer.bitterness}</p>
                                </div>
                            </div>
                            
                        </div>
                        {/* <div className="gap h-[100px]"> </div> */}
                        {/* <div className="type2">
                            <div className="box"><p>Alex</p></div>
                            <div className="box"><p>Alex</p></div>
                            <div className="box"><p>Alex</p></div>
                            <div className="box"><p>Alex</p></div>
                        </div> */}
                        <div className="gap"></div>
                        <div className="fabricare">
                            <h1>CUM FABRICAM</h1>
                            <h1>NOI BERILE NOASTRE ?</h1>
                            
                            <img src="https://e0422ad54df560b3b943be55cff4d267.cdn.bubble.io/f1689346987881x423421005038588000/Beer_process.svg" alt="" />
                        </div>
                    </div>
                    <Footer/>
                    
                </div>
            )
            :
            <Loader />
        }
    </div>)
}