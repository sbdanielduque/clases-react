import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material"
import "./itemDetail.css"
import CounterContainer from "../../common/counter/CounterContainer"

const ItemDetail = ({ item, onAdd, initial }) => {
    const { name, price, description, brand, img, stock } = item
    return (
        <div className="container">
            <Grid
                container
                sx={{
                    padding: "100px",
                    margin: "0",
                    display: " flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <Grid item xs={12} md={6} sx={{ maxWidth: "500px !important" }}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={description}
                            height="400"
                            image={img}
                            sx={{ objectFit: "contain" }}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} sx={{ maxWidth: "500px !important" }}>
                    <Card
                        sx={{
                            height: "400px",
                            width: "500px",
                            bgcolor: "primary.superLigther",
                        }}
                    >
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="body2"
                                color="text.secondary"
                                sx={{ textAlign: "center" }}
                            >
                                {brand}
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{ textAlign: "center" }}
                            >
                                {name}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ textAlign: "center" }}
                            >
                                {description}
                            </Typography>
                            <Typography
                                variant="h3"
                                color="text.secondary"
                                sx={{ textAlign: "center", marginTop: "15px" }}
                            >
                                ${price?.toFixed(2)}
                            </Typography>
                            <CounterContainer
                                stock={stock}
                                onAdd={onAdd}
                                initial={initial}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemDetail
