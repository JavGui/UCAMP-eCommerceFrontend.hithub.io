import React, { useContext, useEffect } from 'react'
import ProductContext from '../context/ProductContext'
import UserContext from '../context/UserContext'
import { Link, useParams } from 'react-router-dom'
import PaypalButton from '../components/Paypal/PaypalButton'
import Foto from '../imagenes/PoloAzulAcero.jpg'
import '../App.css'

export default function Pedido(){
    const { id } = useParams()
    const ctx = useContext(ProductContext)
    const { products, getProducts } = ctx
    const ctx2 = useContext(UserContext)
    const { loading } =ctx2
   
    useEffect(() => {
        getProducts(id)
    },[])

    return (
        <>
            <div className="container6">               
                <div >
                    <img className="fotoPedido" src={ Foto } alt="Foto"></img>
                </div>
                <div key="elem-id" className="pedidoDerecha">
                    <div><p className="tipoPedido">{products[0].nombre }</p></div>
                    <div><p className="encabezadoPedido">Características</p></div>
                    <div><p className="descripcionPedido">{ products[0].descripcion}</p></div>
                    <div><p className="descripcionPedido">Tallas: { products[0].tallas }</p></div>
                    <div className="colorPrecio">
                        <div><p className="descripcionPedido">Color: { products[0].color }</p></div>
                        <div><p className="descripcionPedido">Precio: ${ products[0].precio }.00</p></div>
                    </div>
                    <div className='botonesPaga'>              
                    { loading ? <PaypalButton total={products[0].precio} /> : <Link to='/login' className="botonPagar">Para Pagar <br></br>Inicia Sesión</Link>}
                    {/* <Link to={`/login/${id}`} className="botonPagar">Para Pagar <br></br>Inicia Sesión</Link> */}
                        <a href='/catalogo' className="botonRegresar">Regresar</a>                            
                    </div>
                </div>
            </div>            
        </>
    )
}