import React from 'react'
import { connect } from 'react-redux'
import ScenarioCard from './ScenarioCard'
import { getMyScenarios, updateScenarioStars } from '../../actions/scenarios'

class MyScenarios extends React.Component {
    handleStarSelect = (scenarioData, scenarioId, stars) => {
        scenarioData.stars = stars
        this.props.updateScenarioStars(scenarioData, scenarioId)
    }
    handleSortByRank = () => {
        const sorted = this.props.scenarios.sort(function(a,b){return a.stars-b.stars})
        sorted.reverse()
        // this.setState({sorted})
    }
    render() {
        const scenarioCards = this.props.scenarios.map((s) => {
            return (
                <article className="post" key={s.id}>
                    <ScenarioCard scenario={s} handleStarSelect={this.handleStarSelect} />
                </article>
            )})
        return (
            <>
                <article className="post">
                    <div className="title">
                        <h2><button onClick={this.handleSortByRank}>Sort by Rank</button></h2>
                    </div>
                </article>
                {scenarioCards}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        scenarios: state.scenarios
    }
}

export default connect(mapStateToProps, { getMyScenarios, updateScenarioStars })(MyScenarios)