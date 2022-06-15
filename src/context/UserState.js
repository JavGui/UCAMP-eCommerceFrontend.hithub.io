import React, { useReducer } from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import clienteAxios from '../config/axios'

const UserState = (props) => {
    const initialState = { user: []}

    const [globalState, dispatch] = useReducer(UserReducer, initialState)

    const loginUser = async ( user ) => {
        const data = { email: user.email, password: user.password }
        try {
            await clienteAxios.get('/iniciar-sesion', data)
            getUser()
        } catch(error)  {
            console.log(error)
        }    
    }

    const getUser = async ( user ) => {
        const data = { nombre: user.nombre }
        try {
            const res = await clienteAxios.get('/obtener-usuarios', data)
            dispatch({
                type: "OBTENER_USUARIOS",
                payload: res.data.users })
        } catch(error)  {
            console.log(error)
        }    
    }

    const createUser = async (dataForm) => {
        console.log('dataForm: ', dataForm);
        const form = { 
            nombre: dataForm.capturaNom, 
            apellido: dataForm.capturaApe, 
            email: dataForm.capturaEmail,
            password: dataForm.capturaPassword }
        console.log('form: ', form);  
        try {
            await clienteAxios.post('/crear-usuario', form)
            getUser()
        } catch(error)  {
            console.log(error)
        }
    }
    
    return (
        <UserContext.Provider
            value={{
                users: globalState.users,
                getUser,
                createUser,
                loginUser
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}
export default UserState