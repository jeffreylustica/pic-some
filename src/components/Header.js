import React from "react"
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div className="header">
            <div className="container flex-container">
                <Link to="/" className="site-title">
                    <h1 className="site-title">Pic Some</h1>
                </Link>
                <Link to="/checkout">
                    <i className="fa-solid fa-cart-shopping header-cart-icon"></i>
                </Link>
            </div>
        </div>
    )
}