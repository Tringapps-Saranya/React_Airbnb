import React from "react"
import logo from '../assets/airbnb.png'
import '../assets/airbnb.css'
export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="LOGO" className="nav--logo"/>
        </nav>
    )
}
