import React, {useContext} from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [isHovered, ref] = useHover()

    const trashIconClassName = isHovered ? "fa-solid fa-trash-can" : "fa-regular fa-trash-can"

    return (
        <div className="cart-item">
            <i className={`${trashIconClassName} icon-trash`} onClick={() => removeFromCart(item.id)} 
                ref={ref}></i>
            <img src={item.url} className="cart-item-img img"></img>
            <p className="cart-item-price">$ 5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })
}

export default CartItem