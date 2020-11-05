import React from 'react'
import ScenarioForm from './ScenarioForm'
import Login from './Login'
import Logout from './Logout'
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
            {this.props.currentUser ? <Logout /> : <Login />}
            <ScenarioForm />
        </div>
    )}
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps, { getCurrentUser })(App)