import React from 'react'
import Loader from "../components/Loader"
import Modal from "../components/Modal"
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useCart } from 'react-use-cart';
import { div, h1, p } from 'framer-motion/client';
  

export default function Cart() {
    let {
      isEmpty,
      totalUniqueItems,
      items,
    totalItems,
  cartTotal,
updateItemQuantity,
removeItem,
emptyCart} = useCart()
// if(isEmpty) return <h1>Ypur CArt is Empty</h1>
// items = []
    const [showLoginMenu, setShowLoginMenu] = useState(false)
console.log(items)
  return (
    // <div>
    //     {
    //             cart ?
    //             (
                    <div className='modal flex items-center '>
                    <>
                    <Modal title={"Log In"} showModal={showLoginMenu} setShowModal={setShowLoginMenu}>
                    
                    <div className='shop'>
                    <div className='top flex justify-center items-center flex-col'>
                        <h1>Cosul Dvs.</h1>
                        <div className='aux'>
                            <small>Cart ({})</small>
                            <p>MDL 35</p>
                        </div>
                    </div>
                    <div className="item">
                        {/* {
                            items.map((test)=>{
                              return(
                                <div>
                                    <p>{test.name}</p>
                                    <p>{test.price}</p>
                                </div>
                                
                              )
                              
                            })
                        } */}
                    </div>
                    <div className='livrare'>
                        <small>Total:</small>
                        <p className=''>MDL 50</p>
                    </div>
                    <p className='promo'>Folositi promotia la finalizarea comenzii</p>
                    <p className="comanda">Plaseaza comanda</p>
                    
                    <div></div>
                    
                    <button className="p-4 bg-green-500 text-white">LogIn</button>
                    </div>
                    
                  </Modal>
                    </>
                    
                  <FaShoppingCart onClick={()=>setShowLoginMenu(true)}  className="text-base text-white  w-fit h-fit" />
                </div>
            //     )
            //     :
            //     <Loader />
            // }
            // </div>
   
  )
}
// import React from 'react';
// import { useCart } from '../context/CartContext';

// export default function Cart() {
//   const { cart, removeFromCart } = useCart();

//   return (
//     <div className="cart-container">
//       <h1>Cosul Dvs.</h1>
//       {cart.length === 0 ? (
//         <p>Coșul este gol.</p>
//       ) : (
//         cart.map((item, index) => (
//           <div key={index} className="cart-item">
//             <img src={item.catalogimg} alt={item.name} className="cart-item-image" />
//             <div className="cart-item-details">
//               <h2>{item.name}</h2>
//               <p>{item.price} MDL</p>
//               <button
//                 onClick={() => removeFromCart(item.slug)}
//                 className="cart-item-remove"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
