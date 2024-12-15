// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext(); // Creează contextul coșului

// export const useCart = () => useContext(CartContext); // Hook personalizat pentru utilizare

// export const CartProvider = ({ children }) => { // Provider-ul contextului
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     setCart((prevCart) => [...prevCart, item]);
//   };

//   const removeFromCart = (itemId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.slug !== itemId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// import { createContext, useContext, ReactNode } from "react";

// const ShoppingCartContext = createContext({})

// export function useShoppingCart(){
//   return useContext(ShoppingCartContext)
// }

// type ShoppingCartProviderProps = {
//   children: ReactNode
// }

// export function ShoppingCartProvider({ children }: ShoppingCartProviderProps){
//   return <ShoppingCartContext.Provider value={{}}>
//     {children}
//   </ShoppingCartContext.Provider>
// }