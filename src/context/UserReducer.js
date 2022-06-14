const reducer = (globalState, action) => {
    switch(action.type) {        
        case "OBTENER_USUARIOS":
            return {
                ...globalState,
                users: action.payload
            }            
        default:
            return globalState
    }
}

export default reducer