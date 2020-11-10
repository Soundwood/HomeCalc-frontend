export const updateScenarioForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_SCENARIO_FORM",
        formData
    }
}
export const resetScenarioForm = () => {
    return {
        type: "RESET_SCENARIO_FORM"
    }
}

export const setFormDataForEdit = scenario => {
    const scenarioFormData = {
        net_income: scenario.net_income,
        income_after_tax: scenario.income_after_tax,
        monthly_debt: scenario.monthly_debt,
        credit_score: scenario.credit_score,
        downpayment: scenario.downpayment,
        city: scenario.city,
        state: scenario.state
    }
    return {
        type: "SET_FORM_DATA_FOR_EDIT",
        scenarioFormData
    }
}

// export const fetchScenarios = () => {
//     return (dispatch) => {
//         fetch('http://localhost:3000/api/v1/scenarios')
//         .then(resp => resp.json())
//         .then(data => dispatch({ type: 'FETCH_SCENARIOS', payload: data}))
//     }
// }
// export const addScenario = scenario => {
//     return (dispatch) => {
//         fetch('http://localhost:3000/api/v1/scenarios', {
//             method: 'POST',
//             body: JSON.stringify(scenario),
//             headers: { 'Content-Type': 'application/json' }
//         })
//         .then(resp => resp.json())
//         .then(data => dispatch({ type: 'ADD_SCENARIO', payload: data}))
//     }
// }