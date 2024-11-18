import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Loader from "../components/Loader"
import { Link } from "react-router-dom"

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
                <div>
                    {
                    <p>{beer.name}</p>
                    }
                </div>
            )
            :
            <Loader />
        }
    </div>)
}