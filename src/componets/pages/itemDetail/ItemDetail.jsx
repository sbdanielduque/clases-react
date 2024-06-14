import {
    Box,
    Card,
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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                }}
            >
                <Typography color="primary" variant="h2">
                    Detail
                </Typography>
            </Box>
            <Grid
                container
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        maxWidth: "700px !important",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Card
                        sx={{
                            height: { xs: "250px", sm: "400px", lg: "450px" },
                            width: { xs: "250px", sm: "500px", lg: "650px" },
                        }}
                    >
                        <CardMedia
                            component="img"
                            alt={description}
                            image={img}
                            sx={{
                                objectFit: "contain",
                                height: { xs: "200px", sm: "400px" },
                            }}
                        />
                    </Card>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        maxWidth: "700px !important",
                        my: 5,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Card
                        sx={{
                            height: { xs: "280px", sm: "300px", lg: "450px" },
                            width: { xs: "250px", sm: "500px", lg: "650px" },
                            bgcolor: "primary.bg",
                        }}
                    >
                        <CardContent>
                            <Typography
                                gutterBottom
                                color="text.secondary"
                                sx={{
                                    textAlign: "center",
                                    fontSize: { lg: "20px" },
                                }}
                            >
                                {brand}
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    textAlign: "center",
                                    fontSize: { lg: "45px" },
                                }}
                            >
                                {name}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="text.secondary"
                                sx={{
                                    textAlign: "center",
                                    fontSize: { lg: "30px" },
                                }}
                            >
                                {description}
                            </Typography>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                sx={{
                                    textAlign: "center",
                                    marginTop: "15px",
                                    my: { xs: 1, lg: 3 },
                                    fontSize: { lg: "30px" },
                                }}
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
