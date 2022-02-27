import React, { useContext } from 'react';
import { StoreContext } from "../store/store-context";
import Product from './Product';
import Loader from './Loader';

export default function Products({ products }) {
  const [state] = useContext(StoreContext);

  const filteredProduct = () => {
    if (!state.filters.length) return products;

    return products.filter((product) => {
      const applyFilter = (by, value) => {
        if (!state.filters.some(f => f.filterBy === by)) return true;

        for (const filter of state.filters.filter(f => f.filterBy === by)) {
          if (value >= filter.higher && value <= filter.lower) return true;
        }

        return false;
      }

      return applyFilter('price', product.price) && applyFilter('rating', product.rating.rate);
    })
  }

  return (
    <div className="product-container">
      <div className="product-list">
        <Loader isLoading={ state.isLoading } />
        { filteredProduct().map((product) => {
            return <Product product={ product }/>
        }) }
      </div>
    </div>
  )
}
