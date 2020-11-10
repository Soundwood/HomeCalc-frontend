import { resetLoginForm } from './loginForm'
import { resetSignupForm } from './signupForm'
import { getMyScenarios, clearScenarios } from './scenarios'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}
export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
} 

// sync above
// async below

export const login = (credentials, history) => {
    return dispatch => {
        //  add loading current user message here?
        return fetch('http://localhost:3000/api/v1/login', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then( r => r.json())
            .then(user => {
                if (user.error) {
                    console.log(user.error)
                } else {
                    dispatch(setCurrentUser(user))
                    dispatch(getMyScenarios())
                    dispatch(resetLoginForm())
                }
            })
            .catch(console.log)
    }
}

export const signup = credentials => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch('http://localhost:3000/api/v1/signup', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then( r => r.json())
            .then(user => {
                if (user.error) {
                    console.log(user.error)
                } else {
                    dispatch(setCurrentUser(user))
                    dispatch(resetSignupForm())
                }
            })
            .catch(console.log)
    }
}

export const logout = (credentials, history) => {
    return dispatch => {
        dispatch(clearCurrentUser())
        dispatch(clearScenarios())
        return fetch('http://localhost:3000/api/v1/logout', {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            console.log("logged out")
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/get_current_user', {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then( r => r.json())
            .then(user => {
                if (user.error) {
                    console.log(user.error)
                } else {
                    dispatch(setCurrentUser(user))
                }
            })
            .catch(console.log)
    }
}