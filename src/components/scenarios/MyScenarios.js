import React from 'react'
import { connect } from 'react-redux'
import ScenarioCard from './ScenarioCard'
import { getMyScenarios } from '../../actions/scenarios'

class MyScenarios extends React.Component {
    componentDidMount() {
        this.props.getMyScenarios()
    }
    render() {
        const scenarioCards = this.props.scenarios ? 
            this.props.scenarios.map(function(s) {
                return (
                    <article className="post" key={s.id}>
                        <ScenarioCard scenario={s} />
                    </article>
                )
            }):
            null
        return (
            scenarioCards
        )
    }
}

const mapStateToProps = state => {
    return {
        scenarios: state.scenarios
    }
}

export default connect(mapStateToProps, { getMyScenarios })(MyScenarios)