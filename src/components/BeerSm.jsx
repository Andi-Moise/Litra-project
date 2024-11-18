import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";

export default function BeerSm({item}) {
  return (
    <div>
        <Link to={`/beer/${item.slug}`}>
                                            <div className="box">
                                                <div className="images">
                                                    <img src={item.catalogimg} alt="" />
                                                </div>
                                                <div className="text">
                                                    <p className="title">{item.name}</p>
                                                    <p className="aroma">{item.aroma}</p>
                                                </div>
                                                <div className="icon">
                                                    <FaRegHeart />
                                                </div>
                                                

                                            </div>
                                                
                                           
                                        </Link>
    </div>
  )
}
