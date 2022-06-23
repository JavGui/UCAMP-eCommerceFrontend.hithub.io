import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import '../../AppLog.css'

export default function LoginList(){
  const ruta = useParams()
  const[datos, setDatos] = useState({ capturaEmail: "", capturaPassword: "" })
  const [textoMensaje, setTextoMensaje] = useState("")
  const [textoMensajeAnt, setTextoMensajeAnt] = useState("")

  const ctx = useContext(UserContext)
  const { users, loginUser, verifyingToken, authStatus, mensaje } = ctx

  const handleChange = (e) => {
    setDatos({ ...datos, [ e.target.name] : e.target.value})
    setTextoMensaje(" ")
  }
  
  function limpiaCampos(){
    setDatos({ capturaEmail: "", capturaPassword: "" })
    setTextoMensaje(" ")
  }

  const sendDataToLoginUser = async () => {
    if(!datos.capturaEmail.trim() || !datos.capturaPassword.trim() ){
      return setTextoMensaje("Debes capturar los dos campos")
    }
    await loginUser(datos)
    if (mensaje === textoMensajeAnt){
      setTextoMensaje(mensaje)
    }
  }

  useEffect (() => {
    setTextoMensaje(mensaje)
    setTextoMensajeAnt(mensaje)
  }, [mensaje])

  useEffect(() =>{
    if (authStatus) {
      verifyingToken(users)     
    }
    if (authStatus){
      setTextoMensaje(`Hola  ${users[0].nombre}, disfruta tu experiencia de compra`)
    }
  },[authStatus])


  return(
      <div className="Login">
        <form className="entradas">
          <div className="entrada1">
              <label>Correo</label>
              <input className="input1" name="capturaEmail" type="email" value={datos.capturaEmail} onChange={ (e) => handleChange(e) }/>
          </div>
          <div className="entrada2">
              <label>Password</label>
              <input className="input2" name="capturaPassword" type="password" value={datos.capturaPassword} onChange={ (e) => handleChange(e) }/>
          </div>
        </form>
  
        <div className="captura">  
          <div className="botones">
            <div>
              <button className="inicia" type="button" onClick={ ()=>sendDataToLoginUser() } >Iniciar</button>
            </div>
            <div>                
              <button className="limpiar" type="button" onClick={ ()=>limpiaCampos() } >LImpia</button>
            </div>
            <div>
              { authStatus && ruta.ruta === "carrito" ? <Link to='/carrito'  className="botonRegresaPago">Regresa al carrito</Link> : <Link to='/' className="botonRegresaPago">Regresa a Inicio</Link>}
            </div>
          </div>
        </div>
         <div className="mensaje">
            <p className="texto2">{ textoMensaje }</p>
         </div>       
      </div>  
  )
}

