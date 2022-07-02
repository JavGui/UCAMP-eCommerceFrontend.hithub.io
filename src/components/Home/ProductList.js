import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../../context/ProductContext'
import '../../App.css'

export default function ProductList() {
    const ctx = useContext(ProductContext)
    const { products, getInit } = ctx

    useEffect(() => {
        console.log('Entre a useeffect get inicio');
        getInit()
    },[])

    return (
        <div className="container4"> 
            {products && products.map((elem) => {
                return ( 
                    <article key={ elem._id } className="tarjeta">
                        <div className="cajaFoto">
                            <Link to={`/pedido/${elem._id}`}><img className="fotoTarjeta" src={ elem.urlFoto } alt="Foto"></img></Link>
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