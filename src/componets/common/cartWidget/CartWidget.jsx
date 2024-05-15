import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Badge } from "@mui/material"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const CartWidget = () => {
    const { getTotalItems } = useContext(CartContext)
    let total = getTotalItems()
    return (
        <>
            <Badge badgeContent={total} color="primary">
                <ShoppingCartIcon
                    fontSize="small"
                    sx={{ color: "primary.lighter" }}
                />
            </Badge>
        </>
    )
}

export default CartWidget
