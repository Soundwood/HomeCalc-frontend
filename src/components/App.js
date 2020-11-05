import React from 'react'
import ScenarioForm from './ScenarioForm'
import Login from './Login'
import { connect } from 'react-redux'
import { getCurrentUser } from "../actions/currentUser"

class App extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
    return (
        <div>
            Howdy World
            <Login />
            <ScenarioForm />
        </div>
    )}
}

export default connect(null, { getCurrentUser })(App)