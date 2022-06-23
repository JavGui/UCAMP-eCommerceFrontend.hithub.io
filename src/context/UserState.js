import React, { useReducer } from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import clienteAxios from '../config/axios'

const UserState = (props) => {
    const initialState = { user: {esername: null, email: null}, authStatus: false, status: null }

    const [globalState, dispatch] = useReducer(UserReducer, initialState)
    

// --------------- LOGIN DEL USUARIO ---------------
    const loginUser = async ( dataForm ) => {
        const form = { email: dataForm.capturaEmail, password: dataForm.capturaPassword }
        try {
            const res = await clienteAxios.post('/iniciar-sesion', form)
            if (res.status === 200){
                dispatch({
                    type: "LOGIN_EXITOSO",
                    payload: res.data})
                confirmUser(dataForm.capturaEmail) 
            } else {
            dispatch({
                type: "LOGIN_NOEXITOSO",
                payload: "El usuario no existe o el password es incorrecto"}) 
            }
        } catch(error)  { 
            dispatch({
                type: "LOGIN_NOEXITOSO",
                payload: "El usuario no existe o el password es incorrecto"}) 
        }        
    }
    
// --------------- LOGOUT DEL USUARIO ---------------
    const logout = () => {
        dispatch({
            type: 'CERRE_SESION'
        })
    }

// --------------- VERIFICACIÓN DEL TOKEN ---------------
    const verifyingToken = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            clienteAxios.defaults.headers.common['x-auth-token'] = token
        } else {
            delete clienteAxios.defaults.headers.common['x-auth-token']
        }
        try{
            const respuesta = await clienteAxios.get('/verificar-usuario')
            dispatch({
                type: 'OBTENER_USUARIO',
                payload: respuesta.data.usaurio,
            })
        } catch (error) {
            console.log(error);
        }
    }    
    
// --------------- LEER USARIOS DE LA BASE DE DATOS ---------------
    const getUser = async ( user ) => {
        const data = { id: user.id }
        try {
            const res = await clienteAxios.get('/obtener-usuarios', data)
            dispatch({
                type: "OBTENER_USUARIOS",
                payload: res.data.users })
        } catch(error)  {
            console.log(error)
        }    
    }

// --------------- LEER USARIO LOGUEADO DE LA BASE DE DATOS ---------------
    const confirmUser = async ( email ) => {
        const data = { email: email }
        try {
            const res = await clienteAxios.get('/confirmar-usuario', data)
            dispatch({
                type: "CONFIRMAR_USUARIO",
                payload: res.data.users })
        } catch(error)  {
            console.log(error)
        }    
}

    // --------------- CREAR REGISTRO DE USARIO EN LA BASE DE DATOS ---------------
    const createUser = async (dataForm) => {
        const form = { 
            nombre: dataForm.capturaNom, 
            email: dataForm.capturaEmail,
            password: dataForm.capturaPassword }
        try {
            const res = await clienteAxios.post('/crear-usuario', form)
            if (res.status === 200){
                dispatch({
                    type: "REGISTRO_EXITOSO",
                    payload: res.data})
            } else {
                dispatch({
                    type: "REGISTRO_NOEXITOSO",
                    payload: "La cuenta de correo ya existe"})
            }
        } catch(error)  {
            dispatch({
                type: "REGISTRO_NOEXITOSO",
                payload: "La cuenta de correo ya existe"})
        }
    }
    
    return (
        <UserContext.Provider
            value={{
                users: globalState.users,
                authStatus: globalState.authStatus,
                mensaje: globalState.mensaje,                
                getUser,
                confirmUser,
                createUser,
                loginUser,
                verifyingToken,
                logout
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState