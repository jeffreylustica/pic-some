import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function Image({className, img}) {
    const {toggleFavorite, cartItems, addCartItem, removeFromCart} = useContext(Context)
    const [isHovered, ref] = useHover()

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if (alreadyInCart) {
            return <i className="fa-solid fa-square-plus icon-cart" onClick={() => removeFromCart(img.id)}></i>
        } else if(isHovered) {
            return <i className="fa-regular fa-square-plus icon-cart" onClick={() => addCartItem(img)}></i>
        }
    }

    function favoriteIcon() {
        if (img.isFavorite) {
            return <i className="fa-solid fa-heart icon-favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(isHovered) {
            return <i className="fa-regular fa-heart icon-favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    return (
        <div className={`${className} image-container`}
            ref = {ref}
        >
            {favoriteIcon()}
            {cartIcon()}
            <img src={img.url} className="image-grid" />
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image