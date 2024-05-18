import "./ItemListContainer.css"
import { useContext, useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { TopButtonContext } from "../../../context/TopButton.jsx"
import { Grid } from "@mui/material"
import SkeletonLoading from "../../common/skeleton/SkeletonLoading"
import { db } from "../../../firebaseConfig.js"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { products } from "../../../productMock.js"

const ItemListContainer = () => {
    const { topButton, scrollUp } = useContext(TopButtonContext)

    const [items, setItems] = useState([])

    const { category } = useParams()

    useEffect(() => {
        /* NO FILTRADO, TRAE TODA LA LISTA DE PRODUCTOS */
        /* -------------------------------------------------------- */
        /* const productsCollection = collection(db, "products")
        getDocs(productsCollection).then((res) => {
            let newArray = res.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            setItems(newArray)
        }) */

        /* FILTRADO CON QUERY */
        /* -------------------------------------------------- */
        /*    const productsCollection = collection(db, "products")
        let productsFiltered = query(
            productsCollection,
            where("category", "==", category )
            getDocs(productsFiltered).then((res) => {
                let newArray = res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setItems(newArray)
            })
        ) */

        /* TRAE LA COLECCION COMPLETA O FILTRADA */
        /* ----------------------------------------------------- */

        const productsCollection = collection(db, "products")
        let productsList = productsCollection
        if (category) {
            productsList = query(
                productsCollection,
                where("category", "==", category)
            )
        }
        getDocs(productsList).then((res) => {
            let newArray = res.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            setTimeout(() => {
                setItems(newArray)
            }, 1000)
        })
    }, [category])
    //-------------- FUNCION PARA AGREGAR TODO EL ARREGLO A LA DB ---------------------
    /*  const addDocsProducts = () => {
        let productsCollection = collection(db, "products")
        products.forEach((product) => addDoc(productsCollection, product))
    } */
    return (
        <>
            <Grid item className="img-container" xs={12}>
                <img
                    className="bg-img"
                    src="https://res.cloudinary.com/dzvzm9qcl/image/upload/v1711688338/wallpaper_y3fja2.jpg"
                    alt="banner"
                />
            </Grid>

            {/* Condicional Rendering. */}
            {items.length > 0 ? (
                <ItemList
                    items={items}
                    topButton={topButton}
                    scrollUp={scrollUp}
                />
            ) : (
                <SkeletonLoading />
            )}
        </>
    )
}

export default ItemListContainer
