import React, { useContext, useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import Swal from "sweetalert2"
import { db } from "../../../firebaseConfig"
import { collection, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const { addProduct, getQuantityById } = useContext(CartContext)

    let initial = getQuantityById(id)

    useEffect(() => {
        const productsCollection = collection(db, "products")
        let refDoc = doc(productsCollection, id)
        getDoc(refDoc).then((res) => {
            setItem({ id: res.id, ...res.data() })
        })
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
