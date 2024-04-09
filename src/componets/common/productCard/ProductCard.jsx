import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material"
const ProductCard = ({ name, price, img, description }) => {
    return (
        <Card sx={{ maxWidth: 250, maxHeight: "auto" }}>
            <CardMedia
                component="img"
                alt="t-shirt All Saints Black"
                height="300"
                image={img}
                sx={{ objectFit: "contain" }}
            />
            <CardContent
                sx={{
                    bgcolor: "primary.lighter",
                    borderTop: "solid 1px black",
                }}
            >
                <Typography gutterBottom variant="h6" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    bgcolor: "primary.lighter",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginLeft: "10px", fontWeight: 800 }}
                >
                    ${price}
                </Typography>
                <Button variant="contained" size="small">
                    Detail
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard
