import { useState } from 'react';
import './Filters.css'
const Filters = ({ onChange }) => {
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('');

    const handlerChangeMinPrice = (event) => {
        setPrice(event.target.value);
        onChange(prevState => ({     
                ...prevState,
                minPrice: event.target.value
        }))
    }

    const handlerChangeCategory = (event) => {
        setCategory(event.target.value)
        onChange(prevState => ({     
            ...prevState,
            category:  event.target.value
    }))
    }

    return (
        <div className="filters">
            <div className="filters__item">
                <label htmlFor="price">Precio a partir de: </label>
                <input type="range" className="filters__search"
                    min={0} max={1000} onChange={handlerChangeMinPrice}
                />
                <span>{price}</span>
            </div>
            <div className="filters__item">
                <label htmlFor="category">Categoria</label>
                <select id="Caterogy" className="filters__select" onChange={handlerChangeCategory}>
                    <option value="all" selected="true" >All</option>
                    <option value="laptops">Laptos</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;