import { useState } from "react"
import Counter from "./Counter"
import Swal from "sweetalert2"

const CounterContainer = ({ stock, initial = 1, onAdd }) => {
    const [counter, setCounter] = useState(initial)

    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Not more in Stock!",
            })
        }
    }

    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            })
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
