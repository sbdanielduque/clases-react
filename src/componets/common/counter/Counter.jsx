import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            <div>
                <button onClick={restar}>restar</button>
                <h1>{counter}</h1>
                <button onClick={sumar}>sumar</button>
            </div>
        </>
    )
}

export default Counter
