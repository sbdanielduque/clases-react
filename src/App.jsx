import ItemListContainer from "./componets/pages/itemListContainer/ItemListContainer.jsx"
import Layout from "./componets/layout/Layout.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./componets/pages/itemDetail/ItemDetailContainer.jsx"
import CartContainer from "./componets/pages/cart/CartContainer.jsx"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/category/:category"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="detail/:id"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/cart" element={<CartContainer />} />
                        <Route path="*" element={<h1>error 404</h1>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
