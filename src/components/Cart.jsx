import './Cart.css'
import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './icon';
import { useCart } from '../hooks/useCart';
import { CartItem } from './cartItem';


export function Cart() {
    const cartCheckboxId = useId();
    const {cart, clearProduct} = useCart()
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    <li style={{listStyle:'none'}}>
                       {cart.map(product => {
                       return(
                        <CartItem key={product.id} product={product} />
                       )})}
                    </li>
                </ul>
                <button onClick={() => clearProduct()}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}
