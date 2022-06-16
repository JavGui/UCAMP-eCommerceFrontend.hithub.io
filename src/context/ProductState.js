import React, { useReducer } from 'react'
import ProductContext from './ProductContext'
import ProductReducer from './ProductReducer'
import clienteAxios from '../config/axios'

const ProductState = (props) => {
    const initialState = { products: []}

    const [globalState, dispatch] = useReducer(ProductReducer, initialState)
    
    const getInit = async () => {
        const data = { inicio: "1"}
        try {
            const res = await clienteAxios.post('/inicio-productos', data)
            dispatch({
                type: "OBTENER_PRODUCTOS",
                payload: res.data.products })
        } catch(error)  {
            console.log(error)
        }    
    }

    const getProducts = async (id) => {
        try {
            const data = { id: id } 
            const res = await clienteAxios.post('/obtener-productos', data)
            // console.log('id: ', res.data.products[0]._id);
            dispatch({
                type: 'OBTENER_PRODUCTOS',
                payload: res.data.products })
            dispatch({
                type: 'GUARDAR_SELECCIÓN',
                payload: res.data.products[0]._id})
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <ProductContext.Provider
            value={{
                products: globalState.products,
                selection: globalState.products,
                getInit,
                getProducts                
            }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductState