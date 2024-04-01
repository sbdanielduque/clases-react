import { Grid, Typography } from "@mui/material"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
    return (
        <Grid container>
            <Grid item className="img-container" xs={12}>
                <img
                    className="bg-img"
                    src="https://res.cloudinary.com/dzvzm9qcl/image/upload/v1711688338/wallpaper_y3fja2.jpg"
                    alt="banner"
                />
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h1">{greeting}</Typography>
            </Grid>
        </Grid>
    )
}

export default ItemListContainer
