import React from 'react'
import Loader from "../components/Loader"
import Modal from "../components/Modal"
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function Cart({aux}) {
    const [showLoginMenu, setShowLoginMenu] = useState(false)
//     let cart = []

//     function addToCart(){
//       const itemCartBtns = document.getElementsByClassName("item-cart-btn")
  
//       Array.from(itemCartBtns).forEach(carBtn =>{
//           carBtn.addEventListener("click", ()=>{
//               let itemId = +carBtn.getAttribute("data-item-id")
//               let car = aux.find(car => car.id === itemId)
              
//               let cartItem = cart.find(carItem => carItem.id === car.id)
//               if (cartItem){
//                   cart = cart.map(c => {
//                       if(c.id === car.id){
//                           return{
//                               ...c,
//                               quantity: c.quantity +1
//                           }
//                       }
//                       return c
//                   })
//               } else{
//                   cart.push({
//                       ...car,
//                       quantity:1
//                   })
//               }
              
//               displayCart()
//           })
//       })
//   }
//   function displayCart(){
//     let carItemHTML = cart.map(carItem => `
//         <div class='cart-item' data-cart-item-id='${carItem.id}'>
//             <img src='images/${carItem.images[0]}' alt='Cart Item Image'>
//             <div>
//                 <h3>${carItem.make} ${carItem.model}</h3>
//                 <p>
//                     <i class="fa-solid fa-dollar-sign"></i>
//                     <span>${carItem.price}</span>
//                 </p>
//             </div>
//             <div>
//                 <button class="cart-item-btn cart-btn-minus">
//                     <i class="fa-solid fa-minus"></i>
//                 </button>
                
//                 <p>${carItem.quantity}</p>
//                 <button class="cart-item-btn cart-btn-plus">
//                     <i class="fa-solid fa-plus"></i>
//                 </button>
//             </div>
//             <div>
//                 <button class="cart-item-btn cart-btn-delete">
//                     <i class="fa-solid fa-trash"></i>
//                 </button>
//             </div>
//         </div>
//         `)
//     cartMain.innerHTML = carItemHTML.join("")
//     getAllMinusBtns()
//     getAllPlusBtns()
//     getDeleteBtns()
// }
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
                            <small>1 produs</small>
                            <p>MDL 35</p>
                        </div>
                    </div>
                    <div className="item">
                        
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
