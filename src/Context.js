import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        async function getPhotos() {
            const res = await fetch(url)
            const data = await res.json()
            setPhotos(data)
        }
        getPhotos()
    }, [])

    function toggleFavorite(id) {
        setPhotos(photos => {
            const newPhotosArr = photos.map(img => {
                return img.id === id ? {...img, isFavorite: !img.isFavorite} : img
            })
            return newPhotosArr
        })
    }

    function addCartItem(newItem) {
        setCartItems(prevItem => [...prevItem, newItem])
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    return (
        <Context.Provider value ={{photos, toggleFavorite, cartItems, addCartItem, removeFromCart, emptyCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}