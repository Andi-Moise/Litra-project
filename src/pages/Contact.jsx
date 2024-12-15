import Header from "../components/Header"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"
import axios from "axios"
import SliderI from '../assets/Slider.png';
import FAQ from "../components/FAQ"

export default function Beers({}){
    const [contact, setContact] = useState(null)
    useEffect(() =>{
        axios.get("https://67152b2b33bc2bfe40b99db8.mockapi.io/api/city-traveler/cars")
            .then(res => setContact(res.data))
    }, [])
    return(
        <div>
             {
                contact ?
                (
                    <div className="contact bg-white-dark">
                        <Navbar/>

                        <div className="gap h-[50px]"></div>
                        <div className="devide">
                            
                            <div className="half type1">
                                <div className="small">
                                <h1>Contact Us</h1>
                                <p className="w-1/2 s">Email, call, or complete the form to learn how Litra can help you</p>
                                <p className="s">info@litra.io</p>
                                <p className="s">022 000 000 </p>
                                <p className="customer">Customer Suport</p>
                                </div>
                                
                                <div className="big">
                                <div className="col">
                                    <h2>Customer Suport</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus.</p>
                                </div>
                                <div className="col">
                                    <h2>Customer Suport</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus.</p>
                                </div>
                                <div className="col">
                                    <h2>Customer Suport</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus.</p>
                                </div>
                                </div>
                               
                            </div>
                            <div className="half type2">
                                <div className="box">
                                    <h1>Get in Touch</h1>
                                    <p>You can reach ud anytime</p>
                                    

                                    <form class="max-w-md ">
                                        <div class="relative z-0 w-full mb-5 group">
                                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-black bg-white border-0 border-b-2 border-black  focus:outline-none focus:ring-0 focus:border-black peer z-0" placeholder=" " required />
                                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10">Email address</label>
                                        </div>
                                        
                                        <div class="grid md:grid-cols-2 md:gap-6">
                                            <div class="relative z-0 w-full mb-5 group">
                                                <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer z-0" placeholder=" " required />
                                                <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10">First name</label>
                                            </div>
                                            <div class="relative z-0 w-full mb-5 group">
                                                <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer z-0" placeholder=" " required />
                                                <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10">Last name</label>
                                            </div>
                                        </div>
                                        <div class="grid md:grid-cols-2 md:gap-6">
                                            <div class="relative z-0 w-full mb-5 group">
                                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer z-0" placeholder=" " required />
                                                <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10">Phone number (123-456-7890)</label>
                                            </div>
                                            <div class="relative z-0 w-full mb-5 group">
                                                <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer z-0" placeholder=" " required />
                                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10">Company (Ex. Google)</label>
                                            </div>
                                        </div>
                                        <div class="relative z-0 w-full mb-5 group">
                                            <input type="description" name="floating_email" id="floating_email" className="h-[100px] block py-2.5 px-0 w-full text-sm text-black bg-white border-0 border-b-2 border-black  focus:outline-none focus:ring-0 focus:border-black peer z-0" placeholder=" " required />
                                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10">Description</label>
                                        </div>
                                        <button type="submit" class=" text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                                        </form>


                                </div>
                                
                            </div>
                        </div>
                        <div className="gap h-[50px]"></div>
                        <div className="locate h-screen">
                            <img src={SliderI} alt="" className='absolute h-full w-full   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'/>
                            <div className="grid container grid-cols-2 h-fit mx-auto  rounded-lg gap-5 mx-auto">
                            <div className="part1 z-10">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.512189325876!2d28.898644899999997!3d46.990915199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97bdf9b813a13%3A0x9106dd42cb63aaba!2sLitra%20Brewing%20Company!5e0!3m2!1sen!2s!4v1734212272684!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade z-10"></iframe>
                            </div>
                            <div className="part2 z-10">
                                <div className="more flex flex-col gap-1">   
                                <p>Our Location</p>
                                <h1>Connecting Near and Far</h1>
                                </div>
                                
                                <div className="text flex flex-col gap-2 items-start justify-start">
                                    <h2>Locations</h2>
                                    <div className="more flex flex-col gap-1">
                                        <small>Strada Banulescu Bodoni</small>
                                        <small>Bulevardul Decebal</small>
                                        
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                        </div>
                        <div className="gap h-[50px]"></div>
                        <div className="faq">
                            <div className="box1">
                                <p>FAQ</p>
                                <h1>Do you have any questions for us ?</h1>
                                <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsum dolor sit amet consectetur, adipisicing elit..</small>
                            </div>
                            <div className="box2">
                                    
                                
                                    
                                    <FAQ/>


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