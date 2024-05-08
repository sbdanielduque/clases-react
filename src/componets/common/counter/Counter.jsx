import { Button } from "@mui/material"

const Counter = ({ sumar, restar, counter, onAdd }) => {
    return (
        <>
            <Button onClick={sumar}> sumar</Button>
            <h1>{counter}</h1>
            <Button onClick={restar}>restar</Button>
            <Button onClick={() => onAdd(counter)}>agregar al carrito</Button>
        </>
    )
}

export default Counter
