import { Box, Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule"

const Counter = ({ sumar, restar, counter, onAdd }) => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: "30px",
                }}
            >
                <Button onClick={sumar}>
                    <AddIcon />
                </Button>
                <h2>{counter}</h2>
                <Button onClick={restar}>
                    <HorizontalRuleIcon />
                </Button>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    my: { xs: 1, sm: 7 },
                }}
            >
                <Button variant="contained" onClick={() => onAdd(counter)}>
                    agregar al carrito
                </Button>
            </Box>
        </>
    )
}

export default Counter
