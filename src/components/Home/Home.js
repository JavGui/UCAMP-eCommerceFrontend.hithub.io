import React from 'react'
import { Link } from 'react-router-dom'

import ProductList from './ProductList'

export default function Home () {

    return (
        <>
        <main className="container">
            <section className="presenta">
                <p className="eslogan">Sentirás esta ropa tan cómoda como si fuera tu segunda piel</p>               
                <p className="mensaje">"El trabajo en casa se hace mejor sintiéndote relajado"</p>
                <Link to='/catalogo' className="enviar">Ver Catálogo</Link>
            </section> 
            <section id="coleccion" className="coleccion">
                <p className="titulo1">COLECCIÓN HUUD</p>
                <p  className="titulo2">Utilizamos telas elaboradas con las mejores materias primas y tecnología para <br></br> darles la funcionalidad que necesitas para sentirte fresco, cómodo y relajado</p>
            </section>
        </main>
        <ProductList />
        </>
    )
}  