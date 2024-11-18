import { useState } from "react"
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
export default function Header({beers}){
    const [imageIndex, setImageIndex] = useState(0)
    let bannerImages = beers.map(beer => beer.bannerimg)
    let beerImages = beers.map(beer => beer.beerimg)
    

    return(
        <div className="header h-screen w-full flex relative overflow-hidden ">
            <div className="left w-1/2 bg-dark-blue flex justify-center items-center text-white flex-col gap-14 relative ">
                <div className="text flex flex-col items-center ">
                    <h1 className="text-8xl font-bold tracking-wider">RADICAL</h1>
                    <h1 className="text-8xl font-bold tracking-wider">BEER FOR</h1>
                    <h1 className="text-8xl font-bold tracking-wider">RADICAL</h1>
                    <h1 className="text-8xl font-bold tracking-wider">PEOPLE</h1>
                </div>
                <div className="discover flex items-center py-2 px-4 rounded-xl bg-yellow gap-2">
                    <p className="text-xl font-bold text-dark-blue">DESCOPERA</p>
                    <IoMdArrowRoundForward className="text-dark-blue text-xl" />
                </div>

                <div className="flex items-center gap-4">
                    {beers.map((_, index) => (
                        <button key={index} className="" onClick={()=> setImageIndex(index)}>{index === imageIndex ? <FaCircle className="text-yellow text-xs" /> : <FaCircle className="text-white text-xs"/>}</button>
                    ))}
                </div>
                
                
            </div>
            <div className="w-1/2 bg-black" >
                {/* <img className="w-full h-full object-cover  opacity-75 " src={bannerImages[imageIndex]} alt="" /> */}
                <div className="w-full h-full overflow-hidden flex">
                    {   
                         
                            beers.map(url => (
                                <img key={url} src={url.bannerimg} className="object-cover opacity-75" style={{translate: `${-100*imageIndex}%`}}/>
                            ))
                          
                        
                    }
                </div>
                {/* <button onClick={showPrevImageBanner}>Left</button>
                <button onClick={showNextImageBanner}>Right</button> */}
            </div>
            <div className=" image h-[800px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <img className=" h-full object-cover" src={beerImages[imageIndex]} alt="" />
            </div>
            

        </div>
    )
}