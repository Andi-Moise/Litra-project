import Header from "../components/Header"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"
import axios from "axios"
import Catalog from "../components/Catalog"

export default function Beers({}){
    const [catalog, setCatalog] = useState(null)
    useEffect(() =>{
        axios.get("https://67152b2b33bc2bfe40b99db8.mockapi.io/api/city-traveler/cars")
            .then(res => setCatalog(res.data))
    }, [])
    return(
        <div>
             {
                catalog ?
                (
                    <div >
                        <Navbar/>
                        <Catalog catalog={catalog}/>
                    </div>
                )
                :
                Loader
            }
            

        </div>
    )
}