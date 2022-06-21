import React, { useReducer } from 'react'
import CarContext from './CarContext'
import CarReducer from './CarReducer'

const CarState = (props) => {
    const initialState = { carrito: []}

    const [globalState, dispatch] = useReducer(CarReducer, initialState)
    
    const guardaCarrito = (dato) => {        
        try {
            const res = { id: dato.id, nombre: dato.nombre, cantidad: dato.cantidad, talla: dato.talla, color: dato.color, precio: dato.precio }
            dispatch({
                type: "GUARDA_CARRITO",
                payload: res})
        } catch(error)  {
            console.log(error)
        }
    }

    const actualizaCarrito = async (dato) => { 
        console.log('dato: ', dato)     
        try {
            const res = dato 
            await dispatch({
                type: "ACTUALIZA_CARRITO",
                payload: res})
        } catch(error)  {
            console.log(error)
        }
    }
    
    return (
        <CarContext.Provider
            value={{
                carrito: globalState.carrito,
                guardaCarrito,
                actualizaCarrito               
            }}
        >
            {props.children}
        </CarContext.Provider>
    )
}
export default CarState