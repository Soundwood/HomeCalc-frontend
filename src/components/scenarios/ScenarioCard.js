import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteScenario } from '../../actions/scenarios'
import LinkButton from '../LinkButton'
import ScenarioStars from './ScenarioStars'

const ScenarioCard = ({ scenario, deleteScenario, handleStarSelect }) => {
    return (
        <>
            <Link to={`/scenarios/${scenario.id}`}>
                <h5>Net Income: {scenario.net_income}</h5>
                <h5>Income After Tax: {scenario.income_after_tax}</h5>
                <h5>Monthly Debt: {scenario.monthly_debt}</h5>
                <h5>Credit Score: {scenario.credit_score}</h5>
                <h5>Downpayment: {scenario.downpayment}</h5>
                <h5>City: {scenario.city}</h5>
                <h5>State: {scenario.state}</h5>
                <h4>Click here to see an analysis of THIS scenario</h4>
                <br/>
            </Link>
            <header>
                <div className="title">
                    <LinkButton to={`/scenarios/${scenario.id}/edit`}>Edit Scenario</LinkButton>
                    {/* <button onClick={() => handleStarSelect(scenario.id)}>Star!</button> */}
                    <button onClick={() => deleteScenario(scenario)}>Delete</button>
                    <ScenarioStars scenario={scenario} handleStarSelect={handleStarSelect}/>
                </div>
                <div className="meta">
                    {scenario.stars}
                </div>
            </header>
        </>
    )
}

export default connect(null, {deleteScenario})(ScenarioCard)