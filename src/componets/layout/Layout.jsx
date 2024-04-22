import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"
import { ThemeProvider } from "@mui/material"
import { principalTheme } from "../common/themeConfig/ThemeConfig.js"

const Layout = () => {
    return (
        <>
            <ThemeProvider theme={principalTheme}>
                <Navbar />
                <Outlet />
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default Layout
