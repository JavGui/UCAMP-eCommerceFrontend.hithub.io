import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../context/UserContext'
import '../../AppReg.css'

export default function UserList(){
    const[datos, setDatos] = useState({ capturaNom: "", capturaApe: "", capturaEmail: "", capturaPassword: "" })
    const [textoMensaje, setTextoMensaje] = useState("")
    const [textoMensajeAnt, setTextoMensajeAnt] = useState("")
    
    const ctx = useContext(UserContext)
    const { createUser, mensaje } = ctx

    const handleChange = (e) => {
      e.preventDefault()
      setDatos({ ...datos, [ e.target.name] : e.target.value})
      setTextoMensaje(" ")
    }
    
    function limpiaCampos(){
      setDatos({ capturaNom: "", capturaEmail: "", capturaPassword: "" })
      setTextoMensaje(" ")
    }

    const sendDataToCreateUser = async () => {
      if(!datos.capturaNom.trim() || !datos.capturaEmail.trim() || !datos.capturaPassword.trim() ){
        return setTextoMensaje("Debes capturar todos los campos")
      }
      await createUser(datos)
      if (mensaje === textoMensajeAnt){
        setTextoMensaje(mensaje)
      }
    }

    useEffect (() => {
      setTextoMensaje(mensaje)
      setTextoMensajeAnt(mensaje)
    }, [mensaje])


  return(
      <div className="Registro">
        <div className="entradas">
          <div className="entrada1">
              <label>Usuario</label>
              <input className="input1" name="capturaNom" type="text" value={datos.capturaNom} onChange={ (e) => handleChange(e) }/>
          </div>
          <div className="entrada2">
              <label>Email</label>
              <input className="input2" name="capturaEmail" type="text" value={datos.capturaEmail} onChange={ (e) => handleChange(e) }/>
          </div>
          <div className="entrada3">
              <label>Password</label>
              <input className="input3" name="capturaPassword" type="password" value={datos.capturaPassword} onChange={ (e) => handleChange(e) }/>
          </div>
        </div>
  
        <div className="container">  
          <div className="row captura">
            <div className='col-12'>
              <button type="button" className="btn btn-success agrega" onClick={ ()=>sendDataToCreateUser() } >Agrega</button>
              <button type="button" className="btn btn-secondary limpia" onClick={ ()=>limpiaCampos() } >LImpia</button>
            </div>
          </div>
        </div>          
        <div className="mensaje">
            <p className="texto">{textoMensaje}</p>
        </div>
      </div>  
    )
}
