import { useCart } from "../hooks/useCart"

export const CartItem = ({ product }) => {
    const { addToCart } = useCart();
    return (
        <>
            <img
                src={product.thumbnail}
                alt={product.category} />
            <div>
                <strong>{product.title}</strong> - ${product.price}
            </div>
            <footer className=''>
                <small>
                    Qty:{product.quantity}
                </small>
                <button onClick={() => addToCart(product)}>+</button>
            </footer>
        </>
    )
}