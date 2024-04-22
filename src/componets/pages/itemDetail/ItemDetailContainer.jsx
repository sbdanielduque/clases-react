import React, { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { products } from "../../../productMock"

const ItemDetailContainer = () => {
    const { id } = useParams()

    const [item, setItem] = useState({})

    useEffect(() => {
        let itemFounded = products.find((product) => product.id === id)
        const getProduct = new Promise((resolve, reject) => {
            resolve(itemFounded)
        })
        getProduct.then((res) => setItem(res))
    }, [id])

    console.log(item)
    return <ItemDetail item={item} />
}

export default ItemDetailContainer
