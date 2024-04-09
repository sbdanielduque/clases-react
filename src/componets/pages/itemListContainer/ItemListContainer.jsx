import "./ItemListContainer.css"
import { products } from "../../../productMock.js"
import { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            let x = true
            if (x) {
                setTimeout(() => {
                    resolve(products)
                }, 1000)
            } else {
                reject({ status: 400, message: "algo salio mal" })
            }
        })
        getProducts
            .then((res) => setItems(res))
            .catch((error) => {
                console.log(error)
            })
    }, [])

    console.log(items)
    return <ItemList items={items} />
}

export default ItemListContainer
