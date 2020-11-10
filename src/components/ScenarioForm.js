import React from 'react'
import { connect } from 'react-redux'
import { updateScenarioForm } from '../actions/scenarioForm'
import { createScenario } from '../actions/scenarios'

const ScenarioForm = ({ formData, updateScenarioForm, user_id, scenario, createScenario, editMode, tax_by_state, mortg_rates, history}) => {
    const { net_income, income_after_tax, monthly_debt, credit_score, downpayment, city, state } = formData
    
    const handleChange = (e) => {
        const { name, value } = e.target
        // Make sure this makes sense ie its a number
        updateScenarioForm(name, value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        const prop_tax_rate_id = tax_by_state.filter(function(st) {return st.state === state})[0].id
        const mortg_interest_rate_id = mortg_rates.filter(function(rate) {return rate.credit_score === credit_score})[0].id
        createScenario({...formData, user_id, prop_tax_rate_id, mortg_interest_rate_id}, history)
    }

    return (
        <article className="post">
            <form onSubmit={handleSubmit}>
                <label>Net Income (per year):</label>
                <input type='text' value={net_income} onChange={handleChange} name='net_income'/><br/>
                <label>Income After Tax (per year):</label>
                <input type='text' value={income_after_tax} onChange={handleChange} name='income_after_tax'/><br/>
                <label>Monthly Recurring Debt:</label>
                <input type='text' value={monthly_debt} onChange={handleChange} name='monthly_debt'/><br/>
                <label>Credit Score:</label>
                <select value={credit_score} onChange={handleChange} name='credit_score'>
                    <option value="great">Great - 720-850</option>
                    <option value="good">Good - 690-719</option> 
                    <option value="fair">Fair - 630-689</option>
                    <option value="poor">Poor - 300-629</option>
                </select><br/>
                <label>Home Downpayment:</label>
                <input type='text' value={downpayment} onChange={handleChange} name='downpayment'/><br/>
                <label>City:</label>
                <input type='text' value={city} onChange={handleChange} name='city'/><br/>
                <label>State:</label>
                <input type='text' value={state} onChange={handleChange} name='state'/><br/>
                <input type='submit' value='Evaluate Scenario' />
            </form>
        </article>
    )
}
const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        formData: state.scenario,
        user_id: userId,
        tax_by_state: state.prop_tax_rates,
        mortg_rates: state.mortg_int_rates
    }
}

export default connect(mapStateToProps, { updateScenarioForm, createScenario } )(ScenarioForm)