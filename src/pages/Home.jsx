import { useState, useEffect } from "react"
import axios from "axios"
import Loader from "../components/Loader"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import About from "../components/About"
import Slider from "../components/Slider"
import Bento from "../components/Bento"
import Empty from "../components/Empty"
import Thirsty from "../components/Thirsty"
import Header2 from "../components/Header2"
import Map from '../components/Map'
import Cart from "../components/Cart"
import History from "../components/History"

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
                <div className="home bg-white-dark">
                    <div color="overlay relative">
                        <Navbar className="z-50" beers={beers} />
                        {/* <Header beers={beers.slice(0,5)}/> */}
                        <Header2 className="z-0"/>
                        <Empty/>
                        
                        <About/>
                        
                        <Slider beers={beers.slice(0,5)}/>
                        <Empty/>
                        <Bento/>

                        <Empty/>
                        <History/>
                        <Empty/>
                        <Map/>
                        <Thirsty/>
                        
                        <Footer/>
                       
                    </div>
                    
                    {/* {
                        beers.map(item => (<div>
                            <Link to={`/beer/${item.slug}`}>{item.name}</Link>
                            </div>))
                    } */}
                    
                </div>
                )
                :
                Loader
            }
        </div>
    )
}