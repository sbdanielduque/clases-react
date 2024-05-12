import { createContext, useEffect, useState } from "react"

export const TopButtonContext = createContext()

const TopButtonProvider = ({ children }) => {
    const [topButton, setTopButton] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setTopButton(true)
            } else {
                setTopButton(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
        })
    }

    let buttonData = {
        scrollUp,
        topButton,
    }
    return (
        <div>
            <TopButtonContext.Provider value={buttonData}>
                {children}
            </TopButtonContext.Provider>
        </div>
    )
}

export default TopButtonProvider
