import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material"
import { Link } from "react-router-dom"
const ProductCard = ({ name, price, img, description, id }) => {
    return (
        <Card sx={{ minWidth: 300, maxWidth: 300, maxHeight: "auto" }}>
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
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                    }}
                >
                    {name}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                    }}
                >
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
                <Link to={`/detail/${id}`}>
                    <Button variant="contained" size="small">
                        Detail
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default ProductCard
