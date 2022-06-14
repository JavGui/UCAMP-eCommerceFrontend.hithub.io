import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'
import '../../AppLog.css'

export default function LoginList(){
    const[datos, setDatos] = useState({ capturaEmail: "", capturaPassword: "" })
    const [mensaje, setMensaje] = useState(false)
    
    const ctx = useContext(UserContext)
    const { users, loginUser } = ctx

    const handleChange = (e) => {
        setDatos({ ...datos, [ e.target.name] : e.target.value})
        setMensaje(" ")
      }
    
      function limpiaCampos(){
        setDatos({ capturaEmail: "", capturaPassword: "" })
        setMensaje(" ")
      }

      const sendDataToLoginUser = () => {
        console.log('datos: ', datos);
        if(!datos.capturaEmail.trim() || !datos.capturaPassword.trim() ){
          console.log("Mensaje: ", mensaje)
          return setMensaje("Debes capturar los dos campos")
        }
        loginUser(users)
        setMensaje("La cuenta del usuario de creó satisfactoriamente")
      } 

    return(
        <div className="Login">
          <div className="entradas">
            <div className="entrada1">
                <label>Correo</label>
                <input className="input1" name="capturaEmail" type="email" value={datos.capturaEmail} onChange={ (e) => handleChange(e) }/>
            </div>
            <div className="entrada4">
                <label>Password</label>
                <input className="input4" name="capturaPassword" type="password" value={datos.capturaPassword} onChange={ (e) => handleChange(e) }/>
            </div>
          </div>
    
          <div className="captura">  
            <div className="botones">
              <div>
              <button className="agrega" type="button" onClick={ ()=>sendDataToLoginUser() } >Iniciar</button>
              </div>
              <div>                
                <button className="limpia" type="button" onClick={ ()=>limpiaCampos() } >LImpia</button>
               </div>
            </div>
          </div>          
          <div className="mensaje">
             <p className="texto2">{mensaje}</p>
          </div>
        </div>  
    )
}

