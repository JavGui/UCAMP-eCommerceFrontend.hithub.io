import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PaypalButton from '../../components/Paypal/PaypalButton'
import UserContext from '../../context/UserContext'
import CarContext from '../../context/CarContext'
import '../../AppCar.css'

function moneda(pesos){
  return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(pesos);
}

export default function Carrito() {
  const UserCtx = useContext(UserContext)
  const { authStatus } = UserCtx
  const CarCtx = useContext(CarContext)
  const { carrito, actualizaCarrito } = CarCtx

  let unidadesTotal = 0
  let importeTotal = 0
  
  const DeleteCompra = async (el) => {
    console.log('el.pos: ', el.pos);
    const opcion = window.confirm(`¿Deseas borrar al producto seleccionado?`)
    if(opcion){
      console.log('carrito; ', carrito);
      const nuevoCarrito = await carrito.filter((item) => item.pos !== el.pos)
      console.log('nuevo carrito:', nuevoCarrito);
      actualizaCarrito(nuevoCarrito)
      unidadesTotal = 0
      importeTotal = 0
    }
  } 


  return (
    <div className="container10">
      <h2 className='enc'>Resumen de su pedido</h2>   
      <div className='carrito'>    
        <table className="table">
          <thead className="table-header">
            <tr>
              <th className="col col1">#</th>
              <th className="col col2">Nombre</th>
              <th className="col col3">Talla</th>
              <th className="col col4">Color</th>
              <th className="col col6">Cant</th>
              <th className="col col5">Precio</th>
              <th className="col col7">Importe</th>
              <th className="col col9">Borra</th>
              <th hidden className="col col6" >Id</th>
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
      <div className='final'>
        <div className='pagar'>
            {importeTotal === 0 ? <p className='total'>No se han agregado artículos al carrito</p> : <p className='total'>Total del pedido: &nbsp;&nbsp; Artículos: &nbsp;{ unidadesTotal } &nbsp;&nbsp;&nbsp; Importe:&nbsp; { moneda(importeTotal) }</p>}
          </div>    
        <div className='paypal'>
          { importeTotal > 0 && authStatus ? <PaypalButton total={importeTotal} /> : <Link to='/login' className="botonIniSesion">Para pagar inicia sesión</Link>}
        </div>
      </div>
    </div>
  )
}