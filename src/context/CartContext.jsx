import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProduct = (product) => {
        let ifExist = isInCart(product.id)
        if (ifExist) {
            let newCartArray = cart.map((elemento) => {
                if (elemento.id === product.id) {
                    return { ...elemento, quantity: product.quantity }
                } else {
                    return elemento
                }
            })
            setCart(newCartArray)
        } else {
            setCart([...cart, product])
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const deleteItem = (id) => {
        const newArray = cart.filter((product) => product.id !== id)
        setCart(newArray)
    }

    const isInCart = (id) => {
        let checkProd = cart.some((product) => product.id === id)
        return checkProd
    }

    const getQuantityById = (id) => {
        let product = cart.find((elemento) => elemento.id === id)
        return product?.quantity
    }

    const totalPrice = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + elemento.quantity * elemento.price
        }, 0)
        return total
    }

    const getTotalItems = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + elemento.quantity
        }, 0)
        return total
    }

    let data = {
        cart,
        addProduct,
        clearCart,
        deleteItem,
        getQuantityById,
        totalPrice,
        getTotalItems,
    }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export default CartContextProvider
