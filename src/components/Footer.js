import React from "react"
import Facebook from "../imagenes/facebook.svg"
import Instagram from "../imagenes/instagram-icon.svg"
import Twitter from "../imagenes/twitter.svg"

import '../App.css'

export default function Footer () {
    return (
        <footer>
            <section className="redes">
                <a href="#top"><img className="icono" src={ Facebook} alt="Logo Facebook"/></a>
                <a href="#top"><img className="icono" src={ Instagram } alt="Logo Instagram"/></a>
                <a href="#top"><img className="icono" src={ Twitter } alt="Logo Twitter"/></a>
            </section>            
            <section className="aviso">
                <div>
                <hr className="division"/>       
                </div>
                <div>
                <p  className="derechos">© 2021 U Camp. Todos los derechos reservados. <br></br>Esta es una página de aterrizaje ficticia para fines académicos.</p>
                </div>
            </section>
      </footer>

    )
}
