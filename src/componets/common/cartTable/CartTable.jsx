import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    IconButton,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import "./cartTable.css"

const CartTable = ({ cart, deleteItem }) => {
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
                        borderRadius: "3px",
                        borderCollapse: "initial",
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>IMG</TableCell>
                            <TableCell>NAME</TableCell>
                            <TableCell align="center">QUANTITY</TableCell>
                            <TableCell align="center">PRICE</TableCell>
                            <TableCell align="right">DELETE</TableCell>
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
                                <TableCell align="center">
                                    {product.quantity}
                                </TableCell>
                                <TableCell align="center">
                                    {product.price}
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        onClick={() => deleteItem(product.id)}
                                        aria-label="delete"
                                        color="error"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
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
