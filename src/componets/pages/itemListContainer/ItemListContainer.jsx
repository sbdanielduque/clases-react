import ProductCards from "../../common/productCard/ProductCards"

const ItemListContainer = () => {
    return (
        <div>
            <h1>Bienvenido</h1>
            <ProductCards
                tiltle="product 1"
                description="description 1"
                price={100}
            />
            <ProductCards
                tiltle="product 2"
                description="description 2"
                price={300}
            />
            <ProductCards
                tiltle="product 3"
                description="description 3"
                price={500}
            />
        </div>
    )
}

export default ItemListContainer
