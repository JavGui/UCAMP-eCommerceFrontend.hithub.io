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
                type: "OBTENER_ALUMNOS",
                payload: res.data.users })
        } catch(error)  {
            console.log(error)
        }    
    }

    const createUser = async (dataForm) => {
        const form = { 
            nombre: dataForm.nombre, 
            apellido: dataForm.apellido, 
            email: dataForm.email,
            password: dataForm.password }    
        try {
            await clienteAxios.post('/agregar-usuario', form)
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