import "./ItemListContainer.css"
import { products } from "../../../productMock.js"
import { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"

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
}

export default ItemListContainer
