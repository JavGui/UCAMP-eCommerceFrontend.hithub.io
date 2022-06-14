import React, { useContext, useEffect } from 'react'
import ProductContext from '../context/ProductContext'
import { useParams } from 'react-router-dom'
import PaypalButton from '../components/Paypal/PaypalButton'
import Foto from '../imagenes/PoloAzulAcero.jpg'
import '../App.css'

export default function Pedido(){
    const { id } = useParams()
    const ctx = useContext(ProductContext)
    const { products, getProducts } = ctx
   
    useEffect(() => {
        console.log('id: ', id);
        getProducts(id)
    },[])

    return (
        <div>
            {products && products.map((elem) => {
                return ( 
                    <div className="container6">
                        <div>
                            <img className="fotoPedido" src={ Foto } alt="Foto"></img>
                        </div>
                        <div className="pedidoDerecha">
                            <div><p className="tipoPedido">{ elem.nombre }</p></div>
                            <div><p className="encabezadoPedido">Características</p></div>
                            <div><p className="descripcionPedido">{ elem.descripcion}</p></div>
                            <div><p className="descripcionPedido">Tallas: { elem.tallas }</p></div>
                            <div className="colorPrecio">
                                <div><p className="descripcionPedido">Color: { elem.color }</p></div>
                                <div><p className="descripcionPedido">Precio: ${ elem.precio }.00</p></div>
                             </div>
                             <div className='botonesPaga'>                            
                                {/* <a href='/pagar' className='botonPagar'>Pagar</a> */}
                                <PaypalButton total={elem.precio} />
                                <a href='/catalogo' className="botonRegresar">Regresar</a>                            
                            </div>
                        </div>                    
                    </div>                                       
                )                   
            })}
            
        </div>
    )
}