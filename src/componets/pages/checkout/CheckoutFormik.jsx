import { Button, TextField } from "@mui/material"
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

            /* ---------Get Order Id for show after buy --------- */
            let ordersCollection = collection(db, "orders")
            addDoc(ordersCollection, obj).then((res) => setOrderId(res.id))

            /* ---------- Update Stock--------- */
            cart.forEach((product) => {
                let refDoc = doc(db, "products", product.id)
                updateDoc(refDoc, {
                    stock: product.stock - product.quantity,
                })
            })
            /* ---- clear cart after buy */
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
                <h1>Your order is: {orderId} </h1>
            ) : (
                <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            type="text"
                            label="Name"
                            name="name"
                            onChange={handleChange}
                            error={errors.name ? true : false}
                            helperText={errors.name}
                        />
                        <TextField
                            variant="outlined"
                            type="phone"
                            label="Phone"
                            name="phone"
                            onChange={handleChange}
                            error={errors.phone ? true : false}
                            helperText={errors.phone}
                        />
                        <TextField
                            variant="outlined"
                            type="email"
                            label="Email"
                            name="email"
                            onChange={handleChange}
                            error={errors.email ? true : false}
                            helperText={errors.email}
                        />
                        <Button variant="contained" type="submit">
                            Enviar
                        </Button>
                    </form>
                </div>
            )}
        </>
    )
}
