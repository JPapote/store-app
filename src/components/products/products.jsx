import { useCart } from '../../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from '../icon';
import './Products.css';
const Products = ({ products }) => {
    const { addToCart, cart, removeProduct } = useCart()

    const checkProductInCart = (product) => {
        return cart.some(res => res.id === product.id)
  
    }
    return (
        <div className="products">
            <ul >
                {
                    products.slice(0, 10).map(product => {
                        const isProductCart = checkProductInCart(product);
                        return (
                            <li key={product.id} >
                                <img src={product.thumbnail} alt={product.name} />
                                <div>
                                    <strong>  {product.title} </strong> - ${product.price}
                                </div>
                                <div>
                                    <button style={isProductCart ? {background:'lightcoral'} : {background:'cornflowerblue'}} onClick={() => isProductCart ? removeProduct(product) : addToCart(product)}>
                                        {isProductCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Products;