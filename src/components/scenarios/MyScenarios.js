import React from 'react'
import { connect } from 'react-redux'
import ScenarioCard from './ScenarioCard'
import { getMyScenarios } from '../../actions/scenarios'

class MyScenarios extends React.Component {
    handleSort = (e) => {
        this.SortBy(e.target.value)
    }
    SortBy = (sortType) => {
        const sorted = this.props.scenarios.sort(function(a,b){return a[sortType]-b[sortType]})
        sorted.reverse()
        this.setState({sorted})
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
                    <div className="title">Sort By: 
                        <select onChange={(e) => this.handleSort(e)}>
                            <option> -- </option>
                            <option value="stars">Star Rank</option>
                            <option value="net_income">Net Income</option>
                            <option value="downpayment">Downpayment</option>
                        </select>
                        {/* <h2><button onClick={this.handleSortByRank}>Sort by Rank</button></h2> */}
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

export default connect(mapStateToProps, { getMyScenarios })(MyScenarios)