import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import CartSM from './CartSM';

export default function BeerSm({item}) {
  const quantity = 0
  function transfer(){
      
  }
  return (
    <div>
        
          
          <div className="card-container">
      <img
        src={item.catalogimg} 
        alt="Flying Mamaliga"
        className="card-image"
      />
      <div>
        <h2 className="card-title">{item.name}</h2>
        
      </div>
      
      
        <div class="info">
                  <div className='box type2'>
                    <p>Price</p>
                    <small>{item.price} MDL</small>
                  </div>
                  <div className='box '>
                      <p>Alcohol</p>
                      <small>{item.alcohol} %</small>
                  </div>
          </div>
          <div className='grid grid-cols-2 gap-2'>
          <Link to={`/beer/${item.slug}`}>
            <button className="card-button card-button-primary w-1/2 ">View More</button>
            </Link>
            <div>
            {/* {
              quantity === 0 ?( */}
                <button  className="w-1/2 item-cart-btn card-button card-button-secondary ">
                 Add to Cart
              </button>

              {/* ): null} */}
          </div>

          </div>
          
      
    </div>
                                                
                                           
        
    </div>
  )
}
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart } from "react-icons/fa";
// import { useCart } from '../context/CartContext';

// export default function BeerSm({ item }) {
//   const { addToCart } = useCart();

//   return (
//     <div className="card-container">
//       <img
//         src={item.catalogimg}
//         alt={item.name}
//         className="card-image"
//       />
//       <div>
//         <h2 className="card-title">{item.name}</h2>
//       </div>
//       <div className="info">
//         <div className="box type2">
//           <p>Price</p>
//           <small>{item.price} MDL</small>
//         </div>
//         <div className="box">
//           <p>Alcohol</p>
//           <small>{item.alcohol} %</small>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-2">
//         <Link to={`/beer/${item.slug}`}>
//           <button className="card-button card-button-primary w-1/2">View More</button>
//         </Link>
//         <button
//           className="w-1/2 item-cart-btn card-button card-button-secondary"
//           onClick={() => addToCart(item)}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
