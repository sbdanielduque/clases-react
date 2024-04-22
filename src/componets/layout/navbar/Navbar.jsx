import { AppBar, Button, Grid, Toolbar } from "@mui/material"
import "./Navbar.css"
import CartWidget from "../../common/cartWidget/CartWidget"
import { Link } from "react-router-dom"

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
                        <Link to={"/"}>
                            <Button>
                                <img
                                    className="logo-img"
                                    src="https://res.cloudinary.com/dzvzm9qcl/image/upload/v1712624031/Original_3_gbvbje.png"
                                    alt="logo"
                                />
                            </Button>
                        </Link>
                        <Link to={"/category/tshirt"} className="navBar-Space ">
                            <Button
                                color="inherit"
                                sx={{
                                    marginLeft: "auto",
                                    marginRight: "25px",
                                    color: "primary.superLigther",
                                }}
                            >
                                T-shirts
                            </Button>
                        </Link>
                        <Link to={"/category/pants"}>
                            <Button
                                sx={{
                                    marginRight: "25px",
                                    color: "primary.superLigther",
                                }}
                                color="inherit"
                            >
                                Pants
                            </Button>
                        </Link>
                        <Link to={"/category/hoodie"}>
                            <Button
                                sx={{
                                    marginRight: "25px",
                                    color: "primary.superLigther",
                                }}
                                color="inherit"
                            >
                                Hoodies
                            </Button>
                        </Link>
                        {/* <Link to={"/category/accesories"}>
                            <Button
                                sx={{
                                    marginRight: "25px",
                                    color: "primary.superLigther",
                                }}
                                color="inherit"
                            >
                                accesories
                            </Button>
                        </Link> */}
                        <Button>
                            <CartWidget />
                        </Button>
                    </Toolbar>
                </AppBar>
            </Grid>
        </Grid>
    )
}

export default Navbar
