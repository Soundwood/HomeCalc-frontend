import React from 'react'
import { connect } from 'react-redux'
import { updateScenarioForm } from '../../actions/scenarioForm'

function validate(net_income, income_after_tax, monthly_debt, downpayment, city, state) {
    return {
        net_income: (isNaN(net_income) || net_income.length === 0 || net_income < 10000),
        income_after_tax: (isNaN(income_after_tax) || income_after_tax.length === 0 || income_after_tax < 10000),
        monthly_debt: isNaN(monthly_debt),
        downpayment: isNaN(downpayment),
        city: city.length === 0,
        state: state.length !== 2
    }
}
let errors = {
    net_income: false,
    income_after_tax: false,
    monthly_debt: false,
    downpayment: false,
    city: false,
    state: false
}
const states_list = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI",
"IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC",
"ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM",
"UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]


const ScenarioForm = ({ formData, handleSubmit, updateScenarioForm, user_id, tax_by_state, mortg_rates, editMode}) => {
    const { net_income, income_after_tax, monthly_debt, credit_score, downpayment, city, state } = formData
    errors = validate(net_income, income_after_tax, monthly_debt, downpayment, city, state)
    const isEnabled = !Object.keys(errors).some(x => errors[x])
    const prop_tax_rate_id = (state ? tax_by_state.filter(function(st) {return st.state === state})[0].id : null)
    const mortg_interest_rate_id = mortg_rates.filter(function(rate) {return rate.credit_score === credit_score})[0].id

    const handleChange = (e) => {
        const { name, value } = e.target
        // Make sure this makes sense ie its a number
        updateScenarioForm(name, value)
    }

    return (
        <article className="post">
            <form onSubmit = {e => {
                e.preventDefault()
                handleSubmit(formData, user_id, prop_tax_rate_id, mortg_interest_rate_id)
                }}>
                <label>Net Income (per year):</label>
                <input type='text' value={net_income} onChange={handleChange} name='net_income' className={errors.net_income ? "error" : ""}/><br/>
                <label>Income After Tax (per year):</label>
                <input type='text' value={income_after_tax} onChange={handleChange} name='income_after_tax' className={errors.income_after_tax ? "error" : ""}/><br/>
                <label>Monthly Recurring Debt:</label>
                <input type='text' value={monthly_debt} onChange={handleChange} name='monthly_debt' className={errors.monthly_debt ? "error" : ""}/><br/>
                <label>Credit Score:</label>
                <select value={credit_score} onChange={handleChange} name='credit_score'>
                    <option value="great">Great - 720-850</option>
                    <option value="good">Good - 690-719</option> 
                    <option value="fair">Fair - 630-689</option>
                    <option value="poor">Poor - 300-629</option>
                </select><br/>
                <label>Home Downpayment:</label>
                <input type='text' value={downpayment} onChange={handleChange} name='downpayment' className={errors.downpayment ? "error" : ""}/><br/>
                <label>City:</label>
                <input type='text' value={city} onChange={handleChange} name='city' className={errors.city ? "error" : ""}/><br/>
                <label>State:</label>
                <select value={state} onChange={handleChange} name='state' className={errors.state ? "error" : ""}>
                    <option>Please Select</option>
                    {states_list.map((state, index) => <option key={index}>{state}</option>)}
                </select><br/>
                <input type='submit' value={ editMode ? 'Edit Scenario' : 'Evaluate Scenario' } disabled={!isEnabled}/>
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
        mortg_rates: state.mortg_int_rates,
    }
}

export default connect(mapStateToProps, { updateScenarioForm } )(ScenarioForm)