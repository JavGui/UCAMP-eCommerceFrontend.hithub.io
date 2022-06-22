const reducer = (globalState, action) => {
    switch(action.type) {
        case "OBTENER_USUARIOS":
            return { ...globalState, users: action.payload }
            
        case "CONFIRMAR_USUARIO":
            return { ...globalState, users: action.payload }

        case "LOGIN_EXITOSO":
            localStorage.setItem('token', action.payload.token)
            return { ...globalState, authStatus: true }
        
        case "LOGIN_NOEXITOSO":
            return { ...globalState, authStatus: false, estatus: 400 }
        
        case "CERRA_SESION":
            localStorage.removeItem('token')
            return { ...globalState, authStatus: false }

        case "REGISTRO-EXITOSO":
            localStorage.setItem('token', action.payload.token)
            return { ...globalState, status: 200 }

        case "REGISTRO-NOEXITOSO":
            return { ...globalState, status: 400 }                             
        
        default:
            return globalState
    }
}

export default reducer