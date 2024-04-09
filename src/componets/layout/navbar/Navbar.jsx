import { AppBar, Button, Grid, Toolbar } from "@mui/material"
import "./Navbar.css"
import CartWidget from "../../common/cartWidget/CartWidget"
import { size } from "@floating-ui/core"

const Navbar = () => {
    return (
        <Grid container>
            <Grid item sm={12}>
                <AppBar
                    sx={{
                        bgcolor: "primary.litLighter",
                    }}
                    position="static"
                >
                    <Toolbar
                        sx={{
                            marginRight: "75px",
                            marginLeft: "75px",
                        }}
                    >
                        <Button href="#">
                            <img
                                className="logo-img"
                                src="https://res.cloudinary.com/dzvzm9qcl/image/upload/v1712624031/Original_3_gbvbje.png"
                                alt="logo"
                            />
                        </Button>
                        <Button
                            color="inherit"
                            href="#tshirt"
                            sx={{
                                marginLeft: "auto",
                                marginRight: "25px",
                            }}
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
            </Grid>
        </Grid>
    )
}

export default Navbar
