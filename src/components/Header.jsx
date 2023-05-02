import React from 'react'

export const Header = () => {
    return (
        <div className="contenedor-header">
            <header>
                <div className="logo">
                    <a href="#">Jeffo</a>
                </div>

                <nav id="nav">
                    <ul>
                        <li><a href="#inicio" onClick="seleccionar()">INICIO</a></li>
                        <li><a href="#skills" onClick="seleccionar()">SKILLS</a></li>
                        <li><a href="#portafolio" onClick="seleccionar()">PORTFOLIO</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
