import './App.css';
import Products from './components/products/products';
import products from './mocks/products.json';
import Header from './components/header/Header';
import { useState, useContext } from 'react';
import { FiltersContext } from './contexts/filters';
import { Cart } from './components/Cart';
import {  CartProvider } from './contexts/cart';

function App() {

  const [productsApp] = useState(products.products);


  const { filters, setFilters } = useContext(FiltersContext);


  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  }

  const filteredProducts = filterProducts(productsApp);

  return (
    <CartProvider>
      <div className='App'>
        <Cart />
        <Header changeFilter={setFilters} />
        <Products products={filteredProducts} />
      </div>
    </CartProvider>
  );
}

export default App;
