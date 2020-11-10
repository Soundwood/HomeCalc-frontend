// synchronous actions
export const setTaxRates = tax_rates => {
    return {
        type: "SET_TAX_RATES",
        tax_rates
    }
}
export const setIntRates = int_rates => {
    return {
        type: "SET_INT_RATES",
        int_rates
    }
}

// async actions
export const getTaxRates = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/prop_tax_rates", {
            credentials: "include",
            method: "GET",
            headers: {
            "Content-Type": "application/json"
            },
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setTaxRates(response))
            }
        })
        .catch(console.log)
    }
}
export const getMortgRates = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/mortg_interest_rates", {
            credentials: "include",
            method: "GET",
            headers: {
            "Content-Type": "application/json"
            },
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setIntRates(response))
            }
        })
        .catch(console.log)
    }
}