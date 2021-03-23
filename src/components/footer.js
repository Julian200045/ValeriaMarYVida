import React from 'react'
import './components.css'

export default function Footer() {
    return (
        <footer>
            <div className="contact"><u>Contacto:</u>
                <div className="nombreContacto">Sra. Graciela Marcatelli de Carretto</div>
                <ul>
                    
                    <li>Cel.: 011 4148-0079</li>
                    <li>Tel.: 011 5350-7151</li>
                </ul>
            </div>
            <div className="end">
                <div className="copyright">Copyright 2021 - www.valeriamaryvida.com.ar - All rights reserved</div>
                <div className="autor">Desarrollado por Julián A. Carretto</div>
            </div>

            
        </footer>
    )
}