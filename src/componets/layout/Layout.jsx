import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"
import { ThemeProvider } from "@mui/material"
import { principalTheme } from "../common/themeConfig/ThemeConfig.js"
import "./layaout.css"

const Layout = () => {
    return (
        <>
            <ThemeProvider theme={principalTheme}>
                <Navbar />
                <div className="viewHeight">
                    <Outlet />
                </div>

                <Footer />
            </ThemeProvider>
        </>
    )
}

export default Layout
