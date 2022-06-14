import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Foto from '../imagenes/PoloAzulAcero.jpg'

export default function Pedido(){
    const { id } = useParams()
    const[datos, setDatos] = useState({})       
    try{
        console.log('Id: ', id); 
        const objeto = {id: id }
        console.log('Objeto: ', objeto);
        fetch('http://localhost:4000/obtener-productos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(objeto) })
        .then(respuesta => { return respuesta.json()})
        .then(res => {setDatos(res)})
        .catch(error => console.log("Error en la consulta de datos"))
      }
      catch (error) {console.log((`Error: ${error}`))
      }

    console.log('datos: ', datos);
    const { _id, nombre, descripcion, urlFoto, tallas, color, precio } = datos
    console.log('datos: ', _id, nombre, descripcion, urlFoto, tallas, color, precio);

    return (
        <div className="container6">
            {datos && datos.map((elem) => {
                return ( 
                    <div>
                        <div className="pedidoIzquierda">
                            <img className="fotoPedido" src={ Foto } alt="Foto"></img>
                        </div>
                        <div className="pedidoDerecha">
                            <div><p className="tipoPedido">{ nombre }</p></div>
                            <div><p className="encabezadoPedido">Características</p></div>
                            <div><p className="descripcionPedido">{ descripcion}</p></div>
                            <div><p className="descripcionPedido">Tallas: { tallas }</p></div>
                            <div><p className="descripcionPedido">Color: { color }</p></div>
                            <div><p className="descripcionPedido">Precio: { precio }</p></div>                            
                        </div>
                    </div>                                       
                )                   
            })}
            <div className='botonesPaga'>                            
                <a href='/carrito' className='botonPagar'>Pagar</a>                            
                <a href='/catalogo' className="botonRegresar">Regresar</a>                            
            </div>
        </div>
    )
}