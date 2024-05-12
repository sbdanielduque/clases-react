import ItemListContainer from "./componets/pages/itemListContainer/ItemListContainer.jsx"
import Layout from "./componets/layout/Layout.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./componets/pages/itemDetail/ItemDetailContainer.jsx"
import CartContainer from "./componets/pages/cart/CartContainer.jsx"
import { Checkout } from "./componets/pages/checkout/Checkout.jsx"
import CartContextProvider from "./context/CartContext.jsx"
import TopButtonProvider from "./context/TopButton.jsx"

function App() {
    return (
        <>
            <BrowserRouter>
                <TopButtonProvider>
                    <CartContextProvider>
                        <Routes>
                            <Route element={<Layout />}>
                                <Route
                                    path="/"
                                    element={<ItemListContainer />}
                                />
                                <Route
                                    path="/category/:category"
                                    element={<ItemListContainer />}
                                />
                                <Route
                                    path="detail/:id"
                                    element={<ItemDetailContainer />}
                                />
                                <Route
                                    path="/cart"
                                    element={<CartContainer />}
                                />
                                <Route
                                    path="/checkout"
                                    element={<Checkout />}
                                />
                                <Route path="*" element={<h1>error 404</h1>} />
                            </Route>
                        </Routes>
                    </CartContextProvider>
                </TopButtonProvider>
            </BrowserRouter>
        </>
    )
}

export default App
