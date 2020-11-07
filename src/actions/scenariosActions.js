export const fetchScenarios = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/scenarios')
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'FETCH_SCENARIOS', payload: data}))
    }
}
export const addScenario = scenario => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/scenarios', {
            method: 'POST',
            body: JSON.stringify(scenario),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(data => dispatch({ type: 'ADD_SCENARIO', payload: data}))
    }
}