import React, { useReducer } from 'react'
import ProductContext from './ProductContext'
import ProductReducer from './ProductReducer'
import clienteAxios from '../config/axios'

const ProductState = (props) => {
    const initialState = { products: []}

    const [globalState, dispatch] = useReducer(ProductReducer, initialState)
    
    const getInit = async () => {
        console.log('Entré a recuperar inicio');
        const data = { inicio: "1"}
        try {
            const res = await clienteAxios.post('/inicio-productos', data)
            dispatch({
                type: "OBTENER_PRODUCTOS",
                payload: res.data.products })
        } catch(error)  {
            console.log('Salí por el catch');
            // console.log(error)
        }    
    }

    const getProducts = async (id) => {
        console.log('Entré a obtener productos');
        const data = { id: id }
        try {
            const res = await clienteAxios.post('/obtener-productos', data)
                dispatch({
                    type: 'OBTENER_PRODUCTOS',
                    payload: res.data.products })
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <ProductContext.Provider
            value={{
                products: globalState.products,
                getInit,
                getProducts
            }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductState