import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProductContext from '../context/ProductContext'
import CarContext from '../context/CarContext'
import { useParams } from 'react-router-dom'
import '../App.css'

function moneda(pesos){
    return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(pesos);
}

export default function Pedido(){
    const { id } = useParams() 
    const navigate = useNavigate()   
    const [captura, setCaptura] = useState(({talla: "", cantidad: 1}))
    const ProdCtx = useContext(ProductContext)
    const { products, getProducts } = ProdCtx
    const CarCtx = useContext(CarContext)
    const { guardaCarrito, carrito} = CarCtx

    useEffect(() => {
        getProducts(id)
    },[])

    const handleChange = (event) => {
        setCaptura({ ...captura, [ event.target.name] : event.target.value})
    }

    function sendDataToCarrito(){       
        if(captura.talla === ''){
            return alert(`Debe capturar la talla`)
        }
        if(captura.cantidad === '' || captura.cantidad <= 0 || captura.cantidad >= 99){
            return alert(`Debe capturar una cantidad válida entre 1 y 99`)
        }
        const precioEditado = moneda(products[0].precio)
        const importeEditado = moneda(captura.cantidad * products[0].precio)
        console.log('carrito: ', carrito);
        const posicion = carrito.length
        console.log('posicion: ', posicion);
        const dato = {id: products[0]._id, pos: posicion, nombre: products[0].nombre, talla: captura.talla, color: products[0].color, cantidad: captura.cantidad, precio: precioEditado, importe: importeEditado}
        guardaCarrito(dato)
        getProducts(id)
        alert(`Se agregó al carrito:  ${captura.cantidad} - ${products[0].nombre} / Color: ${products[0].color} / Talla: ${captura.talla}`)
        navigate('/catalogo')
    }
       
    return (
        <>
            <div className="container6">               
                <div >
                    <img className="fotoPedido" src={ products[0].urlFoto } alt="Foto"></img>
                </div>
                <div key="products[0]._id" className="pedidoDerecha">
                    <div><p className="tipoPedido">{ products[0].nombre }</p></div>
                    <div><p className="encabezadoPedido">Características</p></div>
                    <div><p className="descripcionPedido">{ products[0].descripcion}</p></div>
                    <div><p className="descripcionPedido">Tallas: { products[0].tallas }</p></div>
                    <div className="colorPrecio">
                        <div><p className="descripcionPedido">Color: { products[0].color }</p></div>
                        <div><p className="descripcionPedido">Precio: ${ products[0].precio }.00</p></div>
                    </div>
                    <div className='preferencias'>
                        <div className='talla'>
                            <label className="labelCant">Talla</label>
                            <select className="CapTal"  name='talla' onChange={ handleChange }>
                                <option value=""></option>
                                <option value="CH">CH</option>
                                <option value="M">M</option>
                                <option value="G">G</option>
                                <option value="XG">XG</option>
                                </select>
                        </div>
                        <div className='cantidad'>
                            <label className="labelCant">Cantidad</label>
                            <input className='CapNum' name="cantidad" type="number" value={ captura.cantidad} onChange={ handleChange } ></input>
                        </div>                        
                    </div>
                    <div className='botonesPed'>              
                        <button className="meteCarrito" type="button" onClick={ ()=>sendDataToCarrito() } >Agrega al carrito</button>
                        <Link to='/catalogo' className='regresaCat' >Regresar</Link>                          
                    </div>
                </div>
            </div>            
        </>
    )
}