import { ThemeProvider } from "@mui/material"
import Footer from "./componets/layout/footer/Footer.jsx"
import Navbar from "./componets/layout/navbar/Navbar.jsx"
import { principalTheme } from "./componets/common/themeConfig/ThemeConfig.js"
import ItemListContainer from "./componets/pages/itemListContainer/ItemListContainer.jsx"

function App() {
    return (
        <>
            <ThemeProvider theme={principalTheme}>
                <Navbar />
                <ItemListContainer greeting={"Bienvenidos a mi tienda"} />
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default App
