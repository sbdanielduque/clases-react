import { Grid, IconButton } from "@mui/material"
import ProductCard from "../../common/productCard/ProductCard"
import "./ItemListContainer.css"
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp"

const ItemList = ({ items, topButton, scrollUp }) => {
    return (
        <>
            <Grid container>
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
                    sx={{
                        position: "fixed",
                        left: { xs: -10, md: 80 },
                        bottom: "90px",
                    }}
                    onClick={scrollUp}
                >
                    <ArrowCircleUpIcon sx={{ fontSize: "50px" }} />
                </IconButton>
            )}
        </>
    )
}

export default ItemList
