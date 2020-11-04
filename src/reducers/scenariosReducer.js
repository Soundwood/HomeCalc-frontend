export const scenariosReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_SCENARIOS':
            return action.payload
        default:
            return state
    }
}