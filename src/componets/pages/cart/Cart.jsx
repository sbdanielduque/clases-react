import { Box, Button, IconButton } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete"

const Cart = ({ cart, deleteItem, total, clearCartAlert }) => {
    return (
        <div>
            {cart.length > 0 ? (
                <>
                    {cart.map((product) => (
                        <div
                            key={product.id}
                            style={{ border: "solid 1px black" }}
                        >
                            <h3>{product.name}</h3>
                            <h3>{product.price.toFixed(2)}</h3>
                            <h3>{product.quantity}</h3>
                            <IconButton
                                onClick={() => deleteItem(product.id)}
                                aria-label="delete"
                                color="error"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    ))}
                    <div>your total is: {total}</div>
                    <Link to={"/checkout"}>
                        <Button variant="contained">Checkout</Button>
                    </Link>
                    <Button onClick={clearCartAlert} variant="outlined">
                        Clear cart
                    </Button>
                </>
            ) : (
                <Box
                    sx={{
                        height: 500,
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <h1>Your Cart</h1>
                    <h3>your cart is empty, go back and fill it up</h3>
                    <Link to={"/"}>
                        <Button variant="contained">Go Home</Button>
                    </Link>
                </Box>
            )}
        </div>
    )
}

export default Cart
