import { createContext, useState } from "react";

export const CartConext = createContext();

export function CartProvider({children}){
   
    const [cart, setCart] = useState([]);

    const addToCart = product =>{
        const productInCartIndex = cart.findIndex(res => res.id === product.id)

        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1;
            return setCart(newCart)
        }

        setCart( prevState => [
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ])
    }

   const removeProduct = (product) => {
    setCart(prevState => prevState.filter( item => item.id !== product.id))
   }

    const clearProduct = () =>{
        setCart([]);
    }

    return(
        <CartConext.Provider value={{cart, addToCart, clearProduct, removeProduct}}>
            {children}
        </CartConext.Provider>
    )
 }