import { useState } from "react"
import Counter from "./Counter"

const CounterContainer = ({ stock, initial = 1, onAdd }) => {
    const [counter, setCounter] = useState(initial)

    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        } else {
            alert("no hay mas stock")
        }
    }

    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        } else {
            alert("no puedes menos de 1")
        }
    }

    return (
        <div>
            <Counter
                restar={restar}
                sumar={sumar}
                counter={counter}
                onAdd={onAdd}
            />
        </div>
    )
}

export default CounterContainer
