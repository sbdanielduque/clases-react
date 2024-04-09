import { ThemeProvider } from "@mui/material"
import { principalTheme } from "./componets/common/themeConfig/ThemeConfig.js"
import ItemListContainer from "./componets/pages/itemListContainer/ItemListContainer.jsx"
import Layout from "./componets/layout/Layout.jsx"

function App() {
    return (
        <>
            <ThemeProvider theme={principalTheme}>
                <Layout>
                    <ItemListContainer />
                </Layout>
            </ThemeProvider>
        </>
    )
}

export default App
