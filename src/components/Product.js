import React from 'react';
import AddToCart from './AddToCart';
import Rating from './Rating';

export default function Product({ product }) {
    return (
        <div key={ product.id } className="product">
            <div className="product-content">
                <img className="product-image" src={ product.image} height={ 100 }/>
                <div className="product-title" title={ product.title }>
                    <span className="limit2">{ product.title }</span>
                </div>
                <div className="product-price">${ product.price }</div>
                <Rating rating={ product.rating } />
            </div>
            <AddToCart productId={ product.id }/>
        </div>
    )
}
