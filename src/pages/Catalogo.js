import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../context/ProductContext'
import Foto from '../imagenes/PoloAzulAcero.jpg'

import '../AppCat.css'

export default function Catalogo() {
    const [id, setId] = useState("")
    const ctx = useContext(ProductContext)
    const { products, getProducts } = ctx
   
    useEffect(() => {
        setId("")
        getProducts(id)
    },[])

    return (
        <div className="container5"> 
            {products && products.map((elem) => {
                return ( 
                    <article key={ elem.id } className="tarjeta">
                        <h5>Vengo de catálogo</h5>
                        <div className="cajaFoto">
                            <Link to="/pedido/62a530031b03a053fab3a4e0"><img className="fotoTarjeta" src={ Foto } alt="Foto"></img></Link>
                        </div>
                        <div className="textoTarjeta">
                            <div><p className="textoTarjeta2">{ elem.nombre }</p></div>
                            <div><p className="descripcion">{ elem.descripcion}</p></div>
                            <div className="colorPrecio">
                                <div><p className="descripcion">Color: { elem.color }</p></div>
                                <div><p className="descripcion">Precio: $ { elem.precio }.00</p></div> 
                            </div>
                            <div><p className="descripcion">{ elem.tallas }</p></div>
                        </div>
                    </article>                                       
                )                   
            })}
        </div>
    )
}