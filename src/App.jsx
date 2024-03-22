import Counter from "./componets/common/counter/Counter"
import Footer from "./componets/layout/footer/Footer"
import Navbar from "./componets/layout/navbar/Navbar"
import ItemListContainer from "./componets/pages/itemListContainer/ItemListContainer"

function App() {
    return (
        <div>
            <Navbar />
            <ItemListContainer />
            <Counter />
            <Footer />
        </div>
    )
}

export default App
