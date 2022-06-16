import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../context/UserContext'
import '../../AppReg.css'

export default function UserList(){
    const[datos, setDatos] = useState({ capturaNom: "", capturaApe: "", capturaEmail: "", capturaPassword: "" })
    const [mensaje, setMensaje] = useState(false)
    
    const ctx = useContext(UserContext)
    const { createUser, status } = ctx

    const handleChange = (e) => {
      e.preventDefault()
      setDatos({ ...datos, [ e.target.name] : e.target.value})
      setMensaje(" ")
      }
    
      function limpiaCampos(){
        setDatos({ capturaNom: "", capturaEmail: "", capturaPassword: "" })
        setMensaje(" ")
      }

      const sendDataToCreateUser = () => {
        if(!datos.capturaNom.trim() || !datos.capturaEmail.trim() || !datos.capturaEmail.trim() ){
          return setMensaje("Debes capturar todos los campos")
        }
        createUser(datos)
      }

      useEffect(() =>{
        status === 200 ? setMensaje("El registro del usuario fue satisfactorio") : setMensaje("La cuenta de correo ya existe")
      },[status])

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
    
          <div className="captura">  
            <div className="botones">
              <div>
              <button className="agrega" type="button" onClick={ ()=>sendDataToCreateUser() } >Agrega</button>
              </div>
              <div>                
                <button className="limpia" type="button" onClick={ ()=>limpiaCampos() } >LImpia</button>
               </div>
            </div>
          </div>          
          <div className="mensaje">
             <p className="texto">{mensaje}</p>
          </div>
        </div>  
    )
}
