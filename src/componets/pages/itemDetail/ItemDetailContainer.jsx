import React, { useContext, useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { products } from "../../../productMock"
import { CartContext } from "../../../context/CartContext"
import Swal from "sweetalert2"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const { addProduct, getQuantityById } = useContext(CartContext)

    let initial = getQuantityById(id)

    useEffect(() => {
        let itemFounded = products.find((product) => product.id === id)
        const getProduct = new Promise((resolve, reject) => {
            resolve(itemFounded)
        })
        getProduct.then((res) => setItem(res))
    }, [id])

    const onAdd = (quantity) => {
        let newObj = { ...item, quantity }
        addProduct(newObj)
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Item add to Cart",
            showConfirmButton: false,
            timer: 1000,
        })
    }
    return <ItemDetail item={item} onAdd={onAdd} initial={initial} />
}

export default ItemDetailContainer
