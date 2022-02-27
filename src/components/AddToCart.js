import React, { useState, useContext } from 'react';
import { StoreContext } from "../store/store-context";

export default function AddToCart({ productId }) {
    const [{}, dispatch] = useContext(StoreContext);
    const [quantity, setQuantity] = useState(1);

    const changeQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const handleAddToCart = async () => {
        dispatch({ type: 'setLoading', payload: true });
        const response = await fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId:1,
                    date: "2020-02-03",
                    products:[{productId ,quantity }]
                }
            )
        })

        const addProductId = await response.json();

        if (addProductId) dispatch({ type: 'addToCart', payload: { productId, quantity }});

        dispatch({ type: 'setLoading', payload: false })
    }

    return (
        <div class="add-to-cart">
            <input
                type="number"
                name="quantity"
                min="1"
                className="add-quantity"
                value={ quantity }
                onChange={ changeQuantity }/>
            <button
                type="button"
                class="btn action-button add-to-cart-button"
                onClick={ handleAddToCart }>
                    Add To Cart
            </button>
        </div>
    )
}
