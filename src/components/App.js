import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from "../actions/currentUser"
import { getTaxRates, getMortgRates } from "../actions/rates"
import Navbar from './Navbar'
import LoginSignup from './LoginSignup'
import Logout from './Logout'
import RouterComp from "./RouterComp";
import { withRouter } from 'react-router-dom'

class App extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser()
        this.props.getTaxRates()
        this.props.getMortgRates()
    }

    render() {
        const {loggedIn} = this.props
        return (
            <div id="wrapper">
                {loggedIn ? <Navbar /> :null}
                <div id="main">
                        {loggedIn ? <RouterComp /> : null}
                    <article className="post">
                        {!loggedIn ? <LoginSignup/> :null}
                        {loggedIn ? <Logout /> :null}
                    </article>
                </div>
            </div>
        )}
}

const mapStateToProps = state => {
    return ({
        loggedIn: !!state.currentUser,
        
    })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser, getTaxRates, getMortgRates })(App))