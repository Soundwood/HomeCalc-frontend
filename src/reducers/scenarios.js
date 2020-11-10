const initialState = []

const scenariosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_SCENARIOS":
            return action.scenarios
        case "ADD_SCENARIO":
            return state.concat(action.scenario)
        case "UPDATE_SCENARIO":
            return state.map(scenario => scenario.id === action.scenario.id ? action.scenario : scenario )
        case "DELETE_SCENARIO":
            return state.filter(scenario => scenario.id === action.scenarioId ? false : true )
        case "CLEAR_SCENARIOS":
            return initialState
        default:
            return state
    }
}

export default scenariosReducer