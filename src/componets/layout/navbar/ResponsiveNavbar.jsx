import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import CartWidget from "../../common/cartWidget/CartWidget"

const pages = ["tshirt", "pants", "hoodie"]

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar position="static" sx={{ bgcolor: "primary.litLighter" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Button
                        sx={{
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <img
                            className="logo-img"
                            src="https://res.cloudinary.com/dzvzm9qcl/image/upload/v1712624031/Original_3_gbvbje.png"
                            alt="logo"
                        />
                    </Button>
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                                marginTop: 2,
                                marginLeft: 2,
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        bgcolor: "primary.lighter",
                                        my: "-8px",
                                    }}
                                >
                                    <Link to={`/category/${[page]}`}>
                                        <Button
                                            sx={{
                                                color: "black",
                                                fontWeight: "600",
                                                letterSpacing: ".1rem",
                                            }}
                                        >
                                            {page}
                                        </Button>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <img
                            className="logo-img"
                            src="https://res.cloudinary.com/dzvzm9qcl/image/upload/v1712624031/Original_3_gbvbje.png"
                            alt="logo"
                        />
                    </Typography>
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <Link to={"/cart"}>
                            <Button
                                sx={{
                                    color: "white",
                                    my: 2.4,
                                    marginLeft: 8,
                                }}
                            >
                                <CartWidget />
                            </Button>
                        </Link>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: "black" }} />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex",
                                justifyContent: "flex-end",
                                marginRight: 75,
                            },
                        }}
                    >
                        {pages.map((page) => (
                            <Link to={`/category/${page}`} key={page}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: "black",
                                        fontWeight: "600",
                                        letterSpacing: ".2rem",
                                        display: "block",
                                        marginLeft: 10,
                                    }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                        <Link to={"/cart"}>
                            <Button
                                sx={{ color: "white", my: 2.4, marginLeft: 8 }}
                            >
                                <CartWidget />
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default ResponsiveAppBar
