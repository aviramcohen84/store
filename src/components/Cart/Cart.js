import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from "../../store/store-context";
import Loader from '../Loader';
import CartContent from './CartContent';
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';

export default function Cart() {
    const [state] = useContext(StoreContext);
    const [cartSum, setCartSum] = useState(0);

    useEffect(() => {
        calcualteCartSum();
    }, [state.cart])

    const calcualteCartSum = () => {
        let sum = 0;
        for (const item of state.cart) {
            sum += item.product.price * item.quantity
        }

        setCartSum(sum)
    }

    return (
        <div className="cart-container">
            <div className="section-content">
                <Loader isLoading={ state.isLoading } />
                <h4>Shopping Cart</h4>
                { state.cart.length === 0 ? <div className="empty-cart">You have no products on your cart</div> :
                <div className="cart-content">
                    <CartHeader />
                    <CartContent items={ state.cart } />
                    <CartFooter cartSum={ cartSum } />
                    <button class="btn action-button checkout-button">checkout</button>
                </div> }
            </div>
        </div>
    )
}
