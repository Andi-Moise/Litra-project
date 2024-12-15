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
    let cart = []

function addToCart(){
    const itemCartBtns = document.getElementsByClassName("item-cart-btn")

    Array.from(itemCartBtns).forEach(carBtn =>{
        carBtn.addEventListener("click", ()=>{
            let itemId = +carBtn.getAttribute("data-item-id")
            let car = catalog.find(car => car.id === itemId)
            
            let cartItem = cart.find(carItem => carItem.id === car.id)
            if (cartItem){
                cart = cart.map(c => {
                    if(c.id === car.id){
                        return{
                            ...c,
                            quantity: c.quantity +1
                        }
                    }
                    return c
                })
            } else{
                cart.push({
                    ...car,
                    quantity:1
                })
            }
            
            displayCart()
        })
    })}
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