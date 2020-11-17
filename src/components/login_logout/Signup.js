import React from 'react'
import {connect} from 'react-redux'
import { updateSignupForm } from '../../actions/signupForm'
import signupForm from '../../reducers/signupForm'
import { signup } from '../../actions/currentUser'

const Signup = ({signupFormData, updateSignupForm, signup}) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData, 
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }
    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" onChange={handleInputChange} value={signupForm.username} name="username"/>
            <label>Password:</label>
            <input type="password" onChange={handleInputChange} value={signupForm.password} name="password"/>
            <br/>
            <input type="submit" value="Signup"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)