import React from 'react'
import './components.css'


export default function Header() {
    return (
        <header>
            <div className="logo">
                <div className="logo_img"><img src="multimedia/logo.png" alt="logo" className="img-logo"/></div>
                <div className="logo_text">Valeria, Mar y Vida</div>
            </div>
            <div className="menu"></div>
        </header>
    )
}
