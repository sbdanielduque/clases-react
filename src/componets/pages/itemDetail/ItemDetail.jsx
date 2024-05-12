import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material"
import "./itemDetail.css"
import CounterContainer from "../../common/counter/CounterContainer"

const ItemDetail = ({ item, onAdd }) => {
    const { name, price, description, brand, img, stock } = item
    return (
        <>
            <Grid container sx={{ padding: "100px" }} spacing={6}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ minWidth: "500px" }}>
                        <CardMedia
                            component="img"
                            alt={description}
                            height="400"
                            image={img}
                            sx={{ objectFit: "contain" }}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{ width: "500px", bgcolor: "primary.superLigther" }}
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
                            <CounterContainer stock={stock} onAdd={onAdd} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default ItemDetail
