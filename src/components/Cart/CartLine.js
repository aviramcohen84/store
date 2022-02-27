import React, { useState, useContext } from 'react';
import { StoreContext } from "../../store/store-context";

export default function CartLine({ item }) {
  const [{}, dispatch] = useContext(StoreContext);
  const [showRemove, setShowRemove] = useState(false);
  const toggleRemoeDialog = () => {
      setShowRemove(!showRemove);
  }

  const removeFromCart = async () => {
    dispatch({ type: 'setLoading', payload: true });
    const result = await fetch('https://fakestoreapi.com/carts/6', { method:"DELETE" })
    const productId = await result.json();

    if (productId) dispatch({ type: 'removeFromCart', payload: item.product.id });

    toggleRemoeDialog();
    dispatch({ type: 'setLoading', payload: false });
  }

  return (
    <div className="cart-line">
      { showRemove && <div className="cart-remove">
          <div>Are you sure?</div>
          <div>
            <span className="action-text" onClick={ removeFromCart }>Yes</span> / 
            <span className="action-text" onClick={ toggleRemoeDialog }>No</span></div>
      </div> }
      <div className="line-title">
          <div>{ item.product.title }</div>
          <div className="action-text" onClick={ toggleRemoeDialog }>remove</div>
      </div>
      <div className="line-price">${ parseFloat(item.product.price * item.quantity).toFixed(2) }</div>
      <div className="line-quantity">{ item.quantity }</div>
    </div>
  )
}
