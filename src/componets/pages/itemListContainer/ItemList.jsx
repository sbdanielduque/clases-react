import { Grid, IconButton } from "@mui/material"
import ProductCard from "../../common/productCard/ProductCard"
import "./ItemListContainer.css"
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp"

const ItemList = ({ items, topButton, scrollUp }) => {
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
                                id={item.id}
                                name={item.name}
                                img={item.img}
                                description={item.description}
                                price={item.price.toFixed(2)}
                            />
                        </Grid>
                    )
                })}
            </Grid>
            {topButton && (
                <IconButton
                    aria-label="delete"
                    sx={{ position: "fixed", right: "100px", bottom: "100px" }}
                    onClick={scrollUp}
                >
                    <ArrowCircleUpIcon sx={{ fontSize: "50px" }} />
                </IconButton>
            )}
        </Grid>
    )
}

export default ItemList
