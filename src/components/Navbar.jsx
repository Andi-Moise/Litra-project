import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png'
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
export default function Navbar(){
    return(
        <div className="w-full h-[80px] bg-dark-blue flex justify-center items-center">
            <div className="navbar container mx-auto flex justify-between relative">
                <div className="left flex gap-4">
                    <Link to="/beers" className="flex items-center gap-1 text-white">
                        <p className="font-medium">BERE</p>
                        <FaPlus className="text-sm text-yellow" />
                    </Link>
                    <Link to={""} className="flex items-center gap-1 text-white">
                        <p className="font-medium">EVENTS</p>
                        <FaPlus className="text-sm text-yellow" />
                    </Link>
                    <Link to={""} className="flex items-center gap-1 text-white">
                        <p className="font-medium">GALLERY</p>
                        <FaPlus className="text-sm text-yellow" />
                    </Link>
                    <Link to={""} className="flex items-center gap-1 text-white">
                        <p className="font-medium">BLOG</p>
                        <FaPlus className="text-sm text-yellow" />
                    </Link>
                </div>
                
                <div className="right left flex gap-4">
                <Link to={""} className="flex items-center gap-1 text-white">
                            <p className="font-medium">CONTACTE</p>
                            <IoMdArrowRoundForward className="text-sm text-yellow" />
                        </Link>
                        <Link to={""} className="flex items-center gap-1 text-white">
                            <FaShoppingCart  className="text-base text-white" />
                        </Link>
                        <Link to={""} className="flex items-center gap-1 text-white">
                            <FaLocationDot className="text-base text-white" />
                        </Link>
                        
                        <Link to={""} className="flex items-center gap-1 text-white">
                            <p className="font-medium">RO</p>
                            <IoIosArrowDown className="text-sm text-yellow" />
                        </Link>
                </div>
                <Link className="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" to="/"><img className="w-[140px] " src={Logo} alt="" /></Link>
                
            </div>
        </div>
    )
}