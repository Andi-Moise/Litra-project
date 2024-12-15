import { IoCloseOutline } from "react-icons/io5";
function Modal({title, children, showModal, setShowModal}){
    return(
        <div style={{
                display : showModal ? "flex" : "none"
            } } 
            className="fixed top-0 left-0 h-screen w-screen bg-black flex items-center justify-center bg-opacity-25">
            <div className="w-[350px] h-full p-4 pr-8 shadow-md flex flex-col gap-5 bg-white absolute right-0 ">
                <div className="flex justify-center items-center bg-gray w-fit p-2 rounded-3xl absolute top-4 left-4">
                    {/* <h1 className="font-medium">{title}</h1> */}
                    <IoCloseOutline className="cursor-pointer text-xl" onClick={()=>{ setShowModal(false)}}/>
                </div>
                
                <div>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal