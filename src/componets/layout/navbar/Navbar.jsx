import { AppBar, Button, Toolbar } from "@mui/material"
import "./Navbar.css"

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Button>
                    <img
                        className="logo-img"
                        src="https://res.cloudinary.com/dzvzm9qcl/image/upload/v1711393060/_xZ1wDO-Kik0oa11NkN7k-transformed_vm0hje.png"
                        alt="logo"
                    />
                </Button>
                <Button
                    color="inherit"
                    href="#tshirt"
                    sx={{ marginLeft: "auto" }}
                >
                    T-shirts
                </Button>
                <Button color="inherit" href="#pants">
                    Pants
                </Button>
                <Button color="inherit" href="#hoodies">
                    Hoodies
                </Button>
                <Button color="inherit" href="#hats">
                    Hats
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
