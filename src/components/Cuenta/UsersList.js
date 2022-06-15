import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'
import '../../AppCta.css'

export default function UserList(){
    const[datos, setDatos] = useState({ capturaNom: "", capturaApe: "", capturaEmail: "", capturaPassword: "" })
    const [mensaje, setMensaje] = useState(false)
    
    const ctx = useContext(UserContext)
    const { createUser } = ctx

    const handleChange = (e) => {
        setDatos({ ...datos, [ e.target.name] : e.target.value})
        setMensaje(" ")
      }
    
      function limpiaCampos(){
        setDatos({ capturaNom: "", capturaApe: "", capturaEmail: "", capturaPassword: "" })
        setMensaje(" ")
      }

      const sendDataToCreateUser = () => {
        console.log('datos: ', datos);
        if(!datos.capturaNom.trim() || !datos.capturaApe.trim() || !datos.capturaEmail.trim() || !datos.capturaEmail.trim() ){
          return setMensaje("Debes capturar todos los campos")
        }
        console.log('datos: ', datos);
        createUser(datos)
        setMensaje("La cuenta del usuario de creó satisfactoriamente")
      }

    return(
        <div className="Cuenta">
          <div className="entradas">
            <div className="entrada1">
                <label>Nombre</label>
                <input className="input1" name="capturaNom" type="text" value={datos.capturaNom} onChange={ (e) => handleChange(e) }/>
            </div>
            <div className="entrada2">
                <label>Apellido</label>
                <input className="input1" name="capturaApe" type="text" value={datos.capturaApe} onChange={ (e) => handleChange(e) }/>
            </div>
            <div className="entrada3">
                <label>Email</label>
                <input className="input2" name="capturaEmail" type="text" value={datos.capturaEmail} onChange={ (e) => handleChange(e) }/>
            </div>
            <div className="entrada4">
                <label>Password</label>
                <input className="input4" name="capturaPassword" type="password" value={datos.capturaPassword} onChange={ (e) => handleChange(e) }/>
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
