import React from 'redux'
import Signup from './Signup'
import Login from './Login'

const LoginSignup = () => {
    return (
        <div>
            <h2>Welcome, please Login or Signup below</h2>
            <Login/>
            <Signup/>
        </div>
    )
}

export default LoginSignup