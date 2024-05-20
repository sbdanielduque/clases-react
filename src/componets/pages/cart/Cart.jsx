import { Button } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

const Cart = ({ cart, deleteItem, total, clearCartAlert }) => {
    return (
        <div>
            <h1>Este es el carrito</h1>
            {cart.map((product) => (
                <div key={product.id} style={{ border: "solid 1px black" }}>
                    <h3>{product.name}</h3>
                    <h3>{product.price}</h3>
                    <h3>{product.quantity}</h3>
                    <button onClick={() => deleteItem(product.id)}>
                        eliminar
                    </button>
                </div>
            ))}
            <div>el total a pagar es: {total}</div>
            <Link to={"/checkout"}>
                <Button variant="contained">Finalizar compra</Button>
            </Link>
            <Button onClick={clearCartAlert} variant="outlined">
                Limpiar Carrito
            </Button>
        </div>
    )
}

export default Cart
