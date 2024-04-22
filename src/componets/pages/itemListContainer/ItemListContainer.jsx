import "./ItemListContainer.css"
import { products } from "../../../productMock.js"
import { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"

<<<<<<< HEAD
const ItemListContainer = (props) => {
    const { greeting } = props
    return (
        <Grid container>
            <Grid
                item
                xs={12}
                s={8}
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h1" color="primary">
                    {greeting}
                </Typography>
            </Grid>
        </Grid>
    )
=======
const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const { category } = useParams()

    useEffect(() => {
        let productsFiltered = products.filter(
            (product) => product.category === category
        )

        const getProducts = new Promise((resolve, reject) => {
            let x = true
            if (x) {
                resolve(category ? productsFiltered : products)
            } else {
                reject({ status: 400, message: "algo salio mal" })
            }
        })
        getProducts
            .then((res) => setItems(res))
            .catch((error) => {
                console.log(error)
            })
    }, [category])

    return <ItemList items={items} />
>>>>>>> clase/9-rutas
}

export default ItemListContainer
