import React from 'react';
import ScenarioForm from './ScenarioForm'
import { updateScenario } from '../actions/scenarios'
import { setFormDataForEdit } from '../actions/scenarioForm'
import { connect } from 'react-redux'

class ScenarioFormEditWrapper extends React.Component {
    componentDidMount = () => {
        this.props.setFormDataForEdit(this.props.scenario)
    }
    handleSubmit = (formData, user_id, prop_tax_rate_id, mortg_interest_rate_id) => {
        const scenarioId = this.props.scenario.id
        const {history, updateScenario } = this.props
        updateScenario({...formData, user_id, prop_tax_rate_id, mortg_interest_rate_id}, scenarioId, history)
    }
    render () {
        return (
            <div>
                <ScenarioForm editMode handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
};
const mapStateToProps = state => {
    return {
        scenarios: state.scenarios
    }
}

export default connect(mapStateToProps, { updateScenario, setFormDataForEdit })(ScenarioFormEditWrapper)