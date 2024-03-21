import CartWidget from "../../common/cartWidget/CartWidget"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navBar-container">
            <img
                className="logo-navBar"
                src="https://res.cloudinary.com/dzvzm9qcl/image/upload/v1711036108/project-react-ecommerce/logo_eurd01.jpg"
                alt="logo"
            />
            <ul>
                <li>home</li>
                <li>T-shirt</li>
                <li>Pants</li>
                <li>Hoodies</li>
                <li>Hats</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default Navbar
