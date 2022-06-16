import React, { useReducer, useState } from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import clienteAxios from '../config/axios'

const UserState = (props) => {
    const initialState = { user: {esername: null, email: null}, status: null,  authStatus: false, loading: false}
    const [id, setId] = useState("")

    const [globalState, dispatch] = useReducer(UserReducer, initialState)
    

    const loginUser = async ( dataForm ) => {
        const form = { email: dataForm.capturaEmail, password: dataForm.capturaPassword }
        try {
            const res = await clienteAxios.post('/iniciar-sesion', form)
            if (res.status === 200){
                dispatch({
                    type: "REGISTRO-EXITOSO",
                    payload: res.data})
                setId("")
                getUser(id)
            }
        } catch(error)  {
            dispatch({
                type: "REGISTRO-NOEXITOSO",
                payload: error.request.status})
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
        const form = { 
            nombre: dataForm.capturaNom, 
            email: dataForm.capturaEmail,
            password: dataForm.capturaPassword }
        try {
            const res = await clienteAxios.post('/crear-usuario', form)
            if (res.status === 200){
                dispatch({
                    type: "REGISTRO-EXITOSO",
                    payload: res.data})
                setId("")
                getUser(id)
            }            
        } catch(error)  {
            dispatch({
                type: "REGISTRO-NOEXITOSO",
                payload: error.request.status})
        }
    }
    
    return (
        <UserContext.Provider
            value={{
                users: globalState.users,
                status: globalState.status,
                authStatus: globalState.authStatus,
                loading: globalState.loading,
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