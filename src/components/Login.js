import React from 'react'
import {connect} from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import loginForm from '../reducers/loginForm'
import { login } from '../actions/currentUser'

const Login = ({loginFormData, updateLoginForm, login}) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData, 
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }
    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" onChange={handleInputChange} value={loginForm.username} name="username"/>
            <label>Password:</label>
            <input type="password" onChange={handleInputChange} value={loginForm.password} name="password"/>
            <input type="submit" value="Login"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)