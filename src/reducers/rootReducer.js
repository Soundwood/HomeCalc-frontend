import { combineReducers } from "redux";
import { scenarioForm } from "./scenarioForm";
import { currentUser } from './currentUser';
import loginForm from './loginForm'
import signupForm from './signupForm'
import scenariosReducer from './scenarios'
import { taxRatesReducer } from './rates'
import { intRatesReducer } from './rates'

export const rootReducer = combineReducers({
    scenarios: scenariosReducer,
    scenario: scenarioForm, 
    currentUser,
    loginForm,
    signupForm,
    prop_tax_rates: taxRatesReducer,
    mortg_int_rates: intRatesReducer,
});