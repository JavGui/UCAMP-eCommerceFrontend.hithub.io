import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PaypalButton from '../../components/Paypal/PaypalButton'
import UserContext from '../../context/UserContext'
import CarContext from '../../context/CarContext'
import '../../AppCar.css'

export default function Carrito() {
  const UserCtx = useContext(UserContext)
  const { authStatus } = UserCtx
  const CarCtx = useContext(CarContext)
  const { carrito, actualizaCarrito } = CarCtx
  

  console.log('autStatus: ', authStatus);

  let unidadesTotal = 0
  let importeTotal = 0
  console.log('acumulados: ', unidadesTotal, importeTotal);
  
  // const DeleteCompra = async (el, ind) => {    
  //   const opcion = window.confirm(`¿Deseas borrar al producto seleccionado?`)
  //   if(opcion){
  //     const nuevoCarrito = await carrito.filter((item) => item.id !== el.id)
  //     actualizaCarrito(nuevoCarrito)
  //     const id = ind + 1
  //     document.getElementById(id).remove()
  //     unidadesTotal = 0
  //     importeTotal = 0
  //   }
  // }

  const DeleteCompra = async (el, ind) => {   
    const opcion = window.confirm(`¿Deseas borrar al producto seleccionado?`)
    if(opcion){
      console.log(el.id);
      const nuevoCarrito = await carrito.filter((item) => item.id !== el.id)
      actualizaCarrito(nuevoCarrito)
      unidadesTotal = 0
      importeTotal = 0
    }
  } 

  console.log('aut: ', authStatus);

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
                { importeTotal = importeTotal + (Number(el.cantidad) * Number(el.precio)) }
                return <>
                  <tr key={ el.index } id={ index+ 1 }>
                    <td className="det det1">{index + 1}</td>
                    <td hidden className="det det6">{ el.id }</td>
                    <td className="det det5">{ el.nombre }</td>
                    <td className="det det2">{ el.talla }</td>
                    <td className="det det2">{ el.color }</td>
                    <td className="det det2">{ el.cantidad }</td>
                    <td className="detP det2">{ el.precio }</td>
                    <td className="detI det3" >{ Number(el.cantidad) * Number(el.precio) }</td>
                    <td className="det det5"><button className="borra" type="button" onClick={ ()=>{DeleteCompra(el, index)} } ></button></td>                      
                  </tr>
                </>
              })}
          </tbody>
        </table> 
      </div>
      <div className='pagar'>
        <div>
          {importeTotal === 0 ? <p className='total'>No se han agregado artículos al carrito</p> : <p className='total'>El total del pedido es: Unidades = { unidadesTotal } - Importe = { importeTotal }</p>}
        </div>
        <div>
          { importeTotal > 0 && authStatus ? <PaypalButton total={importeTotal} /> : <Link to='/login' className="botonIniSesion">Para pagar inicia sesión</Link>}
        </div>
      </div>
    </div>
  )
}