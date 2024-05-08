import { Button } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

const Cart = () => {
    return (
        <div>
            <h1>Este es el carrito</h1>
            <h2>productoss agregados</h2>
            <Link to={"/checkout"}>
                <Button variant="contained">Finalizar compra</Button>
            </Link>
        </div>
    )
}

export default Cart
