import { useContext } from "react"
import Cart from "./Cart"
import { CartContext } from "../../../context/CartContext"
import Swal from "sweetalert2"

const CartContainer = () => {
    const { cart, clearCart, deleteItem, totalPrice } = useContext(CartContext)
    const clearCartAlert = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1000,
                })
            }
        })
    }
    let total = totalPrice()
    return (
        <Cart
            cart={cart}
            clearCart={clearCart}
            deleteItem={deleteItem}
            total={total}
            clearCartAlert={clearCartAlert}
        />
    )
}

export default CartContainer
