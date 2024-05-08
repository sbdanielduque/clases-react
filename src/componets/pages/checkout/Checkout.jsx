import { Button, TextField } from "@mui/material"
import React, { useState } from "react"
import "./checkout.css"

export const Checkout = () => {
    const [info, setInfo] = useState({ name: "", phone: "", email: "" })

    const handleChange = (e) => {
        let { name, value } = e.target
        setInfo({ ...info, [name]: value })
    }
    /*  const getPhone = (e) => {
        setInfo({ ...info, phone: e.target.value })
    }
    const getEmail = (e) => {
        setInfo({ ...info, email: e.target.value })
    } */
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(info)
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    type="text"
                    label="Name"
                    name="name"
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    type="phone"
                    label="Phone"
                    name="phone"
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    type="email"
                    label="Email"
                    name="email"
                    onChange={handleChange}
                />
                <Button variant="contained" type="submit">
                    Enviar
                </Button>
            </form>
        </div>
    )
}
