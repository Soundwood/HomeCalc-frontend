import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addScenario } from '../actions/scenariosActions'

class ScenarioForm extends Component {
    
    state = {
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
                    <label>Net Income:</label>
                    <input type='text' value={this.state.net_income} onChange={this.handleChange} name='net_income'/>
                    <br />
                    <input type='submit' value='Evaluate Scenario' />
                </form>
            </div>
        )
    }
}

export default connect( null, addScenario )(ScenarioForm)