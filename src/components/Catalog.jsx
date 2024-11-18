import Header from "../components/Header"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"

import { useState, useEffect } from "react";
import BeerSm from "./BeerSm";



export default function Catalog({catalog}){
    const[catalogBeers, setCatalogBeers] = useState(catalog)

    const [filters, setFilters] = useState({
        type: "",
        ratings: [],
        minPrice: 0,
        maxPrice: 0
    })
    const manageRating = (ev) => {
        const ratingValue = +ev.target.value
        let updatedRatings

        if (filters.ratings.includes(ratingValue)) {
            updatedRatings = filters.ratings.filter(rating => rating !== ratingValue)
        } else {
            updatedRatings = [...filters.ratings, +ratingValue]
        }
        
        setFilters({...filters, ratings: updatedRatings})
    }
    useEffect(() => {
        let tempCatalog = catalog

        if (filters.type !== "") {
            tempCatalog = tempCatalog.filter(beer => beer.type.toLowerCase() === filters.type.toLowerCase())
        }

        // if (filters.ratings.length > 0) {
        //     tempCities = tempCities.filter(city => filters.ratings.includes(city.rating))
        // }

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
                    <div >
                        <div className="catalog">
                            <div className="side">
                                <h1 className="">Filters</h1>
                                <div>
                                    <select onChange={(ev) => {
                                        setFilters({...filters, type: ev.target.value})
                                    }}>
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                        <option value="">All</option>
                                    </select>
                                    {/* <div>
                                        <label htmlFor="rating-1">
                                            Rating 1
                                            <input type="chackbox" name="rating[]" id="rating-1"  value="1"/>
                                        </label>
                                        <label htmlFor="rating-2">
                                            Rating 2
                                            <input type="chackbox" name="rating[]" id="rating-2"  value="2"/>
                                        </label>
                                        <label htmlFor="rating-3">
                                            Rating 3
                                            <input type="chackbox" name="rating[]" id="rating-3"  value="3"/>
                                        </label>
                                        <label htmlFor="rating-4">
                                            Rating 4
                                            <input type="chackbox" name="rating[]" id="rating-4"  value="4"/>
                                        </label>
                                        <label htmlFor="rating-1">
                                            Rating 5
                                            <input type="chackbox" name="rating[]" id="rating-5"  value="5"/>
                                        </label>
                                    </div> */}

                                    <div>
                                        <input type="number" placeholder="minPrice" onChange={(ev) => setFilters({...filters, minPrice: ev.target.value})} value={filters.minPrice}/>
                                        <input type="number" placeholder="maxPrice" onChange={(ev) => setFilters({...filters, maxPrice: ev.target.value})} value={filters.maxPrice}/>

                                        <div className="slider">
                                            <div className="progress">

                                            </div>
                                        </div>
                                        <div className="range-input">
                                            <input type="range" className="range-min" min="0" max="100" value={filters.minPrice} />
                                            <input type="range" className="range-max" min="0" max="100" value={filters.maxPrice} />
                                        </div>
                                    </div>
                                </div>
                                <button>Reset</button>
                            </div>
                            <div className="main">
                                {
                                     
                                        catalogBeers.map(item => <BeerSm item={item} />)
                                    
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