import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Badge } from "@mui/material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"

const CartWidget = () => {
    const { cart } = useContext(CartContext)

    return (
        <>
            <Link to={"/cart"}>
                <Badge badgeContent={cart.length} color="primary">
                    <ShoppingCartIcon
                        fontSize="small"
                        sx={{ color: "primary.lighter" }}
                    />
                </Badge>
            </Link>
        </>
    )
}

export default CartWidget
