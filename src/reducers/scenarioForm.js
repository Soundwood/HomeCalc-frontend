const initialState = {
    net_income: "",
    income_after_tax: "",
    monthly_debt: "",
    credit_score: "great",
    downpayment: "",
    state: "",
    city: "",
    prop_tax_rate_id: "",
    mortg_interest_rate_id: "",
    user_id: ""
}

export const scenarioForm = (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE_SCENARIO_FORM":
            return {
                ...state, [action.formData.name]: action.formData.value
            }
        case "RESET_SCENARIO_FORM":
            return initialState
        case "SET_FORM_DATA_FOR_EDIT":
            return action.scenarioFormData
        default:
            return state
    }
}