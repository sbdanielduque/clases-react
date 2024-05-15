import "./ItemListContainer.css"
import { products } from "../../../productMock.js"
import { useContext, useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { TopButtonContext } from "../../../context/TopButton.jsx"
import Skeleton from "../../common/skeleton/SkeletonLoading"
import { Grid } from "@mui/material"
import SkeletonLoading from "../../common/skeleton/SkeletonLoading"

const ItemListContainer = () => {
    const { topButton, scrollUp } = useContext(TopButtonContext)

    const [items, setItems] = useState([])

    const { category } = useParams()

    useEffect(() => {
        let productsFiltered = products.filter(
            (product) => product.category === category
        )

        const getProducts = new Promise((resolve, reject) => {
            let x = true
            if (x) {
                setTimeout(() => {
                    resolve(category ? productsFiltered : products)
                }, 2000)
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
