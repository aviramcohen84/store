import React, { useEffect, useContext } from 'react';
import { StoreContext } from "../store/store-context";
import Products from './Products';
import Cart from './Cart/Cart';
import Filters from './Filters';

function App() {
  const [state, dispatch] = useContext(StoreContext);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const results = await response.json();

    dispatch({ type: 'setProducts', payload: results });
    dispatch({ type: 'setLoading', payload: false });
  }

  return (
    <div className="store">
      <Cart />
      <Products products={ state.products }/>
      <Filters />
    </div>
  );
}

export default App;
