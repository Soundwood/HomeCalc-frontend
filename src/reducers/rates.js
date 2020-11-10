const taxInitialState = []
const intInitialState = []

export const taxRatesReducer = (state = taxInitialState, action) => {
    switch (action.type) {
        case "SET_TAX_RATES":
            return action.tax_rates
        default:
            return state
    }
}

export const intRatesReducer = (state = intInitialState, action) => {
    switch (action.type) {
        case "SET_INT_RATES":
            return action.int_rates
        default:
            return state
    }
}