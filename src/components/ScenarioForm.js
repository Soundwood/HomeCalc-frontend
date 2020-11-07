import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addScenario } from '../actions/scenariosActions'
import { getCurrentUser } from "../actions/currentUser"

class ScenarioForm extends Component {

    state = {
        user: this.props.currentUser,
        net_income: '',
        income_after_tax: '',
        monthly_debt: '',
        credit_score: '',
        downpayment: '',
        state: '',
        city: '',
        prop_tax_rate_id: '',
        mortg_interest_rate_id: ''
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        debugger
        this.props.addScenario(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Net Income (per year):</label>
                    <input type='text' value={this.state.net_income} onChange={this.handleChange} name='net_income'/><br/>
                    <label>Income After Tax (per year):</label>
                    <input type='text' value={this.state.income_after_tax} onChange={this.handleChange} name='income_after_tax'/><br/>
                    <label>Monthly Recurring Debt:</label>
                    <input type='text' value={this.state.monthly_debt} onChange={this.handleChange} name='monthly_debt'/><br/>
                    <label>Credit Score:</label>
                    <select value={this.state.credit_score} onChange={this.handleChange} name='credit_score'>
                        <option value="great">Great - 720-850</option>
                        <option value="good">Good - 690-719</option> 
                        <option value="fair">Fair - 630-689</option>
                        <option value="poor">Poor - 300-629</option>
                    </select><br/>
                    <label>Home Downpayment:</label>
                    <input type='text' value={this.state.downpayment} onChange={this.handleChange} name='downpayment'/><br/>
                    <label>City:</label>
                    <input type='text' value={this.state.city} onChange={this.handleChange} name='city'/><br/>
                    <label>State:</label>
                    <input type='text' value={this.state.state} onChange={this.handleChange} name='state'/><br/>
                    <input type='submit' value='Evaluate Scenario' />
                </form>
            </div>
        )
    }
}
const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps, { getCurrentUser, addScenario } )(ScenarioForm)