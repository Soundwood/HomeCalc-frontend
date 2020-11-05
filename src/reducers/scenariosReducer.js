export const scenariosReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_SCENARIOS':
            return action.payload
        case 'ADD_SCENARIO':
            return [...state, action.payload]
        default:
            return state
    }
}