import { Button, TextField } from "@mui/material"
import "./checkout.css"
import { useFormik } from "formik"
import * as Yup from "yup"

export const CheckoutFormik = () => {
    const { handleChange, handleSubmit, errors } = useFormik({
        initialValues: { name: "", phone: "", email: "" },
        onSubmit: (data) => {
            console.log(data)
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
    )
}
