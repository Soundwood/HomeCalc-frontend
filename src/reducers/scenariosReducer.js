const initialState = []

export const scenariosReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_SCENARIOS':
            return action.payload
        case 'ADD_SCENARIO':
            return [...state, action.payload]
        default:
            return state
    }
}