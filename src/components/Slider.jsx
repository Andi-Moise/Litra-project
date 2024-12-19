import React, { useState } from 'react'
import { FaCircle } from "react-icons/fa";
import SliderI from '../assets/Slider.png';
import SliderII from '../assets/Slider2.svg';


export default function Slider({beers}) {
    const [imageIndex, setImageIndex] = useState(0)
    let bannerImages = beers.map(beer => beer.bannerimg)
    let beerImages = beers.map(beer => beer.beerimg)
    let description = beers.map(beer => beer.description)
    let name = beers.map(beer => beer.name)
    let alcohol = beers.map(beer => beer.alcohol)
    let bitterness = beers.map(beer => beer.bitterness)


  return (
    <div className='slider relative overflow-hidden'>
      <img src={SliderI} alt="" className='img1 absolute h-full w-full -left-[800px] z-10'/>
      
      
      <div className="part relative z-10">
            
            <div class="container2">
              <div className='flex flex-col gap-1 items-center'>
                <div class="title2">Litra</div>
                <div class="subtitle">{name[imageIndex].slice(5,20)}
                </div>
              </div>
                
                <div class="info">
                  <div className='box type2'>
                    <p>ALC</p>
                    <small>{alcohol[imageIndex]} %</small>
                  </div>
                  <div className='box '>
                      <p>BITTERNESS</p>
                      <small>{bitterness[imageIndex]} IBU</small>
                  </div>
                </div>
                {/* <div class="description ">
                    <p>{description[imageIndex]}</p>
                </div> */}
                
                <div className='indicators'>
                   {beers.map((_, index) => (
                        <button key={index} className="" onClick={()=> setImageIndex(index)}>{index === imageIndex ? <FaCircle className="indicator active"  /> : <FaCircle className="indicator"/>}</button>
                    ))}
                </div>
                
                
          </div>
      </div>
      <div className="part v2 leaf w-full h-full  flex relative bg-black opacity-90 ">
      
            {   
                         
                         beers.map(url => (
                             <img key={url} src={url.bannerimg} className="object-cover opacity-70" style={{translate: `${-100*imageIndex}%`}}/>
                         ))
                       
                     
            }
            
            {/* <div className="black-square absolute w-full h-full opacity-35 bg-black"></div> */}
            <div className=" image2 h-[800px] absolute left-2/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <img className=" h-full object-cover" src={beerImages[imageIndex]} alt="" />
            </div>
            
      </div>
    </div>
  )
}
