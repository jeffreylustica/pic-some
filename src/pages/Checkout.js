import React, {useState, useContext} from "react";
import CartItem from "../components/CartItem";
import {Context} from "../Context"

export default function Checkout() {
    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemsElement = cartItems.map(item => {
        return <CartItem key={item.id} item={item}/>
    })

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            emptyCart()
            setButtonText("Place Order")
        }, 3000)
    }

    return (
        <div className="section-checkout">
            <div className="container main-container">
                <h2 className="section-checkout-header">Check out</h2>
                <div className="cart-items">
                    {cartItemsElement}
                </div>
                <h2 className="cart-total">Total: {totalCostDisplay}</h2>
                {cartItems.length > 0 ?
                    <div className="checkout-btn-flex">
                        <button className="btn-order" onClick={placeOrder}>{buttonText}</button>
                    </div> : 
                    <p className="empty-cart-note">You have no items in your cart.</p>
                }
            </div>
        </div>
    )
}