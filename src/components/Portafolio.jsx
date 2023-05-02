import React from 'react'
import blog from '../assets/images/Blog Personal.jpg';
import calculadora from '../assets/images/calculadora.jpg';
import agenda from '../assets/images/agenda.jpg';
import venta from '../assets/images/venta.jpg';
import control from '../assets/images/control.jpg';

export const Portafolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="contenido-seccion">
                <h2>PORTFOLIO</h2>
                <div className="galeria">
                    <div className="proyecto">
                    <img src={agenda} alt="" />
                        <div className="overlay">
                            <h3>Agenda Web</h3>
                            <p>Diseño en HTML, CSS y Javascript de la parte visual de una Agenda Web</p>
                            <p>06-02-2023</p>
                            <a href="https://github.com/jyuman-2021335/Agenda-Web-Jeff.git"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="proyecto">
                        <img src={blog} alt="" />
                        <div className="overlay">
                            <h3>Blog Personal</h3>
                            <p>Blog Personal creado con HTML, CSS y Javascript.</p>
                            <p>29-01-2023</p>
                            <a href="https://github.com/jyuman-2021335/Blog-Personal.git"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="proyecto">
                    <img src={calculadora} alt="" />
                        <div className="overlay">
                        <h3>Calculadora JS</h3>
                            <p>Ejemplo de Calculadora realizado con HTML5, CSS3 y JavaScript.</p>
                            <p>24-07-2022</p>
                            <a href="https://github.com/jyuman-2021335/Calculadora.git"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="proyecto">
                    <img src={venta} alt="" />
                        <div className="overlay">
                            <h3>Venta Online</h3>
                            <p>Proyecto Final Taller sobre una Venta Online con JavaScript y NodeJS</p>
                            <p>10-03-2023</p>
                            <a href="https://github.com/jyuman-2021335/Venta-Online.git"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="proyecto">
                    <img src={control} alt="" />
                        <div className="overlay">
                            <h3>Control Academico</h3>
                            <p>Control Académico realizado en javafx y MySQL</p>
                            <p>19-07-2022</p>
                            <a href="https://github.com/jyuman-2021335/javafx-control-academico-in5bv-2022.git"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
