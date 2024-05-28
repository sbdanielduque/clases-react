import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete"
import CartTable from "../../common/cartTable/CartTable"

const Cart = ({ cart, deleteItem, total, clearCartAlert }) => {
    return (
        <div>
            {cart.length > 0 ? (
                <>
                    <CartTable
                        cart={cart}
                        deleteItem={deleteItem}
                        total={total}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{ marginTop: "50px", marginBottom: "50px" }}
                        >
                            Your total is: {total.toFixed(2)}
                        </Typography>
                        <div>
                            <Link to={"/checkout"}>
                                <Button
                                    variant="contained"
                                    sx={{ marginRight: "25px" }}
                                >
                                    Checkout
                                </Button>
                            </Link>
                            <Button onClick={clearCartAlert} variant="outlined">
                                Clear cart
                            </Button>
                        </div>
                    </Box>
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
