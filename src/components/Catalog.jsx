import Header from "../components/Header"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"

import { useState, useEffect } from "react";
import BeerSm from "./BeerSm";
// import { CartProvider } from './CartContext';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Cart from './Cart';


export default function Catalog({catalog}){
    const[catalogBeers, setCatalogBeers] = useState(catalog)

    const rangeInput = document.querySelectorAll(".range-input input")
    const priceInput = document.querySelectorAll(".price-input input")
    const progress = document.querySelector(".slider .progress")
    
    let priceGap =1000

    
    priceInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput[0].value)
            let maxVal = parseInt(rangeInput[1].value)

            if((maxVal - minVal >= priceGap)&& maxVal<=100){
                if(e.target.className === "input-min"){
                    rangeInput[0].value = minVal
                    progress.style.left = (minVal / rangeInput[0].max) *100 + "%"
                } else{
                    rangeInput[1].value = maxVal
                    progress.style.right = 100 -(maxVal / rangeInput[0].max) *100 + "%"
                }
            }

            
        })
    })
    rangeInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput[0].value)
            let maxVal = parseInt(rangeInput[1].value)

            if(maxVal - minVal < priceGap){
                if(e.target.className === "range-min"){
                    rangeInput[0].value = maxVal - priceGap
                } else{
                    rangeInput[1].value = minVal + priceGap
                }
            }else{
                priceInput[0].value = minVal
                priceInput[1].value =maxVal
                progress.style.left = (minVal / rangeInput[0].max) *100 + "%"
            progress.style.right = 100 -(maxVal / rangeInput[0].max) *100 + "%"
            }

            
        })
    })

    const [filters, setFilters] = useState({
        type: "",
        minPrice: 0,
        maxPrice: 0
    })
    
    useEffect(() => {
        let tempCatalog = catalog

        if (filters.type !== "") {
            tempCatalog = tempCatalog.filter(beer => beer.type.toLowerCase() === filters.type.toLowerCase())
        }

        

        if (filters.minPrice > 0) {
            tempCatalog = tempCatalog.filter(beer => beer.price>= +filters.minPrice)
        }

        if (filters.maxPrice > 0) {
            tempCatalog = tempCatalog.filter(beer => beer.price <= +filters.maxPrice)
        }

        setCatalogBeers(tempCatalog)
    }, [filters])
    
    return(
        <div>
             {
                catalog ?
                (
                    <div className="">
                        <div className="catalog">
                            <div className="side">
                                {/* <h1 className="font-coustard text-2xl text-dark-blue">Filters</h1> */}
                                <div>
                                    <p className="title font-coustard text-2xl text-dark-blue">Types</p>
                                    <select onChange={(ev) => {
                                        setFilters({...filters, type: ev.target.value})
                                    }} className="block py-2.5 px-0 text-sm text-dark-blue bg-transparent border-0 border-b-2 border-dark-blue dark:text-dark-blue dark:border-dark-blue focus:outline-none focus:ring-0 focus:border-dark-blue peer w-[100px]">
                                        <option value="">All</option>
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                        
                                    </select>
                                    
                                    <p className="title font-coustard text-2xl text-dark-blue pt-5">Price</p>
                                    <div>
                                        <div className="price-input pt-4">
                                            {/* <input type="number" placeholder="minPrice" onChange={(ev) => setFilters({...filters, minPrice: ev.target.value})} value={filters.minPrice} className="input-min"/>
                                            <input type="number" placeholder="maxPrice" onChange={(ev) => setFilters({...filters, maxPrice: ev.target.value})} value={filters.maxPrice} className="input-max"/> */}
                                            <div class="relative z-0 w-full mb-5 group ">
                                            <input type="number" onChange={(ev) => setFilters({...filters, minPrice: ev.target.value})} value={filters.minPrice} name="floating_email" id="floating_email" className="input-min block py-2.5 px-0 w-[150px] text-sm text-dark-blue bg-white border-0 border-b-2 border-dark-blue  focus:outline-none focus:ring-0 focus:border-white peer z-0" placeholder=" " required />
                                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-dark-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10">Min Price</label>
                                            </div>
                                            <div class="relative z-0 w-full mb-5 group">
                                            <input type="number" nChange={(ev) => setFilters({...filters, maxPrice: ev.target.value})} value={filters.maxPrice} name="floating_email" id="floating_email" className="input-max block py-2.5 px-0 w-[150px] text-sm text-dark-blue bg-white border-0 border-b-2 border-dark-blue  focus:outline-none focus:ring-0 focus:border-white peer z-0" placeholder=" " required />
                                            <label for="floating_email" className=" peer-focus:font-medium absolute text-sm text-dark-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10">Max Price</label>
                                        </div>
                                        </div>
                                        

                                        
                                    </div>
                                </div>
                                {/* <button className="text-white bg-dark-blue hover:bg-dark-blue focus:ring-4 focus:outline-none focus:ring-dark-blue font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Reset</button> */}
                            </div>
                            <div className="main">
                                {
                                     
                                        catalogBeers.map((test, index) =>{
                                            return(
                                                <BeerSm test={test} key={index} />
                                            )
                                            
                                        } )
                                    
                                }
                                
                            </div>
                            
                            
                        </div>
                    </div>
                )
                :
                Loader
            }
            

        </div>
    )
}