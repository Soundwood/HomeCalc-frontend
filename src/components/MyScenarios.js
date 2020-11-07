import React from 'react'
import { connect } from 'react-redux'
import ScenarioCard from './ScenarioCard'

const MyScenarios = props => {
    const scenarioCards = props.scenarios.length > 0 ? 
        props.scenarios.map(s => <ScenarioCard scenario={s} />):
        null
    return scenarioCards
    }

const mapStateToProps = state => {
    return {
        scenarios: state.scenarios
    }
}

export default connect(mapStateToProps)(MyScenarios)