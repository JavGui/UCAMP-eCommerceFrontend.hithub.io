const reducer = (globalState, action) => {
    switch(action.type) {
        case "OBTENER_USUARIOS":
            return { ...globalState, users: action.payload }
            
        case "CONFIRMAR_USUARIO":
            return { ...globalState, users: action.payload }

        case "LOGIN_EXITOSO":
            localStorage.setItem('token', action.payload.token)
            return { ...globalState, authStatus: true, mensaje: null }
        
        case "LOGIN_NOEXITOSO":
            return { ...globalState, authStatus: false, mensaje: action.payload }
        
        case "CERRA_SESION":
            localStorage.removeItem('token')
            return { ...globalState, authStatus: false }

        case "REGISTRO_EXITOSO":
            localStorage.setItem('token', action.payload.token)
            return { ...globalState, resMsg: 200 }

        case "REGISTRO_NOEXITOSO":
            return { ...globalState, resMsg: 400 }                             
        
        default:
            return globalState
    }
}

export default reducer