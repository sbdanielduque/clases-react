import { AppBar, Button, Toolbar } from "@mui/material"
import "./Navbar.css"
import CartWidget from "../../common/cartWidget/CartWidget"

const Navbar = () => {
    return (
        <AppBar
            sx={{
                bgcolor: "primary.litLighter",
            }}
            position="static"
        >
            <Toolbar className="navBar">
                <Button href="#">
                    <img
                        className="logo-img"
                        src="https://res.cloudinary.com/dzvzm9qcl/image/upload/v1711393060/_xZ1wDO-Kik0oa11NkN7k-transformed_vm0hje.png"
                        alt="logo"
                    />
                </Button>
                <Button
                    className="buttonNav"
                    color="inherit"
                    href="#tshirt"
                    sx={{ marginLeft: "auto", marginRight: "25px" }}
                >
                    T-shirts
                </Button>
                <Button
                    sx={{ marginRight: "25px" }}
                    color="inherit"
                    href="#pants"
                >
                    Pants
                </Button>
                <Button
                    sx={{ marginRight: "25px" }}
                    color="inherit"
                    href="#hoodies"
                >
                    Hoodies
                </Button>
                <Button
                    sx={{ marginRight: "25px" }}
                    color="inherit"
                    href="#hats"
                >
                    Hats
                </Button>
                <Button href="#cart">
                    <CartWidget />
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
