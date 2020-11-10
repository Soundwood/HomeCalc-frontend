import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'

const Logout = ({ logout, history }) => {

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            logout()
        }
        }>
            <input type="submit" value="Logout"/>
        </form>
    )
}

export default connect(null, { logout })(Logout)