import React from 'react'
import jeff from '../assets/images/JeffPic.jpeg';

export const Inicio = () => {
    return (
        <section id="inicio" className="inicio">
            <div className="contenido-banner">
                <div class="contenedor-img">
                    <img src={jeff} />
                </div>
                <h1>Jefferson Yuman</h1>
                <h2>Estudiante de Informatica || Sexto Périto || Centro Educativo Laboral Kinal</h2>
                <div className="redes">
                    <a href="https://twitter.com/Yumanken"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://github.com/jyuman-2021335"><i className="fa-brands fa-github"></i></a>
                    <a href="jyuman-2021335@kinal.edu.gt"><i className="fa-regular fa-envelope"></i></a>
                </div>
            </div>
        </section>
    )
}
