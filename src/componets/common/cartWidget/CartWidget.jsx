import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Badge } from "@mui/material"

const CartWidget = () => {
    return (
        <>
            <Badge badgeContent={3} color="primary">
                <ShoppingCartIcon
                    fontSize="small"
                    sx={{ color: "primary.lighter" }}
                />
            </Badge>
        </>
    )
}

export default CartWidget
