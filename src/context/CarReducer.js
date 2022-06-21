const reducer = (globalState, action) => {
    switch(action.type) {        
        case "GUARDA_CARRITO":
            return { ...globalState, carrito: [...globalState.carrito, action.payload] }

        case "ACTUALIZA_CARRITO":
            return { ...globalState.carrito, carrito: action.payload }    

        default:
            return globalState
    }
}

export default reducer