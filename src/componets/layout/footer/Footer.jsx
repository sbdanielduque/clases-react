import { Typography, IconButton } from "@mui/material"
import "./footer.css"
import InstagramIcon from "@mui/icons-material/Instagram"
import { useNavigate } from "react-router-dom"

const Footer = () => {
    let navigate = useNavigate()
    const handleNavigate = () => {
        navigate(window.open("https://www.instagram.com"))
    }
    return (
        <div className="footerContainer">
            <Typography
                variant="p"
                sx={{ color: "primary.superLigther", marginTop: "15px" }}
            >
                &copy; This page was designed and developed by Daniel Noguera.
            </Typography>

            <IconButton onClick={handleNavigate}>
                <InstagramIcon fontSize="large" sx={{ color: "black" }} />
            </IconButton>
        </div>
    )
}

export default Footer
/*  */
