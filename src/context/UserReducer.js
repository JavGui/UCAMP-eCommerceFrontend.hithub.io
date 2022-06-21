const reducer = (globalState, action) => {
    switch(action.type) {
        case "OBTENER_USUARIOS":
            return { ...globalState, users: action.payload }
            
        case "CONFIRMAR_USUARIO":
            return { ...globalState, users: action.payload }

        case "LOGIN_EXITOSO":
            localStorage.setItem('token', action.payload.token)
            return { ...globalState, authStatus: true, loading: true, users: action.payload }
        
        case "LOGIN_NOEXITOSO":
            return { ...globalState, authStatus: false, loading: false, users: action.payload }
        
        case "CERRA_SESION":
            localStorage.removeItem('token')
            return { ...globalState, authStatus: false, loading: false }

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