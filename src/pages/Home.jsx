import { useState, useEffect } from "react"
import axios from "axios"
import Loader from "../components/Loader"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home(){
    const [beers, setBeers] = useState(null)
    useEffect(() =>{
        axios.get("https://67152b2b33bc2bfe40b99db8.mockapi.io/api/city-traveler/cars")
            .then(res => setBeers(res.data))
    }, [])

    return(
        <div>
            {
                beers ?
                (
                <div >
                    <Navbar />
                    <Header beers={beers.slice(0,5)}/>
                    {/* {
                        beers.map(item => (<div>
                            <Link to={`/beer/${item.slug}`}>{item.name}</Link>
                            </div>))
                    } */}
                    {/* <Footer/> */}
                </div>
                )
                :
                Loader
            }
        </div>
    )
}