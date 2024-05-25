import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@mui/material"
import "./cartTable.css"

const CartTable = ({ cart, deleteItem, total }) => {
    return (
        <div>
            <TableContainer
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "170px",
                }}
            >
                <Table
                    sx={{
                        width: "700px",
                        border: "2px solid #fff",
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>IMG</TableCell>
                            <TableCell>NAME</TableCell>
                            <TableCell>QUANTITY</TableCell>
                            <TableCell align="right">PRICE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <img
                                        className="tableImg"
                                        src={product.img}
                                        alt={product.description}
                                    />
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell align="right">
                                    {product.price}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CartTable

/* <IconButton
                                onClick={() => deleteItem(product.id)}
                                aria-label="delete"
                                color="error"
                            >
                                <DeleteIcon />
                            </IconButton> */
