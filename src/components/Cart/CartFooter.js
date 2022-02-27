import React from 'react'

export default function CartFooter({ cartSum }) {
  return (
    <div className="cart-line footer">
        <div className="line-title right">Total:</div>
        <div className="line-price">${ parseFloat(cartSum).toFixed(2) }</div>
        <div className="line-quantity"></div>
    </div>
  )
}
