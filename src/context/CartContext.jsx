import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProduct = (product) => {
        setCart([...cart, product])
    }

    const clearCart = () => {
        setCart([])
    }

    const deleteItem = (id) => {
        const newArray = cart.filter((product) => product.id !== id)
        setCart(newArray)
    }

    let data = { cart, addProduct, clearCart, deleteItem }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export default CartContextProvider
