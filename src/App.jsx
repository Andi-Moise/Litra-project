function App(){
  return(
    <div>
        
    </div>
  )
}

export default App

// import React from 'react';
// import { CartProvider } from '../context/CartContext';
// import BeerSm from '../components/BeerSm';
// import Cart from '../components/Cart';

// export default function App() {
//   const beer = {
//     name: "Flying Mamaliga",
//     price: 35,
//     alcohol: 4.6,
//     catalogimg: "https://via.placeholder.com/150",
//     slug: "flying-mamaliga",
//   };

//   return (
//     <CartProvider> {/* CartProvider trebuie să înconjoare toate componentele */}
//       <div className="app">
//         <h1>Băuturi</h1>
//         <BeerSm item={beer} />
//         <Cart />
//       </div>
//     </CartProvider>
//   );
// }