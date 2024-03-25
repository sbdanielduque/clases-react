import { Grid, Typography } from "@mui/material"

const ItemListContainer = (props) => {
    const { greeting } = props
    return (
        <Grid container>
            <Grid
                item
                xs={12}
                s={8}
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h1" color="primary">
                    {greeting}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ItemListContainer
