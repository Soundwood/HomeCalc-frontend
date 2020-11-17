import React from 'react';
import ScenarioForm from './ScenarioForm'
import { createScenario } from '../../actions/scenarios'
import { connect } from 'react-redux'

const ScenarioFormNewWrapper = ({history, createScenario}) => {
    const handleSubmit = (formData, user_id, prop_tax_rate_id, mortg_interest_rate_id) => {
        createScenario({...formData, user_id, prop_tax_rate_id, mortg_interest_rate_id}, history)
    }
    return (
        <div>
            <ScenarioForm handleSubmit={handleSubmit}/>
        </div>
    );
};

export default connect(null, { createScenario })(ScenarioFormNewWrapper)