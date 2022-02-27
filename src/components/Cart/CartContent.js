import React from 'react';
import CartLine from './CartLine';

export default function CartContent({ items }) {
    return items.map((item) => {
      return (
        <CartLine item={ item } />
      );
  })
}
