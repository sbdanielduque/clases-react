import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"
import { ThemeProvider } from "@mui/material"
import { principalTheme } from "../common/themeConfig/ThemeConfig.js"
import "./layaout.css"
import ResponsiveAppBar from "./navbar/ResponsiveNavbar.jsx"

const Layout = () => {
    return (
        <>
            <ThemeProvider theme={principalTheme}>
                <ResponsiveAppBar />
                <div className="viewHeight">
                    <Outlet />
                </div>

                <Footer />
            </ThemeProvider>
        </>
    )
}

export default Layout
