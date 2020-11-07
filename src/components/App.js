import React from 'react'
import ScenarioForm from './ScenarioForm'
import { connect } from 'react-redux'
import { getCurrentUser } from "../actions/currentUser"
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import Signup from './Signup'
import MyScenarios from './MyScenarios'
import { fetchScenarios } from '../actions/scenariosActions'
import { Route } from 'react-router-dom'

class App extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
        const { loggedIn, scenarios } = this.props
        return (
            <div>
                { loggedIn ? <Navbar /> : <Home/> }
                <div id="main">
                    <Route exact path='/signup' component={Signup}/>
                    <Route exact path='/scenario' component={ScenarioForm}/>
                    {loggedIn ? <Logout /> : <Login />}
                    <MyScenarios />
                </div>
            </div>
        )}
}

const mapStateToProps = state => {
    return ({
        loggedIn: !!state.currentUser,
        scenarios: state.scenarios
    })
}

export default connect(mapStateToProps, { getCurrentUser, fetchScenarios })(App)