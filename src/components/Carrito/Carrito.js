import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import PaypalButton from '../../components/Paypal/PaypalButton'
import UserContext from '../../context/UserContext'
import CarContext from '../../context/CarContext'
import '../../AppCar.css'

function moneda(pesos){
  return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(pesos);
}

export default function Carrito() {
  const [ruta, setRuta] = useState("carrito")
  const UserCtx = useContext(UserContext)
  const { authStatus } = UserCtx
  const CarCtx = useContext(CarContext)
  const { carrito, actualizaCarrito } = CarCtx



  let unidadesTotal = 0
  let importeTotal = 0
  
  
  const DeleteCompra = async (el) => {
    const opcion = window.confirm(`¿Deseas borrar al producto seleccionado?`)
    if(opcion){
      const nuevoCarrito = await carrito.filter((item) => item.pos !== el.pos)
      actualizaCarrito(nuevoCarrito)
      unidadesTotal = 0
      importeTotal = 0
    }
  } 


  return (
    <div className="container10">
      <h2 className='enc'>Resumen de tu pedido</h2>   
      <div className='carrito'>    
        <table className="table">
          <thead className="table-header">
            <tr>
              <th className="columna col1">#</th>
              <th className="columna col2">Nombre</th>
              <th className="columna col3">Talla</th>
              <th className="columna col4">Color</th>
              <th className="columna col6">Cant</th>
              <th className="columna col5">Precio</th>
              <th className="columna col7">Importe</th>
              <th className="columna col9">Borra</th>
              <th hidden className="columna col6" >Id</th>
            </tr>
          </thead>
          <tbody>
            {carrito && carrito.map((el, index) => 
              {
                // eslint-disable-next-line no-lone-blocks
                { unidadesTotal = unidadesTotal + Number(el.cantidad) }
                // eslint-disable-next-line no-lone-blocks
                { importeTotal = importeTotal + (Number(el.importe.replace("$", "").replace(",", ""))) }
                return <>
                  <tr key={ el.id } id={ index+ 1 }>
                    <td className="det det1">{index + 1}</td>
                    <td hidden className="det det6">{ el.id }</td>
                    <td className="det det5">{ el.nombre }</td>
                    <td className="det det2">{ el.talla }</td>
                    <td className="det det2">{ el.color }</td>
                    <td className="det det2">{ el.cantidad }</td>
                    <td className="detP det2">{ el.precio }</td>
                    <td className="detI det3" >{ el.importe }</td>
                    <td className="det det5"><button className="borra" type="button" onClick={ ()=>{DeleteCompra(el)} } ></button></td>                      
                  </tr>
                </>
              })}
          </tbody>
        </table> 
      </div>
      <div className='container final'>
        <div className='row pagar'>
            {importeTotal === 0 ? <p className='total'>No se han agregado artículos al carrito</p> : <p className='total'>Total del pedido: &nbsp;&nbsp; Artículos: &nbsp;{ unidadesTotal } &nbsp;&nbsp;&nbsp; Importe:&nbsp; { moneda(importeTotal) }</p>}
          </div>    
        <div className='paypal'>
          { importeTotal > 0 && authStatus ? <PaypalButton total={importeTotal} /> : importeTotal > 0 && !authStatus ? <Link to={`/login/${ruta}`} type='button' className="btn btn-primary botonIniSesion">Para pagar inicia sesión</Link> : null }
        </div>
      </div>
    </div>
  )
}