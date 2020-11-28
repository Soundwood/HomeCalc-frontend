import React from 'react';

const ScenarioStars = (props) => {
    return (
        <p>
            <br/>
            Stars: <button onClick={() => props.handleStarSelect(props.scenario, props.scenario.id, 1)}>1</button>
            <button onClick={() => props.handleStarSelect(props.scenario, props.scenario.id, 2)}>2</button>
            <button onClick={() => props.handleStarSelect(props.scenario, props.scenario.id, 3)}>3</button>
            <button onClick={() => props.handleStarSelect(props.scenario, props.scenario.id, 4)}>4</button>
            <button onClick={() => props.handleStarSelect(props.scenario, props.scenario.id, 5)}>5</button>
        </p>
    );
};

export default ScenarioStars;