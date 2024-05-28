import { Button, TextField, Typography } from "@mui/material"
import "./checkout.css"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { db } from "../../../firebaseConfig"

export const CheckoutFormik = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    let total = totalPrice()
    const { handleChange, handleSubmit, errors } = useFormik({
        initialValues: { name: "", phone: "", email: "" },
        onSubmit: (data) => {
            let obj = {
                buyer: data,
                items: cart,
                total,
            }

            let ordersCollection = collection(db, "orders")
            addDoc(ordersCollection, obj).then((res) => setOrderId(res.id))

            cart.forEach((product) => {
                let refDoc = doc(db, "products", product.id)
                updateDoc(refDoc, {
                    stock: product.stock - product.quantity,
                })
            })
            clearCart()
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            email: Yup.string().required().email(),
            phone: Yup.string()
                .required()
                .matches(/^\d{1,14}$/, "Invalid phone number"),
        }),
        validateOnChange: false,
    })
    return (
        <>
            {orderId ? (
                <div className="checkoutBox">
                    <Typography
                        variant="h4"
                        sx={{
                            border: "2px solid #fff",
                            padding: "20px",
                            borderRadius: 2,
                        }}
                    >
                        Your order is: <div>{orderId}</div>
                    </Typography>
                </div>
            ) : (
                <div className="formContainer">
                    <form className="formColumn" onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            type="text"
                            label="Name"
                            name="name"
                            onChange={handleChange}
                            error={errors.name ? true : false}
                            helperText={errors.name}
                            sx={{ width: "400px" }}
                        />
                        <TextField
                            variant="outlined"
                            type="phone"
                            label="Phone"
                            name="phone"
                            onChange={handleChange}
                            error={errors.phone ? true : false}
                            helperText={errors.phone}
                            sx={{ width: "400px" }}
                        />
                        <TextField
                            variant="outlined"
                            type="email"
                            label="Email"
                            name="email"
                            onChange={handleChange}
                            error={errors.email ? true : false}
                            helperText={errors.email}
                            sx={{ width: "400px" }}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ width: "200px" }}
                        >
                            Enviar
                        </Button>
                    </form>
                </div>
            )}
        </>
    )
}
