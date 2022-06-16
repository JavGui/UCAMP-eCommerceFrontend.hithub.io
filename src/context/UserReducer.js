const reducer = (globalState, action) => {
    switch(action.type) {        
        case "OBTENER_USUARIOS":
            return {
                ...globalState,
                users: action.payload
            }
            case "REGISTRO-EXITOSO":
                localStorage.setItem('token', action.payload.token)
                return {
                    ...globalState,
                    authStatus: false, loading: true, status: 200
                }
                case "REGISTRO-NOEXITOSO":
                return {
                    ...globalState,
                    authStatus: false, loading: false, status: 400
                }                             
        default:
            return globalState
    }
}

export default reducer