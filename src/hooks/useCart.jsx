import { useContext } from "react"
import { CartConext } from "../contexts/cart"

export const useCart = () =>{
    const context = useContext(CartConext);

    if(context === undefined){
        throw new Error('useCart must be used within a CartProvided');
    }


    return context;
}