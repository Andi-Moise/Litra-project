import React from 'react'
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"
import axios from "axios"
import Footer from "../components/Footer"
import {Calendar} from "@nextui-org/calendar";
import { FaArrowRight } from "react-icons/fa";

export default function Visits() {
    const [visit, setVisit] = useState(null)
    useEffect(() =>{
        axios.get("https://67152b2b33bc2bfe40b99db8.mockapi.io/api/city-traveler/cars")
            .then(res => setVisit(res.data))
    }, [])
    return (
    <div>
    {
       visit ?
       (
           <div className="visits bg-white-dark">
               <Navbar/>
                <div>
                    <div className="info">
                        <div className="part gap-4 border-r-2">
                            <h1>BREWERY AND DISTILLERY TOURS</h1>
                            <p className='w-3/4'>Whether you’re new to the world of craft beer or have always wanted to check out the Spoetzl Brewery, a visit to Shiner is a must-do experience. We strongly suggest reserving your spot for our engaging tours, which include everything from exploring hops to enjoying nature walks, and of course, savoring a variety of our delicious beers.</p>
                            <p className='hide w-3/4'>Space on each tour is limited, and reservations are strongly encouraged. Make yours below. Looking to book a private tour? Check out our options below</p>
                        </div>
                        <div className="part items-center gap-4">
                            <div className='picture'>
                            <img src="https://scontent.fkiv9-1.fna.fbcdn.net/v/t39.30808-6/461990025_2788454004654487_7758908789542305113_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=2SVy41DtIvYQ7kNvgHWU_ck&_nc_zt=23&_nc_ht=scontent.fkiv9-1.fna&_nc_gid=AflHK70TonnyzHbQ951RzAJ&oh=00_AYC7LVHwAUK_ZKEwCBaWWJftgcMzWCFEFdtqOTFNEYVNgw&oe=6766033B" alt="" />
                            </div>
                            <h2>PLAN YOUR VISIT</h2>
                            <p>Varnita Street 20/1, MD-2023, Chișinău</p>
                            <small>Tours offered every day!</small>
                            <small>See tour description for all available times.</small>
                            <p className='w-1/2 text-center'>Payment is taken when you arrive for your tour. We kindly ask to check-in for your tour at least 15 minutes prior to the start of your scheduled tour.</p>
                        </div>
                    </div>
                    <div className="booking relative overflow-hidden">
                        <h1 className='absolute text-[450px] text-white  inset-0 flex  justify-center  -top-[250px] text-center font-bold opacity-50 font-'>BOOKING</h1>
                        <div className='h-[200px]'>

                        </div>
                        <div className="all z-10 grid grid-cols-2">
                            <div className="part flex flex-col gap-8">
                                <div className="title">
                                    <h1>BOOKING</h1>
                                    <h1>FORM</h1>
                                </div>
                                <div>
                                <p>Need to schedule a private tour? <span>Contact us</span> </p>
                                <p>Need to cancel an existing reservation ? <span>Contact us</span> </p>
                                </div>
                                
                            </div>
                            <div className="part flex flex-col py-[200px] gap-6">
                                <div className="upper">
                                    <h2>YOUR CONTACT INFO</h2>
                                    <p>*Required</p>
                                </div>
                                <form class="max-w-md ">
                                        
                                        
                                        <div class="grid md:grid-cols-2 md:gap-6">
                                            <div class="relative z-0 w-full mb-5 group">
                                                <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-white bg-dark-blue border-0 border-b-2 border-white  focus:outline-none focus:ring-0 focus:border-white peer z-0" placeholder=" " required />
                                                <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10">First name</label>
                                            </div>
                                            <div class="relative z-0 w-full mb-5 group">
                                                <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-white bg-dark-blue border-0 border-b-2 border-white  focus:outline-none focus:ring-0 focus:border-white peer z-0" placeholder=" " required />
                                                <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-wwhite duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10">Last name</label>
                                            </div>
                                        </div>
                                        <div class="grid md:grid-cols-2 md:gap-6">
                                            <div class="relative z-0 w-full mb-5 group">
                                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-white bg-dark-blue border-0 border-b-2 border-white  focus:outline-none focus:ring-0 focus:border-white peer z-0" placeholder=" " required />
                                                <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10">Phone number (123-456-7890)</label>
                                            </div>
                                            <div class="relative z-0 w-full mb-5 group">
                                                <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-white bg-dark-blue border-0 border-b-2 border-white  focus:outline-none focus:ring-0 focus:border-white peer z-0" placeholder=" " required />
                                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10">Number of people (max 15)</label>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-4 pb-5">
                                    <Calendar aria-label="Date (No Selection)" />
                                    
                                </div>
                                        <button type="submit" class=" text-dark-blue bg-white hover:bg-dark-gray focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-base font- w-full sm:w-auto px-5 py-2.5 text-center flex items-center gap-2 font-semibold">COMPLETE RESERVATION <FaArrowRight /></button>
                                        </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
               
               <Footer/>
           </div>
       )
       :
       Loader
   }
   

</div>
  )
}
