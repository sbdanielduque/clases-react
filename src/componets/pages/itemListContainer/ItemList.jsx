import { Grid, Typography } from "@mui/material"
import ProductCard from "../../common/productCard/ProductCard"
import "./ItemListContainer.css"
import { margin } from "@mui/system"

const ItemList = ({ items }) => {
    return (
        <Grid container>
            <Grid item className="img-container" xs={12}>
                <img
                    className="bg-img"
                    src="https://res.cloudinary.com/dzvzm9qcl/image/upload/v1711688338/wallpaper_y3fja2.jpg"
                    alt="banner"
                />
            </Grid>
            <Grid container sx={{ marginRight: "75px", marginLeft: "75px" }}>
                {items.map((item) => {
                    return (
                        <Grid
                            item
                            key={item.id}
                            xs={12}
                            sm={6}
                            md={4}
                            className="cardGrid"
                            marginTop="50px"
                        >
                            <ProductCard
                                name={item.name}
                                img={item.img}
                                description={item.description}
                                price={item.price}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default ItemList
