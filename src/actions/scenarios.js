import { resetScenarioForm } from './scenarioForm'
import * as Constants from '../constants'

// synchronous actions
export const setMyScenarios = scenarios => {
    return {
        type: "SET_MY_SCENARIOS",
        scenarios
    }
}
export const clearScenarios = () => {
    return {
        type: "CLEAR_SCENARIOS"
    }
}
export const addScenario = scenario => {
    return {
        type: "ADD_SCENARIO",
        scenario
    }
}
export const deleteScenarioSuccess = scenarioId => {
    return {
        type: "DELETE_SCENARIO",
        scenarioId
    }
}
export const updateScenarioSuccess = scenario => {
    return {
        type: "UPDATE_SCENARIO",
        scenario
    }
}
export const setScenarioStars = scenario => {
    return {
        type: "UPDATE_SCENARIO",
        scenario
    }
}

// async actions

export const getMyScenarios = () => {
    return dispatch => {
        return fetch(`${Constants.BACKEND_BASE_URL}/api/v1/scenarios`, {
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
            dispatch(setMyScenarios(response))
            }
        })
        .catch(console.log)
    }
}

export const createScenario = (scenarioData, history) => {
    return dispatch => {
        return fetch(`${Constants.BACKEND_BASE_URL}/api/v1/scenarios`, {
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(scenarioData)
        })
        .then(r => r.json())
        .then(resp => {
            if (resp.error) {
            alert(resp.error)
            } else {
            dispatch(addScenario(resp))
            dispatch(resetScenarioForm())
            history.push(`/scenarios/${resp.id}`)
            }
        })
        .catch(console.log)
    }
}

export const updateScenario = (scenarioData, scenarioId, history) => {
    return dispatch => {
        return fetch(`${Constants.BACKEND_BASE_URL}/api/v1/scenarios/${scenarioId}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(scenarioData)
        })
        .then(r => r.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(updateScenarioSuccess(resp))
                history.push(`/scenarios/${resp.id}`)
            }
        })
        .catch(console.log)

    }
}

export const updateScenarioStars = (scenarioData, scenarioId) => {
    return dispatch => {
        return fetch(`${Constants.BACKEND_BASE_URL}/api/v1/scenarios/${scenarioId}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(scenarioData)
        })
        .then(r => r.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setScenarioStars(resp))
            }
        })
        .catch(console.log)

    }
}

export const deleteScenario = (scenario, history) => {
    return dispatch => {
        return fetch(`${Constants.BACKEND_BASE_URL}/api/v1/scenarios/${scenario.id}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
        })
        .then(r => r.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(deleteScenarioSuccess(scenario.id))
                dispatch(getMyScenarios())
            }
        })
        .catch(console.log)
    }
}