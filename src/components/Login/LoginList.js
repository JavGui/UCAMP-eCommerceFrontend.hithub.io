import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import ProductContext from '../../context/ProductContext'
import '../../AppLog.css'


export default function LoginList(){
  const { id } = useParams()
  const[datos, setDatos] = useState({ capturaEmail: "", capturaPassword: "" })
  const [mensaje, setMensaje] = useState("")

  const ctx = useContext(UserContext)
  const {loginUser, status } = ctx

  const ctxp = useContext(ProductContext)
  const {selection } = ctxp

  const handleChange = (e) => {
      setDatos({ ...datos, [ e.target.name] : e.target.value})
      setMensaje(" ")
    }
  
    function limpiaCampos(){
      setDatos({ capturaEmail: "", capturaPassword: "" })
      setMensaje(" ")
    }

    const sendDataToLoginUser = () => {
      if(!datos.capturaEmail.trim() || !datos.capturaPassword.trim() ){
        return setMensaje("Debes capturar los dos campos")
      }
      loginUser(datos)
    } 

    useEffect(() =>{
      status === 200 ? setMensaje("¡¡¡ Bienvenido !!!") : setMensaje("La cuenta de correo no existe o el password es incorrecto")
    },[status])

    // console.log('selección: ', selection);

  return(
      <div className="Login">
        <div className="entradas">
          <div className="entrada1">
              <label>Correo</label>
              <input className="input1" name="capturaEmail" type="email" value={datos.capturaEmail} onChange={ (e) => handleChange(e) }/>
          </div>
          <div className="entrada2">
              <label>Password</label>
              <input className="input2" name="capturaPassword" type="password" value={datos.capturaPassword} onChange={ (e) => handleChange(e) }/>
          </div>
        </div>
  
        <div className="captura">  
          <div className="botones">
            <div>
              <button className="inicia" type="button" onClick={ ()=>sendDataToLoginUser() } >Iniciar</button>
            </div>
            <div>                
              <button className="limpiar" type="button" onClick={ ()=>limpiaCampos() } >LImpia</button>
            </div>
            <div>
              {selection ? <Link to={`/pedido/${selection}`}  className="botonRegresaPago">Regresa a Pagar</Link> : <Link to='/' className="botonRegresaPago">Regresa a Inicio</Link>}
            </div>
          </div>
        </div>          
        <div className="mensaje">
            <p className="texto2">{mensaje}</p>
        </div>
      </div>  
  )
}

