import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Badge } from "@mui/material"
import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        <>
            <Link to={"/cart"}>
                <Badge badgeContent={3} color="primary">
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
