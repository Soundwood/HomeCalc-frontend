import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import MyScenarios from "./scenarios/MyScenarios";
import MyHomes from "./MyHomes";
import ScenarioBreakdown from "./scenarios/ScenarioBreakdown";
import { connect } from 'react-redux'
import NotFound from './NotFound'
import ScenarioFormNewWrapper from './scenarios/ScenarioFormNewWrapper'
import ScenarioFormEditWrapper from './scenarios/ScenarioFormEditWrapper'

const RouterComp = ({scenarios}) => {
  return (
    <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/scenarios/:id" render={props => {
            const scenario = scenarios.find(scenario => scenario.id === parseInt(props.match.params.id))
            return <ScenarioBreakdown scenario={scenario} {...props} />
        }}/>
        <Route exact path="/scenarios/:id/edit" render={props => {
            const scenario = scenarios.find(scenario => scenario.id === parseInt(props.match.params.id))
            return <ScenarioFormEditWrapper scenario={scenario} {...props} />
        }}/>
        <Route exact path="/scenarios" component={MyScenarios} />
        <Route exact path="/my_homes" component={MyHomes} />
        <Route exact path='/new_scenario' component={ScenarioFormNewWrapper}/>
        <Route component={NotFound} />
    </Switch>
  );
};
const mapStateToProps = state => {
    return {
        scenarios: state.scenarios
    }
}

export default connect(mapStateToProps, {})(RouterComp);