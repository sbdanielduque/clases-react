import { useContext } from "react"
import Cart from "./Cart"
import { CartContext } from "../../../context/CartContext"

const CartContainer = () => {
    const { cart, clearCart, deleteItem } = useContext(CartContext)
    return <Cart cart={cart} clearCart={clearCart} deleteItem={deleteItem} />
}

export default CartContainer
