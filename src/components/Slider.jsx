import React, { useState } from 'react'
import { FaCircle } from "react-icons/fa";


export default function Slider({beers}) {
    const [imageIndex, setImageIndex] = useState(0)
    let bannerImages = beers.map(beer => beer.bannerimg)
    let beerImages = beers.map(beer => beer.beerimg)
    let description = beers.map(beer => beer.description)
    let name = beers.map(beer => beer.name)
    let alcohol = beers.map(beer => beer.alcohol)


  return (
    <div className='slider'>
      <div className="part">
            <div class="container2">
                <div class="title2">Litra</div>
                <div class="subtitle">{name[imageIndex].slice(5,20)}
                </div>
                <div class="info">
                  <div className=''>
                    <p>ALC</p>
                    <small>{alcohol[imageIndex]} %</small>
                  </div>
                <div>
                    <p>ALC</p>
                    <small>30%</small>
                </div>
                </div>
                <div class="description ">
                    <p>{description[imageIndex]}</p>
                </div>
                
                <div className='indicators'>
                   {beers.map((_, index) => (
                        <button key={index} className="" onClick={()=> setImageIndex(index)}>{index === imageIndex ? <FaCircle className="indicator active"  /> : <FaCircle className="indicator"/>}</button>
                    ))}
                </div>
                
                
        </div>
      </div>
      <div className="part w-full h-full overflow-hidden flex relative">
      {/* <img className=" h-full object-cover" src={beerImages[imageIndex]} alt="" /> */}
            {   
                         
                         beers.map(url => (
                             <img key={url} src={url.bannerimg} className="object-cover opacity-75" style={{translate: `${-100*imageIndex}%`}}/>
                         ))
                       
                     
            }
            
            <div className="balack-square absolute w-full h-full opacity-35 bg-black"></div>
            <div className=" image h-[800px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <img className=" h-full object-cover" src={beerImages[imageIndex]} alt="" />
            </div>
            
      </div>
    </div>
  )
}
